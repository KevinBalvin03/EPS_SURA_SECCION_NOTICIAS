import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

import unittest
import noticias


class TestValidarNoticia(unittest.TestCase):

    def test_noticia_valida_devuelve_true(self):
        self.assertTrue(noticias.validar_noticia('Jornada de vacunación', 'Puntos habilitados'))

    def test_titulo_vacio_lanza_error(self):
        with self.assertRaises(ValueError):
            noticias.validar_noticia('   ', 'Resumen')

    def test_titulo_de_200_caracteres_es_valido_y_de_201_no(self):
        self.assertTrue(noticias.validar_noticia('a' * 200, 'Resumen'))
        with self.assertRaises(ValueError):
            noticias.validar_noticia('a' * 201, 'Resumen')

class TestPublicarNoticia(unittest.TestCase):

    def test_borrador_pasa_a_publicada_con_fecha(self):
        borrador = {'titulo': 'Nueva sede', 'estado': 'BORRADOR', 'fecha_publicacion': None}
        publicada = noticias.publicar_noticia(borrador, '2026-11-15')
        self.assertEqual(publicada['estado'], 'PUBLICADA')
        self.assertEqual(publicada['fecha_publicacion'], '2026-11-15')

    def test_publicar_una_noticia_ya_publicada_lanza_error(self):
        publicada = {'titulo': 'Nueva sede', 'estado': 'PUBLICADA', 'fecha_publicacion': '2026-11-01'}
        with self.assertRaises(ValueError):
            noticias.publicar_noticia(publicada, '2026-11-15')

    def test_publicar_no_modifica_el_borrador_original(self):
        borrador = {'titulo': 'Nueva sede', 'estado': 'BORRADOR', 'fecha_publicacion': None}
        noticias.publicar_noticia(borrador, '2026-11-15')
        self.assertEqual(borrador['estado'], 'BORRADOR')
        
if __name__ == '__main__':
    unittest.main()