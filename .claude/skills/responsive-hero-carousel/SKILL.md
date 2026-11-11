---
name: responsive-hero-carousel
description: Úsala siempre que cambies el hero, el carrusel móvil de héroes, los tamaños de imágenes o las reglas sprite-guardian y sprite-cookie de la página de Kagli.
---

# Hero a pantalla completa, carrusel móvil y encuadre de sprites

El diseño responsive es lo que más se rompe sin que nadie lo note.

## Reglas

- El hero (`.hero` en `src/index.css`) usa como mínimo la altura restante del viewport bajo el HUD; el contenido va centrado y la siguiente sección solo aparece al hacer scroll.
- La imagen `eternal-alliance.jpg` se ve completa, sin deformarse ni recortarse. El ancho de `.ornate-frame` depende de `100svh` menos la altura del resto del contenido: si añades algo al hero, ajusta ese cálculo.
- No añadas otro retrato de la mascota encima de la imagen del hero.
- Escritorio: seis héroes en cuadrícula, nombres sin desbordarse.
- Móvil: una sola fila horizontal con `scroll-snap-type: x mandatory` y `scroll-snap-align: center`. Solo el carrusel se desplaza en horizontal; la página nunca.
- `sprite-guardian` y `sprite-cookie` tienen reglas propias de escala y posición, tanto en `.portrait-wrap` (tarjeta) como en `.dialogue-avatar` (diálogo). No las borres ni las unifiques con las de los humanos.
- La Guardiana debe verse con corona, cabeza, cuerpo y patas cruzadas, centrada y sin cortes laterales.
- Los mensajes largos (R2D2) hacen scroll interno en el diálogo; no estiran la página.

## Checklist de revisión

- [ ] ¿El hero llena la pantalla inicial en escritorio y móvil?
- [ ] ¿`document.documentElement.scrollWidth` es igual al ancho de ventana (sin desbordamiento horizontal)?
- [ ] ¿El carrusel móvil ajusta cada tarjeta al centro?
- [ ] ¿La Guardiana y Sr. Cookie están centrados en tarjeta y diálogo?
- [ ] ¿El mensaje de R2D2 se desplaza dentro del cuadro sin crear espacios vacíos?

## Al terminar

Indica qué puntos del checklist comprobaste y a qué ancho de pantalla (por ejemplo 375 px y 1280 px).
