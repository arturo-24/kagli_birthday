export type PixelIconName = "wheat" | "wood" | "coin" | "crown" | "shield";

export function PixelIcon({ name }: { name: PixelIconName }) {
  const paths = {
    wheat: (
      <>
        <path d="M12 22V8M12 12 7 8M12 16l5-4M12 8l3-4M7 12l-3-2M17 8l3-2" />
        <path d="m6 6 1 2m10-4-2 3" />
      </>
    ),
    wood: (
      <>
        <path d="M5 19 17 5l3 3L8 22z" />
        <path d="m8 16 3 3M12 12l3 3" />
      </>
    ),
    coin: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M9 9h5l1 2-2 1 2 2-1 2H9z" />
      </>
    ),
    crown: (
      <>
        <path d="m4 8 4 4 4-7 4 7 4-4-2 11H6z" />
        <path d="M6 19h12" />
      </>
    ),
    shield: <path d="M12 3 5 6v6c0 5 3 8 7 10 4-2 7-5 7-10V6z" />,
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
