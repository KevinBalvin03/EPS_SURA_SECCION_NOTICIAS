export function filtrarPorCategoria(noticias, categoria) {
  if (!categoria) return noticias;
  return noticias.filter((n) => n.categoria === categoria);
}

export function ordenarPorFecha(noticias) {
  return [...noticias].sort((a, b) => b.fechaPublicacion.localeCompare(a.fechaPublicacion));
}

export function recortarResumen(texto, maximo = 120) {
  if (texto.length <= maximo) return texto;
  return texto.slice(0, maximo) + '...';
}

export function esUrlImagenValida(url) {
  return /^https?:\/\/.+\.(png|jpe?g|webp)$/i.test(url ?? '');
}

export function obtenerDestacada(noticias) {
  return noticias.find((n) => n.destacada) ?? null;
}

export function contarPorCategoria(noticias) {
  const conteo = {};
  for (const n of noticias) {
    conteo[n.categoria] = (conteo[n.categoria] ?? 0) + 1;
  }
  return conteo;
}
