---
name: react-structure
description: Úsala siempre que añadas, muevas o modifiques componentes, hooks, datos o lógica de React en la página de Kagli, y antes de dar una tarea por terminada.
---

# Estructura React y verificación

La página debe seguir siendo un proyecto React ordenado, no un `App.tsx` gigante.

## Dónde va cada cosa

- `src/App.tsx`: estado global y composición. Sin marcado largo.
- `src/components/`: un componente por archivo, nombre en PascalCase, props tipadas.
- `src/data/`: datos y tipos (`heroes.ts`). Los textos personales viven aquí, no en el JSX.
- `src/hooks/`: lógica reutilizable (`useTypewriter`).
- `src/index.css`: estilos globales; reutiliza las clases existentes antes de crear nuevas.
- Importa tipos con `import type`. Limpia siempre temporizadores y listeners en el `return` de `useEffect`.
- No instales dependencias sin necesidad ni conviertas el proyecto a otra tecnología.

## Checklist de revisión

- [ ] ¿El archivo nuevo está en la carpeta correcta y hace una sola cosa?
- [ ] ¿Los efectos limpian sus temporizadores y listeners?
- [ ] ¿Se conservan Escape, clic fuera y botón × en la carta del cofre?
- [ ] ¿`pnpm run format`, `pnpm run build` y `pnpm exec tsc --noEmit` pasan sin errores?
- [ ] ¿Revisaste escritorio y móvil, y probaste las interacciones que tocaste?
- [ ] ¿Actualizaste `MEMORY.md`?

## Al terminar

Lista los cambios, los archivos modificados y el resultado de cada comando. No afirmes que algo funciona si no lo verificaste.
