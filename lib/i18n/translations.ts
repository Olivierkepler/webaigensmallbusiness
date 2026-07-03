export type Locale = "en" | "fr" | "es";

export const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
];

const en = {
  nav: {
    services: "Services",
    industries: "Industries",
    work: "Work",
    about: "About",
    faq: "FAQ",
    cta: "Book a Strategy Call",
    logoAlt: "WebAiGen logo",
  },
  search: {
    placeholder: "Search site…",
    noResults: "No results found",
    open: "Open search",
    close: "Close search",
    categories: {
      section: "Section",
      service: "Service",
      industry: "Industry",
      work: "Work",
      faq: "FAQ",
    },
  },
  announce: {
    text: "WebAiGen — Bringing AI automation education to Greater Boston.",
    link: "Read more",
  },
  hero: {
    title: "A Branding, Web & AI Growth Partner.",
    description:
      "We build modern digital experiences for startups, clinics, and local businesses across every medium — making your online presence",
    compoundRevenue: "compound revenue",
    descriptionEnd: "instead of leaking it.",
    rating: "4.8/5.0 TOP RATED",
    testimonial:
      '"Bookings doubled the month our new site went live." — Saskia Cleaning',
    cta: "See Our Work",
  },
  stats: [
    {
      n: "40+",
      label: "Projects Shipped",
      desc: "Web platforms, mobile apps, and automations delivered across health, services, and logistics.",
    },
    {
      n: "3×",
      label: "Avg. Lead Growth",
      desc: "Typical increase in qualified inbound leads within 90 days of a rebuilt web presence.",
    },
    {
      n: "12",
      label: "Industries Served",
      desc: "From clinical platforms to cleaning services, cargo logistics, and travel tech.",
    },
    {
      n: "2026",
      label: "Year Founded",
      desc: "Founded in Boston as a lean alternative to the bloated traditional agency model.",
    },
  ],
  marquee: {
    label: "Some of our partners",
  },
  thesis: {
    eyebrow: "Our Thesis",
    title: "Every pixel is a pricing signal.",
    description:
      "Every medium your market interacts with — your website, product, campaigns, and sales assets — is an immediate signal of your value. When design and messaging are calibrated to your audience and unified by one brand strategy, credibility scales and revenue compounds. When they're fragmented, every interaction contradicts the last.",
  },
  research: [
    {
      src: "McKinsey",
      big: "32%",
      title: "Design-led growth",
      desc: "Companies that fully commit to design grow revenue roughly a third faster than industry peers over five years.",
    },
    {
      src: "Forrester",
      big: "301%",
      title: "ROI of design maturity",
      desc: "Mature design practices deliver triple-digit ROI while dramatically cutting time-to-market for new products.",
    },
    {
      src: "Stanford",
      big: "46%",
      title: "Credibility is visual",
      desc: "Nearly half of users judge a company's baseline credibility purely on the visual design of its website.",
    },
  ],
  proof: {
    eyebrow: "The Proof",
    title: "Quietly enabling real outcomes.",
    description:
      "While others share flashy portfolios and superficial animations, we focus on tangible business results for the companies we partner with.",
  },
  proofItems: [
    {
      co: "Saskia Cleaning",
      desc: "Next.js rebuild with live estimator — bookings doubled across MA & RI.",
    },
    {
      co: "AIDES-T2D",
      desc: "Clinical full-stack platform built under university faculty supervision.",
    },
    {
      co: "WoundScanner",
      desc: "On-device ML for EMS — national finalist, Verizon Frontline Challenge.",
    },
    {
      co: "Five Stars Cargo",
      desc: "Digital presence and quoting workflow for US–Caribbean shipping.",
    },
    {
      co: "ADAGE Program",
      desc: "AI automation curriculum taught to community learners in Boston.",
    },
    {
      co: "StarJet",
      desc: "Route feasibility research and booking platform concept for Haiti–USA travel.",
    },
  ],
  method: {
    eyebrow: "The Method",
    title: "Strategy first. Everything else derives.",
    description:
      "We reverse-engineer your goals, deeply understand your audience, and embed as a true partner — typically starting with brand strategy, then aligning every digital surface to drive growth.",
    foundation: "Foundation",
    brandStrategy: "Brand Strategy",
    brandDesc:
      "Positioning, messaging, and identity — the source of truth every other surface derives from.",
    derivation: "Derivation",
  },
  derivations: [
    "Website & Digital",
    "Product & App",
    "AI Automation & Chatbots",
    "Content & Assets",
    "SEO / GEO / AEO",
    "Digital Marketing",
    "Go-to-Market",
  ],
  work: {
    eyebrow: "Our Work",
    title: "Unified to compound revenue.",
    description:
      "Brand positioning, design, and digital infrastructure — see how we've delivered for health, services, and logistics companies.",
  },
  workItems: [
    {
      co: "Saskia Cleaning",
      desc: "Live pricing, and an editorial design system serving MA & RI.",
    },
    {
      co: "WoundScanner",
      desc: "Offline-first EMS app with a 10-class wound classifier and transfusion risk estimator.",
    },
    {
      co: "AIDES-T2D",
      desc: "Clinical platform for type 2 diabetes education, built with university faculty.",
    },
    {
      co: "Five Stars Cargo",
      desc: "Shipping brand and quoting workflow connecting Everett, MA to the Caribbean.",
    },
  ],
  testimonials: [
    {
      quote:
        "They understood our business needs immediately and delivered within tight deadlines. A true value-based partner.",
      initials: "MC",
      name: "M. Charles",
      role: "Owner — Saskia Cleaning",
    },
    {
      quote:
        "The design-first mindset matched our platform goals exactly. The team over-delivers on customer experience.",
      initials: "DR",
      name: "D. Rousseau",
      role: "Director — Five Stars Cargo",
    },
    {
      quote:
        "They took our brand from where it started to a vision we're genuinely proud to present to investors.",
      initials: "KL",
      name: "K. Laurent",
      role: "Founder — Harbor Dental",
    },
  ],
  faq: {
    title: "FAQ",
  },
  faqs: [
    {
      q: "We already have an in-house team.",
      a: "The question isn't whether you have the capability — it's whether that capability is producing the results you want. Even strong internal teams get too close to the product to see it objectively. We embed alongside them and bring the outside market perspective they need.",
    },
    {
      q: "How are you different from a traditional agency?",
      a: "Traditional agencies optimize for the deliverable — they hand off a beautiful static site and walk away. We optimize for the growth objective behind it. Every surface we build is engineered to be relevant to your specific market segment and brand strategy.",
    },
    {
      q: "How do your engagements work?",
      a: "We use a flexible embedded model. Engagements start wherever we can make the biggest immediate impact, then scale monthly based on what the business actually needs — dialing up for a launch, scaling down in a quieter quarter.",
    },
    {
      q: "This isn't on our roadmap right now.",
      a: "A digital revenue leak doesn't wait for your roadmap. High bounce rates, activation churn, and confused prospects have a real cost. We don't distract your roadmap — we map where that revenue is leaking and patch the surfaces responsible.",
    },
    {
      q: "What kind of companies do you partner with?",
      a: "We partner with growth-minded startups, clinics, and service businesses where the digital presence is a primary growth lever — anywhere crucial customer and investor interactions run through a screen.",
    },
  ],
  footer: {
    heading: "Let's chat",
    question: "Have a question?",
    speak: "Speak to someone?",
    goTo: "Go to",
    services: "Services",
    industries: "Industries",
    goToItems: ["Home", "Services", "Work", "FAQ", "Strategy Call"],
    serviceItems: [
      "Brand Strategy",
      "Web Engineering",
      "Digital Product",
      "AI Automation",
      "Growth Marketing",
      "SEO / GEO / AEO",
    ],
    industryItems: [
      "Health & Clinical",
      "Local Services",
      "Logistics",
      "Travel Tech",
      "Education",
    ],
    offices: [
      { city: "Boston", addr: "Downtown Crossing" },
      { city: "Quincy", addr: "Hancock Street" },
      { city: "Everett", addr: "Broadway" },
      { city: "Port-au-Prince", addr: "Remote Hub" },
    ],
    copyright: "© 2026 WebAiGen. All Rights Reserved.",
    tagline: "EST. 2026 — Boston & Global",
  },
  theme: {
    light: "Switch to light mode",
    dark: "Switch to dark mode",
    toggle: "Toggle light / dark",
  },
  language: {
    label: "Select language",
    current: "Language",
  },
};

