import { PixelIcon } from "./PixelIcon";

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

export function ResourceBar() {
  return (
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
  );
}
