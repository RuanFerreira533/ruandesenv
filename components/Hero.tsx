"use client";

import Image from "next/image";
import { useState } from "react";
import { content } from "@/content";
import Builder from "./Builder";

// data-wire="n": ordem em que os cursores montam cada bloco.
export default function Hero() {
  const [run, setRun] = useState(0);

  return (
    <section data-phase="build" className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ink">
      <noscript>
        <style>{"[data-wire]{visibility:visible!important}"}</style>
      </noscript>

      {/* Topo */}
      <header className="relative z-30 flex items-center justify-between gap-6 px-5 pt-5 md:px-10 md:pt-7">
        <a href="#" data-wire="0" className="flex items-center gap-2.5 text-lg">
          <span className="size-3.5 bg-signal" aria-hidden />
          <span className="narrow uppercase tracking-wide">{content.name}</span>
        </a>
        <nav data-wire="1" className="hidden gap-8 text-sm text-paper/70 md:flex">
          {content.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-paper">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={content.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          data-wire="2"
          className="rounded-full border border-paper/25 px-4 py-2 text-sm transition-colors hover:border-signal hover:bg-signal"
        >
          Chamar no WhatsApp
        </a>
      </header>

      <div className="relative z-30 flex items-start justify-between gap-6 px-5 pt-6 text-xs md:px-10">
        <p data-wire="3" className="font-semibold leading-snug text-signal">
          {content.tagline[0]}
          <br />
          <span className="text-paper/60">{content.tagline[1]}</span>
        </p>
        <p data-wire="4" className="flex items-center gap-2 text-paper/70">
          <span className="size-1.5 rounded-full bg-signal" aria-hidden />
          {content.available}
        </p>
      </div>

      {/* Palco: PORTFÓLIO + foto (absoluto no desktop, em fluxo no celular) */}
      <div className="relative h-[54svh] lg:absolute lg:inset-0 lg:h-auto" aria-hidden>
        <p
          data-wire="5"
          className="wide absolute left-1/2 top-[16%] -translate-x-1/2 select-none whitespace-nowrap text-[15.5vw] leading-[0.8] tracking-[-0.04em] text-signal lg:top-[15%]"
        >
          PORTFÓLIO
        </p>
        <div className="absolute bottom-0 left-1/2 h-[75%] w-[95vw] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(227_38_27/0.45),transparent)] lg:h-[70%] lg:w-[48vw]" />
        <div
          data-wire="6"
          data-orbit
          className="absolute bottom-0 left-1/2 z-[3] h-[88%] w-[min(92vw,460px)] -translate-x-1/2 lg:h-[80%] lg:w-[min(46vw,720px)]"
        >
          <Image
            src={content.photo}
            alt=""
            fill
            preload
            sizes="(min-width: 1024px) 46vw, 92vw"
            quality={90}
            className="photo-fade object-contain object-bottom"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 z-[3] h-1/4 bg-gradient-to-t from-ink to-transparent" />
      </div>

      {/* Colunas de texto */}
      <div className="relative z-20 grid flex-1 gap-10 px-5 pb-10 pt-8 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,1fr)] lg:items-end lg:pt-0">
        <div className="flex max-w-md flex-col items-start">
          <p data-wire="7" className="-mb-2 -rotate-6 font-script text-5xl text-paper md:text-6xl">
            {content.greeting}
          </p>
          <h1 data-wire="8" className="narrow text-[clamp(3.75rem,8vw,8rem)] uppercase leading-[0.85]">
            {content.name}
            <span className="text-signal">.</span>
          </h1>
          <p data-wire="9" className="mt-4 max-w-[26ch] text-lg font-bold leading-tight text-signal">
            {content.role}
          </p>
          <p data-wire="10" className="mt-3 max-w-[38ch] text-sm leading-relaxed text-paper/65">
            {content.bio}
          </p>
          <a
            href="#projetos"
            data-wire="11"
            className="mt-6 bg-signal px-6 py-3 text-sm font-semibold transition-colors hover:bg-paper hover:text-ink"
          >
            Ver projetos
          </a>
          <p data-wire="12" className="mt-4 flex items-center gap-2 text-xs text-paper/50">
            <span className="size-1.5 rounded-full bg-paper/50" aria-hidden />
            {content.location}
          </p>
        </div>

        <div className="hidden lg:block" />

        <div className="flex flex-col gap-8 lg:items-end lg:self-center">
          <p data-wire="13" className="flex items-start gap-3 text-sm leading-snug">
            <span className="mt-0.5 grid size-7 place-items-center rounded-full border border-paper/30" aria-hidden>
              <span className="size-1.5 rounded-full bg-signal" />
            </span>
            <span>
              {content.promise[0]}
              <br />
              <span className="text-paper/60">{content.promise[1]}</span>
            </span>
          </p>
          <dl data-wire="14" className="grid grid-cols-3 gap-4 lg:grid-cols-[auto_9rem] lg:gap-x-4 lg:gap-y-3">
            {content.stats.map((s) => (
              <div key={s.label} className="contents">
                <dt className="narrow order-1 text-5xl leading-none text-signal lg:order-none lg:text-6xl">
                  {s.value}
                </dt>
                <dd className="order-2 self-center text-xs leading-snug text-paper/60 lg:order-none">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Rodapé do hero */}
      <footer className="relative z-30 flex flex-wrap items-center justify-between gap-4 border-t border-paper/10 px-5 py-4 text-xs text-paper/60 md:px-10">
        <a href="#projetos" data-wire="15" className="flex items-center gap-3 transition-colors hover:text-paper">
          <span className="grid size-7 place-items-center rounded-full border border-paper/30" aria-hidden>
            <span className="size-0 border-y-4 border-l-[6px] border-y-transparent border-l-signal" />
          </span>
          Ver um projeto por dentro
        </a>
        <button
          type="button"
          onClick={() => setRun((r) => r + 1)}
          data-wire="16"
          className="flex items-center gap-2 rounded-full border border-paper/20 px-4 py-1.5 transition-colors hover:border-wire hover:text-paper"
        >
          <span className="size-1.5 rounded-full bg-wire" aria-hidden />
          Rever a montagem deste site
        </button>
        <p data-wire="17">Projetos selecionados, {content.years}</p>
      </footer>

      <Builder run={run} />
    </section>
  );
}
