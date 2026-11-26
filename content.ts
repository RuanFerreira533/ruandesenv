// Tudo que aparece no hero sai daqui. Troque os textos de exemplo pelos seus.
export const content = {
  name: "Ruan",
  greeting: "Olá, eu sou",
  role: "Desenvolvedor de sites e landing pages",
  tagline: ["Desenvolvedor web", "Sites e landing pages"],
  bio: "Crio sites rápidos e bem feitos que transformam visita em contato: chamada no WhatsApp, pedido de orçamento ou venda.",
  location: "Atendo todo o Brasil, de forma remota",
  available: "Agenda aberta para novos projetos",
  promise: ["Site sob medida,", "do rascunho ao ar."],
  stats: [
    { value: "1", label: "ano criando sites" },
    { value: "4", label: "sites entregues" },
    // shortcut: número de exemplo. Confirme ou troque antes de publicar.
    { value: "7", label: "dias até a primeira versão" },
  ],
  // Número com DDI + DDD, só dígitos.
  whatsapp: "https://wa.me/5511999928021",
  contact: {
    phone: "(11) 99992-8021",
    email: "ruandesenv@gmail.com",
    instagram: { handle: "@ruandesenv", url: "https://www.instagram.com/ruandesenv/" },
    github: "https://github.com/RuanFerreira533",
    linkedin: "https://www.linkedin.com/in/ruan-ferreira-b79778231",
  },
  // Foto sem fundo (PNG com transparência), cortada no peito. Fica em public/.
  photo: "/ruan.png",
  // Onde a coroa de setas gira, em frações da foto: centro (x, y) e meia-largura.
  // Se trocar a foto, ajuste para o topo da cabeça dela.
  crown: { x: 0.55, y: 0.13, width: 0.31 },
  years: "2025–2026",
  // Seção de projetos. Prints em public/projetos/ (1440×900, só a primeira dobra de cada site).
  projects: [
    {
      title: "Mauro Junior Tattoo",
      kind: "Estúdio de tatuagem",
      place: "Santa Isabel, SP",
      url: "https://mauro-junior-tattoo.vercel.app/",
      image: "/projetos/mauro-junior-tattoo.webp",
    },
    {
      title: "Charme Barbearia",
      kind: "Barbearia",
      place: "Santa Isabel, SP",
      url: "https://charme-barbershop.vercel.app/",
      image: "/projetos/charme-barbershop.webp",
    },
    {
      title: "Thomás Barbosa",
      kind: "Personal trainer",
      place: "Santa Isabel, SP",
      url: "https://thomasbarbosa.vercel.app/",
      image: "/projetos/thomasbarbosa.webp",
    },
  ],
  nav: [
    { label: "Projetos", href: "#projetos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Como trabalho", href: "#processo" },
    { label: "Contato", href: "#contato" },
  ],
};
