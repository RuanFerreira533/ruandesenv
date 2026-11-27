import Image from "next/image";
import type { CSSProperties } from "react";
import { content } from "@/content";

// Regra do site: a animação de cursores/setas é exclusiva do hero. Aqui o movimento é outro:
// na entrada, os cards sobem, o print abre como cortina com zoom out e o número desliza;
// no hover, o print sai do preto e branco para a cor.
export default function Projects() {
  return (
    <section id="projetos" className="relative bg-ink px-5 py-20 md:px-10 md:py-28">
      {/* Linha do topo que se desenha da esquerda para a direita. */}
      <span aria-hidden className="reveal-line absolute inset-x-0 top-0 h-px bg-paper/10" />
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="reveal-x text-xs text-paper/50">01 / Projetos selecionados</p>
          <h2
            className="reveal-clip narrow mt-3 text-[clamp(2.75rem,6vw,5.5rem)] uppercase leading-[0.9]"
            style={{ "--i": 0.5 } as CSSProperties}
          >
            Sites no ar, trazendo clientes<span className="text-signal">.</span>
          </h2>
        </div>
        <p
          className="reveal max-w-[34ch] text-sm leading-relaxed text-paper/60 [@media(hover:none)]:hidden"
          style={{ "--i": 1 } as CSSProperties}
        >
          Passe o mouse em um projeto para ver as cores. Clique para abrir o site.
        </p>
      </div>

      <ul className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-3">
        {content.projects.map((p, i) => (
          <li key={p.url} className="reveal" style={{ "--i": i } as CSSProperties}>
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="reveal-clip relative aspect-[16/10] overflow-hidden rounded-sm border border-paper/10 bg-paper/5">
                <Image
                  src={p.image}
                  alt={`Página inicial do site ${p.title}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="project-shot reveal-zoom object-cover object-top grayscale transition-[filter,scale] duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0 group-focus-visible:scale-[1.04] group-focus-visible:grayscale-0"
                />
                <span className="absolute bottom-3 right-3 translate-y-3 rounded-full bg-ink/80 px-3 py-1.5 text-xs opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  Abrir site ↗
                </span>
              </div>

              <div className="mt-5 flex items-start gap-4">
                <span className="reveal-x narrow text-6xl leading-none text-paper/15 transition-colors duration-500 group-hover:text-signal group-focus-visible:text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="narrow text-2xl uppercase leading-tight">{p.title}</h3>
                  <p className="mt-1 text-xs text-paper/50">
                    {p.kind}, {p.place}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="text-xl text-paper/40 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-paper"
                >
                  ↗
                </span>
              </div>
              <span className="mt-4 block h-px origin-left scale-x-0 bg-signal transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
