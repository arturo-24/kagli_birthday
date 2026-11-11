import type { CSSProperties } from "react";
import type { Hero } from "../data/heroes";

export function HeroCard({
  hero,
  isSelected,
  onSelect,
}: {
  hero: Hero;
  isSelected: boolean;
  onSelect: (hero: Hero) => void;
}) {
  return (
    <button
      className={`unit-card ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(hero)}
      aria-pressed={isSelected}
      style={{ "--accent": hero.accent } as CSSProperties}
    >
      <span className="selected-flag">SELECCIONADO</span>
      <span className="portrait-wrap">
        <img
          className={`sprite-${hero.id}`}
          src={hero.image}
          alt=""
          style={{ objectPosition: hero.position }}
        />
        <span className="level-badge">
          NIV
          <br />
          <b>{hero.level}</b>
        </span>
      </span>
      <span className="card-copy">
        <small>{hero.role}</small>
        <strong>{hero.title}</strong>
        <span className="stat">
          <i>HABILIDAD</i>
          <b>{hero.skill}</b>
        </span>
        <span className="loyalty">
          <i>LEALTAD</i>
          <span>
            <b />
          </span>
          <em>100%</em>
        </span>
        <span className="diplomacy">◆ ALIADO ETERNO</span>
      </span>
    </button>
  );
}
