# Laboratorio Virtual de Comunicación Digital y Redes

Aplicación educativa interactiva y gamificada para el taller **Comunicación Digital y Redes** de la Escuela Secundaria de Tiempo Completo Nº 787 “Padre Lucio Sabatti”.

## Características

- 5 ejes y 26 clases.
- Modo Alumno y Modo Docente.
- Panel docente de seguimiento.
- Actividades interactivas, desafíos, producciones y autoevaluaciones.
- Puntos, niveles, logros y progreso.
- Proyecto integrador: Campaña de Comunicación Digital Integral.
- Persistencia local mediante `localStorage`.
- Reinicio de actividad, clase, eje y laboratorio completo.
- Exportación e importación del progreso desde el Panel Docente.
- Responsive para PC, notebook, tablet y teléfono.
- No necesita servidor, base de datos ni API externa para funcionar.

## Requisitos

- Node.js 20 o superior recomendado.
- npm.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abrir la dirección que indique Vite (por defecto `http://localhost:3000`).

## Verificación de producción

```bash
npm run lint
npm run build
npm run preview
```

## Modo Docente

La contraseña local predeterminada es:

`docente2026`

Puede modificarse en:

`src/constants/auth.ts`

> Esta contraseña es una protección local de la interfaz, no un mecanismo de seguridad de servidor. No almacenar información sensible de estudiantes en esta aplicación.

## GitHub

El repositorio debe incluir el código fuente y el archivo `package-lock.json`, pero no `node_modules/` ni `dist/`.

```bash
git init
git add .
git commit -m "Laboratorio virtual de Comunicación Digital y Redes"
git branch -M main
git remote add origin URL_DEL_REPOSITORIO
git push -u origin main
```
