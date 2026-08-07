---
# METADATOS DE PUBLICACIÓN
layout: post
title: "Título claro y específico de la nota"
date: 2026-08-07
# updated: 2026-08-20              # Opcional: solo si el contenido cambió de forma sustantiva.
type: "Nota técnica"               # Vocabulario sugerido: Nota técnica | Apunte metodológico | Tutorial | Comentario técnico
topic: "Tema principal"             # Un solo tema principal; debe servir para filtrar el archivo.
tags:                                # 3–5 términos útiles para búsqueda; no repetir por rutina el topic.
  - etiqueta-específica
  - segunda-etiqueta
  - tercera-etiqueta
excerpt: "Dos frases que adelanten la idea principal y expliquen por qué la nota le sirve al lector. Evita prometer más de lo que el texto realmente desarrolla."
image: "/assets/images/notas/nombre-imagen.webp"
image_alt: "Descripción breve y objetiva de lo que muestra la imagen."
# image_caption: "Opcional. Úsalo solo si la imagen principal necesita contexto o crédito."
# legacy_url: "https://..."          # Solo para notas migradas desde otro sitio.
editorial_review: "pending"          # Uso interno: pending | reviewed
# reviewed_on: 2026-08-07            # Añádelo cuando hayas hecho una revisión editorial final.
---

<!--
VOZ EDITORIAL DE NOTAS TÉCNICAS

1. Enseñar primero. La autoridad se demuestra explicando con claridad, no acumulando tecnicismos.
2. Abrir con la idea útil. En los primeros 1–2 párrafos debe quedar claro qué problema aborda la nota y por qué importa.
3. Separar dato, interpretación e implicación. Evitar que una inferencia parezca un hecho observado.
4. Usar voz activa, frases directas y términos técnicos solo cuando aporten precisión.
5. Evitar absolutos cuando la evidencia no los permita: preferir "puede indicar", "es compatible con", "no demuestra por sí solo".
6. Titular las secciones por lo que el lector aprenderá, no con rótulos genéricos como "Introducción" o "Conclusión".
7. Mantener una jerarquía simple: H1 lo genera el sitio; usa ## para apartados principales y ### solo para subsecciones.
8. Una sola "Idea central" por nota. El bloque de cita (>) queda reservado para esa función; no usarlo como decoración.
9. Las listas deben ordenar información, no sustituir la explicación.
10. Si hay una limitación importante, decirla cerca de la afirmación a la que afecta.
11. La nota no necesita vender de forma explícita. La utilidad, el criterio y la salida discreta hacia Perfil/EPISUIS hacen el trabajo comercial.
12. Terminar con referencias cuando la nota dependa de evidencia externa. No añadir bibliografía ornamental.

SISTEMA VISUAL DEL CUERPO
- ## Apartado principal
- ### Subapartado (solo si realmente depende del anterior)
- > **Idea central.** ...  -> único recuadro editorial de énfasis
- {% include figure.html ... %} -> todas las figuras internas
- **Pregunta guía:** ... -> frase normal en negritas; no crear otro recuadro
- Sin separadores --- entre apartados: el espaciado y la jerarquía de títulos hacen la separación.
-->

La interpretación de un resultado técnico mejora cuando el lector entiende desde el principio qué pregunta se intenta responder. Por eso, abre con una situación concreta o una afirmación que ubique el problema.

En un segundo párrafo, delimita el alcance: explica qué sí desarrollará la nota y, cuando sea necesario, qué no puede concluirse solo con la información disponible.

> **Idea central.** Un resultado o una observación adquieren significado cuando se interpretan dentro de la pregunta, el sistema y las limitaciones del método con el que fueron obtenidos.

## Qué necesita entender el lector primero

Presenta aquí el concepto indispensable para seguir la nota. Prefiere una explicación breve antes de introducir excepciones o detalles metodológicos.

Cuando ayude a ordenar la información, usa una lista corta:

- primer elemento que cambia la interpretación;
- segundo elemento relevante;
- tercer elemento que conviene verificar.

## Cómo cambia la interpretación en la práctica

Explica la consecuencia técnica. Aquí es útil contrastar dos situaciones, mostrar qué evidencia apoya cada lectura y señalar qué afirmaciones serían excesivas.

### Cuando el contexto modifica el resultado

Usa un subapartado solo si depende claramente de la sección anterior. Si el tema merece el mismo peso que el apartado previo, usa otro `##`.

**Pregunta guía:** ¿qué dato adicional necesitaría para sostener una interpretación más fuerte?

{% include figure.html
  src="/assets/images/notas/nombre-figura.webp"
  alt="Descripción objetiva y útil de la figura."
  caption="Figura 1. Explica qué representa la figura y qué debe observar el lector; no repitas solo el título."
%}

## Qué conviene no concluir

Expón aquí la principal limitación cuando exista. Esta sección es especialmente útil en diagnóstico, epidemiología, secuenciación y análisis de riesgo, donde una señal puede ser compatible con varias explicaciones.

Una redacción útil suele distinguir entre:

- **lo observado:** qué dato se obtuvo;
- **la interpretación:** qué explicación es compatible con ese dato;
- **el límite:** qué no puede afirmarse sin información adicional.

## Qué conviene retener

Cierra con dos o tres ideas que ayuden al lector a usar correctamente lo explicado. No repitas todo el artículo ni conviertas el cierre en una venta.

## Referencias consultadas

1. Autor(es). Título. *Revista o fuente*. Año. DOI o URL persistente.
2. Organismo o guía técnica. Título. Año o versión.
