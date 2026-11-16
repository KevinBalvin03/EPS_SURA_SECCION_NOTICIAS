def validar_noticia(titulo, resumen):
    if titulo is None or titulo.strip() == '':
        raise ValueError('El título es obligatorio')
    if len(titulo) > 200:
        raise ValueError('El título supera los 200 caracteres')
    if resumen is not None and len(resumen) > 500:
        raise ValueError('El resumen supera los 500 caracteres')
    return True