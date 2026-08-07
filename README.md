# Notas técnicas

Sitio Jekyll ligero publicado con GitHub Pages. El objetivo es mantener un archivo técnico neutral, enlazable tanto desde el perfil profesional como desde EPISUIS.

## Publicar una nota

1. Copiar `_drafts/PLANTILLA.md`.
2. Guardar la copia en `_posts/` como `AAAA-MM-DD-slug.md`.
3. Completar el bloque YAML superior.
4. Colocar la imagen principal en `assets/images/notas/`.
5. Escribir la nota siguiendo la estructura editorial de la plantilla.
6. Hacer `commit` + `push` desde GitHub Desktop.

Jekyll genera automáticamente la portada, filtros, tarjetas, URLs y metadatos básicos. No es necesario editar `index.html` para publicar una nota.

## Convenciones editoriales

- Un H1 por página (lo genera el layout).
- `##` para apartados principales y `###` para subsecciones.
- Un único bloque `> **Idea central.** ...` por nota.
- Figuras internas mediante `_includes/figure.html`.
- Sin líneas `---` como separadores dentro del artículo.
- Los enlaces a Perfil profesional y EPISUIS viven en navegación y cierre; el cuerpo de la nota se mantiene técnico y neutral.

## GitHub Pages

- `url: https://aljogaba.github.io`
- `baseurl: /notas-tecnicas`
