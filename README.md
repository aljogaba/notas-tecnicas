# Notas técnicas — V2

Sitio Jekyll ligero para GitHub Pages.

## Publicar una nota

1. Copiar `_drafts/PLANTILLA.md`.
2. Guardar la copia en `_posts/` con nombre `AAAA-MM-DD-slug.md`.
3. Completar el bloque YAML superior.
4. Colocar la imagen principal en `assets/images/notas/` y actualizar `image:`.
5. Escribir el texto en Markdown.
6. `commit` + `push`.

No es necesario editar `index.html`, el menú lateral ni los filtros: Jekyll los construye a partir de los metadatos de cada nota.

## Migración inicial

Se recuperaron las tres entradas publicadas presentes en el WXR de WordPress del 7 de agosto de 2026.

Para mantener el nuevo sitio neutral, las secciones tituladas `Aplicación en EPISUIS` no se muestran en las versiones migradas. El texto original continúa conservado en el archivo WXR de respaldo.

Las imágenes utilizadas por las tres notas ya fueron recuperadas de `wp-content/uploads/` y copiadas a `assets/images/notas/`. Las notas ya no dependen del hosting de WordPress para mostrar sus imágenes.

## GitHub Pages

La configuración provisional usa:

- `url: https://aljogaba.github.io`
- `baseurl: /notas`

Si el repositorio termina llamándose de otra forma, cambiar únicamente `baseurl` en `_config.yml`.
