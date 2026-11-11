# La Misión de Kagli — Landing de cumpleaños RPG

![Portada de La Misión de Kagli](public/portada_pagina.png)

Página interactiva de cumpleaños para **Kagli**, con estética de RPG retro de 16 bits, Age of Empires II, pixel art, fantasía medieval y acentos cyberpunk. Una familia y un grupo de amigos se representan como una **alianza de héroes** que le dejan sus mensajes.

## Qué incluye

- **Barra de recursos** fija con edad, amistad, ánimo festivo y rey del cumple.
- **Portada** a pantalla completa con la ilustración de la alianza y una placa dorada con inscripción medieval que aparece con un fundido suave.
- **Seis héroes** seleccionables: Nurimy, Lady The Killa, Dex, R2D2, La Guardiana y Sr. Cookie. Al elegir uno cambia su retrato y su mensaje se escribe letra por letra en un cuadro de diálogo.
- **Cofre de victoria** que abre una carta estilo pergamino. Se cierra con el botón ×, con clic fuera o con la tecla Escape.
- **Responsive:** en móvil los héroes van en un carrusel horizontal con `scroll-snap`.
- **Accesible:** soporte de teclado, estados de foco y `prefers-reduced-motion`.
- Toda la interfaz está en español.

## Tecnologías

- [React 19](https://react.dev) y TypeScript
- [Vite 8](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com) y CSS global en `src/index.css`
- [oxfmt](https://oxc.rs) como formateador
- Tipografías `Press Start 2P` y `Cinzel` (Google Fonts)

## Requisitos

- Node.js 22
- pnpm 10 (las versiones exactas están en `.mise.toml`)
- [Git LFS](https://git-lfs.com): las imágenes del proyecto se guardan con LFS (ver `.gitattributes`). Instálalo y ejecuta `git lfs install` antes de clonar, o las imágenes llegarán como simples archivos de texto.

## Cómo ejecutarlo

```bash
pnpm install
pnpm run dev
```

El servidor de desarrollo usa el puerto `8443`, o el que indiques en la variable `PORT`. Abre `http://localhost:8443`.

Otros comandos:

| Comando                  | Qué hace                           |
| ------------------------ | ---------------------------------- |
| `pnpm run build`         | Genera la versión final en `dist/` |
| `pnpm run preview`       | Sirve la versión compilada         |
| `pnpm run format`        | Da formato al código con oxfmt     |
| `pnpm exec tsc --noEmit` | Revisa los tipos de TypeScript     |

## Estructura

```text
src/
├── App.tsx                 # Estado global y composición de secciones
├── main.tsx                # Entrada de React
├── index.css               # Estilos globales, paleta y Tailwind
├── components/             # Un componente por archivo
│   ├── ResourceBar.tsx     # Barra de recursos
│   ├── HeroSection.tsx     # Portada
│   ├── GoldPlaque.tsx      # Placa dorada animada
│   ├── AlliesSection.tsx   # Cuadrícula de héroes y diálogo
│   ├── HeroCard.tsx        # Tarjeta de cada héroe
│   ├── DialogueBox.tsx     # Cuadro de diálogo con escritura
│   ├── LootSection.tsx     # Cofre de victoria
│   ├── LetterModal.tsx     # Carta de pergamino
│   ├── SectionHeading.tsx  # Encabezados de sección
│   ├── Footer.tsx
│   └── PixelIcon.tsx       # Iconos SVG pixelados
├── data/heroes.ts          # Datos y mensajes de los héroes
└── hooks/useTypewriter.ts  # Animación de escritura
public/                     # Imágenes, sprites e icono (torta.webp)
```

## Personalizar

- **Mensajes y héroes:** `src/data/heroes.ts`. Son mensajes personales: cámbialos solo si sus autores lo aprueban.
- **Carta del cofre:** `src/components/LetterModal.tsx`.
- **Placa dorada:** texto en `src/components/GoldPlaque.tsx`, estilo en `.gold-plaque` de `src/index.css`.
- **Icono de la pestaña:** `public/torta.webp`, referenciado en `index.html` y en `.figma/make/site.json`.
- **Colores:** variables de `:root` en `src/index.css`. Paleta: madera `#2C1D11`, dorado `#D4AF37`, pergamino `#F4EA90`, victoria `#FFD700`, rojo `#8B0000` y gris `#1A1A1A`.

## Trabajar con este repositorio

El proyecto incluye guías para mantener su identidad visual y sus mensajes:

- [`AGENTS.md`](AGENTS.md): reglas y límites del proyecto.
- [`MEMORY.md`](MEMORY.md): estado actual, decisiones y próximos pasos.
- `.claude/commands/feature.md` y `.claude/skills/`: comando y skills para planificar y revisar cambios.

## Verificación recomendada

Antes de subir cambios:

```bash
pnpm run format
pnpm run build
pnpm exec tsc --noEmit
```

Revisa también a mano, en escritorio y móvil: que la portada llene la pantalla, que los seis héroes aparezcan, que La Guardiana y Sr. Cookie estén centrados, que el carrusel móvil funcione, que el cofre abra y cierre la carta y que no haya desbordamiento horizontal.

## Notas

- La página pide a los buscadores que no la indexen (`robots: noindex`, configurado en `.figma/make/site.json`).
- El proyecto se generó en Figma Make y `vite.config.ts` conserva sus plugins; no es necesario tocarlos.
- La imagen `public/portada_pagina.png` es solo para este README: la página no la usa.

Hecho con cariño por la alianza eterna, para el rey del cumpleaños.
