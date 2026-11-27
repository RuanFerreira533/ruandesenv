import { ArrowUpRightIcon, MailIcon, MessageCircleIcon } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { content } from "@/content";
import { CurrentYear } from "./current-year";

// Baseado no "minimal-footer" (shadcn), adaptado às cores e fontes do site.
// Sem cursores/setas animadas: essa animação é exclusiva do hero. Aqui a entrada é guiada pela
// rolagem (classes reveal-* no globals.css); --i escalona cada item.
const d = (i: number) => ({ "--i": i }) as CSSProperties;

// O lucide-react 1.x removeu os ícones de marca, então GitHub, LinkedIn e Instagram vão em SVG.
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export function MinimalFooter() {
  const { contact } = content;

  const social: { label: string; href: string; icon: ReactNode }[] = [
    { label: "WhatsApp", href: content.whatsapp, icon: <MessageCircleIcon className="size-4" /> },
    { label: "Instagram", href: contact.instagram.url, icon: <InstagramIcon /> },
    { label: "LinkedIn", href: contact.linkedin, icon: <LinkedinIcon /> },
    { label: "GitHub", href: contact.github, icon: <GithubIcon /> },
    { label: "E-mail", href: `mailto:${contact.email}`, icon: <MailIcon className="size-4" /> },
  ];

  const pages = [
    { title: "Início", href: "#" },
    { title: "Projetos", href: "#projetos" },
    { title: "Chamar no WhatsApp", href: content.whatsapp },
  ];

  const reach = [
    { title: contact.phone, href: content.whatsapp },
    { title: contact.email, href: `mailto:${contact.email}` },
    { title: contact.instagram.handle, href: contact.instagram.url },
  ];

  const external = (href: string) =>
    href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <footer id="contato" className="relative bg-ink">
      <span aria-hidden className="reveal-line absolute inset-x-0 top-0 h-px bg-paper/15" />
      <div className="bg-[radial-gradient(35%_80%_at_20%_0%,rgb(227_38_27/0.14),transparent)]">
        <div className="grid grid-cols-6 gap-8 px-5 py-12 md:px-10">
          <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
            <a href="#" className="reveal-x flex w-max items-center gap-2.5 text-lg md:text-xl">
              <span className="size-3.5 bg-signal" aria-hidden />
              <span className="narrow uppercase tracking-wide">{content.name}</span>
            </a>
            <p className="reveal max-w-md text-sm leading-relaxed md:text-lg text-paper/60 text-balance" style={d(0.3)}>
              {content.role}. {content.location}.
            </p>
            <a
              href={content.whatsapp}
              {...external(content.whatsapp)}
              style={d(0.6)}
              className="reveal group flex w-max items-center gap-2 bg-signal px-5 py-2.5 text-sm font-semibold md:px-7 md:py-3.5 md:text-base transition-colors hover:bg-paper hover:text-ink"
            >
              Vamos conversar
              <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <div className="flex gap-2">
              {social.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  {...external(item.href)}
                  aria-label={item.label}
                  title={item.label}
                  style={d(0.8 + i * 0.2)}
                  className="reveal-pop rounded-md border border-paper/15 p-2 text-paper/70 transition-colors hover:border-signal hover:bg-signal/10 hover:text-paper"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Navegação" links={pages} external={external} i={0.4} />
          <FooterColumn title="Contato" links={reach} external={external} i={0.8} />
        </div>

        <div className="reveal-line h-px w-full bg-paper/10" />
        <p className="reveal px-5 py-5 text-center text-xs text-paper/40 md:text-sm">
          © <CurrentYear /> Ruan Ferreira. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  external,
  i,
}: {
  title: string;
  links: { title: string; href: string }[];
  external: (href: string) => object;
  i: number;
}) {
  return (
    <div className="reveal col-span-6 sm:col-span-3 md:col-span-1" style={d(i)}>
      <span className="mb-3 block text-xs text-paper/40 md:text-sm">{title}</span>
      <div className="flex flex-col gap-1">
        {links.map(({ title, href }) => (
          <a
            key={title}
            href={href}
            {...external(href)}
            className="w-max py-1 text-sm text-paper/80 md:text-base underline-offset-4 transition-colors hover:text-signal hover:underline"
          >
            {title}
          </a>
        ))}
      </div>
    </div>
  );
}
