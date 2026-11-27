import type { CSSProperties, ReactNode } from "react";

// Cabeçalho comum das seções: linha do topo que se desenha, rótulo que desliza e título que sobe da máscara.
// A seção que usa precisa ser "relative" (por causa da linha absoluta).
export default function SectionHeading({
  label,
  title,
  aside,
}: {
  label: string;
  title: string;
  aside?: ReactNode;
}) {
  return (
    <>
      <span aria-hidden className="reveal-line absolute inset-x-0 top-0 h-px bg-paper/10" />
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="reveal-x text-xs text-paper/50 md:text-sm">{label}</p>
          <h2
            className="reveal-clip narrow mt-3 text-[clamp(2.75rem,6vw,5.5rem)] uppercase leading-[0.9]"
            style={{ "--i": 0.5 } as CSSProperties}
          >
            {title}
            <span className="text-signal">.</span>
          </h2>
        </div>
        {aside}
      </div>
    </>
  );
}
