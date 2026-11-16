MAX_TITULO = 200
MAX_RESUMEN = 500
BORRADOR = 'BORRADOR'
PUBLICADA = 'PUBLICADA'

def validar_noticia(titulo, resumen):
    if not titulo or not titulo.strip():
        raise ValueError('El título es obligatorio')
    if len(titulo) > MAX_TITULO:
        raise ValueError(f'El título supera los {MAX_TITULO} caracteres')
    if resumen and len(resumen) > MAX_RESUMEN:
        raise ValueError(f'El resumen supera los {MAX_RESUMEN} caracteres')
    return True

def publicar_noticia(noticia, fecha):
    if noticia['estado'] != BORRADOR:
        raise ValueError('Solo se pueden publicar borradores')
    return {**noticia, 'estado': PUBLICADA, 'fecha_publicacion': fecha}



def filtrar_publicadas(noticias):
    publicadas = [n for n in noticias if n['estado'] == PUBLICADA]
    return sorted(publicadas, key=lambda n: n['fecha_publicacion'], reverse=True)