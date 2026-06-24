/**
 * Conteúdo editável da apresentação FA × DotSales.
 * Edite os textos aqui — toda a experiência consome este arquivo.
 */

import fachadaAsset from "@/assets/fachada-aberta.png.asset.json";
import corredorAsset from "@/assets/corredor-principal.png.asset.json";
import copaAsset from "@/assets/copa-convivencia.png.asset.json";


export const presentationContent = {
  brand: {
    fa: "FA",
    faFull: "Fazendo Acontecer",
    dotsales: "DotSales",
  },

  opening: {
    headline: "Tudo começou com uma pergunta.",
    sub: "Como construir uma empresa capaz de crescer sem depender de uma única pessoa?",
    scrollHint: "Role para começar",
  },

  whatIs: {
    kicker: "01 — Metodologia",
    headline: "O que é a Fazendo Acontecer?",
    description:
      "A Fazendo Acontecer é uma empresa especializada em acelerar o crescimento de negócios através de uma metodologia própria que integra geração de demanda, vendas e dados. Mais do que executar estratégias, ajudamos empresários a construir operações capazes de crescer com previsibilidade, escala e controle.",
    methodName: "GVD",
    methodFull: "Geração de Demanda · Vendas · Dados",
    pillars: [
      {
        letter: "G",
        title: "Geração de Demanda",
        desc: "Atrair oportunidades qualificadas para abastecer constantemente o comercial.",
      },
      {
        letter: "V",
        title: "Vendas",
        desc: "Transformar interesse em faturamento através de processos, acompanhamento e execução.",
      },
      {
        letter: "D",
        title: "Dados",
        desc: "Tomar decisões baseadas em indicadores reais e não em achismos.",
      },
    ],
  },


  future: {
    headline: "Mas isso é apenas o começo.",
    overlay: "Estamos construindo algo muito maior.",
    videoPlaceholder: "/videos/nova-sede.mp4",
  },

  novaSede: {
    kicker: "Nova Sede FA",
    scenes: [
      { headline: "Uma nova estrutura para uma nova fase.", label: "Fachada principal", image: fachadaAsset.url },
      { headline: "Projetado para suportar crescimento.", label: "Corredor principal", image: "/images/sede/corredor.jpg" },
      { headline: "Mais pessoas. Mais oportunidades. Mais resultados.", label: "Setor comercial", image: "/images/sede/comercial.jpg" },
      { headline: "Empresas crescem com processos. Pessoas crescem com cultura.", label: "Área de convivência", image: "/images/sede/convivencia.jpg" },
      { headline: "Estamos construindo um ecossistema empresarial.", label: "Conjunto da estrutura", image: "/images/sede/conjunto.jpg" },
    ],
    mosaic: [
      { label: "Detalhe arquitetônico", image: "/images/sede/mosaico-1.jpg" },
      { label: "Sala de reunião", image: "/images/sede/mosaico-2.jpg" },
      { label: "Auditório", image: "/images/sede/mosaico-3.jpg" },
      { label: "Recepção", image: "/images/sede/mosaico-4.jpg" },
      { label: "Bastidores", image: "/images/sede/mosaico-5.jpg" },
      { label: "Vista aérea", image: "/images/sede/mosaico-6.jpg" },
    ],
  },

  expansion: {
    kicker: "02 — Expansão",
    growth: {
      from: 60,
      to: 150,
      label: "colaboradores",
    },
    title: "EXPANSÃO\nDA EMPRESA",
    support:
      "Uma estrutura construída para suportar os próximos anos de crescimento.",
  },

  why: {
    word: "Por quê?",
  },

  growth: {
    word: "CRESCIMENTO",
    caption: "O que nos trouxe até aqui.",
  },

  pivot: {
    line1: "A verdadeira pergunta não é como a FA cresceu.",
    line2: "É como sua empresa pode crescer também.",
  },

  pain: {
    kicker: "03 — A realidade silenciosa",
    questions: [
      "Quantos clientes sua empresa perdeu nos últimos 30 dias?",
      "Quantos orçamentos nunca receberam retorno?",
      "Quantos leads ficaram esquecidos?",
      "Quantas vendas não aconteceram por falta de acompanhamento?",
    ],
  },

  secret: {
    lines: [
      "A FA não cresceu porque vende mais.",
      "A FA cresceu porque deixou de perder vendas.",
      "E isso mudou tudo.",
    ],
  },

  reveal: {
    headline: "O cérebro comercial da FA.",
    sub: "A plataforma que conecta marketing, atendimento, processos e vendas.",
  },

  dotsales: {
    kicker: "04 — DotSales",
    headline: "Não é um CRM. É um sistema operacional comercial.",
    features: [
      { title: "Inbox Omnichannel", desc: "WhatsApp, Instagram, e-mail e site em uma única caixa." },
      { title: "Pipeline Inteligente", desc: "Cada oportunidade no estágio certo, no tempo certo." },
      { title: "IA Comercial", desc: "Responde, qualifica e prioriza antes do vendedor abrir o app." },
      { title: "Automação", desc: "Tarefas, follow-ups e cadências rodando sozinhas." },
      { title: "Gestão em Tempo Real", desc: "Cada conversa, cada lead, cada métrica visível." },
      { title: "Dashboard Executivo", desc: "Decisões com dados, não com achismo." },
    ],
    flow: [
      "Lead entra",
      "IA responde",
      "Vendedor recebe",
      "Pipeline avança",
      "Venda acontece",
    ],
  },

  machine: {
    kicker: "05 — A máquina de crescimento",
    steps: [
      { n: "01", label: "Marketing", desc: "Atração com intenção." },
      { n: "02", label: "Captação", desc: "Cada lead capturado e identificado." },
      { n: "03", label: "CRM", desc: "Memória de toda a operação." },
      { n: "04", label: "Processos", desc: "Padrão que escala." },
      { n: "05", label: "Vendas", desc: "Time focado em fechar." },
      { n: "06", label: "Escala", desc: "Crescimento previsível." },
    ],
  },

  impact: {
    kicker: "06 — Impacto",
    metrics: [
      { value: 0, suffix: "", label: "Leads respondidos" },
      { value: 0, suffix: "", label: "Conversas organizadas" },
      { value: 0, suffix: "", label: "Oportunidades acompanhadas" },
      { value: 0, suffix: "", label: "Vendas realizadas" },
      { value: 0, suffix: "", label: "Menos dinheiro perdido" },
    ],
    note: "Substitua os valores reais no arquivo de conteúdo.",
  },

  futureBusiness: {
    kicker: "07 — O futuro dos negócios",
    lines: [
      "Os próximos anos serão das empresas que dominarem dados.",
      "Os próximos anos serão das empresas que dominarem processos.",
      "Os próximos anos serão das empresas que dominarem tecnologia.",
      "Os próximos anos serão das empresas que dominarem execução.",
    ],
  },

  ecosystem: {
    kicker: "08 — Ecossistema FA",
    headline: "Uma nova casa para uma nova era.",
    body:
      "Novo prédio, novos times, nova cultura. Um ecossistema empresarial pensado para crescer com você.",
    tiles: 6,
  },

  closing: {
    lines: [
      "Estamos construindo muito mais que uma empresa.",
      "Estamos construindo um ecossistema empresarial.",
      "E você faz parte disso.",
    ],
  },

  invite: {
    headline: "Agora é hora de conversar.",
    sub: "Vamos continuar essa troca de ideias durante o jantar.",
    cta: "Continuar a experiência",
  },

  thanks: {
    title: "Obrigado.",
    sub: "FA × DotSales",
  },
} as const;

export type PresentationContent = typeof presentationContent;
