export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  price: number;
  priceFormatted: string;
  description: string;
  duration: string;
  category: 'corte' | 'barba' | 'combo' | 'quimica' | 'detalhes';
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  frontImage: string;
  backImage?: string;
  badge: string;
  details: string[];
}

export const BRAND_INFO = {
  name: "CUTS STUDIOS",
  subname: "BARBER STUDIO",
  barber: "Thiago Menezes",
  sinceYear: 2023,
  location: "Jardim Guarujá — São Paulo, SP",
  address: "Rua Pandalhos, 1012, Jardim Guarujá, São Paulo - SP",
  instagramHandle: "@cutsstudio01",
  instagramUrl: "https://www.instagram.com/cutsstudio01/",
  googleMapsUrl: "https://maps.google.com/?q=Rua+Pandalhos,+1012,+Jardim+Guaruja,+Sao+Paulo+-+SP",
  whatsappNumber: "5511987943907", // Thiago Menezes - CUTS STUDIOS
  hours: [
    { days: "Terça a Domingo", time: "09:00 — 19:00" },
    { days: "Segunda-feira", time: "Fechado" }
  ],
  differentiators: [
    {
      title: "Atendimento Individual e Reservado",
      desc: "Sem filas de espera ou ruídos. Cada horário é dedicado unicamente a você em um ambiente exclusivo."
    },
    {
      title: "Cortes & Degradês sob Medida",
      desc: "Transição de tons cirúrgica e alinhamento facial pensado especificamente para a sua estrutura."
    },
    {
      title: "Padrão & Precisão Profissional",
      desc: "Equipamentos esterilizados, acabamento navalhado de alta definição e finalização com produtos premium."
    }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "corte-simples",
    number: "01",
    name: "Corte Simples",
    price: 35,
    priceFormatted: "R$ 35",
    duration: "30 min",
    category: "corte",
    description: "Corte tradicional com alinhamento lateral, lavagem refrescante e finalização com pomada matte."
  },
  {
    id: "corte-navalhado",
    number: "02",
    name: "Corte Navalhado",
    price: 40,
    priceFormatted: "R$ 40",
    duration: "40 min",
    category: "corte",
    popular: true,
    description: "Degradê de altíssima precisão com navalha para máxima definição, durabilidade e transição suave."
  },
  {
    id: "corte-barba",
    number: "03",
    name: "Corte + Barba",
    price: 65,
    priceFormatted: "R$ 65",
    duration: "60 min",
    category: "combo",
    popular: true,
    description: "Combo completo: corte de cabelo personalizado + alinhamento de barba com toalha quente e pós-barba."
  },
  {
    id: "barba",
    number: "04",
    name: "Barba",
    price: 30,
    priceFormatted: "R$ 30",
    duration: "30 min",
    category: "barba",
    description: "Modelagem de barba, alinhamento dos contornos na navalha e hidratação profunda de fios."
  },
  {
    id: "sobrancelha",
    number: "05",
    name: "Sobrancelha",
    price: 10,
    priceFormatted: "R$ 10",
    duration: "10 min",
    category: "detalhes",
    description: "Design e alinhamento na navalha para valorizar e harmonizar a expressão facial."
  },
  {
    id: "corte-infantil",
    number: "06",
    name: "Corte Infantil",
    price: 30,
    priceFormatted: "R$ 30",
    duration: "35 min",
    category: "corte",
    description: "Atendimento dedicado e paciente para crianças de todas as idades, garantindo conforto e estilo."
  },
  {
    id: "platinado",
    number: "07",
    name: "Platinado",
    price: 100,
    priceFormatted: "R$ 100",
    duration: "120 min",
    category: "quimica",
    description: "Descoloração global com proteção capilar e matização para alcançar um tom platinado uniforme."
  },
  {
    id: "pigmentacao",
    number: "08",
    name: "Pigmentação",
    price: 20,
    priceFormatted: "R$ 20",
    duration: "20 min",
    category: "detalhes",
    description: "Técnica de alinhamento e preenchimento de falhas no cabelo ou barba para maior destaque e contraste."
  }
];

export const CUTS_CLUB = {
  title: "CUTS CLUB",
  subtitle: "O Plano Mensal Exclusivo",
  price: 120,
  priceFormatted: "R$ 120",
  period: "mês",
  includes: [
    "Cortes Simples ilimitados no mês",
    "Design e alinhamento de Sobrancelha",
    "Modelagem e acerto de Barba"
  ],
  rules: [
    "Validez de Terça a Quinta-feira",
    "Máximo de 4 utilizações por mês",
    "Limite de 1 utilização por semana"
  ],
  benefits: [
    "Economia real para manter o corte em dia",
    "Prioridade na escolha dos horários da semana",
    "Acabamento e manutenção sempre impecáveis"
  ],
  ctaText: "QUERO SER MEMBRO"
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "degrade-navalhado-1",
    title: "Degradê Mid Fade Definido",
    subtitle: "Visão Frontal e Posterior em Detalhes de Acabamento",
    category: "Degradê / Navalhado",
    frontImage: "/img/cliente1.jpg",
    backImage: "/img/cliente1.costa.jpg",
    badge: "Visão 360°",
    details: ["Transição Mid Fade", "Acabamento na Navalha", "Topo com Textura Natural"]
  },
  {
    id: "degrade-acabamento-2",
    title: "Low Fade com Precisão de Nuca",
    subtitle: "Alinhamento Perfeito de Contornos e Transição",
    category: "Degradê de Precisão",
    frontImage: "/img/cliente2.jpg",
    backImage: "/img/cliente2.costa.jpg",
    badge: "Visão 360°",
    details: ["Low Fade Limpo", "Contorno Navalhado", "Finalização Matte"]
  },
  {
    id: "thiago-trabalho-3",
    title: "Processo & Atenção aos Detalhes",
    subtitle: "Thiago Menezes em ação durante o atendimento residencial",
    category: "Atendimento VIP",
    frontImage: "/img/manim.thiago.jpg",
    badge: "Bastidores",
    details: ["Foco Individual", "Ferramentas Profissionais", "Atendimento Residencial"]
  }
];

export const generateWhatsAppLink = (
  serviceName?: string,
  date?: string,
  time?: string,
  customMessage?: string
): string => {
  let message = "";
  
  if (customMessage) {
    message = customMessage;
  } else {
    message = `Olá! Vim pelo site da CUTS STUDIOS e gostaria de agendar um horário.`;
    
    if (serviceName) {
      message += `\n\nServiço: ${serviceName}`;
    }
    if (date) {
      message += `\nData desejada: ${date}`;
    }
    if (time) {
      message += `\nHorário desejado: ${time}`;
    }
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodedMessage}`;
};
