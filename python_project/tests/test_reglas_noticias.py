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


if __name__ == '__main__':
    unittest.main()