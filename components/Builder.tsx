"use client";

import { useEffect, useRef } from "react";
import { content } from "@/content";

// Um só relógio para cursor e conteúdo: cada etapa espera o cursor terminar (await) antes da próxima.
const TRAVEL = 260; // cursor viaja até a quina do bloco
const DRAW = 320; // arrasta até a quina oposta enquanto a caixa cresce
const RETURN = 140; // volta para a esquerda do bloco
const WRITE = 360; // varre o bloco e o conteúdo aparece até onde ele passou
const STAGGER = 70;
const WORKERS = 9;
const JOIN = 900; // setas vão do último bloco até a sua vaga na coroa
const ORBIT = 14000; // uma volta completa da coroa
const FLATTEN = 0.3; // altura da coroa em relação à largura (menor = vista mais de lado)
const TILT_COS = Math.cos(0.1); // coroa inclinada ~6°, acompanhando a cabeça na foto
const TILT_SIN = Math.sin(0.1);
const SPIKE = 19; // gira a seta do cursor (que aponta para cima-esquerda) para apontar reto para cima
const EASE = "cubic-bezier(0.45, 0, 0.2, 1)";
const TAGS = ["layout", "textos", "mobile", "SEO", "velocidade"];
const ARROW =
  '<svg width="14" height="20" viewBox="0 0 14 20"><path d="M1 1v16l4.2-4.2 2.9 6.6 2.4-1-2.9-6.5H13.5z" fill="currentColor" stroke="#060505" stroke-width="1.2" stroke-linejoin="round"/></svg>';

type Point = { x: number; y: number };
type Cursor = { el: HTMLDivElement; pos: Point };

