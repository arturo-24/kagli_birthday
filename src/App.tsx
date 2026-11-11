import { useEffect, useState } from "react";

type Hero = {
  id: string;
  title: string;
  role: string;
  level: string;
  skill: string;
  message: string;
  image: string;
  position: string;
  accent: string;
};

const heroes: Hero[] = [
  {
    id: "champion",
    title: "Nurimy",
    role: "Guerrero",
    level: "32",
    skill: "Risa crítica",
    message:
      "Feliz cumple viejo sabroso, hace tantos años que te conozco que ni me acuerdo y han sido mucho mejor porque estas tú. Te quiero mucho.",
    image: "/hero-champion.png",
    position: "center top",
    accent: "#d95d49",
  },
  {
    id: "commander",
    title: "Lady The Killa",
    role: "Exploradora",
    level: "31",
    skill: "Plan maestro",
    message:
      "Comandante Kagli: la misión “Cumplir otro año siendo increíble” ha sido completada con rango S. Gracias por hacer de cada campaña una historia que vale la pena.",
    image: "/hero-commander.png",
    position: "center top",
    accent: "#eab84d",
  },
  {
    id: "tactician",
    title: "Dex",
    role: "Alquimista",
    level: "33",
    skill: "Mapa holográfico",
    message:
      "Los cálculos confirman un 100% de probabilidades de que este sea tu mejor año. Que nunca falten buenos planes, grandes partidas y aliados para romperlos contigo.",
    image: "/hero-tactician.png",
    position: "center top",
    accent: "#57d8e5",
  },
  {
    id: "scribe",
    title: "R2D2",
    role: "Cronista",
    level: "30",
    skill: "Código arcano",
    message:
      "¡Feliz cumpleaños, viejo delicioshooooo! 🎂❤️ En este día tan especial, espero que disfrutes cada instante y que nunca olvides cuánto cariño, admiración y aprecio te tenemos todos los que formamos parte de esta comunidad. Gracias por estar siempre presente para cada uno de nosotros, por tender una mano cuando hace falta y por haber sido ese compañero que, día tras día, minuto tras minuto y segundo tras segundo, ha sabido compartir este pequeño universo que hemos construido juntos. Gracias por tu bondad, por tus consejos y por esa experiencia invaluable que siempre compartes sin esperar nada a cambio. Porque, al final, uno descubre que la verdadera riqueza de la vida no está en lo que acumulamos, sino en las personas que encontramos y en las huellas que dejamos en ellas. Y tú, viejo, has dejado una huella muy bonita en cada uno de nosotros. ¡Se te quiere muchísimo! Disfruta tu cumpleaños, celebra la vida y permítenos seguir compartiendo muchos más momentos a tu lado. :3",
    image: "/hero-tech-scribe.png",
    position: "center top",
    accent: "#79bff0",
  },
  {
    id: "guardian",
    title: "La Guardiana",
    role: "Mascota Real",
    level: "∞",
    skill: "Lealtad suprema",
    message:
      "Guau. Traducción imperial: feliz cumpleaños, humano favorito. Mi regalo es protección real, compañía eterna y permiso para compartir conmigo el banquete.",
    image: "/hero-guardian.png",
    position: "center top",
    accent: "#f4ea90",
  },
  {
    id: "cookie",
    title: "Sr. Cookie",
    role: "Tecno-Alquimista",
    level: "28",
    skill: "Código crujiente",
    message:
      "Feliz Cumpleaños Kagli, te quiero felicitar por tu cumpleaños y decirte que te quiero mucho, eres un gran amigo y una persona muy especial para mi. Me has apoyado en muchas cosas y sabes que cualquier cosa cuentas conmigo viejito teton. TQM - Coockie.",
    image: "/hero-cookie.png",
    position: "center top",
    accent: "#78d9e8",
  },
];

