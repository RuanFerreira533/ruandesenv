"use client";

import { useState, type CSSProperties } from "react";
import { content } from "@/content";
import SectionHeading from "./SectionHeading";
import ServicePreview from "./ServicePreview";

type Service = (typeof content.services)[number];

// Índice de serviços + "tela ao vivo": no desktop, passar o mouse (ou focar) num nome troca a tela
// ao lado, que mostra o serviço de verdade. No celular, cada serviço vira um bloco com a tela em cima.
// Sem cursores (exclusivos do hero): a única animação extra é a cortina da tela, em resposta ao usuário.
export default function Services() {
  const [active, setActive] = useState(0);
  const current = content.services[active];

  return (
    <section id="servicos" className="relative bg-ink px-5 py-20 md:px-10 md:py-28">
      <SectionHeading label="02 / Serviços" title="Do site ao sistema que roda o negócio" />

      {/* Desktop */}
      <div className="mt-16 hidden gap-16 lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <ul className="flex flex-col" aria-label="Serviços">
          {content.services.map((s, i) => {
            const on = i === active;
            return (
              <li key={s.title} className="reveal-x" style={{ "--i": i * 0.2 } as CSSProperties}>
                <button
                  type="button"
                  aria-pressed={on}
                  aria-controls="servico-tela"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group relative flex w-full items-center gap-5 py-3 text-left"
                >
                  <span
                    aria-hidden
                    className={`h-[0.9em] w-1.5 origin-bottom bg-signal transition-transform duration-300 ${
                      on ? "scale-y-100" : "scale-y-0"
                    }`}
                  />
                  <span
                    className={`narrow text-5xl uppercase leading-[0.95] transition-colors duration-300 xl:text-6xl 2xl:text-7xl ${
                      on ? "text-paper" : "text-paper/20 group-hover:text-paper/50"
                    }`}
                  >
                    {s.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div id="servico-tela" className="sticky top-24 self-start" aria-live="polite">
          {/* key troca a cada serviço: a tela entra de novo com a cortina (.screen-in no globals.css). */}
          <div key={active} className="screen-in">
            <ServicePreview preview={current.preview} />
          </div>
          <Details service={current} />
        </div>
      </div>

      {/* Celular e tablet: todos abertos, um embaixo do outro */}
      <ul className="mt-12 flex flex-col gap-16 lg:hidden">
        {content.services.map((s) => (
          <li key={s.title} className="reveal">
            <h3 className="narrow mb-5 text-4xl uppercase leading-none md:text-5xl">{s.title}</h3>
            <ServicePreview preview={s.preview} />
            <Details service={s} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function Details({ service }: { service: Service }) {
  return (
    <div className="mt-8">
      <p className="max-w-[52ch] text-lg leading-snug text-paper/85 md:text-xl">{service.summary}</p>
      <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
        {service.features.map((f) => (
          <li key={f} className="flex gap-3 text-sm leading-snug text-paper/65 md:text-base">
            <span aria-hidden className="mt-1.5 size-2 shrink-0 bg-signal" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
