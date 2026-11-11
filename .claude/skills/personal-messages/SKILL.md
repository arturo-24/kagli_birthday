---
name: personal-messages
description: Úsala siempre que toques mensajes, nombres, roles o datos de los héroes (src/data/heroes.ts), el diálogo o la carta del cofre de la página de Kagli.
---

# Mensajes personales de la página de Kagli

Los mensajes son cariño real de personas reales. Un cambio mínimo puede arruinarlos.

## Reglas

- No reescribas, corrijas, resumas ni "mejores" ningún mensaje sin autorización expresa. Eso incluye faltas, tildes, emojis y `:3`.
- Mensajes de Nurimy, R2D2 y Sr. Cookie: texto exacto del prompt del proyecto (`CLAUDE_PROJECT_PROMPT.md`). El de R2D2 es un bloque continuo, sin párrafos vacíos.
- El orden de los héroes es fijo: Nurimy, Lady The Killa, Dex, R2D2, La Guardiana, Sr. Cookie.
- Cada héroe tiene `id`, `title`, `role`, `level`, `skill`, `message`, `image`, `position` y `accent`. Si añades un campo, hazlo opcional y no toques los existentes.
- Imágenes: `public/hero-*.png` y `public/eternal-alliance.jpg`. No las sustituyas por emojis, recortes ni versiones antiguas.
- Textos de la carta (`LetterModal`) y del pie también son personales: mismo cuidado.
- Textos nuevos de interfaz, siempre en español.

## Checklist de revisión

- [ ] ¿Algún mensaje cambió respecto al original? Compara con `git diff` o con el archivo de respaldo.
- [ ] ¿Cada tarjeta muestra el mensaje de su personaje?
- [ ] ¿Se mantiene el orden de los seis héroes?
- [ ] ¿La escritura se reinicia al cambiar de héroe y el mensaje largo hace scroll interno?
- [ ] ¿Hay algún texto en inglés nuevo?

## Al terminar

Indica qué puntos del checklist comprobaste y cómo.
