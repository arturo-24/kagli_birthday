import { useEffect, useState } from "react";

/** Placa dorada que aparece con un fundido suave al cargar la página. */
export function GoldPlaque() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`gold-plaque${isVisible ? " is-visible" : ""}`}>
      <i className="plaque-nail pn-left" aria-hidden="true" />
      <p>FORJADA EN AMISTAD · ERA DE KAGLI</p>
      <i className="plaque-nail pn-right" aria-hidden="true" />
    </div>
  );
}
