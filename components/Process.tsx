import { MessageSquareIcon, PencilRulerIcon, RefreshCwIcon, RocketIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { content } from "@/content";
import { ChatDemo, DraftDemo, LiveDemo, TweakDemo } from "./ProcessDemos";
import SectionHeading from "./SectionHeading";
import { Timeline, type TimelineItem } from "./ui/timeline";

const stepIcons = [MessageSquareIcon, PencilRulerIcon, RefreshCwIcon, RocketIcon];
// Exemplo de cada etapa, na mesma ordem de content.process.
const stepDemos = [ChatDemo, DraftDemo, TweakDemo, LiveDemo];

// Linha do tempo no centro, etapas alternando de lado e, do outro lado, o exemplo da etapa acontecendo.
// As anteriores em vermelho contornado, a última ("No ar") preenchida.
export default function Process() {
  const items: TimelineItem[] = content.process.map((step, i) => {
    const Icon = stepIcons[i % stepIcons.length];
    const Demo = stepDemos[i % stepDemos.length];
    return {
      id: step.title,
      label: `Etapa ${String(i + 1).padStart(2, "0")}`,
      title: step.title,
      description: step.text,
      status: i === content.process.length - 1 ? "completed" : "active",
      icon: <Icon className="size-4 md:size-5" />,
      content: (
        <span className="inline-block rounded-md border border-paper/10 bg-paper/5 px-3 py-2 text-xs text-paper/70 md:px-4 md:py-2.5 md:text-sm">
          {step.detail}
        </span>
      ),
      aside: <Demo />,
    };
  });

  return (
    <section id="processo" className="relative bg-ink px-5 py-20 md:px-10 md:py-28">
      <SectionHeading
        label="03 / Como trabalho"
        title="Do primeiro oi ao site no ar"
        aside={
          <div className="reveal max-w-[36ch]" style={{ "--i": 1 } as CSSProperties}>
            <p className="text-base leading-relaxed text-paper/60 md:text-lg">
              Quatro etapas, tudo pelo WhatsApp. O site só vai ao ar quando você aprovar.
            </p>
            <a
              href={content.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block bg-signal px-6 py-3 text-sm font-semibold transition-colors hover:bg-paper hover:text-ink md:text-base"
            >
              Começar pelo WhatsApp
            </a>
          </div>
        }
      />

      <Timeline items={items} variant="spacious" className="mt-16 md:mt-24" />
    </section>
  );
}
