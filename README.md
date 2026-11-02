# ExplorAR — sitio institucional

Sitio web responsive para presentar el proyecto interdisciplinario ExplorAR (FIUBA), sus dos equipos, la participación de Zonda RC en NASA HERC 2027 y las vías de colaboración.

## Requisitos

- Node.js 20 LTS o superior
- npm 10 o superior

## Desarrollo local

```bash
npm install
npm run dev
```

Vite informa la URL local al iniciar (normalmente `http://localhost:5173`). El servidor escucha en todas las interfaces para facilitar la vista previa desde otros dispositivos de la red.

## Comandos útiles

```bash
npm run dev       # servidor de desarrollo con recarga rápida
npm run lint      # revisión estática con ESLint
npm run build     # chequeo TypeScript y compilación optimizada en dist/
npm run preview   # vista previa local del build de producción
```

## Estructura

```text
src/
  main.tsx             # montaje de React y router
  site/App.tsx          # navegación, páginas y componentes del sitio
  styles.css            # identidad visual y estilos responsive
public/                 # recursos estáticos servidos sin transformación
index.html              # metadatos y documento inicial
```

La primera versión implementa Inicio, Proyecto, Rovers, detalle de Zonda RC y HP, HERC 2027, Equipo, Avances, Patrocinio y Contacto. El contenido está en español y centralizado en `src/site/App.tsx` para facilitar la edición inicial. Los componentes compartidos (navegación, pie, tarjetas y llamadas a la acción) viven allí también.

La portada sigue la dirección visual de `docs/Landing Page.pdf`: hero centrado, alternancia de crema y azul noche, tarjetas coral, presentación del rover, patrocinio, equipo, eventos y avances. Los marcadores de imágenes son accesibles y cargan automáticamente el archivo configurado cuando se agrega a `public/images/`; no hace falta editar componentes. La lista completa de nombres para logos, fotos de eventos e integrantes y diseños de ambos rovers está en [public/images/README.md](public/images/README.md). Las fotografías usan recorte `cover`; los logos conservan su proporción.

## Preparación para producción

1. Revisar el contenido con los equipos, en especial presupuesto, fechas, reglas HERC, estado real de ambos rovers y datos institucionales.
2. Sustituir las ilustraciones conceptuales por material aprobado y añadir logos oficiales optimizados (SVG/WebP) en `public/`.
3. Instalar dependencias y generar el artefacto: `npm ci && npm run build` (versionar `package-lock.json` para despliegues repetibles).
4. Publicar el contenido de `dist/` en un hosting estático (por ejemplo, Cloudflare Pages, Netlify, Vercel, S3/CloudFront o servidor institucional). No se requiere servidor de aplicación.
5. Configurar fallback de rutas SPA: las rutas desconocidas deben servir `index.html` (Vercel/Netlify lo hacen con configuración; en nginx usar `try_files $uri $uri/ /index.html`).
6. Asociar dominio, habilitar HTTPS y definir redirección canónica (www o raíz); configurar DNS y cache/CDN del hosting elegido.
7. Definir metadatos sociales (Open Graph), favicon, `sitemap.xml`, analítica/privacidad si se necesitan y validar accesibilidad, enlaces y contenido móvil antes de anunciar el sitio.

Los enlaces a Google Fonts requieren conexión externa. Si se necesita operación sin terceros, alojar las fuentes localmente y actualizar `index.html`/`src/styles.css`. El directorio `dist/` es generado y no debe editarse manualmente.

## Vista previa para el equipo en GitHub Pages

El repositorio está preparado para publicar una vista previa en:

`https://nicorf12.github.io/explor.ar-web/`

Al hacer push a `main`, la acción `.github/workflows/deploy-pages.yml` compila y publica `dist/`. También se puede iniciar manualmente desde **Actions → Deploy GitHub Pages → Run workflow**. En el repositorio, configurar **Settings → Pages → Build and deployment → Source: GitHub Actions**. El flujo incluye fallback SPA para abrir directamente páginas como `/rovers` y sirve las imágenes bajo el prefijo del repositorio.

La vista será pública mientras GitHub Pages esté habilitado para el repositorio. Para probarla, abrir la URL anterior después de que termine correctamente la acción de despliegue.
