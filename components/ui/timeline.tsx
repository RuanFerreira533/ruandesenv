import { CheckIcon, ClockIcon } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

// Adaptado do componente "timeline" (shadcn / preetsuthar17): ícone, conector, título, descrição e
// conteúdo, nas cores do site. No desktop a linha fica no centro e as etapas alternam de lado, com um
// exemplo (aside) do outro lado; no celular a linha fica à esquerda e o exemplo vai embaixo do texto.
// Sem cursores: a animação de setas é exclusiva do hero.

type Status = "default" | "completed" | "active" | "pending";

export interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  /** Texto pequeno acima do título (no modelo original era a data). */
  label?: string;
  status?: Status;
  icon?: ReactNode;
  content?: ReactNode;
  /** Exemplo ao lado da etapa (do outro lado da linha no desktop). */
  aside?: ReactNode;
}

const gaps = { default: "gap-4", compact: "gap-2", spacious: "gap-14 md:gap-20 lg:gap-28" };

const icons: Record<Status, string> = {
  default: "border-paper/25 bg-ink text-paper/60",
  completed: "border-signal bg-signal text-paper shadow-[0_0_18px_rgb(227_38_27/0.5)]",
  active: "border-signal bg-ink text-signal shadow-[0_0_18px_rgb(227_38_27/0.35)]",
  pending: "border-paper/15 bg-ink text-paper/40",
};

function statusIcon(status: Status) {
  if (status === "completed") return <CheckIcon className="size-4 md:size-5" />;
  if (status === "active" || status === "pending") return <ClockIcon className="size-4 md:size-5" />;
  return <span className="size-2 rounded-full bg-current" />;
}

export function Timeline({
  items,
  variant = "default",
  showConnectors = true,
  className = "",
}: {
  items: TimelineItem[];
  variant?: keyof typeof gaps;
  showConnectors?: boolean;
  className?: string;
}) {
  return (
    <ol className={`relative flex flex-col ${gaps[variant]} ${className}`}>
      {/* Uma linha só, do centro do 1º ícone até o fim: o preenchimento vermelho acompanha a rolagem
          com a ponta no meio da tela (timeline-track / timeline-fill no globals.css). */}
      {showConnectors && (
        <span
          aria-hidden
          className="timeline-track absolute bottom-0 left-5 top-5 w-px -translate-x-1/2 bg-paper/10 md:left-7 md:top-7 lg:left-1/2"
        >
          <span className="timeline-fill absolute inset-0 origin-top bg-signal shadow-[0_0_12px_var(--color-signal)]" />
        </span>
      )}
      {items.map((item, i) => {
        const status = item.status ?? "default";
        const last = i === items.length - 1;
        const textLeft = i % 2 === 0; // no desktop: pares com texto à esquerda, ímpares à direita
        return (
          // Entrada guiada pela rolagem: cada etapa sobe um pouco depois da anterior.
          <li
            key={item.id}
            className="reveal relative grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 md:gap-x-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-x-14"
            style={{ "--i": i * 0.3 } as CSSProperties}
          >
            {/* Esconde a linha abaixo do último ícone. */}
            {showConnectors && last && (
              <span
                aria-hidden
                className="absolute bottom-0 left-4 top-5 w-2 bg-ink md:left-6 md:top-7 lg:left-1/2 lg:-translate-x-1/2"
              />
            )}

            <div className="relative z-10 col-start-1 row-span-2 row-start-1 lg:col-start-2 lg:row-span-1">
              {/* timeline-dot: começa apagado e acende quando a ponta da linha chega nele. */}
              <div className={`timeline-dot flex size-10 items-center justify-center rounded-full border-2 md:size-14 ${icons[status]}`}>
                {item.icon ?? statusIcon(status)}
              </div>
            </div>

            <div
              className={`col-start-2 row-start-1 flex min-w-0 flex-col gap-2 pt-1 md:gap-3 md:pt-2 lg:row-start-1 ${
                textLeft ? "lg:col-start-1 lg:items-end lg:text-right" : "lg:col-start-3"
              }`}
            >
              {item.label && <span className="text-xs text-paper/40 md:text-sm">{item.label}</span>}
              <h3 className="narrow text-2xl uppercase leading-tight md:text-4xl">{item.title}</h3>
              {item.description && (
                <p className="max-w-[46ch] text-sm leading-relaxed text-paper/60 md:text-lg">{item.description}</p>
              )}
              {item.content && <div className="mt-2">{item.content}</div>}
            </div>

            {item.aside && (
              <div
                className={`col-start-2 row-start-2 mt-8 w-full max-w-md lg:row-start-1 lg:mt-0 ${
                  textLeft ? "lg:col-start-3" : "lg:col-start-1 lg:justify-self-end"
                }`}
              >
                {item.aside}
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
