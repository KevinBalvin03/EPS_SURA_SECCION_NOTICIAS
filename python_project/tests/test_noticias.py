import os
import sqlite3
import unittest

RUTA_DATOS = os.path.abspath(os.path.join(
    os.path.dirname(__file__), '..', '..',
    'EPSSURABACK', 'src', 'main', 'resources', 'data.sql'))

ESQUEMA = """
CREATE TABLE usuario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    correo TEXT NOT NULL UNIQUE,
    rol TEXT NOT NULL
);
CREATE TABLE categoria (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL UNIQUE,
    descripcion TEXT,
    activa BOOLEAN NOT NULL
);
CREATE TABLE noticia (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    resumen TEXT,
    contenido TEXT,
    imagen_url TEXT,
    estado TEXT NOT NULL,
    alcance TEXT NOT NULL,
    destacada BOOLEAN NOT NULL,
    fecha_creacion TEXT NOT NULL,
    fecha_publicacion TEXT,
    autor_id INTEGER NOT NULL REFERENCES usuario(id)
);
CREATE TABLE noticia_categoria (
    noticia_id INTEGER NOT NULL REFERENCES noticia(id),
    categoria_id INTEGER NOT NULL REFERENCES categoria(id)
);
"""

SQL_BUSCAR = """
SELECT DISTINCT n.id FROM noticia n
LEFT JOIN noticia_categoria nc ON nc.noticia_id = n.id
WHERE n.estado = :estado
  AND (:categoria_id IS NULL OR nc.categoria_id = :categoria_id)
  AND (lower(n.titulo) LIKE :patron OR lower(n.resumen) LIKE :patron)
ORDER BY n.fecha_publicacion DESC
"""


class TestNoticiasBaseDeDatos(unittest.TestCase):

    def setUp(self):
        self.bd = sqlite3.connect(':memory:')
        self.bd.execute('PRAGMA foreign_keys = ON')
        self.bd.executescript(ESQUEMA)
        with open(RUTA_DATOS, encoding='utf-8') as archivo:
            self.bd.executescript(archivo.read())

    def tearDown(self):
        self.bd.close()

    def ids(self, sql, parametros=()):
        return [fila[0] for fila in self.bd.execute(sql, parametros)]

    def buscar(self, categoria_id=None, q=None):
        patron = '%' if q is None or not q.strip() else '%' + q.strip().lower() + '%'
        return self.ids(SQL_BUSCAR, {'estado': 'PUBLICADA',
                                     'categoria_id': categoria_id,
                                     'patron': patron})

    def test_listado_publico_solo_trae_noticias_publicadas(self):
        self.assertEqual(sorted(self.buscar()), [1, 2, 3, 4])

    def test_listado_publico_va_de_la_mas_reciente_a_la_mas_antigua(self):
        self.assertEqual(self.buscar(), [1, 2, 3, 4])

    def test_filtro_por_categoria_excluye_las_no_publicadas(self):
        self.assertEqual(self.buscar(categoria_id=4), [4])

    def test_busqueda_no_distingue_mayusculas_y_mira_titulo_y_resumen(self):
        self.assertEqual(self.buscar(q='  SEDE '), [1, 3])

    def test_busqueda_sin_coincidencias_devuelve_lista_vacia(self):
        self.assertEqual(self.buscar(q='odontologia'), [])

    def test_la_noticia_destacada_es_la_publicada_mas_reciente_marcada(self):
        fila = self.bd.execute(
            "SELECT id, titulo FROM noticia WHERE estado = 'PUBLICADA' AND destacada "
            "ORDER BY fecha_publicacion DESC LIMIT 1").fetchone()
        self.assertEqual(fila, (1, 'Nuevo punto de atención en Bogotá'))

    def test_los_borradores_no_tienen_fecha_de_publicacion_y_el_resto_si(self):
        con_fecha_siendo_borrador = self.ids(
            "SELECT id FROM noticia WHERE estado = 'BORRADOR' AND fecha_publicacion IS NOT NULL")
        sin_fecha_sin_ser_borrador = self.ids(
            "SELECT id FROM noticia WHERE estado <> 'BORRADOR' AND fecha_publicacion IS NULL")
        self.assertEqual(con_fecha_siendo_borrador, [])
        self.assertEqual(sin_fecha_sin_ser_borrador, [])

    def test_listado_de_administracion_trae_todas_por_fecha_de_creacion(self):
        self.assertEqual(self.ids("SELECT id FROM noticia ORDER BY fecha_creacion DESC"),
                         [5, 1, 2, 3, 4, 6])

    def test_titulos_y_resumenes_respetan_los_limites_del_back(self):
        for titulo, resumen in self.bd.execute("SELECT titulo, resumen FROM noticia"):
            with self.subTest(titulo=titulo):
                self.assertTrue(titulo.strip())
                self.assertLessEqual(len(titulo), 200)
                self.assertLessEqual(len(resumen or ''), 500)

    def test_categorias_activas_salen_en_orden_alfabetico(self):
        nombres = [fila[0] for fila in self.bd.execute(
            "SELECT nombre FROM categoria WHERE activa ORDER BY nombre ASC")]
        self.assertEqual(nombres, ['Bienestar', 'Institucional', 'Medicamentos', 'Salud', 'Sedes'])


if __name__ == '__main__':
    unittest.main()
