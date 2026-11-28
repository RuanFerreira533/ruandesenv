import type { ReactNode } from "react";

// Baseado no componente "iphone" (moldura com entalhe e botões laterais), adaptado ao tema escuro
// do site e recebendo o conteúdo da tela como children. Tamanho fixo: 280 × 580 (tela de 260 × 560).
export function Iphone({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-[580px] w-[280px] shrink-0 rounded-[2.6rem] border-[10px] border-[#1c1a1a] bg-black shadow-[0_40px_90px_-30px_rgb(227_38_27/0.55)] ring-1 ring-paper/15">
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-black">{children}</div>
      {/* Entalhe e botões laterais */}
      <span aria-hidden className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-[#1c1a1a]" />
      <span aria-hidden className="absolute -left-[14px] top-24 h-8 w-1 rounded-l bg-[#2b2828]" />
      <span aria-hidden className="absolute -left-[14px] top-36 h-12 w-1 rounded-l bg-[#2b2828]" />
      <span aria-hidden className="absolute -right-[14px] top-28 h-16 w-1 rounded-r bg-[#2b2828]" />
    </div>
  );
}
