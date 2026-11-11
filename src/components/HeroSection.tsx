import { GoldPlaque } from "./GoldPlaque";

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="ambient-pixels" aria-hidden="true" />
      <div className="campaign-tag">
        <span>◆</span> CAMPAÑA ESPECIAL <span>◆</span>
      </div>
      <div className="title-wrap">
        <p className="eyebrow">LA ERA DE KAGLI</p>
        <h1>
          FELIZ CUMPLEAÑOS
          <br />
          <em>KAGLI!</em>
        </h1>
        <p className="edition">— EDICIÓN AGE OF EMPIRES —</p>
      </div>

      <div className="ornate-frame">
        <i className="rivet r1" />
        <i className="rivet r2" />
        <i className="rivet r3" />
        <i className="rivet r4" />
        <div className="scene">
          <div
            className="crew-photo"
            role="img"
            aria-label="El grupo de amigos de Kagli en su campaña cyberpunk"
          />
          <div className="scanlines" />
          <div className="scene-vignette" />
          <div className="scene-label">
            <span>★</span> LA ALIANZA ETERNA <span>★</span>
          </div>
        </div>
      </div>

      <GoldPlaque />

      <div className="victory-ribbon">
        <span className="wing left" />
        <div>
          <small>CAMPAÑA COMPLETADA</small>
          <strong>¡OTRO AÑO SUPERADO!</strong>
        </div>
        <span className="wing right" />
      </div>
      <a href="#allies" className="scroll-cue">
        DESLIZA PARA CONTINUAR <span>⌄</span>
      </a>
    </section>
  );
}
