# SEIF Product Operating System

Repositorio digital del **Assessment & Blueprint v0.1**. No es una landing ni un dashboard: es la fuente de verdad navegable para el diagnóstico, Operating Model, implementación, Jira, métricas, evidencia y lenguaje compartido de SEIF.

## Arquitectura y stack

- Next.js App Router, React y TypeScript estricto.
- Renderizado estático (`output: export`), sin backend.
- CSS corporativo propio, responsive, accesible y print-friendly.
- Contenido tipado en `content/chapters.ts` y `content/glossary.ts`.
- Búsqueda local sin servicios externos; `Cmd/Ctrl + K`.
- Lucide para iconografía consistente.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`. Para verificar producción:

```bash
npm run build
npx serve out
```

## Modelo de contenido

Los 27 capítulos viven en `content/chapters.ts`. Cada registro tiene `slug`, grupo, título, resumen ejecutivo, takeaway, secciones y relaciones. Para añadir un capítulo:

1. Agregar un objeto a `chapters` respetando `types/content.ts`.
2. Usar un `slug` único y asignar uno de los grupos de navegación.
3. Mantener el resumen en 3–4 líneas y marcar evidencia, recomendación, riesgo o decisión cuando aplique.
4. Añadir slugs válidos a `related`.

La ruta se genera automáticamente en `/chapter/[slug]`, incluida en navegación, búsqueda y export estático.

## Mantener el glosario

Agregar una entrada a `raw` en `content/glossary.ts` con definición, importancia, ejemplo SEIF y referencias. La página alfabética y la búsqueda se actualizan automáticamente. No incluir cifras sin fuente o baseline.

## Infografías

`public/assets/assessment/` contiene el inventario y placeholders SVG de las 17 piezas. Para reemplazar una pieza:

1. Conservar el nombre numerado (`01-executive-diagnostic`, etc.).
2. Preferir WebP/AVIF o SVG optimizado y alta resolución.
3. Actualizar el `src` donde se use `Infographic`.
4. Escribir `title`, `caption`, `relatedSection` y alt text descriptivo; nunca incrustar cifras no validadas.

El componente `components/infographic.tsx` aporta carga optimizada y lightbox accesible.

## Versionado

- La entrega actual es **v0.1 — Assessment & Blueprint**.
- Crear una rama/tag para cada versión y registrar fecha y cambios de contenido.
- Reservar **v1.0 — Pilot validated** hasta validar el piloto y sus baselines.
- Actualizar la versión en shell, home, metadata visible y pie de impresión.

## Deploy

- **Vercel:** importar el repositorio; detecta Next.js automáticamente.
- **Netlify:** build `npm run build`, directorio de publicación `out`.
- **Servidor estático:** publicar el contenido de `out/` tras el build.

## Reglas editoriales

Separar evidencia directa (E1), convergente (E2), inferencia soportada (E3) e hipótesis (H1). No inventar hallazgos, causalidad, tiempos ni porcentajes. Usar lenguaje neutral y validar hipótesis TO-BE durante el piloto.
