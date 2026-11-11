import type { ReactNode } from "react";

export function SectionHeading({
  kicker,
  title,
  hint,
}: {
  kicker: string;
  title: ReactNode;
  hint: string;
}) {
  return (
    <div className="section-heading">
      <p>{kicker}</p>
      <h2>{title}</h2>
      <div className="heading-rule">
        <i />
        <b>◆</b>
        <i />
      </div>
      <small>{hint}</small>
    </div>
  );
}
