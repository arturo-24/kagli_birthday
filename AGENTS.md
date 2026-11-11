# AGENTS.md — La Misión de Kagli

Landing page interactiva de cumpleaños para Kagli: una alianza de héroes con estética RPG retro de 16 bits, Age of Empires II, pixel art, fantasía medieval y acentos cyberpunk. Es contenido personal y afectivo: se cuida más que un proyecto cualquiera.

## Stack y estructura

- React 19, TypeScript, Vite 8 y Tailwind CSS v4. Los componentes usan `.tsx`; los datos y hooks, `.ts`.
- El proyecto ya está construido: nunca lo conviertas a HTML estático, no lo reconstruyas desde cero ni lo migres a otra tecnología.
- `src/main.tsx`: entrada de React; importa `src/index.css` y monta `App`.
- `src/App.tsx`: solo estado global (héroe seleccionado, cofre abierto, tecla Escape) y composición de secciones.
- `src/components/`: un componente por archivo (`ResourceBar`, `HeroSection`, `GoldPlaque`, `AlliesSection`, `HeroCard`, `DialogueBox`, `SectionHeading`, `LootSection`, `LetterModal`, `Footer`, `PixelIcon`).
- `src/data/heroes.ts`: tipo `Hero` y los seis personajes con sus mensajes personales.
- `src/hooks/useTypewriter.ts`: animación de escritura del diálogo.
- `src/index.css`: CSS global, variables de paleta y Tailwind (`@import "tailwindcss"`).
- `public/`: imágenes optimizadas (hero, sprites, `eternal-alliance.jpg`).

## Convenciones

- Toda la interfaz en español. Se conserva "Age of Empires" por ser el nombre oficial del juego.
- Cambios de estructura → JSX; de estilo → `src/index.css` o clases existentes; de lógica → React y TypeScript (estado, efectos, eventos).
- Componentes pequeños y con nombres descriptivos; comentarios solo donde aporten.
- Paleta: madera `#2C1D11`, dorado `#D4AF37`, pergamino `#F4EA90`, victoria `#FFD700`, rojo medieval `#8B0000`, gris `#1A1A1A`, cian cyberpunk como acento. Usa las variables de `:root`.
- Tipografía: `Press Start 2P` para HUD y pixel art, `Cinzel` para títulos y texto medieval.
- Evita: fondos blancos, pasteles, bordes redondeados modernos, sombras SaaS, emojis nuevos y controles decorativos sin función.

## Contenido sagrado

- Los mensajes de `src/data/heroes.ts` son personales: no los reescribas, corrijas ni resumas sin permiso.
- Orden fijo de los seis héroes: Nurimy, Lady The Killa, Dex, R2D2, La Guardiana, Sr. Cookie. No cambies sus sprites ni la imagen `public/eternal-alliance.jpg`.
- No quites las reglas CSS `sprite-guardian` y `sprite-cookie`: mantienen centrados a esos dos personajes en la tarjeta y en el diálogo.

## Comportamiento que no se rompe

- El hero ocupa la pantalla bajo el HUD y muestra la imagen familiar completa.
- En móvil los héroes van en una sola fila con `scroll-snap`; solo el carrusel se desplaza en horizontal, nunca la página.
- Al elegir un héroe cambian el retrato, el nombre y el mensaje, y la escritura se reinicia.
- La carta del cofre se cierra con el botón ×, con clic fuera y con Escape.
- Respeta hover, pressed, focus, teclado y `prefers-reduced-motion`.
- Animaciones solo con `transform` y `opacity`; conserva `image-rendering: pixelated`.

## Forma de trabajar

- Haz solo lo que se pide, con cambios pequeños; no rediseñes lo que ya funciona.
- Antes de editar: di qué cambiarás y qué archivos tocarás.
- Después: lista los cambios, los archivos modificados y los resultados de la verificación. No afirmes nada sin verificarlo.
- Al terminar cada tarea, actualiza `MEMORY.md`.
- Para planificar una funcionalidad nueva usa el comando `/feature`; hay skills en `.claude/skills/` (ver abajo).

## Límites

- ✅ Siempre: español, paleta y tipografías actuales, mensajes intactos, `MEMORY.md` al día.
- ⚠ Pregunta antes: cambiar mensajes o imágenes personales, añadir dependencias, crear archivos fuera de `src/`, cambiar la identidad visual.
- 🚫 Nunca: reconstruir el proyecto, migrar de tecnología, reemplazar sprites por emojis o recortes, añadir textos en inglés.

## Verificación

No hay tests ni lint. Después de cualquier cambio:

1. `pnpm run format` (oxfmt).
2. `pnpm run build`.
3. `pnpm exec tsc --noEmit`.
4. Revisar escritorio y móvil: hero completo, seis héroes, La Guardiana y Sr. Cookie centrados, carrusel móvil, mensajes correctos, cofre y cierres de la carta, sin desbordamiento horizontal.

## Skills del proyecto (`.claude/skills/`)

- `personal-messages`: protege mensajes y datos de los héroes.
- `pixel-rpg-style`: identidad visual, paleta, tipografía y animaciones.
- `responsive-hero-carousel`: hero a pantalla completa, carrusel móvil y encuadre de sprites.
- `react-structure`: dónde va cada cosa y checklist de verificación.

## Plataforma (Figma Make)

Un servidor de Vite ya puede estar corriendo en `$PORT` (por defecto 8443); no inicies otro si es así. `vite.config.ts` define el alias `@` para `src`. `.mise.toml` fija las versiones de Node y pnpm.

Tailwind v4 emite utilidades en `@layer utilities`, y el CSS fuera de capas gana a todas. Los estilos globales de elementos (`body`, encabezados, `button`, `input`) van en `@layer base { ... }`. Preflight ya aplica `box-sizing: border-box` y `font: inherit` a los controles: no los repitas. Los `@import` de CSS van primero y luego los `@font-face`.
