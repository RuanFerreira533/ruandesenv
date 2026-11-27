import type { CSSProperties } from "react";
import { content } from "@/content";
import SectionHeading from "./SectionHeading";

// Sem cursores (exclusivos do hero): as linhas deslizam ao entrar e, no hover,
// uma faixa vermelha preenche a linha enquanto o título desliza.
export default function Services() {
  return (
    <section id="servicos" className="relative bg-ink px-5 py-20 md:px-10 md:py-28">
      <SectionHeading label="02 / Serviços" title="O que eu faço pelo seu negócio" />

      <ul className="mt-12 border-t border-paper/10">
        {content.services.map((s, i) => (
          <li
            key={s.title}
            className="group reveal-x relative isolate grid items-baseline gap-4 overflow-hidden border-b border-paper/10 px-2 py-8 md:grid-cols-[1fr_1.2fr] md:gap-10 md:px-4"
            style={{ "--i": i * 0.3 } as CSSProperties}
          >
            <span
              aria-hidden
              className="absolute inset-0 -z-10 origin-left scale-x-0 bg-signal/10 transition-transform duration-500 ease-out group-hover:scale-x-100"
            />
            <h3 className="narrow text-4xl uppercase leading-none transition-[translate,color] duration-500 group-hover:translate-x-3 group-hover:text-signal md:text-5xl">
              {s.title}
            </h3>
            <div>
              <p className="max-w-[48ch] text-sm leading-relaxed text-paper/60 transition-colors duration-500 group-hover:text-paper/85">
                {s.text}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <li key={t} className="rounded-full border border-paper/15 px-3 py-1 text-xs text-paper/60">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