const fr: typeof en = {
  nav: {
    services: "Services",
    industries: "Secteurs",
    work: "Réalisations",
    about: "À propos",
    faq: "FAQ",
    cta: "Réserver un appel stratégique",
    logoAlt: "Logo WebAiGen",
  },
  search: {
    placeholder: "Rechercher…",
    noResults: "Aucun résultat",
    open: "Ouvrir la recherche",
    close: "Fermer la recherche",
    categories: {
      section: "Section",
      service: "Service",
      industry: "Secteur",
      work: "Réalisation",
      faq: "FAQ",
    },
  },
  announce: {
    text: "WebAiGen × ADAGE — Apporter la formation à l'automatisation IA au Grand Boston.",
    link: "En savoir plus",
  },
  hero: {
    title: "Partenaire de croissance en branding, web et IA.",
    description:
      "Nous créons des expériences numériques modernes pour les startups, cliniques et entreprises locales sur tous les supports — pour que votre présence en ligne",
    compoundRevenue: "génère des revenus",
    descriptionEnd: "au lieu de les perdre.",
    rating: "4,8/5,0 MEILLEURE NOTE",
    testimonial:
      "« Les réservations ont doublé le mois où notre nouveau site est entré en ligne. » — Saskia Cleaning",
    cta: "Voir nos réalisations",
  },
  stats: [
    {
      n: "40+",
      label: "Projets livrés",
      desc: "Plateformes web, applications mobiles et automatisations livrées dans la santé, les services et la logistique.",
    },
    {
      n: "3×",
      label: "Croissance moy. des leads",
      desc: "Augmentation typique des leads entrants qualifiés dans les 90 jours suivant une refonte web.",
    },
    {
      n: "12",
      label: "Secteurs servis",
      desc: "Des plateformes cliniques aux services de nettoyage, en passant par la logistique et la tech voyage.",
    },
    {
      n: "2026",
      label: "Année de création",
      desc: "Fondée à Boston comme alternative agile au modèle d'agence traditionnelle.",
    },
  ],
  marquee: {
    label: "Quelques-uns de nos partenaires",
  },
  thesis: {
    eyebrow: "Notre thèse",
    title: "Chaque pixel est un signal de prix.",
    description:
      "Chaque support avec lequel votre marché interagit — site web, produit, campagnes et supports commerciaux — envoie un signal immédiat de votre valeur. Quand le design et le message sont calibrés pour votre audience et unifiés par une stratégie de marque, la crédibilité grandit et les revenus se composent. Quand ils sont fragmentés, chaque interaction contredit la précédente.",
  },
  research: [
    {
      src: "McKinsey",
      big: "32%",
      title: "Croissance pilotée par le design",
      desc: "Les entreprises pleinement engagées dans le design augmentent leurs revenus environ un tiers plus vite que leurs pairs sur cinq ans.",
    },
    {
      src: "Forrester",
      big: "301%",
      title: "ROI de la maturité design",
      desc: "Des pratiques design matures offrent un ROI à trois chiffres tout en réduisant drastiquement le time-to-market.",
    },
    {
      src: "Stanford",
      big: "46%",
      title: "La crédibilité est visuelle",
      desc: "Près de la moitié des utilisateurs jugent la crédibilité d'une entreprise uniquement sur le design visuel de son site.",
    },
  ],
  proof: {
    eyebrow: "La preuve",
    title: "Des résultats concrets, en silence.",
    description:
      "Alors que d'autres partagent des portfolios flashy et des animations superficielles, nous nous concentrons sur des résultats business tangibles pour nos partenaires.",
  },
  proofItems: [
    {
      co: "Saskia Cleaning",
      desc: "Refonte Next.js avec estimateur en direct — réservations doublées au MA et RI.",
    },
    {
      co: "AIDES-T2D",
      desc: "Plateforme clinique full-stack construite sous supervision universitaire.",
    },
    {
      co: "WoundScanner",
      desc: "ML embarqué pour les EMS — finaliste national, Verizon Frontline Challenge.",
    },
    {
      co: "Five Stars Cargo",
      desc: "Présence digitale et workflow de devis pour l'expédition USA–Caraïbes.",
    },
    {
      co: "ADAGE Program",
      desc: "Programme d'automatisation IA enseigné aux apprenants de la communauté à Boston.",
    },
    {
      co: "StarJet",
      desc: "Étude de faisabilité et concept de plateforme de réservation Haïti–USA.",
    },
  ],
  method: {
    eyebrow: "La méthode",
    title: "La stratégie d'abord. Tout le reste en découle.",
    description:
      "Nous partons de vos objectifs, comprenons profondément votre audience et nous intégrons comme un vrai partenaire — en commençant par la stratégie de marque, puis en alignant chaque surface digitale pour la croissance.",
    foundation: "Fondation",
    brandStrategy: "Stratégie de marque",
    brandDesc:
      "Positionnement, message et identité — la source de vérité dont dérivent toutes les autres surfaces.",
    derivation: "Dérivation",
  },
  derivations: [
    "Site web & digital",
    "Produit & application",
    "Automatisation IA & chatbots",
    "Contenu & assets",
    "SEO / GEO / AEO",
    "Marketing digital",
    "Go-to-market",
  ],
  work: {
    eyebrow: "Nos réalisations",
    title: "Unifié pour composer les revenus.",
    description:
      "Positionnement de marque, design et infrastructure digitale — découvrez nos livraisons pour la santé, les services et la logistique.",
  },
  workItems: [
    {
      co: "Saskia Cleaning",
      desc: "Estimateur style KAYAK, tarifs en direct et système éditorial pour le MA et RI.",
    },
    {
      co: "WoundScanner",
      desc: "App EMS offline-first avec classificateur de plaies à 10 classes et estimateur de risque transfusionnel.",
    },
    {
      co: "AIDES-T2D",
      desc: "Plateforme clinique pour l'éducation au diabète de type 2, construite avec des enseignants universitaires.",
    },
    {
      co: "Five Stars Cargo",
      desc: "Marque d'expédition et workflow de devis reliant Everett, MA aux Caraïbes.",
    },
  ],
  testimonials: [
    {
      quote:
        "Ils ont compris nos besoins immédiatement et livré dans des délais serrés. Un vrai partenaire orienté valeur.",
      initials: "MC",
      name: "M. Charles",
      role: "Propriétaire — Saskia Cleaning",
    },
    {
      quote:
        "La mentalité design-first correspondait exactement à nos objectifs. L'équipe dépasse les attentes en expérience client.",
      initials: "DR",
      name: "D. Rousseau",
      role: "Directeur — Five Stars Cargo",
    },
    {
      quote:
        "Ils ont transformé notre marque en une vision dont nous sommes fiers de parler aux investisseurs.",
      initials: "KL",
      name: "K. Laurent",
      role: "Fondatrice — Harbor Dental",
    },
  ],
  faq: {
    title: "FAQ",
  },
  faqs: [
    {
      q: "Nous avons déjà une équipe interne.",
      a: "La question n'est pas d'avoir la capacité — c'est de savoir si elle produit les résultats voulus. Même les meilleures équipes internes sont trop proches du produit pour le voir objectivement. Nous nous intégrons à leurs côtés et apportons la perspective externe du marché.",
    },
    {
      q: "En quoi êtes-vous différents d'une agence traditionnelle ?",
      a: "Les agences traditionnelles optimisent le livrable — elles livrent un beau site statique et partent. Nous optimisons l'objectif de croissance derrière. Chaque surface que nous construisons est conçue pour votre segment de marché et votre stratégie de marque.",
    },
    {
      q: "Comment fonctionnent vos engagements ?",
      a: "Nous utilisons un modèle intégré flexible. Les missions commencent là où l'impact est le plus immédiat, puis s'adaptent mensuellement aux besoins réels — plus pour un lancement, moins en période calme.",
    },
    {
      q: "Ce n'est pas dans notre feuille de route pour l'instant.",
      a: "Une fuite de revenus digitaux n'attend pas votre roadmap. Taux de rebond élevés, churn et prospects confus ont un coût réel. Nous ne détournons pas votre roadmap — nous identifions où les revenus fuient et corrigeons les surfaces responsables.",
    },
    {
      q: "Avec quels types d'entreprises travaillez-vous ?",
      a: "Nous accompagnons startups, cliniques et entreprises de services orientées croissance, où la présence digitale est un levier principal — partout où clients et investisseurs interagissent via un écran.",
    },
  ],
  footer: {
    heading: "Discutons",
    question: "Une question ?",
    speak: "Parler à quelqu'un ?",
    goTo: "Aller à",
    services: "Services",
    industries: "Secteurs",
    goToItems: ["Accueil", "Services", "Réalisations", "FAQ", "Appel stratégique"],
    serviceItems: [
      "Stratégie de marque",
      "Ingénierie web",
      "Produit digital",
      "Automatisation IA",
      "Marketing de croissance",
      "SEO / GEO / AEO",
    ],
    industryItems: [
      "Santé & clinique",
      "Services locaux",
      "Logistique",
      "Tech voyage",
      "Éducation",
    ],
    offices: [
      { city: "Boston", addr: "Downtown Crossing" },
      { city: "Quincy", addr: "Hancock Street" },
      { city: "Everett", addr: "Broadway" },
      { city: "Port-au-Prince", addr: "Hub distant" },
    ],
    copyright: "© 2026 WebAiGen. Tous droits réservés.",
    tagline: "FONDÉ EN 2026 — Boston & international",
  },
  theme: {
    light: "Passer en mode clair",
    dark: "Passer en mode sombre",
    toggle: "Basculer clair / sombre",
  },
  language: {
    label: "Choisir la langue",
    current: "Langue",
  },
};

