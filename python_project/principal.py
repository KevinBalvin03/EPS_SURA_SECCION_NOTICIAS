from modulo_financiero import (calcular_van, calcular_tir_biseccion,
                               tasa_anual_a_mensual, dictamen_final)

I0 = 39_375_000
r = 0.0095
flujos_caja = [800_000, 1_000_000, 1_300_000, 1_500_000, 1_500_000, 1_500_000,
               1_500_000, 1_500_000, 1_500_000, 1_500_000, 1_500_000, 1_500_000]

van = calcular_van(I0, r, flujos_caja)
print(f"VAN = ${van:,.0f} COP")

tir = calcular_tir_biseccion(I0, flujos_caja)
if tir is None:
    print("No existe una TIR calculable: el VAN es negativo incluso con r = 0%.")
else:
    print(f"TIR = {tir:.4%} mensual")

print(dictamen_final(van, tir, r))
