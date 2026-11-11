---
name: pixel-rpg-style
description: Úsala siempre que escribas o modifiques estilos, colores, tipografías, animaciones o componentes visuales de la página de cumpleaños de Kagli.
---

# Identidad visual: RPG retro, Age of Empires y cyberpunk

La página es un videojuego de cumpleaños. Nunca debe parecer una web corporativa ni SaaS.

## Reglas

- Usa las variables de `:root` en `src/index.css`: `--wood #2C1D11`, `--gold #D4AF37`, `--gold-bright #FFD700`, `--cream #F4EA90`, `--red #8B0000`, `--ink #1A1A1A`, `--cyan` como acento.
- Fuentes: `Press Start 2P` para HUD, estadísticas y pixel art; `Cinzel` para títulos y texto medieval.
- Bordes biselados y rectos, marcos dorados, madera, sombras duras, contraste alto. Sin `border-radius` moderno (los remaches circulares existentes son la excepción).
- Prohibido: fondos blancos, pasteles, sombras difusas tipo SaaS, tarjetas blancas, emojis nuevos y controles que no hagan nada.
- Mantén hover, pressed, focus visible y soporte de teclado en todo lo interactivo.
- Anima solo con `transform` y `opacity`. Nada que provoque reflow continuo.
- La regla global `prefers-reduced-motion` ya desactiva animaciones y transiciones: no la quites.
- `image-rendering: pixelated` en imágenes pixel art.
- Estilos globales de elementos van en `@layer base`; no repitas lo que Preflight de Tailwind ya hace.
- No rediseñes componentes que ya funcionan.

## Checklist de revisión

- [ ] ¿Todos los colores salen de la paleta?
- [ ] ¿Aparece algún radio redondeado, blanco o sombra suave?
- [ ] ¿Se animan propiedades distintas de `transform` y `opacity`?
- [ ] ¿Funcionan hover, focus y teclado?
- [ ] ¿Se ve bien con `prefers-reduced-motion` activado?

## Al terminar

Indica qué puntos del checklist comprobaste y cómo.
