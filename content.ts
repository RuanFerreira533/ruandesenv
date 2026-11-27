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
  // Serviços tirados do que já está no ar (GitHub + Vercel). "work" é a prova: onde você já fez.
  services: [
    {
      title: "Sites e landing pages",
      summary: "Páginas rápidas que levam o visitante a chamar no WhatsApp, pedir orçamento ou agendar.",
      features: [
        "Página única ou site com várias seções",
        "Botões e formulário que abrem o WhatsApp",
        "Avaliações, mapa e perguntas frequentes",
        "Rápido no celular e pronto para o Google",
      ],
      work: [
        { name: "Mauro Junior Tattoo", url: "https://mauro-junior-tattoo.vercel.app/" },
        { name: "Thomás Barbosa", url: "https://thomasbarbosa.vercel.app/" },
        { name: "Charme Barbearia", url: "https://charme-barbershop.vercel.app/" },
      ],
    },
    {
      title: "Agendamento online",
      summary: "O cliente escolhe serviço, profissional e horário pelo site. Você confirma pelo WhatsApp.",
      features: [
        "Horários por profissional e por dia da semana",
        "Pedido de horário só com o CPF",
        "Conta do cliente para acompanhar os horários",
        "Agenda da semana com agendado, confirmado, concluído e faltou",
      ],
      work: [{ name: "Charme Barbearia", url: "https://charme-barbershop.vercel.app/agendar.html" }],
    },
    {
      title: "Sistema de gestão",
      summary: "Um painel para o dono controlar o dia a dia: agenda, clientes, vendas e dinheiro.",
      features: [
        "Clientes com histórico e lista de quem sumiu para chamar de novo",
        "Profissionais, serviços e comissões",
        "Caixa com pagamento dividido e fechamento do dia",
        "Financeiro, despesas e relatório de lucro",
      ],
      work: [{ name: "Painel da Charme Barbearia", url: "https://charme-barbershop.vercel.app/" }],
    },
    {
      title: "Controle de estoque",
      summary: "Cada produto com custo, preço e quantidade. Toda entrada, venda e perda fica registrada.",
      features: [
        "Entradas, vendas, devoluções, perdas e ajustes",
        "Aviso de produto sem estoque na hora da venda",
        "Custo e margem de cada produto nos relatórios",
        "Histórico de quem mexeu e por quê",
      ],
      work: [{ name: "Charme Barbearia", url: "https://charme-barbershop.vercel.app/" }],
    },
    {
      title: "Catálogos",
      summary: "Serviços e produtos com preço claro, para o cliente escolher antes de chamar.",
      features: [
        "Preços diferentes por dia da semana",
        "Produtos para separar pelo WhatsApp",
        "Páginas por categoria ou por estilo",
        "Produtos e preços puxados do painel",
      ],
      work: [
        { name: "Catálogo da Charme", url: "https://charme-barbershop.vercel.app/catalogo.html" },
        { name: "Estilos do Mauro Junior", url: "https://mauro-junior-tattoo.vercel.app/" },
      ],
    },
    {
      title: "Convites e eventos",
      summary: "Convite online com confirmação de presença e lista de presentes.",
      features: [
        "Data, local e programação do dia",
        "Confirmação de presença com acompanhantes",
        "Presentes com chave PIX para copiar",
        "Fotos e botão para abrir o mapa",
      ],
      work: [{ name: "Convite Sthefany e Ruan", url: "https://sthefany-ruan.vercel.app/" }],
    },
  ],
  process: [
    {
      title: "Conversa",
      text: "Você me conta pelo WhatsApp o que faz, para quem e o que o site precisa resolver.",
      detail: "Pelo WhatsApp, no seu tempo",
    },
    {
      title: "Primeira versão",
      text: "Monto o site com os seus textos e fotos e te mando o link para ver no celular.",
      detail: "Link para abrir no seu celular",
    },
    {
      title: "Ajustes",
      text: "Você pede as mudanças e eu ajusto até ficar do jeito que você quer.",
      detail: "Você aprova cada mudança",
    },
    {
      title: "No ar",
      text: "Publico o site no seu domínio, conecto o WhatsApp e te entrego tudo funcionando.",
      detail: "Domínio e WhatsApp conectados",
    },
  ],
  nav: [
    { label: "Projetos", href: "#projetos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Como trabalho", href: "#processo" },
    { label: "Contato", href: "#contato" },
  ],
};
