import { CheckIcon, ClockIcon } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

// Adaptado do componente "timeline" (shadcn / preetsuthar17): mesma estrutura de ícone, conector,
// título, descrição e conteúdo, nas cores do site. Fica de fora o que o site não usa: a versão
// horizontal (dependia de Radix ScrollArea), as datas e os exemplos. Os status viram classes simples
// em vez de class-variance-authority. Sem cursores: a animação de setas é exclusiva do hero.

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
}

const gaps = { default: "gap-4", compact: "gap-2", spacious: "gap-10" };

const icons: Record<Status, string> = {
  default: "border-paper/25 bg-ink text-paper/60",
  completed: "border-signal bg-signal text-paper shadow-[0_0_18px_rgb(227_38_27/0.5)]",
  active: "border-signal bg-ink text-signal shadow-[0_0_18px_rgb(227_38_27/0.35)]",
  pending: "border-paper/15 bg-ink text-paper/40",
};

function statusIcon(status: Status) {
  if (status === "completed") return <CheckIcon className="size-4" />;
  if (status === "active" || status === "pending") return <ClockIcon className="size-4" />;
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
        <span aria-hidden className="timeline-track absolute bottom-0 left-5 top-5 w-px -translate-x-1/2 bg-paper/10">
          <span className="timeline-fill absolute inset-0 origin-top bg-signal shadow-[0_0_12px_var(--color-signal)]" />
        </span>
      )}
      {items.map((item, i) => {
        const status = item.status ?? "default";
        const last = i === items.length - 1;
        return (
          // Entrada guiada pela rolagem: cada etapa sobe um pouco depois da anterior.
          <li key={item.id} className="reveal relative flex gap-5 pb-2" style={{ "--i": i * 0.3 } as CSSProperties}>
            {/* Esconde a linha abaixo do último ícone. */}
            {showConnectors && last && <span aria-hidden className="absolute bottom-0 left-4 top-5 w-2 bg-ink" />}

            <div className="relative z-10 flex shrink-0">
              {/* timeline-dot: começa apagado e acende quando a ponta da linha chega nele. */}
              <div className={`timeline-dot flex size-10 items-center justify-center rounded-full border-2 ${icons[status]}`}>
                {item.icon ?? statusIcon(status)}
              </div>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-2 pt-1">
              {item.label && <span className="text-xs text-paper/40">{item.label}</span>}
              <h3 className="narrow text-2xl uppercase leading-tight">{item.title}</h3>
              {item.description && (
                <p className="max-w-[52ch] text-sm leading-relaxed text-paper/60">{item.description}</p>
              )}
              {item.content && <div className="mt-2">{item.content}</div>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
