def calcular_van(I0, r, flujos_caja):
    if flujos_caja is None:
        raise ValueError("flujos_caja no puede ser None")
    if r <= -1:
        raise ValueError("la tasa r debe ser mayor que -1")
    van = -I0
    for t, fc in enumerate(flujos_caja, start=1):
        van += fc / (1 + r) ** t
    return van


def calcular_tir_biseccion(I0, flujos_caja, r_bajo=0.0, r_alto=1.0, tol=1e-6, max_iter=1000):
    van_bajo = calcular_van(I0, r_bajo, flujos_caja)
    van_alto = calcular_van(I0, r_alto, flujos_caja)

    if van_bajo * van_alto > 0:
        return None

    for _ in range(max_iter):
        r_medio = (r_bajo + r_alto) / 2
        van_medio = calcular_van(I0, r_medio, flujos_caja)

        if abs(van_medio) < tol:
            return r_medio

        if van_medio * van_bajo < 0:
            r_alto = r_medio
        else:
            r_bajo = r_medio
            van_bajo = van_medio

    return None


def tasa_anual_a_mensual(tasa_anual):
    return (1 + tasa_anual) ** (1 / 12) - 1


def evaluar_van(van, tolerancia=1e-6):
    if abs(van) < tolerancia:
        return "Indiferente"
    return "Viable" if van > 0 else "No viable"


def evaluar_tir(tir, r):
    if tir is None:
        return "Insuficiente"
    return "Aceptable" if tir > r else "Insuficiente"


def dictamen_final(van, tir, r):
    ev_van = evaluar_van(van)
    ev_tir = evaluar_tir(tir, r)
    if ev_van == "Viable" and ev_tir == "Aceptable":
        return "Proyecto viable: se recomienda invertir."
    if ev_van == "No viable" and ev_tir == "Insuficiente":
        return ("Proyecto no viable financieramente: no recupera la inversión con los "
                "flujos proyectados. Su valor es institucional y social.")
    if ev_van == "Indiferente":
        return "Proyecto indiferente: no gana ni pierde; decidir por otros criterios."
    return "Resultados contradictorios: revisar los supuestos antes de decidir."
