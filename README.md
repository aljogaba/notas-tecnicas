# Notas técnicas

Sitio Jekyll ligero publicado con GitHub Pages. **Notas técnicas** es el nombre único del sitio y **Archivo técnico** su descriptor editorial. El contenido puede enlazarse tanto desde el perfil profesional como desde EPISUIS sin convertirse en una marca independiente.

## Publicar una nota

1. Copiar `_drafts/PLANTILLA.md`.
2. Guardar la copia en `_posts/` como `AAAA-MM-DD-slug.md`.
3. Completar el bloque YAML superior.
4. Colocar la imagen principal en `assets/images/notas/`.
5. Escribir la nota siguiendo la guía editorial incluida en la propia plantilla.
6. Hacer `commit` + `push` desde GitHub Desktop.

Jekyll genera automáticamente portada, filtros, tarjetas, URLs, metadatos SEO, datos estructurados, sitemap, cita recomendada y notas relacionadas. No es necesario editar `index.html` para publicar una nota.

## Convenciones editoriales

- Un H1 por página (lo genera el layout).
- `##` para apartados principales y `###` para subsecciones.
- Una sola `Idea central`, mediante `_includes/idea-central.html`.
- Figuras internas mediante `_includes/figure.html`; se amplían a pantalla completa automáticamente.
- `>` queda disponible para citas textuales reales, no para destacar ideas propias.
- Sin líneas `---` como separadores dentro del artículo.
- Los enlaces a Perfil profesional y EPISUIS viven en navegación y cierre; el cuerpo de la nota se mantiene técnico y neutral.

## Identidad verbal

- Nombre: `Notas técnicas`.
- Descriptor: `Archivo técnico`.
- Tipo de pieza: `Nota técnica`, `Apunte metodológico`, `Tutorial` o `Comentario técnico`.
- Evitar variantes como `Archivo personal` o `Cuaderno técnico`.

## GitHub Pages

- `url: https://aljogaba.github.io`
- `baseurl: /notas-tecnicas`
