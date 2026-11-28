import { CheckIcon } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

// Exemplos de cada etapa de "Como trabalho", acontecendo conforme a rolagem (classes reveal-*, grow-y,
// recolor, wipe no globals.css). São ilustrações: nada de dados reais. Sem cursores/setas (exclusivos do hero).

const i = (n: number) => ({ "--i": n }) as CSSProperties;

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div aria-hidden className={`demo rounded-xl border border-paper/10 bg-paper/[0.03] p-4 md:p-5 ${className}`}>
      {children}
    </div>
  );
}

// 1. Conversa: as mensagens chegam uma a uma.
export function ChatDemo() {
  return (
    <Card>
      <div className="flex items-center gap-3 border-b border-paper/10 pb-3">
        <span className="grid size-8 place-items-center rounded-full bg-paper/10 text-xs">CB</span>
        <div className="text-sm leading-tight">
          <p>Cliente</p>
          <p className="text-xs text-paper/45">online</p>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2.5 text-sm">
        <p className="reveal-x max-w-[82%] self-start rounded-2xl rounded-tl-sm bg-paper/10 px-3.5 py-2.5" style={i(0)}>
          Oi! Tenho uma barbearia e quero um site.
        </p>
        <p className="reveal max-w-[82%] self-end rounded-2xl rounded-tr-sm bg-signal px-3.5 py-2.5" style={i(0.5)}>
          Bora! O que você mais quer que o cliente faça nele?
        </p>
        <p className="reveal-x max-w-[82%] self-start rounded-2xl rounded-tl-sm bg-paper/10 px-3.5 py-2.5" style={i(1)}>
          Agendar horário e ver os preços.
        </p>
        <span className="reveal-pop flex gap-1 self-end rounded-2xl bg-signal/30 px-3.5 py-3" style={i(1.5)}>
          <span className="size-1.5 rounded-full bg-paper/80" />
          <span className="size-1.5 rounded-full bg-paper/60" />
          <span className="size-1.5 rounded-full bg-paper/40" />
        </span>
      </div>
    </Card>
  );
}

// Mesmo site em duas versões: rascunho (tracejado) e pronto (preenchido).
function MiniSite({ draft }: { draft: boolean }) {
  const box = draft ? "border border-dashed border-paper/30" : "";
  return (
    <div className={`absolute inset-0 flex flex-col gap-3 p-4 ${draft ? "bg-ink" : "bg-[#141010]"}`}>
      <div className={`flex items-center justify-between rounded px-2 py-1.5 ${box}`}>
        <span className={`h-3 w-12 rounded-sm ${draft ? "bg-paper/15" : "bg-signal"}`} />
        <span className="flex gap-2">
          {[0, 1, 2].map((n) => (
            <span key={n} className={`h-2 w-8 rounded-sm ${draft ? "bg-paper/15" : "bg-paper/50"}`} />
          ))}
        </span>
      </div>
      <div
        className={`flex flex-1 flex-col justify-end gap-2 rounded p-3 ${
          draft ? box : "bg-[linear-gradient(135deg,rgb(227_38_27/0.55),rgb(20_16_16)_70%)]"
        }`}
      >
        <span className={`h-4 w-3/4 rounded-sm ${draft ? "bg-paper/15" : "bg-paper"}`} />
        <span className={`h-4 w-1/2 rounded-sm ${draft ? "bg-paper/15" : "bg-paper"}`} />
        <span className={`mt-2 h-6 w-24 rounded-sm ${draft ? "border border-dashed border-paper/30" : "bg-signal"}`} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((n) => (
          <span key={n} className={`h-10 rounded ${draft ? box : "bg-paper/10"}`} />
        ))}
      </div>
    </div>
  );
}

// 2. Primeira versão: a divisória desliza com a rolagem e o rascunho vira o site.
export function DraftDemo() {
  return (
    <Card className="!p-0 overflow-clip">
      <div className="relative aspect-[16/11]">
        <MiniSite draft />
        <div className="wipe absolute inset-0">
          <MiniSite draft={false} />
        </div>
        <span className="wipe-handle absolute inset-y-0 w-0.5 -translate-x-1/2 bg-signal">
          <span className="absolute left-1/2 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 rounded-full bg-signal shadow-[0_0_20px_rgb(227_38_27/0.6)]">
            <span className="h-3.5 w-0.5 rounded bg-paper" />
            <span className="h-3.5 w-0.5 rounded bg-paper" />
          </span>
        </span>
        <span className="absolute left-3 top-3 rounded bg-ink/80 px-2 py-1 text-xs text-paper/70">Rascunho</span>
        <span className="absolute right-3 top-3 rounded bg-signal px-2 py-1 text-xs">Primeira versão</span>
      </div>
    </Card>
  );
}

// 3. Ajustes: chega o pedido, o botão muda de cor e o ajuste é confirmado.
export function TweakDemo() {
  return (
    <Card>
      <div className="relative rounded-lg border border-paper/10 p-4">
        <span className="block h-3 w-16 rounded-sm bg-paper/20" />
        <span className="mt-4 block h-4 w-3/4 rounded-sm bg-paper/70" />
        <span className="mt-2 block h-4 w-1/2 rounded-sm bg-paper/70" />
        <span className="recolor mt-5 inline-block rounded bg-signal px-4 py-2 text-sm" style={i(1)}>
          Agendar horário
        </span>
        <span
          className="reveal-pop absolute right-3 top-10 max-w-[60%] rounded-xl rounded-br-sm bg-paper px-3 py-2 text-xs text-ink shadow-lg"
          style={i(0.3)}
        >
          Dá pra deixar o botão vermelho?
        </span>
      </div>
      <span className="reveal-pop mt-4 inline-flex items-center gap-2 rounded-full border border-signal/40 bg-signal/10 px-3 py-1.5 text-sm text-paper" style={i(1.6)}>
        <CheckIcon className="size-4 text-signal" /> Ajuste feito
      </span>
    </Card>
  );
}

// 4. No ar: o site publicado, as visitas subindo e a primeira mensagem chegando.
export function LiveDemo() {
  const bars = [30, 45, 38, 60, 72, 66, 90];
  return (
    <Card>
      <div className="flex items-center gap-2 rounded-md bg-paper/5 px-3 py-2 text-xs">
        <span className="size-2 rounded-full bg-paper/30" />
        <span className="flex-1 text-paper/60">seunegocio.com.br</span>
        <span className="flex items-center gap-1.5 rounded-full bg-signal/15 px-2 py-0.5 text-signal">
          <span className="size-1.5 rounded-full bg-signal" /> No ar
        </span>
      </div>
      <p className="mt-4 text-xs text-paper/45">Visitas na semana</p>
      <div className="mt-2 flex h-28 items-end gap-2">
        {bars.map((h, n) => (
          <span key={n} className="grow-y flex-1 rounded-t bg-signal/80" style={{ height: `${h}%`, "--i": n * 0.15 } as CSSProperties} />
        ))}
      </div>
      <div className="reveal-pop mt-4 flex items-center gap-3 rounded-lg border border-paper/10 bg-paper/5 px-3 py-2.5 text-sm" style={i(1.6)}>
        <span className="grid size-7 place-items-center rounded-full bg-signal text-xs">1</span>
        <div className="leading-tight">
          <p>Nova mensagem no WhatsApp</p>
          <p className="text-xs text-paper/50">Oi! Vi o site, quero agendar.</p>
        </div>
      </div>
    </Card>
  );
}
