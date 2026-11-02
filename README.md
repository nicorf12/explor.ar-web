# ExplorAR

Sitio institucional de **ExplorAR**, un equipo interdisciplinario de estudiantes de la Facultad de Ingeniería de la Universidad de Buenos Aires (FIUBA). El proyecto desarrolla vehículos de exploración y comparte su trabajo, sus equipos y sus vías de colaboración.

🌐 **Vista web:** [nicorf12.github.io/explor.ar-web](https://nicorf12.github.io/explor.ar-web/)

## El proyecto

El sitio presenta a ExplorAR y sus líneas de desarrollo:

- **Zonda RC**, rover de control remoto que se prepara para NASA Human Exploration Rover Challenge 2027.
- **Tango HP**, rover de tracción humana.
- El equipo, el proyecto, los avances y las formas de colaborar o patrocinar.

El contenido está en español. Las imágenes y demás recursos estáticos se encuentran en `public/images/`. Las pautas para incorporar material están en [public/images/README.md](public/images/README.md).

## Tecnologías

El sitio está construido con React, TypeScript y Vite. React Router gestiona la navegación entre páginas y GitHub Actions automatiza la publicación.

## Desarrollo local

### Requisitos

- Node.js 20 o superior
- npm

### Instalación y ejecución

```bash
git clone https://github.com/nicorf12/explor.ar-web.git
cd explor.ar-web
npm ci
npm run dev
```

Vite muestra la dirección local al iniciar (por defecto, `http://localhost:5173`).

### Comandos

```bash
npm run dev      # servidor local de desarrollo
npm run lint     # análisis estático con ESLint
npm run build    # chequeo de TypeScript y compilación en dist/
npm run preview  # vista local del build
```

## Estructura

```text
src/
  main.tsx              # montaje de React y enrutamiento
  site/App.tsx          # páginas, navegación y componentes
  styles.css            # estilos y diseño responsive
public/
  images/               # fotografías, ilustraciones y logos
scripts/                # preparación del build para GitHub Pages
.github/workflows/      # publicación automática
```

## Publicación en producción

La aplicación es estática y no requiere un servidor de aplicación. Para generar una versión de producción:

```bash
npm ci
npm run build
```

El comando genera el sitio listo para publicar en `dist/`. Subí el contenido de esa carpeta a un servicio de hosting estático. Si se aloja en un dominio propio desde la raíz, la compilación estándar usa `/` como ruta base. Configurá el hosting para que las rutas de la aplicación, como `/rovers`, sirvan `index.html`; esto permite que la navegación funcione también al abrir o recargar una URL interna directamente.

Antes de anunciar el sitio, revisá enlaces, imágenes, navegación en dispositivos móviles y la información institucional publicada.

## Vista previa en GitHub Pages

La vista previa se publica desde `main` mediante GitHub Actions. Para habilitarla en una copia del repositorio, configurar **Settings → Pages → Build and deployment → Source → GitHub Actions**. Cada actualización de `main` ejecuta el flujo definido en `.github/workflows/deploy-pages.yml`; también es posible iniciarlo manualmente desde **Actions**.

El build configura la ruta base del proyecto y genera `404.html` para que las rutas internas de la aplicación funcionen al abrirlas directamente. La URL pública configurada para este repositorio es [https://nicorf12.github.io/explor.ar-web/](https://nicorf12.github.io/explor.ar-web/).

## Colaboraciones

Las contribuciones que modifiquen información institucional, requisitos o fechas de competencias deben coordinarse con el equipo ExplorAR. Para agregar o reemplazar imágenes, seguir las pautas de [public/images/README.md](public/images/README.md).
