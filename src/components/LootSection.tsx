import { SectionHeading } from "./SectionHeading";

export function LootSection({ isOpen, onOpen }: { isOpen: boolean; onOpen: () => void }) {
  return (
    <section className="loot-section">
      <SectionHeading
        kicker="OBJETIVO FINAL"
        title="LA RELIQUIA DE LA VICTORIA"
        hint="UNA RECOMPENSA LEGENDARIA ESPERA AL REY DEL CUMPLEAÑOS"
      />
      <div className={`chest ${isOpen ? "open" : ""}`} aria-hidden="true">
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
      <button className="victory-button" onClick={onOpen}>
        <span>ABRIR EL COFRE DE VICTORIA DE KAGLI</span>
        <small>AVANZAR A LA SIGUIENTE ERA</small>
      </button>
      <p className="reward-note">
        RECOMPENSA: <span>UN MENSAJE DE CUMPLEAÑOS LEGENDARIO</span>
      </p>
    </section>
  );
}
