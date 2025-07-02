# Startup Finder 🚀

Un sitio web donde cualquier persona puede registrarse y compartir su idea de startup. Descubrí, filtrá y explorá startups creadas por la comunidad, accedé a perfiles de usuarios y gestioná tus propios proyectos de manera sencilla y segura.

---

## ✨ Características principales

- **Registro y login con GitHub** gracias a NextAuth.
- **Creación, edición y borrado de startups**: cada usuario puede gestionar sus propios posts.
- **Exploración y filtrado**: buscá startups por nombre, categoría o autor.
- **Perfiles públicos**: accedé al perfil de cualquier usuario y mirá todas sus startups.
- **Contador de visitas** en cada post.
- **Redacción en Markdown** con MDeditor.
- **CMS integrado**: gestioná startups también desde Sanity Studio.
- **Partial Pre Rendering y SSG**: algunas vistas se prerenderizan para máxima performance.
- **Animaciones modernas** con Framer Motion.
- **Componentes UI** de shadcn y estilos con Tailwind CSS.
- **Seguridad**: todas las interacciones que traen información usan server actions, por lo que el usuario nunca accede a datos sensibles.
- **SEO avanzado**: metadata dinámica para posts y perfiles.

---

## 🛠️ Stack tecnológico

- **Next.js** (App Router, SSG, Partial Pre Rendering)
- **Tailwind CSS** (estilos)
- **Framer Motion** (animaciones)
- **shadcn/ui** (componentes UI)
- **MDeditor** (editor Markdown)
- **Sanity** (CMS y base de datos)
- **NextAuth** (autenticación con GitHub)
- **Server Actions** (para máxima seguridad)

---

## 🚀 Instalación y uso local

1. **Cloná el repositorio:**
   ```bash
   git clone https://github.com/tuusuario/startup-finder.git
   cd startup-finder
   ```

2. **Instalá las dependencias:**
   ```bash
   npm install
   ```

3. **Configurá las variables de entorno:**  
   Creá un archivo `.env.local` en la raíz del proyecto y agregá tus claves de Sanity, NextAuth, etc. Por ejemplo:
   ```
    AUTH_SECRET=...
    AUTH_GITHUB_ID=...
    AUTH_GITHUB_SECRET=...
    NEXT_PUBLIC_SANITY_PROJECT_ID=...
    NEXT_PUBLIC_SANITY_DATASET=...
    NEXT_PUBLIC_SANITY_API_VERSION=...
    SANITY_WRITE_TOKEN=...
   ```

4. **Levantá el proyecto:**
   ```bash
   npm run dev
   ```

---

## 👤 Autor

- **Marcelo Gabriel Sanchez**  
  [LinkedIn](https://www.linkedin.com/in/marcelo-gabriel-sanchez-374241357/)