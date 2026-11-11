# MEMORY.md — La Misión de Kagli

Memoria del proyecto entre sesiones. Máximo ~50 líneas: resume o elimina lo que ya no aporte.

## Estado actual

- Landing React + TypeScript + Vite + Tailwind v4 funcionando: HUD de recursos, hero con imagen familiar, seis héroes con diálogo animado, cofre de victoria con carta y pie de página.
- `App.tsx` dividido en componentes (`src/components/`), datos en `src/data/heroes.ts` y hook `useTypewriter`.
- Placa dorada de inscripción medieval bajo la imagen del hero (`GoldPlaque`): aparece con un fundido a los 0,5 s.
- `build` y `tsc --noEmit` pasan. Interacciones de héroes y carta verificadas en escritorio.

## Decisiones (y por qué)

- Mensaje de Lady The Killa reemplazado el 2026-11-11 por texto nuevo que pasó el usuario (autorizado); va en un solo bloque continuo, sin saltos de línea.

- Se mantiene React + TypeScript (`.tsx`): el proyecto ya estaba así y no se migra ni se reconstruye.
- Mensajes personales en `src/data/heroes.ts`: se extrajeron sin retocar ni una letra.
- Ancho del marco del hero calculado con `100svh - 350px` (antes 305) para dar sitio a la placa.
- Animaciones solo con `transform` y `opacity`; `prefers-reduced-motion` las apaga con la regla global.

## Aprendizajes y errores a evitar

- `node_modules` puede faltar: `pnpm install --frozen-lockfile` antes de `build` o `tsc`.
- `pnpm run format` usa oxfmt sin config y reformatea todos los archivos: revisa que no toque nada ajeno.
- Con 768 px de alto de ventana, el hero mide ~840 px y la cinta de victoria queda bajo el pliegue.

## Próximos pasos

- Decidir si ajustar el hero para que cinta y aviso de scroll quepan en pantallas bajas.
- Revisar en móvil tras la división en componentes: carrusel, La Guardiana y Sr. Cookie centrados.
- Pendiente de decidir: texto definitivo de la placa dorada.
