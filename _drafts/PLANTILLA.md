---
# METADATOS DE PUBLICACIÓN — completa esto primero.
layout: post
title: "Título claro, específico y útil para búsqueda"
date: 2026-08-07
# updated: 2026-08-20                  # Solo si hubo una actualización sustantiva del contenido.
type: "Nota técnica"                   # Nota técnica | Apunte metodológico | Tutorial | Comentario técnico
topic: "Tema principal"                # Un solo tema principal; alimenta el filtro del archivo.
tags:                                    # 3–5 términos específicos y útiles para búsqueda.
  - etiqueta-específica
  - segunda-etiqueta
  - tercera-etiqueta
excerpt: "En una o dos frases: qué problema aborda la nota, qué aprenderá el lector y por qué puede resultarle útil. Debe funcionar también como resumen al compartir la URL."
image: "/assets/images/notas/nombre-imagen.webp"
image_alt: "Descripción objetiva de lo que muestra la imagen y de la información visual relevante."
# image_caption: "Opcional. Contexto o crédito de la imagen principal si realmente aporta información."

# SEO — normalmente basta con title + excerpt. Usa estos campos solo para afinar una nota concreta.
# seo_title: "Versión más concisa del título para buscadores, si el título editorial es demasiado largo."
# seo_description: "Descripción específica de la página si necesitas algo distinto del excerpt."

# CITACIÓN — el sitio genera automáticamente autor, año, título, nombre del sitio y URL canónica.
# citation_override: "Úsalo únicamente si una nota necesita una forma de citación especial."

# MIGRACIÓN / CONTROL EDITORIAL
# legacy_url: "https://..."              # Solo para notas migradas desde otro sitio.
editorial_review: "pending"              # Uso interno: pending | reviewed
# reviewed_on: 2026-08-07                # Fecha de la revisión editorial final.
---

<!--
============================================================
GUÍA EDITORIAL — ESTE ARCHIVO ES EL CORAZÓN DE NOTAS TÉCNICAS
============================================================

IDENTIDAD
- El sitio se llama siempre: "Notas técnicas".
- Su descriptor editorial es: "Archivo técnico".
- No usar como nombres alternativos "Archivo personal", "Cuaderno técnico", "Blog" u otros.
- En una nota individual no hace falta repetir el nombre del sitio: el encabezado ya muestra tipo + tema.

PROPÓSITO
- Enseñar primero. La utilidad y el criterio técnico construyen autoridad y también cumplen la función comercial.
- No redactar como anuncio de servicios ni como paper fingido.
- Distinguir con claridad evidencia, interpretación, implicación y límite.

VOZ
1. Abrir con la idea útil: en 1–2 párrafos debe quedar claro qué pregunta aborda la nota y por qué importa. El cuerpo inicia con la misma tipografía y tamaño que el resto del texto; la jerarquía de entrada ya la resuelven el título y el `excerpt`.
2. Usar voz activa y frases directas. Mantener términos técnicos cuando aporten precisión y explicarlos cuando puedan frenar al lector.
3. Evitar absolutos no sustentados: "puede indicar", "es compatible con", "no demuestra por sí solo", "requiere contexto".
4. No inflar conclusiones. Si un dato admite varias explicaciones, decirlo cerca de la afirmación correspondiente.
5. Titular las secciones por lo que el lector aprenderá; evitar "Introducción", "Desarrollo" o "Conclusión" salvo que sean imprescindibles.
6. Las listas ordenan información; no deben sustituir el razonamiento.
7. Referenciar cuando una afirmación dependa de evidencia externa. No añadir bibliografía ornamental.

JERARQUÍA
- El H1 lo genera automáticamente el sitio a partir de `title`.
- `##` = apartados principales.
- `###` = subsecciones que dependen realmente del apartado anterior.
- No usar `---` como separador visual dentro del cuerpo.

VOCABULARIO VISUAL — CADA RECURSO TIENE UNA SOLA FUNCIÓN
- `{% include idea-central.html text="..." %}` = una única síntesis editorial por nota.
  No es una tarjeta ni un aviso; funciona como interludio tipográfico propio del sitio.
- `{% include figure.html ... %}` = toda figura interna. Incluye siempre `alt` y, salvo que no aporte información, un `caption` explicativo. Al abrir la figura, el visor muestra la imagen completa (sin recorte, aunque deba escalarse) y conserva el pie de figura.
- `**Pregunta guía:** ...` = frase normal dentro del flujo; no crear un recuadro adicional.
- `>` = reservarlo para una cita textual real, no para destacar ideas propias.
- Referencias, cita recomendada, notas relacionadas y cierre se generan/estilizan de forma homogénea por el sitio.

