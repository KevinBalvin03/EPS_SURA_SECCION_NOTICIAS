import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  filtrarPorCategoria, ordenarPorFecha, recortarResumen,
  esUrlImagenValida, obtenerDestacada, contarPorCategoria,
} from '../src/noticias.js';

const NOTICIAS = [
  { id: 1, titulo: 'Jornada de vacunación', categoria: 'Salud', fechaPublicacion: '2026-10-05', destacada: false },
  { id: 2, titulo: 'Nueva sede administrativa', categoria: 'Institucional', fechaPublicacion: '2026-11-01', destacada: true },
  { id: 3, titulo: 'Pausas activas', categoria: 'Bienestar', fechaPublicacion: '2026-09-20', destacada: false },
  { id: 4, titulo: 'Prevención del dengue', categoria: 'Salud', fechaPublicacion: '2026-10-28', destacada: false },
];

test('filtrarPorCategoria devuelve solo las noticias de la categoría elegida', () => {
  const resultado = filtrarPorCategoria(NOTICIAS, 'Salud');
  assert.deepEqual(resultado.map((n) => n.id), [1, 4]);
});

test('filtrarPorCategoria sin categoría seleccionada devuelve todas', () => {
  assert.equal(filtrarPorCategoria(NOTICIAS, '').length, 4);
});

test('ordenarPorFecha ordena de la más reciente a la más antigua', () => {
  assert.deepEqual(ordenarPorFecha(NOTICIAS).map((n) => n.id), [2, 4, 1, 3]);
});

test('recortarResumen no recorta un texto en el límite exacto', () => {
  const texto = 'a'.repeat(120);
  assert.equal(recortarResumen(texto, 120), texto);
});

test('recortarResumen recorta con puntos suspensivos si supera el límite', () => {
  const texto = 'a'.repeat(121);
  assert.equal(recortarResumen(texto, 120), 'a'.repeat(120) + '...');
});

test('esUrlImagenValida acepta una URL https de imagen', () => {
  assert.equal(esUrlImagenValida('https://epssura.com/img/noticia.png'), true);
});

test('esUrlImagenValida rechaza un archivo que no es imagen', () => {
  assert.equal(esUrlImagenValida('https://epssura.com/doc/archivo.pdf'), false);
});

test('obtenerDestacada devuelve la noticia marcada como destacada', () => {
  assert.equal(obtenerDestacada(NOTICIAS).id, 2);
});

test('obtenerDestacada devuelve null si no hay destacada', () => {
  assert.equal(obtenerDestacada([NOTICIAS[0]]), null);
});

test('contarPorCategoria cuenta las noticias de cada categoría', () => {
  assert.deepEqual(contarPorCategoria(NOTICIAS), { Salud: 2, Institucional: 1, Bienestar: 1 });
});
