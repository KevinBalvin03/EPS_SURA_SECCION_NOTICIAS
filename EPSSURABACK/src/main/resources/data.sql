INSERT INTO usuario (nombre, correo, rol) VALUES
  ('Administrador EPS SURA', 'admin@epssura.com', 'ADMIN'),
  ('Laura Gómez', 'laura.gomez@epssura.com', 'EDITOR'),
  ('Carlos Pérez', 'carlos.perez@epssura.com', 'LECTOR');

INSERT INTO categoria (nombre, descripcion, activa) VALUES
  ('Sedes', 'Aperturas, traslados y novedades de los puntos de atención', TRUE),
  ('Medicamentos', 'Abastecimiento y entrega de medicamentos', TRUE),
  ('Institucional', 'Comunicados oficiales de la compañía', TRUE),
  ('Salud', 'Prevención y cuidado de la salud', TRUE),
  ('Bienestar', 'Hábitos y programas de bienestar', TRUE);

INSERT INTO noticia (titulo, resumen, contenido, imagen_url, estado, alcance, destacada, fecha_creacion, fecha_publicacion, autor_id) VALUES
  ('Nuevo punto de atención en Bogotá',
   'EPS SURA amplía su cobertura con una nueva sede en el norte de la ciudad, con horario extendido de atención.',
   'La nueva sede cuenta con consulta externa, toma de muestras y entrega de medicamentos. Atiende de lunes a sábado en horario extendido para facilitar el acceso de los afiliados del norte de la ciudad.',
   'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400',
   'PUBLICADA', 'POR_CAMPO', TRUE, '2026-11-02 09:00:00', '2026-11-03 08:00:00', 2),
  ('Disponibilidad de medicamentos esenciales',
   'Conoce el estado actual de abastecimiento de medicamentos en nuestras farmacias aliadas.',
   'Trabajamos con nuestras farmacias aliadas para garantizar la entrega oportuna de los medicamentos esenciales. Si tienes una entrega pendiente, puedes solicitarla a domicilio por los canales virtuales.',
   'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400',
   'PUBLICADA', 'POR_CAMPO', FALSE, '2026-10-27 10:30:00', '2026-10-28 08:00:00', 2),
  ('Cambios en horarios de atención en fechas especiales',
   'Te contamos los ajustes de horario para las próximas fechas festivas en todas nuestras sedes.',
   'Durante las fechas festivas de fin de año nuestras sedes tendrán horarios especiales. Los servicios de urgencias y la atención virtual seguirán disponibles las 24 horas.',
   'https://images.unsplash.com/photo-1595986630530-969786b19b4d?w=400',
   'PUBLICADA', 'GENERAL', FALSE, '2026-10-19 14:00:00', '2026-10-20 08:00:00', 1),
  ('Jornada de vacunación contra la influenza',
   'Acércate a tu IPS y aplícate la vacuna sin costo. Conoce los grupos priorizados.',
   'La jornada prioriza a niños menores de cinco años, adultos mayores de 60 y personas con enfermedades crónicas. No requiere cita previa.',
   'https://images.unsplash.com/photo-1622128124312-7b5f7d08126a?w=400',
   'PUBLICADA', 'POR_CAMPO', FALSE, '2026-10-10 11:00:00', '2026-10-12 08:00:00', 2),
  ('Nueva versión de la app EPS SURA',
   'Estamos preparando mejoras para que gestiones tus citas y autorizaciones más rápido.',
   'Contenido en preparación.',
   NULL,
   'BORRADOR', 'GENERAL', FALSE, '2026-11-05 16:20:00', NULL, 2),
  ('Balance de la semana de la salud 2025',
   'Más de 12.000 afiliados participaron en las actividades de la semana de la salud.',
   'Resumen de las actividades realizadas durante la semana de la salud del año anterior.',
   'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
   'ARCHIVADA', 'GENERAL', FALSE, '2025-09-01 09:00:00', '2025-09-02 08:00:00', 1);

INSERT INTO noticia_categoria (noticia_id, categoria_id) VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (4, 5),
  (5, 3),
  (6, 4),
  (6, 5);