function PixelIcon({ name }: { name: "wheat" | "wood" | "coin" | "crown" | "shield" }) {
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

function Resource({
  icon,
  label,
  value,
}: {
  icon: "wheat" | "wood" | "coin" | "crown";
  label: string;
  value: string;
}) {
  return (
    <div className="resource">
      <span className="resource-icon">
        <PixelIcon name={icon} />
      </span>
      <span>
        <small>{label}</small>
        <strong>{value}</strong>
      </span>
    </div>
  );
}

function App() {
  const [selected, setSelected] = useState<Hero>(heroes[0]);
  const [typedMessage, setTypedMessage] = useState("");
  const [isChestOpen, setChestOpen] = useState(false);
  const [isPlaqueVisible, setPlaqueVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setPlaqueVisible(true), 500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    setTypedMessage("");
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedMessage(selected.message.slice(0, index));
      if (index >= selected.message.length) window.clearInterval(timer);
    }, 19);
    return () => window.clearInterval(timer);
  }, [selected]);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setChestOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <main>
      <header className="resource-bar">
        <a className="brand" href="#top" aria-label="La misión de cumpleaños de Kagli, inicio">
          <span className="brand-shield">
            <PixelIcon name="shield" />
          </span>
          <span>
            LA MISIÓN DE KAGLI<small>Campaña de cumpleaños</small>
          </span>
        </a>
        <div className="resources" aria-label="Recursos de la campaña">
          <Resource icon="wheat" label="EDAD" value="+1 NIVEL" />
          <Resource icon="wood" label="AMISTAD" value="9999" />
          <Resource icon="coin" label="ÁNIMO FESTIVO" value="MÁXIMO" />
          <Resource icon="crown" label="REY DEL CUMPLE" value="KAGLI" />
        </div>
      </header>

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

        <div className={`gold-plaque${isPlaqueVisible ? " is-visible" : ""}`}>
          <i className="plaque-nail pn-left" aria-hidden="true" />
          <p>FORJADA EN AMISTAD · ERA DE KAGLI</p>
          <i className="plaque-nail pn-right" aria-hidden="true" />
        </div>

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

      <section className="allies-section" id="allies">
        <div className="section-heading">
          <p>CAPÍTULO II</p>
          <h2>
            LA MISIÓN DE LOS HÉROES <span>&amp;</span> DIPLOMACIA
          </h2>
          <div className="heading-rule">
            <i />
            <b>◆</b>
            <i />
          </div>
          <small>SELECCIONA UN ALIADO PARA LEER SU MENSAJE</small>
        </div>

        <div className="unit-grid">
          {heroes.map((hero) => (
            <button
              className={`unit-card ${selected.id === hero.id ? "selected" : ""}`}
              key={hero.id}
              onClick={() => setSelected(hero)}
              aria-pressed={selected.id === hero.id}
              style={{ "--accent": hero.accent } as React.CSSProperties}
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
          ))}
        </div>

        <div className="dialogue">
          <div className="dialogue-avatar">
            <img
              className={`sprite-${selected.id}`}
              src={selected.image}
              alt=""
              style={{ objectPosition: selected.position }}
            />
          </div>
          <div className="dialogue-content">
            <div className="speaker">
              {selected.title} <span>// ALIADO ETERNO</span>
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
      </section>

      <section className="loot-section">
        <div className="section-heading">
          <p>OBJETIVO FINAL</p>
          <h2>LA RELIQUIA DE LA VICTORIA</h2>
          <div className="heading-rule">
            <i />
            <b>◆</b>
            <i />
          </div>
          <small>UNA RECOMPENSA LEGENDARIA ESPERA AL REY DEL CUMPLEAÑOS</small>
        </div>
        <div className={`chest ${isChestOpen ? "open" : ""}`} aria-hidden="true">
          <div className="chest-glow" />
          <div className="chest-lid">
            <span />
            <i />
            <b />
          </div>
          <div className="chest-body">
            <i />
            <span className="lock">◆</span>
          </div>
          <div className="chest-coins">· ✦ ·</div>
        </div>
        <button className="victory-button" onClick={() => setChestOpen(true)}>
          <span>ABRIR EL COFRE DE VICTORIA DE KAGLI</span>
          <small>AVANZAR A LA SIGUIENTE ERA</small>
        </button>
        <p className="reward-note">
          RECOMPENSA: <span>UN MENSAJE DE CUMPLEAÑOS LEGENDARIO</span>
        </p>
      </section>

      <footer>
        <span>◆</span>
        <p>
          CREADO CON HONOR POR LA ALIANZA ETERNA
          <br />
          <small>© 2025 · LA ERA DE KAGLI · TODOS LOS RECUERDOS RESERVADOS</small>
        </p>
        <span>◆</span>
      </footer>

      {isChestOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setChestOpen(false)}>
          <div
            className="scroll-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="letter-title"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setChestOpen(false)}
              aria-label="Cerrar carta"
            >
              ×
            </button>
            <div className="scroll-roll top" />
            <div className="letter">
              <p className="letter-kicker">DECRETO REAL · AÑO MMXXV</p>
              <h2 id="letter-title">Para el rey Kagli</h2>
              <div className="letter-rule">◆</div>
              <p>Hoy el reino entero hace una pausa para celebrar a su héroe.</p>
              <p>
                Gracias por cada aventura, cada risa y cada misión imposible que se convirtió en un
                recuerdo inolvidable. No importa cuántas edades avancemos: esta alianza seguirá
                siendo indestructible.
              </p>
              <p>
                Que tu nuevo nivel traiga salud, victorias, viajes, partidas épicas y todos los
                tesoros que mereces.
              </p>
              <strong>¡Feliz cumpleaños, Kagli!</strong>
              <span className="signature">— Tu grupo, para siempre</span>
              <div className="wax-seal">
                <PixelIcon name="crown" />
              </div>
            </div>
            <div className="scroll-roll bottom" />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
