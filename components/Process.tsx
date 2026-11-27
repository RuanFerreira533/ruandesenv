import { MessageSquareIcon, PencilRulerIcon, RefreshCwIcon, RocketIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { content } from "@/content";
import SectionHeading from "./SectionHeading";
import { Timeline, type TimelineItem } from "./ui/timeline";

const stepIcons = [MessageSquareIcon, PencilRulerIcon, RefreshCwIcon, RocketIcon];

// Etapas no modelo de timeline: as anteriores em vermelho contornado, a última ("No ar") preenchida.
export default function Process() {
  const items: TimelineItem[] = content.process.map((step, i) => {
    const Icon = stepIcons[i % stepIcons.length];
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
    };
  });

  return (
    <section id="processo" className="relative bg-ink px-5 py-20 md:px-10 md:py-28">
      <SectionHeading label="03 / Como trabalho" title="Do primeiro oi ao site no ar" />

      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="reveal max-w-[24ch] text-xl leading-snug text-paper/85 md:text-3xl">
            Quatro etapas, tudo pelo WhatsApp.
          </p>
          <p className="reveal mt-4 max-w-[38ch] text-sm leading-relaxed text-paper/55 md:text-lg" style={{ "--i": 0.2 } as CSSProperties}>
            Você acompanha cada passo e o site só vai ao ar quando você aprovar.
          </p>
          <a
            href={content.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal mt-10 inline-block bg-signal px-6 py-3 text-sm font-semibold transition-colors hover:bg-paper hover:text-ink md:px-8 md:py-4 md:text-base"
            style={{ "--i": 0.3 } as CSSProperties}
          >
            Começar pelo WhatsApp
          </a>
        </div>

        <Timeline items={items} variant="spacious" />
      </div>
    </section>
  );
}
