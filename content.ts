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
  // shortcut: serviços e etapas de exemplo, baseados nos sites já entregues. Revise com o que você oferece.
  services: [
    {
      title: "Landing page",
      text: "Uma página só, focada em uma ação: chamar no WhatsApp, agendar ou pedir orçamento.",
      tags: ["Lançamentos", "Anúncios", "Serviço único"],
    },
    {
      title: "Site completo",
      text: "Várias seções para mostrar o seu negócio: sobre, serviços, galeria, avaliações e localização.",
      tags: ["Barbearias", "Estúdios", "Profissionais"],
    },
    {
      title: "Pronto para o Google",
      text: "Site rápido no celular, com título, descrição e mapa certos para quem procura você na sua cidade.",
      tags: ["Velocidade", "SEO local", "Mobile"],
    },
    {
      title: "Ajustes e manutenção",
      text: "Depois do site no ar, eu atualizo textos, fotos e preços sempre que o seu negócio mudar.",
      tags: ["Textos", "Fotos", "Preços"],
    },
  ],
  process: [
    { title: "Conversa", text: "Você me conta pelo WhatsApp o que faz, para quem e o que o site precisa resolver." },
    { title: "Primeira versão", text: "Monto o site com os seus textos e fotos e te mando o link para ver no celular." },
    { title: "Ajustes", text: "Você pede as mudanças e eu ajusto até ficar do jeito que você quer." },
    { title: "No ar", text: "Publico o site no seu domínio, conecto o WhatsApp e te entrego tudo funcionando." },
  ],
  nav: [
    { label: "Projetos", href: "#projetos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Como trabalho", href: "#processo" },
    { label: "Contato", href: "#contato" },
  ],
};
