# Imágenes del sitio

Copiá en esta carpeta los logos, renders y fotografías aprobadas para la web. Los archivos dentro de `public/` se sirven desde la raíz del sitio; por ejemplo, `public/images/zonda-rc.webp` se referencia como `/images/zonda-rc.webp`. Los espacios ya detectan los archivos configurados: mientras falte uno, muestran un marcador; al agregarlo, la imagen aparece automáticamente.

## Ilustraciones decorativas

- `hero-mars.svg`: paisaje marciano y rover conceptual del banner principal; se puede sustituir por un render del equipo.
- El banner de Proyecto usa una ilustración conceptual de Mars 2020 alojada en NASA/JPL-Caltech, con crédito visible en el sitio. Si se incorpora una copia local optimizada, reemplazar su URL en `src/site/App.tsx`.
- `orbit-diagram.svg`, `saturn-orbit.svg`, `community-orbit.svg`, `orbital-cluster.svg`, `lunar-orbits.svg`, `mission-constellation.svg`: ilustraciones vectoriales originales para fondos; se alternan con baja opacidad entre páginas y secciones.
- `sticker-astronaut.svg` y `sticker-rover.svg`: stickers vectoriales originales para decorar algunos marcos de fotos.
- `photo-frame-overlay.svg`: marco vectorial semitransparente superpuesto a los espacios decorados.

## Espacios reservados en la portada

- `zonda-rc.webp`: render o fotografía del rover Zonda RC.
- `zonda-chassis.webp`, `zonda-mobility.webp`, `zonda-task-tool.webp`: vistas de diseño del chasis, movilidad y módulo de tareas de Zonda RC.
- `tango-hp.webp`: diseño conceptual del rover Tango HP.
- `tango-chassis.webp`, `tango-wheel.webp`, `tango-drivetrain.webp`: vistas de diseño del chasis, ruedas y transmisión/dirección de Tango HP.
- `equipo-explorar.webp`: fotografía grupal del equipo.
- `taller-explorar.webp`: estudiantes trabajando en laboratorio o taller.
- `visita-escuela.webp`: visita de divulgación escolar.
- `campus-party.webp`: participación del equipo en Campus Party.

## Logos oficiales

- `isologo-explorar-w.png`: isologo blanco con acento naranja; se usa en el encabezado y el pie sobre fondo oscuro.
- `isologo-explorar-all-w.png`: versión monocromática blanca, disponible para usos donde se requiera el logo sin acento naranja.
- `isologo-explorar-b.png`: variante oscura para fondos claros.
- `logo-explorar-w.svg` y `logo-explorar-b.svg`: isotipos compactos, útiles en espacios cuadrados.
- `logo-zonda-b.svg` y `logo-zonda-w.svg`: variantes de Zonda RC; la tarjeta usa la variante para fondo claro.
- `logo-tango.svg`: identidad del equipo Tango HP, utilizada en su tarjeta.
- `fiuba-footer-logo.png`: variante blanca del logo FIUBA, utilizada en el pie.
- `logo-fiuba.png`: variante oscura para fondos claros.
- La sección Equipo reutiliza `zonda-rc.webp` y `tango-hp.webp` para mostrar los vehículos de cada línea.

Usá esos nombres en minúscula, sin espacios ni tildes. Se recomienda WebP o AVIF para fotografías y SVG o PNG para logos con transparencia. Conservá una copia del original fuera de esta carpeta. Las fotografías usan `object-fit: cover`; los logos usan `contain` para preservar la marca completa.