export default function Builder({ run }: { run: number }) {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = layer.current;
    const section = overlay?.parentElement;
    if (!section || !overlay) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      section.dataset.phase = "done";
      return;
    }

    let stopped = false;
    section.dataset.phase = "build";
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const local = (r: DOMRect) => {
      const o = section.getBoundingClientRect();
      return { x: r.left - o.left, y: r.top - o.top, w: r.width, h: r.height };
    };
    const blocks = [...section.querySelectorAll<HTMLElement>("[data-wire]")]
      .filter((el) => el.getClientRects().length) // ignora o que está escondido nesse tamanho de tela
      .sort((a, b) => Number(a.dataset.wire) - Number(b.dataset.wire));

    const cursors: Cursor[] = Array.from({ length: WORKERS }, (_, i) => {
      const color = i < TAGS.length ? (i % 2 ? "var(--color-wire)" : "var(--color-signal)") : "#fff";
      const el = document.createElement("div");
      el.className = "build-cursor";
      el.style.color = color;
      el.innerHTML = ARROW;
      if (i < TAGS.length) {
        const tag = document.createElement("span");
        tag.className = "build-tag";
        tag.style.background = color;
        tag.textContent = TAGS[i];
        el.append(tag);
      }
      const o = section.getBoundingClientRect();
      const pos = { x: Math.random() * o.width, y: Math.min(o.height, innerHeight) + 30 };
      el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      overlay.append(el);
      return { el, pos };
    });

    const move = (c: Cursor, to: Point, duration: number) => {
      const from = `translate(${c.pos.x}px, ${c.pos.y}px)`;
      const end = `translate(${to.x}px, ${to.y}px)`;
      c.pos = to;
      c.el.style.transform = end;
      return c.el.animate([{ transform: from }, { transform: end }], { duration, easing: EASE }).finished;
    };

    const build = async (c: Cursor, el: HTMLElement) => {
      if (stopped) throw new Error("stopped");
      const { x, y, w, h } = local(el.getBoundingClientRect());
      await move(c, { x, y }, TRAVEL);

      // 1. Desenha a caixa: ela cresce exatamente até a ponta do cursor (mesma duração e curva).
      const box = document.createElement("div");
      box.className = "wire-box";
      box.style.left = `${x}px`;
      box.style.top = `${y}px`;
      const label = document.createElement("span");
      box.append(label);
      overlay.append(box);
      const grow = box.animate(
        [{ width: "0px", height: "0px" }, { width: `${w}px`, height: `${h}px` }],
        { duration: DRAW, easing: EASE, fill: "forwards" },
      );
      const count = () => {
        label.textContent = `${box.offsetWidth} × ${box.offsetHeight}`;
        if (!stopped && grow.playState === "running") requestAnimationFrame(count);
      };
      count();
      await Promise.all([grow.finished, move(c, { x: x + w, y: y + h }, DRAW)]);
      label.textContent = `${Math.round(w)} × ${Math.round(h)}`;

      // 2. Escreve: o conteúdo aparece só até onde o cursor já passou.
      await move(c, { x, y: y + h / 2 }, RETURN);
      el.dataset.built = "";
      const write = el.animate(
        [{ clipPath: "inset(-30% 100% -30% 0)" }, { clipPath: "inset(-30% 0% -30% 0)" }],
        { duration: WRITE, easing: EASE },
      );
      await Promise.all([write.finished, move(c, { x: x + w, y: y + h / 2 }, WRITE)]);
      box.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 250, fill: "forwards" }).finished.then(
        () => box.remove(),
        () => {},
      );
    };

    const worker = async (c: Cursor, i: number) => {
      await sleep(i * STAGGER);
      for (let b = i; b < blocks.length; b += WORKERS) await build(c, blocks[b]);
    };

    // Depois da montagem, os cursores viram uma coroa 3D girando no topo da cabeça, com as pontas
    // para cima: na metade de trás passam atrás do cabelo (menores e mais apagados), na da frente por cima.
    let spinFrame = 0;
    const orbit = () => {
      const photo = section.querySelector<HTMLElement>("[data-orbit]");
      const img = photo?.querySelector("img");
      if (!photo) return;
      // Recalculado a cada quadro para acompanhar a janela. A foto fica no pé do contêiner
      // (object-contain + object-bottom), então a coroa é medida pela área real da foto.
      const ring = () => {
        const { x, y, w, h } = local(photo.getBoundingClientRect());
        const nw = img?.naturalWidth || 1;
        const nh = img?.naturalHeight || 1;
        const k = Math.min(w / nw, h / nh);
        const iw = nw * k;
        const ih = nh * k;
        const rx = iw * content.crown.width;
        return {
          cx: x + (w - iw) / 2 + iw * content.crown.x,
          cy: y + h - ih + ih * content.crown.y,
          rx,
          ry: rx * FLATTEN,
        };
      };
      const slot = (i: number, elapsed: number, { cx, cy, rx, ry }: ReturnType<typeof ring>) => {
        const a = -Math.PI + (i / WORKERS) * 2 * Math.PI + (elapsed / ORBIT) * 2 * Math.PI;
        const ex = rx * Math.cos(a);
        const ey = ry * Math.sin(a);
        // depth: -1 = atrás da cabeça (arco de cima), +1 = na frente (arco de baixo).
        return { x: cx + ex * TILT_COS - ey * TILT_SIN, y: cy + ex * TILT_SIN + ey * TILT_COS, depth: Math.sin(a) };
      };

      // Cada seta fica com a vaga do seu lado do anel, para não se cruzarem no caminho.
      const start = ring();
      const angle = (c: Cursor) => Math.atan2(c.pos.y - start.cy, c.pos.x - start.cx);
      const order = [...cursors].sort((p, q) => angle(p) - angle(q));
      const from = order.map((c) => c.pos);
      const t0 = performance.now();

      const spin = (now: number) => {
        if (stopped) return;
        const elapsed = now - t0;
        // Nos primeiros JOIN ms, cada seta desliza do último bloco até a sua vaga (que já está girando).
        const k = Math.min(1, elapsed / JOIN);
        const ease = k < 0.5 ? 4 * k ** 3 : 1 - (-2 * k + 2) ** 3 / 2;
        const r = ring();
        order.forEach((c, i) => {
          const s = slot(i, elapsed, r);
          const d = s.depth * ease;
          c.pos = { x: from[i].x + (s.x - from[i].x) * ease, y: from[i].y + (s.y - from[i].y) * ease };
          // Na coroa, a base da seta fica sobre o anel e a ponta aponta para cima (girada SPIKE graus).
          c.el.style.transformOrigin = "7px 20px";
          c.el.style.transform =
            `translate(${c.pos.x - 7 * ease}px, ${c.pos.y - 20 * ease}px) ` +
            `rotate(${SPIKE * ease}deg) scale(${1 + 0.2 * ease + 0.3 * d})`;
          c.el.style.opacity = String(0.75 + 0.25 * d);
          // z 2 fica entre "PORTFÓLIO" e a foto (z 3); z 40 fica acima de tudo.
          c.el.style.zIndex = d < 0 ? "2" : "40";
        });
        spinFrame = requestAnimationFrame(spin);
      };
      spinFrame = requestAnimationFrame(spin);
    };

    (async () => {
      try {
        await Promise.all(cursors.map(worker));
        section.dataset.phase = "done";
        orbit();
      } catch {
        // animações canceladas ao rever a montagem ou sair da página
      }
    })();

    return () => {
      stopped = true;
      cancelAnimationFrame(spinFrame);
      overlay.getAnimations({ subtree: true }).forEach((a) => a.cancel());
      blocks.forEach((el) => {
        el.getAnimations().forEach((a) => a.cancel());
        delete el.dataset.built;
      });
      overlay.replaceChildren();
    };
  }, [run]);

  return <div ref={layer} className="build-layer" aria-hidden />;
}
