# DAJHO Landing

Landing page informativa de **DAJHO** — sistema de gestión para negocios populares en Ecuador (100% offline, notas de venta RIMPE, sin suscripciones caras).

Sitio de una sola página con secciones ancladas, blog estático, páginas legales y llamadas a la acción por WhatsApp y correo.

## Tecnologías

- **React 18** + **TypeScript** (tipado estricto, sin `any`)
- **Vite 7** — bundler y servidor de desarrollo
- **Tailwind CSS 4** — estilos vía PostCSS (`@tailwindcss/postcss`)
- **react-router-dom 7** — rutas con `HashRouter` (no requiere configuración de rewrites en el hosting)
- **@fontsource** — fuentes Inter y Poppins servidas localmente

## Requisitos previos

- Node.js 18 o superior

## Instalación y desarrollo

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo (http://localhost:5173)
```

Otros comandos:

```bash
npm run build    # compilación de producción (tsc -b + vite build -> dist/)
npm run preview  # previsualizar el build localmente
```

No hay linter, formateador ni suite de tests configurados: la verificación es `npm run build` (TypeScript en modo estricto falla si hay errores de tipos).

## Rutas

| Ruta             | Página        | Contenido                                   |
| ---------------- | ------------- | ------------------------------------------- |
| `/`              | `Landing`     | Hero, cómo funciona, funciones, planes, FAQ |
| `/blog`          | `BlogPage`    | Listado de artículos                        |
| `/blog/:slug`    | `BlogPost`    | Artículo individual                         |
| `/contacto`      | `ContactPage` | Formulario de contacto                      |
| `/terminos`      | `Terms`       | Términos y condiciones                      |
| `/privacidad`    | `Privacy`     | Política de privacidad                      |
| `/cookies`       | `Cookies`     | Política de cookies                         |
| `*`              | `NotFound`    | Página 404                                  |

## Estructura del proyecto

```
├── index.html              # HTML base: título, meta description, favicon
├── public/                 # favicon.ico, logo-white.ico
├── icon/                   # íconos fuente (DAJHO-BLACK.ico, DAJHO-WHITE.ico)
└── src/
    ├── components/         # Header, Footer, Layout, Icon, WhatsAppButton y secciones
    ├── pages/              # Landing, BlogPage, BlogPost, ContactPage y legales
    ├── data/
    │   ├── site.ts         # nombre, email, teléfono, WhatsApp, ubicación + waLink()
    │   └── blog.ts         # artículos del blog (tipo Article)
    ├── hooks/              # useScrollReveal, useSectionScroll
    ├── App.tsx             # definición de rutas (HashRouter)
    ├── main.tsx            # punto de entrada
    └── index.css           # Tailwind + estilos globales y animaciones
```

## Cómo editar el contenido

- **Datos de contacto / WhatsApp:** `src/data/site.ts`. Todo enlace de WhatsApp del sitio pasa por `waLink()`.
- **Artículos del blog:** `src/data/blog.ts`. Cada artículo necesita `slug`, `category`, `title`, `excerpt`, `author`, `date`, `readTime`, `icon` y `content` (lista de `{ heading, body }`).
- **Planes y precios:** `src/components/Pricing.tsx` (mensual / trimestral / anual).
- **Preguntas frecuentes:** `src/components/FAQ.tsx`.
- **Secciones de la landing y su orden:** `src/pages/Landing.tsx`.
- **Íconos:** `src/components/Icon.tsx` — registro propio de SVGs; para añadir uno, agrega la entrada a `IconName` y al mapa de íconos.

## Formularios

Los formularios de suscripción (`Contact.tsx`) y de contacto (`ContactPage.tsx`) **solo tienen estado local**: validan en el cliente y simulan el envío con un `setTimeout`. No envían datos a ningún backend ni servicio.

> shortcut: formularios simulados, conectar a un endpoint real (Netlify Forms, Formspree, API propia) cuando se necesite recibir mensajes.

## Despliegue

El sitio es estático (`dist/`), así que sirve en cualquier hosting de archivos estáticos.

**Con Git (recomendado):**

1. Sube el repositorio a GitHub (`origin`: `https://github.com/DavisDaniel16/dajho-landing.git`).
2. En el hosting, conecta el repo y configura:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

**Con CLI, por ejemplo Netlify:**

```bash
npm install -g netlify-cli
netlify deploy --build --prod
```

Al usar `HashRouter`, las rutas funcionan al recargar sin necesidad de `_redirects` ni reglas de rewrite en el servidor.

## Mantenimiento

- El contenido público debe ser verificable: no publicar testimonios, métricas ni funciones que el producto aún no tenga.
- Revisar que `npm run build` pase antes de cada despliegue.