SEO Y DIFUSIÓN
- `title`, `excerpt`, `topic`, `tags`, `image` e `image_alt` importan también fuera de la página.
- El título debe describir con precisión la búsqueda o problema que resuelve la nota.
- El excerpt debe poder entenderse sin haber leído el artículo.
- El nombre del archivo de imagen debe ser descriptivo; evita `IMG_001.jpg`.
- El alt describe la información visible; no llenarlo de palabras clave.
- El sitio genera canonical, Open Graph, datos estructurados Article, sitemap y cita sugerida.

ANTES DE PUBLICAR
- ¿La pregunta o utilidad aparece en los primeros dos párrafos?
- ¿Hay una sola Idea central?
- ¿Los H2/H3 reflejan la jerarquía real?
- ¿Se distingue dato de interpretación?
- ¿Los límites aparecen donde hacen falta?
- ¿Todas las figuras tienen `alt` y un pie explicativo útil? ¿El pie sigue siendo comprensible cuando la figura se abre a pantalla completa?
- ¿Las referencias sostienen las afirmaciones que dependen de fuentes externas?
- ¿El título y el excerpt describen exactamente el contenido?
- Cambiar `editorial_review` a `reviewed` y agregar `reviewed_on` al finalizar.
-->

La detección de un resultado positivo puede parecer una respuesta completa, pero en muchos problemas sanitarios solo representa el inicio de la interpretación. La utilidad del dato depende de la pregunta que se intenta responder y del contexto en el que fue obtenido.

Esta nota de ejemplo explica cómo ordenar esa interpretación sin atribuir al resultado más información de la que realmente contiene. El objetivo no es proponer una decisión específica, sino mostrar qué elementos conviene integrar antes de sostener una conclusión.

{% include idea-central.html text="Un resultado técnico adquiere valor cuando se interpreta junto con la pregunta de trabajo, el contexto del sistema y las limitaciones del método que lo produjo." %}

## Qué necesita entender el lector primero

Empieza por el concepto indispensable. Define el término técnico con precisión y después explica por qué modifica la lectura del problema. Si el lector necesita tres condiciones para interpretar correctamente el resultado, puedes ordenarlas así:

- **qué se observó:** el dato o señal obtenida;
- **en qué contexto ocurrió:** población, momento, muestra o condición relevante;
- **qué alcance tiene:** hasta dónde permite llegar la evidencia disponible.

Una lista breve ayuda a ordenar; el párrafo posterior debe explicar la relación entre esos elementos.

## Cómo cambia la interpretación en la práctica

Contrasta aquí dos situaciones realistas. Por ejemplo, una misma detección puede tener implicaciones diferentes cuando proviene de una población clínicamente afectada que cuando aparece en un muestreo de vigilancia sin signos evidentes.

La comparación debe conducir al razonamiento: qué evidencia apoya cada interpretación y qué información adicional permitiría discriminar entre explicaciones alternativas.

### Cuando el contexto modifica el resultado

Usa un `###` únicamente cuando este contenido dependa de la sección anterior. Si la idea tiene el mismo peso conceptual que otro apartado, utiliza un nuevo `##`.

**Pregunta guía:** ¿qué dato adicional necesitaría para sostener una interpretación más fuerte?

{% include figure.html
  src="/assets/images/notas/nombre-figura.webp"
  alt="Descripción objetiva de la información visible en la figura."
  caption="Figura 1. Explica qué representa la imagen y qué conviene observar; no repitas solamente el título."
%}

La figura se mostrará dentro del artículo y podrá abrirse a pantalla completa con clic, Enter o barra espaciadora. En el visor se conserva completa, sin recortarse, aunque deba reducir su escala para caber en la pantalla; el pie de figura se muestra debajo. Esto permite usar la misma nota como apoyo visual durante una clase o presentación.

## Qué conviene no concluir

Expón la limitación principal cuando exista. En diagnóstico, epidemiología, secuenciación o análisis de riesgo es frecuente que una señal sea compatible con más de una explicación.

Una estructura útil es:

- **Dato:** qué se obtuvo de manera observable.
- **Interpretación:** qué explicación es compatible con ese dato.
- **Límite:** qué no puede afirmarse todavía.
- **Información faltante:** qué dato ayudaría a resolver la incertidumbre.

Esta separación protege el tono técnico de la nota y evita que una inferencia se presente como evidencia directa.

## Qué conviene retener

Cierra con dos o tres ideas accionables en términos de comprensión: qué debe recordar el lector, qué error de interpretación debería evitar y qué información debería buscar cuando enfrente un caso semejante.

No repitas todo el artículo y no cierres con una venta explícita. El sitio añade automáticamente la cita recomendada, notas relacionadas, vínculos al perfil profesional y EPISUIS.

## Referencias consultadas

1. Autor(es). Título. *Revista o fuente*. Año. DOI o URL persistente.
2. Organismo o guía técnica. Título. Año o versión. URL persistente.
