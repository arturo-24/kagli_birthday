import { heroes, type Hero } from "../data/heroes";
import { DialogueBox } from "./DialogueBox";
import { HeroCard } from "./HeroCard";
import { SectionHeading } from "./SectionHeading";

export function AlliesSection({
  selected,
  onSelect,
}: {
  selected: Hero;
  onSelect: (hero: Hero) => void;
}) {
  return (
    <section className="allies-section" id="allies">
      <SectionHeading
        kicker="CAPÍTULO II"
        title={
          <>
            LA MISIÓN DE LOS HÉROES <span>&amp;</span> DIPLOMACIA
          </>
        }
        hint="SELECCIONA UN ALIADO PARA LEER SU MENSAJE"
      />

      <div className="unit-grid">
        {heroes.map((hero) => (
          <HeroCard
            key={hero.id}
            hero={hero}
            isSelected={selected.id === hero.id}
            onSelect={onSelect}
          />
        ))}
      </div>

      <DialogueBox hero={selected} />
    </section>
  );
}
