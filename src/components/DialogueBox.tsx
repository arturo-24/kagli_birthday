import type { Hero } from "../data/heroes";
import { useTypewriter } from "../hooks/useTypewriter";

export function DialogueBox({ hero }: { hero: Hero }) {
  const typedMessage = useTypewriter(hero.message);

  return (
    <div className="dialogue">
      <div className="dialogue-avatar">
        <img
          className={`sprite-${hero.id}`}
          src={hero.image}
          alt=""
          style={{ objectPosition: hero.position }}
        />
      </div>
      <div className="dialogue-content">
        <div className="speaker">
          {hero.title} <span>// ALIADO ETERNO</span>
        </div>
        <p>
          {typedMessage}
          <i className="cursor" aria-hidden="true" />
        </p>
      </div>
      <span className="continue">
        ELIGE OTRO RETRATO <b>▼</b>
      </span>
    </div>
  );
}
