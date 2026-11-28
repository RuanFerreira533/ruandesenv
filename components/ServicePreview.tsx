import Image from "next/image";
import { content } from "@/content";

type Preview = (typeof content.services)[number]["preview"];

// "Tela" de cada serviço: moldura de navegador com o endereço real do projeto.
// Painel e estoque exigem login, então são miniaturas desenhadas com os módulos reais do sistema
// e números de exemplo (avisado na barra).
export default function ServicePreview({ preview }: { preview: Preview }) {
  const example = preview.kind === "panel" || preview.kind === "stock";
  return (
    <figure className="overflow-hidden rounded-md border border-paper/15 bg-ink shadow-[0_30px_80px_-30px_rgb(227_38_27/0.35)]">
      <div className="flex items-center gap-3 border-b border-paper/10 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-paper/15" />
          <span className="size-2.5 rounded-full bg-paper/15" />
          <span className="size-2.5 rounded-full bg-signal/70" />
        </span>
        <span className="flex-1 truncate rounded bg-paper/5 px-3 py-1 text-xs text-paper/55">{preview.address}</span>
        {example && <span className="shrink-0 text-xs text-paper/40">Dados de exemplo</span>}
      </div>
      <div className="relative aspect-[16/10]">
        {preview.kind === "sites" && <Sites />}
        {"src" in preview && preview.src && (
          <Image
            src={preview.src}
            alt={`Tela de ${preview.address}`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top"
          />
        )}
        {preview.kind === "panel" && <PanelMock />}
        {preview.kind === "stock" && <StockMock />}
      </div>
    </figure>
  );
}

// Os três sites no ar, em leque.
function Sites() {
  const shots = content.projects.map((p) => p.image);
  return (
    <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_100%,rgb(227_38_27/0.25),transparent)]">
      {shots.map((src, i) => (
        <div
          key={src}
          className="absolute top-[12%] aspect-[16/10] w-[58%] overflow-hidden rounded border border-paper/15 shadow-2xl"
          style={{ left: `${4 + i * 19}%`, rotate: `${(i - 1) * 4}deg`, zIndex: i === 1 ? 2 : 1 }}
        >
          <Image src={src} alt="" fill sizes="30vw" className="object-cover object-top" />
        </div>
      ))}
    </div>
  );
}

const modules = ["Meu dia", "Agenda", "Clientes", "Caixa", "Produtos e estoque", "Financeiro e relatórios"];

function PanelMock() {
  const week = [42, 58, 35, 72, 64, 90];
  return (
    <div className="absolute inset-0 flex text-[11px] sm:text-xs" aria-hidden>
      <div className="hidden w-[30%] flex-col gap-1 border-r border-paper/10 p-3 sm:flex">
        <span className="narrow mb-2 text-sm uppercase">Painel</span>
        {modules.map((m, i) => (
          <span key={m} className={`rounded px-2 py-1.5 ${i === 0 ? "bg-signal/15 text-signal" : "text-paper/55"}`}>
            {m}
          </span>
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-3 sm:p-4">
        <div className="grid grid-cols-3 gap-2">
          {[
            ["Faturamento", "R$ 1.280"],
            ["Atendimentos", "23"],
            ["Valor médio", "R$ 55"],
          ].map(([k, v]) => (
            <div key={k} className="rounded border border-paper/10 p-2">
              <p className="text-paper/45">{k}</p>
              <p className="narrow mt-1 text-lg sm:text-2xl">{v}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-end gap-2 rounded border border-paper/10 p-3">
          {week.map((h, i) => (
            <span key={i} className="flex-1 rounded-t bg-signal/80" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="flex items-center justify-between rounded border border-paper/10 px-3 py-2">
          <span className="text-paper/55">Fechar caixa de hoje</span>
          <span className="rounded bg-signal px-2 py-1 text-paper">Bateu</span>
        </div>
      </div>
    </div>
  );
}

function StockMock() {
  const rows = [
    ["Pomada modeladora", "12", "9", "3"],
    ["Óleo para barba", "8", "5", "3"],
    ["Shampoo anticaspa", "10", "4", "6"],
    ["Cera em pó", "6", "6", "0"],
    ["Pente de madeira", "15", "7", "8"],
    ["Balm pós-barba", "9", "2", "7"],
    ["Gel fixador", "10", "5", "5"],
  ];
  return (
    <div className="absolute inset-0 flex flex-col p-3 text-[11px] sm:p-5 sm:text-sm" aria-hidden>
      <div className="mb-3 flex items-center justify-between">
        <span className="narrow text-base uppercase sm:text-xl">Produtos e estoque</span>
        <span className="rounded bg-signal px-2 py-1 text-paper">Nova entrada</span>
      </div>
      <div className="grid grid-cols-[1fr_3.5rem_3.5rem_5.5rem] gap-x-3 border-b border-paper/10 pb-2 text-right text-paper/45 sm:grid-cols-[1fr_5rem_5rem_7rem]">
        <span className="text-left">Produto</span>
        <span>Entrada</span>
        <span>Venda</span>
        <span>Saldo</span>
      </div>
      {rows.map(([name, inn, out, left]) => (
        <div
          key={name}
          className="grid grid-cols-[1fr_3.5rem_3.5rem_5.5rem] items-center gap-x-3 border-b border-paper/5 py-2 text-right sm:grid-cols-[1fr_5rem_5rem_7rem] sm:py-2.5"
        >
          <span className="truncate text-left text-paper/85">{name}</span>
          <span className="text-paper/55">+{inn}</span>
          <span className="text-paper/55">−{out}</span>
          {left === "0" ? (
            <span className="justify-self-end rounded bg-signal/20 px-1.5 text-signal">Sem estoque</span>
          ) : (
            <span className="narrow text-base sm:text-lg">{left}</span>
          )}
        </div>
      ))}
    </div>
  );
}
