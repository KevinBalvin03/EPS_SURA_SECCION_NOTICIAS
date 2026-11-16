#AQUI VAN LAS PRUEBAS DEL MODULO FINANCIERO 
import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

import unittest

try:
    from modulo_financiero import (calcular_van, calcular_tir_biseccion,
                               tasa_anual_a_mensual, evaluar_van,
                               evaluar_tir, dictamen_final)
except ImportError:
    calcular_van = None

I0 = 39_375_000
R_MENSUAL = 0.0095
FLUJOS = [800_000, 1_000_000, 1_300_000, 1_500_000, 1_500_000, 1_500_000,
          1_500_000, 1_500_000, 1_500_000, 1_500_000, 1_500_000, 1_500_000]


class TestVAN(unittest.TestCase):

    def test_van_con_datos_del_proyecto(self):
        self.assertAlmostEqual(calcular_van(I0, R_MENSUAL, FLUJOS), -23_817_380, delta=1)

    def test_van_con_tasa_cero_es_suma_de_flujos_menos_inversion(self):
        self.assertAlmostEqual(calcular_van(I0, 0, FLUJOS), -22_775_000, delta=1)

    def test_van_sin_flujos_es_menos_la_inversion(self):
        self.assertEqual(calcular_van(I0, R_MENSUAL, []), -I0)

    def test_flujos_nulos_lanzan_error(self):
        with self.assertRaises(ValueError):
            calcular_van(I0, R_MENSUAL, None)

    def test_tasa_invalida_lanza_error(self):
        with self.assertRaises(ValueError):
            calcular_van(I0, -1, FLUJOS)


class TestTIR(unittest.TestCase):

    def test_tir_del_proyecto_no_existe(self):
        self.assertIsNone(calcular_tir_biseccion(I0, FLUJOS))

    def test_tir_con_solucion_conocida(self):
        self.assertAlmostEqual(calcular_tir_biseccion(1000, [1100]), 0.10, places=5)

    def test_tir_con_varios_periodos(self):
        self.assertAlmostEqual(calcular_tir_biseccion(1000, [500, 500, 500]), 0.2338, places=4)

    def test_tir_no_converge_en_pocas_iteraciones(self):
        self.assertIsNone(calcular_tir_biseccion(1000, [1100], tol=1e-12, max_iter=3))


class TestTasa(unittest.TestCase):

    def test_conversion_de_12_anual_a_mensual(self):
        self.assertAlmostEqual(tasa_anual_a_mensual(0.12), 0.009489, places=6)


class TestDictamen(unittest.TestCase):

    def test_van_negativo_no_es_viable(self):
        self.assertEqual(evaluar_van(-23_817_380), "No viable")

    def test_van_positivo_es_viable(self):
        self.assertEqual(evaluar_van(5_000), "Viable")

    def test_van_cero_es_indiferente(self):
        self.assertEqual(evaluar_van(0), "Indiferente")

    def test_tir_mayor_que_r_es_aceptable(self):
        self.assertEqual(evaluar_tir(0.05, R_MENSUAL), "Aceptable")

    def test_tir_inexistente_es_insuficiente(self):
        self.assertEqual(evaluar_tir(None, R_MENSUAL), "Insuficiente")

    def test_dictamen_final_del_proyecto(self):
        self.assertIn("no viable", dictamen_final(-23_817_380, None, R_MENSUAL).lower())


if __name__ == '__main__':
    unittest.main()