const es: typeof en = {
  nav: {
    services: "Servicios",
    industries: "Industrias",
    work: "Proyectos",
    about: "Nosotros",
    faq: "FAQ",
    cta: "Reservar llamada estratégica",
    logoAlt: "Logo de WebAiGen",
  },
  search: {
    placeholder: "Buscar…",
    noResults: "Sin resultados",
    open: "Abrir búsqueda",
    close: "Cerrar búsqueda",
    categories: {
      section: "Sección",
      service: "Servicio",
      industry: "Industria",
      work: "Proyecto",
      faq: "FAQ",
    },
  },
  announce: {
    text: "WebAiGen × ADAGE — Llevando educación en automatización con IA al Gran Boston.",
    link: "Leer más",
  },
  hero: {
    title: "Socio de crecimiento en branding, web e IA.",
    description:
      "Creamos experiencias digitales modernas para startups, clínicas y negocios locales en todos los medios — para que tu presencia online",
    compoundRevenue: "multiplique ingresos",
    descriptionEnd: "en lugar de perderlos.",
    rating: "4,8/5,0 MEJOR VALORADO",
    testimonial:
      '"Las reservas se duplicaron el mes en que lanzamos nuestro nuevo sitio." — Saskia Cleaning',
    cta: "Ver nuestros proyectos",
  },
  stats: [
    {
      n: "40+",
      label: "Proyectos entregados",
      desc: "Plataformas web, apps móviles y automatizaciones en salud, servicios y logística.",
    },
    {
      n: "3×",
      label: "Crecim. prom. de leads",
      desc: "Aumento típico de leads entrantes calificados en 90 días tras una nueva presencia web.",
    },
    {
      n: "12",
      label: "Industrias atendidas",
      desc: "Desde plataformas clínicas hasta servicios de limpieza, logística y tecnología de viajes.",
    },
    {
      n: "2026",
      label: "Año de fundación",
      desc: "Fundada en Boston como alternativa ágil al modelo de agencia tradicional.",
    },
  ],
  marquee: {
    label: "Algunos de nuestros socios",
  },
  thesis: {
    eyebrow: "Nuestra tesis",
    title: "Cada píxel es una señal de precio.",
    description:
      "Cada medio con el que interactúa tu mercado — sitio web, producto, campañas y activos comerciales — es una señal inmediata de tu valor. Cuando el diseño y el mensaje están calibrados para tu audiencia y unificados por una estrategia de marca, la credibilidad crece y los ingresos se componen. Cuando están fragmentados, cada interacción contradice la anterior.",
  },
  research: [
    {
      src: "McKinsey",
      big: "32%",
      title: "Crecimiento impulsado por diseño",
      desc: "Las empresas plenamente comprometidas con el diseño crecen en ingresos aproximadamente un tercio más rápido que sus pares en cinco años.",
    },
    {
      src: "Forrester",
      big: "301%",
      title: "ROI de madurez en diseño",
      desc: "Prácticas de diseño maduras ofrecen ROI de tres cifras mientras reducen drásticamente el time-to-market.",
    },
    {
      src: "Stanford",
      big: "46%",
      title: "La credibilidad es visual",
      desc: "Casi la mitad de los usuarios juzgan la credibilidad de una empresa solo por el diseño visual de su sitio.",
    },
  ],
  proof: {
    eyebrow: "La prueba",
    title: "Resultados reales, sin ruido.",
    description:
      "Mientras otros comparten portfolios llamativos y animaciones superficiales, nos enfocamos en resultados de negocio tangibles para nuestros socios.",
  },
  proofItems: [
    {
      co: "Saskia Cleaning",
      desc: "Reconstrucción Next.js con estimador en vivo — reservas duplicadas en MA y RI.",
    },
    {
      co: "AIDES-T2D",
      desc: "Plataforma clínica full-stack construida bajo supervisión universitaria.",
    },
    {
      co: "WoundScanner",
      desc: "ML en dispositivo para EMS — finalista nacional, Verizon Frontline Challenge.",
    },
    {
      co: "Five Stars Cargo",
      desc: "Presencia digital y flujo de cotización para envíos EE.UU.–Caribe.",
    },
    {
      co: "ADAGE Program",
      desc: "Currículo de automatización con IA enseñado a la comunidad en Boston.",
    },
    {
      co: "StarJet",
      desc: "Estudio de viabilidad y concepto de plataforma de reservas Haití–EE.UU.",
    },
  ],
  method: {
    eyebrow: "El método",
    title: "Estrategia primero. Todo lo demás deriva.",
    description:
      "Partimos de tus objetivos, entendemos profundamente a tu audiencia y nos integramos como un socio real — empezando por la estrategia de marca y alineando cada superficie digital para impulsar el crecimiento.",
    foundation: "Fundación",
    brandStrategy: "Estrategia de marca",
    brandDesc:
      "Posicionamiento, mensaje e identidad — la fuente de verdad de la que derivan todas las demás superficies.",
    derivation: "Derivación",
  },
  derivations: [
    "Sitio web y digital",
    "Producto y app",
    "Automatización IA y chatbots",
    "Contenido y activos",
    "SEO / GEO / AEO",
    "Marketing digital",
    "Go-to-market",
  ],
  work: {
    eyebrow: "Nuestros proyectos",
    title: "Unificado para componer ingresos.",
    description:
      "Posicionamiento de marca, diseño e infraestructura digital — mira cómo hemos entregado para salud, servicios y logística.",
  },
  workItems: [
    {
      co: "Saskia Cleaning",
      desc: "Estimador estilo KAYAK, precios en vivo y sistema editorial para MA y RI.",
    },
    {
      co: "WoundScanner",
      desc: "App EMS offline-first con clasificador de heridas de 10 clases y estimador de riesgo transfusional.",
    },
    {
      co: "AIDES-T2D",
      desc: "Plataforma clínica para educación en diabetes tipo 2, construida con facultad universitaria.",
    },
    {
      co: "Five Stars Cargo",
      desc: "Marca de envíos y flujo de cotización conectando Everett, MA con el Caribe.",
    },
  ],
  testimonials: [
    {
      quote:
        "Entendieron nuestras necesidades de inmediato y entregaron en plazos ajustados. Un socio verdaderamente orientado al valor.",
      initials: "MC",
      name: "M. Charles",
      role: "Propietario — Saskia Cleaning",
    },
    {
      quote:
        "La mentalidad design-first coincidió exactamente con nuestros objetivos. El equipo supera las expectativas en experiencia del cliente.",
      initials: "DR",
      name: "D. Rousseau",
      role: "Director — Five Stars Cargo",
    },
    {
      quote:
        "Llevaron nuestra marca desde donde empezó hasta una visión de la que estamos orgullosos de hablar con inversores.",
      initials: "KL",
      name: "K. Laurent",
      role: "Fundadora — Harbor Dental",
    },
  ],
  faq: {
    title: "FAQ",
  },
  faqs: [
    {
      q: "Ya tenemos un equipo interno.",
      a: "La pregunta no es si tienen la capacidad — es si esa capacidad produce los resultados que quieren. Incluso equipos internos fuertes están demasiado cerca del producto para verlo con objetividad. Nos integramos junto a ellos y aportamos la perspectiva externa del mercado.",
    },
    {
      q: "¿En qué se diferencian de una agencia tradicional?",
      a: "Las agencias tradicionales optimizan el entregable — entregan un sitio estático bonito y se van. Nosotros optimizamos el objetivo de crecimiento detrás. Cada superficie que construimos está diseñada para tu segmento de mercado y estrategia de marca.",
    },
    {
      q: "¿Cómo funcionan sus compromisos?",
      a: "Usamos un modelo integrado flexible. Los proyectos empiezan donde podemos tener el mayor impacto inmediato, y escalan mensualmente según lo que el negocio necesita — más para un lanzamiento, menos en un trimestre tranquilo.",
    },
    {
      q: "Esto no está en nuestra hoja de ruta ahora.",
      a: "Una fuga de ingresos digitales no espera tu roadmap. Altas tasas de rebote, churn y prospectos confusos tienen un costo real. No distraemos tu roadmap — identificamos dónde se filtran los ingresos y corregimos las superficies responsables.",
    },
    {
      q: "¿Con qué tipo de empresas trabajan?",
      a: "Trabajamos con startups, clínicas y negocios de servicios orientados al crecimiento, donde la presencia digital es una palanca principal — donde clientes e inversores interactúan a través de una pantalla.",
    },
  ],
  footer: {
    heading: "Hablemos",
    question: "¿Tienes una pregunta?",
    speak: "¿Hablar con alguien?",
    goTo: "Ir a",
    services: "Servicios",
    industries: "Industrias",
    goToItems: ["Inicio", "Servicios", "Proyectos", "FAQ", "Llamada estratégica"],
    serviceItems: [
      "Estrategia de marca",
      "Ingeniería web",
      "Producto digital",
      "Automatización IA",
      "Marketing de crecimiento",
      "SEO / GEO / AEO",
    ],
    industryItems: [
      "Salud y clínica",
      "Servicios locales",
      "Logística",
      "Tech de viajes",
      "Educación",
    ],
    offices: [
      { city: "Boston", addr: "Downtown Crossing" },
      { city: "Quincy", addr: "Hancock Street" },
      { city: "Everett", addr: "Broadway" },
      { city: "Port-au-Prince", addr: "Hub remoto" },
    ],
    copyright: "© 2026 WebAiGen. Todos los derechos reservados.",
    tagline: "FUNDADA EN 2026 — Boston y global",
  },
  theme: {
    light: "Cambiar a modo claro",
    dark: "Cambiar a modo oscuro",
    toggle: "Alternar claro / oscuro",
  },
  language: {
    label: "Seleccionar idioma",
    current: "Idioma",
  },
};

export type Translations = typeof en;

export const translations: Record<Locale, Translations> = { en, fr, es };
