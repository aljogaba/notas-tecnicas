---
layout: post
title: ¿Qué representa una secuencia Sanger en una muestra con variantes de PRRSV?
date: '2026-06-17'
type: Nota técnica
topic: PRRSV
tags:
- diagnóstico
- interpretación sanitaria
- producción porcina
excerpt: La secuenciación Sanger permite identificar la variante dominante de PRRSV en una muestra, pero no necesariamente toda su diversidad. Esta nota explica cómo interpretar resultados obtenidos de muestras mixtas y pools.
image: /assets/images/notas/sanger-variantes-prrsv.jpg
image_alt: Grupo de cerdos reunidos en un corral de una granja porcina.
legacy_url: https://episuis.com.mx/que-representa-una-secuencia-sanger-en-una-muestra-con-variantes-de-prrsv/
editorial_review: pending
---

La secuenciación de ORF5 mediante Sanger es una herramienta ampliamente utilizada para caracterizar molecularmente al virus del síndrome reproductivo y respiratorio porcino —PRRSV—. Sin embargo, su interpretación requiere cuidado cuando una muestra o un pool puede contener más de una variante viral.

> **Idea central.** La secuenciación Sanger es una herramienta sólida para caracterizar la variante dominante de una muestra. Sin embargo, una secuencia consenso no necesariamente refleja toda la diversidad viral existente, especialmente cuando se analizan pools o muestras con poblaciones mixtas.

## De la muestra al producto amplificado

Antes de secuenciar, la región de interés debe amplificarse mediante RT-PCR o PCR. Los primers se diseñan para unirse a regiones relativamente conservadas que flanquean la región que se desea estudiar.

Un par de primers puede ser capaz de amplificar diferentes linajes de PRRSV. No obstante, cuando dos o más variantes están presentes en una misma muestra, sus productos no necesariamente quedarán representados en la misma proporción después de la PCR.

La composición final del amplicón puede depender de:

- la cantidad inicial de copias de cada variante;
- la eficiencia relativa de amplificación;
- la calidad del material genético;
- la afinidad de los primers;
- y los efectos ocurridos durante los primeros ciclos de la PCR.

## ¿Qué señal produce Sanger?

La secuenciación Sanger no selecciona una sola molécula. Todas las copias presentes en el producto amplificado participan simultáneamente como moldes, por lo que el cromatograma representa la suma de sus señales.

Cuando una variante domina ampliamente el amplicón, suele obtenerse una secuencia limpia que corresponde principalmente a esa variante. Esto no significa necesariamente que sea la única presente.

Si dos variantes se encuentran en proporciones más cercanas, pueden aparecer picos dobles en los sitios donde sus secuencias difieren. Cuando existen inserciones o deleciones, la lectura puede perder calidad a partir del punto donde ambas secuencias quedan fuera de fase.

Existe una relación aproximada entre la proporción de cada variante y la intensidad de sus picos, pero Sanger no es una técnica cuantitativa. Además, la proporción observada corresponde al producto después de la PCR y no necesariamente a la composición original de la muestra.

{% include figure.html
  src="/assets/images/notas/secuenciacion-sanger-variantes-mixtas-prrsv.webp"
  alt="Esquema conceptual de secuenciación Sanger en una muestra con variantes mixtas de PRRSV."
  caption="Figura 1. Cuando una muestra contiene diferentes variantes de PRRSV, estas pueden amplificarse simultáneamente. La secuencia Sanger representa principalmente la variante dominante en el producto amplificado, mientras que las variantes minoritarias pueden generar picos secundarios o permanecer por debajo del nivel de detección."
%}

## ¿Qué ocurre al secuenciar un pool?

Los pools son útiles para reducir costos durante la detección molecular, pero disminuyen la capacidad para relacionar una secuencia con un animal específico.

Una secuencia obtenida de un pool:

- no representa necesariamente a todos los animales que lo integran;
- no demuestra que todos porten la misma variante;
- y no permite descartar otras variantes minoritarias.

La interpretación se complica aún más si se mezclan distintos pools positivos antes de la amplificación o de la secuenciación. Una variante abundante en uno de ellos puede dominar el cromatograma y ocultar las variantes presentes en los demás.

Seleccionar el pool con mayor concentración viral puede aumentar la probabilidad de obtener una secuencia limpia, pero esa secuencia solamente representa al pool elegido.

## Interpretación práctica

Una secuencia limpia permite identificar la variante consenso que predominó en el producto analizado. Por ello, conviene evitar afirmaciones como *“Todos los animales presentaban la misma cepa”*.

Una formulación más precisa sería: *“En la muestra analizada se obtuvo una secuencia consenso relacionada con determinada variante de PRRSV”*.

## Referencias consultadas

1. Cheng, T.-Y., Campler, M. R., Schroeder, D. C., Yang, M., Mor, S. K., Ferreira, J. B., & Arruda, A. G. (2022). Detection of Multiple Lineages of PRRSV in Breeding and Growing Swine Farms. *Frontiers in Veterinary Science*, *9*. <https://doi.org/10.3389/fvets.2022.884733>
2. Clilverd, H., Li, Y., Martín-Valls, G., Aguirre, L., Martín, M., Cortey, M., & Mateu, E. (2024). Selection of viral variants with enhanced transmission and reduced neutralization susceptibility alongside lateral introductions may explain the persistence of porcine reproductive and respiratory syndrome virus in vaccinated breeding herds. *Virus Evolution*, *10* (1), veae041. <https://doi.org/10.1093/ve/veae041>
3. Pamornchainavakul, N., Paploski, I. A. D., Makau, D. N., Baker, J. P., Huang, J., Ferreira, C. P., Corzo, C. A., Rovira, A., Cheeran, M. C.-J., Lycett, S., Doeschl-Wilson, A., Schroeder, D. C., & VanderWaal, K. (2025). Experimental evidence of vaccine-driven evolution of porcine reproductive and respiratory syndrome virus type 2. *Virus Evolution*, *11*(1), veaf056. <https://doi.org/10.1093/ve/veaf056>
