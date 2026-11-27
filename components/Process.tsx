import type { CSSProperties } from "react";
import { content } from "@/content";
import SectionHeading from "./SectionHeading";

// Sem cursores (exclusivos do hero): a linha das etapas se desenha, os pontos saltam e o texto sobe.
export default function Process() {
  return (
    <section id="processo" className="relative bg-ink px-5 py-20 md:px-10 md:py-28">
      <SectionHeading label="03 / Como trabalho" title="Do primeiro oi ao site no ar" />

      <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
        {/* Linha que liga as etapas no desktop. */}
        <span
          aria-hidden
          className="reveal-line absolute inset-x-0 top-[7px] hidden h-px bg-signal/50 md:block"
          style={{ "--i": 0.3 } as CSSProperties}
        />
        {content.process.map((step, i) => (
          <li
            key={step.title}
            className="reveal relative border-l border-paper/10 pl-6 md:border-l-0 md:pl-0 md:pt-10"
            style={{ "--i": 0.3 + i * 0.3 } as CSSProperties}
          >
            <span
              aria-hidden
              className="reveal-pop absolute left-0 top-0 hidden size-[15px] rounded-full border-2 border-signal bg-ink md:block"
            />
            <span className="narrow text-6xl leading-none text-paper/15">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="narrow mt-3 text-2xl uppercase leading-tight">{step.title}</h3>
            <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-paper/60">{step.text}</p>
          </li>
        ))}
      </ol>

      <a
        href={content.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="reveal mt-14 inline-block bg-signal px-6 py-3 text-sm font-semibold transition-colors hover:bg-paper hover:text-ink"
      >
        Começar pelo WhatsApp
      </a>
    </section>
  );
}
