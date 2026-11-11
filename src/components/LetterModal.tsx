import { PixelIcon } from "./PixelIcon";

export function LetterModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="scroll-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="letter-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Cerrar carta">
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
            recuerdo inolvidable. No importa cuántas edades avancemos: esta alianza seguirá siendo
            indestructible.
          </p>
          <p>
            Que tu nuevo nivel traiga salud, victorias, viajes, partidas épicas y todos los tesoros
            que mereces.
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
  );
}
