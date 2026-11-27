"use client";

import { useState, type CSSProperties } from "react";
import { content } from "@/content";
import SectionHeading from "./SectionHeading";

// Serviços em sanfona: nome grande + resumo; ao abrir, o que vem incluído e onde já foi feito (prova real).
// Sem cursores (exclusivos do hero): entrada deslizando na rolagem e faixa vermelha no hover.
export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="servicos" className="relative bg-ink px-5 py-20 md:px-10 md:py-28">
      <SectionHeading label="02 / Serviços" title="Do site ao sistema que roda o negócio" />

      <ul className="mt-12 border-t border-paper/10">
        {content.services.map((s, i) => {
          const isOpen = open === i;
          return (
            <li
              key={s.title}
              className="group reveal-x relative isolate overflow-hidden border-b border-paper/10"
              style={{ "--i": i * 0.25 } as CSSProperties}
            >
              <span
                aria-hidden
                className={`absolute inset-0 -z-10 origin-left bg-signal/10 transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none ${
                  isOpen ? "scale-x-100" : "scale-x-0"
                }`}
              />
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`servico-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center gap-6 px-2 py-7 text-left md:px-4 md:py-9"
                >
                  <span
                    className={`narrow flex-1 text-4xl uppercase leading-none transition-[translate,color] duration-500 group-hover:translate-x-3 md:text-6xl lg:text-7xl ${
                      isOpen ? "text-signal" : ""
                    }`}
                  >
                    {s.title}
                  </span>
                  <span className="hidden max-w-[34ch] text-base leading-snug text-paper/60 lg:block">{s.summary}</span>
                  {/* + que vira × ao abrir */}
                  <span
                    aria-hidden
                    className={`relative size-6 shrink-0 transition-transform duration-500 motion-reduce:transition-none ${
                      isOpen ? "rotate-45 text-signal" : "text-paper/60"
                    }`}
                  >
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-current" />
                    <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-current" />
                  </span>
                </button>
              </h3>

              {/* Abre com grid 0fr → 1fr; inert tira os links fechados do Tab. */}
              <div
                id={`servico-${i}`}
                inert={!isOpen}
                className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-10 px-2 pb-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:px-4 md:pb-12">
                    <div>
                      <p className="mb-6 max-w-[48ch] text-base leading-relaxed text-paper/70 lg:hidden">{s.summary}</p>
                      <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                        {s.features.map((f) => (
                          <li key={f} className="flex gap-3 text-base leading-snug text-paper/85 md:text-lg">
                            <span aria-hidden className="mt-2 size-2 shrink-0 bg-signal" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-3 text-sm text-paper/45">Já fiz para</p>
                      <ul className="flex flex-wrap gap-2">
                        {s.work.map((w) => (
                          <li key={w.name}>
                            <a
                              href={w.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-4 py-2 text-sm transition-colors hover:border-signal hover:bg-signal hover:text-paper"
                            >
                              {w.name}
                              <span aria-hidden>↗</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
