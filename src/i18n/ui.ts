export const languages = ["it", "en"] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = "it";

// Section anchors are stable across languages
export const anchors = {
  catalogo: "catalogo",
  chiSiamo: "chi-siamo",
  showroom: "showroom",
  servizi: "servizi",
  contatti: "contatti",
};

const it = {
  meta: {
    title: "Mobili Rocca — Arredamenti a Broccostella (FR) dal 1970",
    description:
      "Mobili Rocca: cucine, camere, soggiorni, armadi e molto altro. Dal 1970 lo showroom di riferimento per l'arredamento in Ciociaria. Broccostella (FR).",
  },
  nav: {
    items: [
      { label: "Catalogo", href: "#catalogo" },
      { label: "Chi siamo", href: "#chi-siamo" },
      { label: "Showroom", href: "#showroom" },
      { label: "Servizi", href: "#servizi" },
      { label: "Contatti", href: "#contatti" },
    ],
    callCta: "Chiama ora", 
    otherHref: "/en/",
    otherName: "EN",
    menu: "Menu",
    close: "Chiudi",
  },
  hero: {
    eyebrow: "Arredamenti dal 1970 — Broccostella (FR)",
    line1: "Arrediamo",
    line2: "ogni stanza",
    line3: "della tua casa",
    body: "Cucine, camere, soggiorni, armadi su misura e molto altro. Dal 1970 il punto di riferimento per l'arredamento nel cuore della Ciociaria.",
    ctaPrimary: "Vieni in showroom",
    ctaSecondary: "Scopri il catalogo",
    scroll: "Scopri",
  },
  cats: {
    num: "01",
    eyebrow: "Cosa arrediamo",
    title: "Una casa intera, ambiente per ambiente.",
    intro:
      "Non solo cucine. In showroom trovi tutto l'occorrente per arredare ogni angolo della tua casa, dal progetto alla posa.",
    items: [
      { img: "cucina", title: "Cucine, tavoli e sedie", desc: "Moderne o classiche, componibili e su misura." },
      { img: "camera", title: "Camere da letto", desc: "Armadi, letti, comò e finiture per il tuo riposo." },
      { img: "giorno", title: "Camerette", desc: "Camerette moderne e personalizzabili per ogni esigenza." },
      { img: "armadi", title: "Soggiorni e divani", desc: "Spazi accoglienti progettati per il tuo benessere quotidiano." },
    ],
    moreLabel: "E inoltre",
    more: ["Materassi & reti", "Complementi d'arredo"],
  },
  about: {
    num: "02",
    eyebrow: "Chi siamo",
    title: "Da generazioni, l'arredo di qualità nelle vostre case in Italia e all'estero",
    p1: "Dal 1970 Mobili Rocca accompagna le famiglie del territorio nella scelta dell'arredo, con un grande showroom a Broccostella e una passione per il legno e per il bello che si tramanda di padre in figlio.",
    p2: "Dalla cucina alla camera, dal soggiorno agli armadi su misura: selezioniamo solo prodotti di qualità dei migliori marchi italiani e ti seguiamo dal primo progetto fino al montaggio in casa.",
    stats: [
      { n: "1970", l: "dalla nostra apertura" },
      { n: "2", l: "generazioni di famiglia" },
      { n: "100%", l: "qualità Made in Italy" },
    ],
    partnersLabel: "In showroom",
    partnersTail: "e i migliori marchi del Made in Italy.",
  },
  gallery: {
    num: "03",
    eyebrow: "Lo showroom",
    title: "Vieni a vederlo dal vivo.",
    intro:
      "Ambienti veri, allestiti per farti toccare con mano materiali, finiture e dettagli.",
    cta: "Altre foto su Facebook",
  },
  services: {
    num: "04",
    eyebrow: "I nostri servizi",
    title: "Ti seguiamo dal progetto al montaggio.",
    items: [
      { title: "Progettazione & consulenza", desc: "Progettiamo con te ogni ambiente, su misura e nei minimi dettagli." },
      { title: "Consegna a domicilio", desc: "Consegniamo noi, direttamente a casa tua." },
      { title: "Montaggio & assistenza", desc: "Il nostro team monta tutto a regola d'arte, a casa tua." },
      { title: "Showroom & parcheggio", desc: "Ampio spazio espositivo, parcheggio e accesso facilitato." },
    ],
    moreLabel: "Inoltre",
    more: ["Pagamenti con carte e NFC", "Ritiro in sede", "Wi-Fi", "Accesso disabili"],
  },
  contact: {
    num: "05",
    eyebrow: "Dove trovarci",
    title: "Vieni a trovarci in showroom.",
    body: "Lo showroom è il posto migliore per toccare con mano materiali e finiture. Ti aspettiamo a Broccostella.",
    addressLabel: "Indirizzo",
    hoursLabel: "Orari di apertura",
    closed: "Chiuso",
    call: "Telefono",
    whatsapp: "WhatsApp",
    email: "Email",
    directions: "Indicazioni stradali",
    waText: "Ciao Mobili Rocca, vorrei avere informazioni sui vostri arredi.",
  },
  footer: {
    tagline: "Arredamenti dal 1970 — Broccostella (FR)",
    explore: "Naviga",
    contact: "Contatti",
    hours: "Orari",
    rights: "Tutti i diritti riservati.",
  },
};

// English mirrors the Italian structure
const en: typeof it = {
  meta: {
    title: "Mobili Rocca — Furniture in Broccostella (FR) since 1968",
    description:
      "Mobili Rocca: kitchens, bedrooms, living areas, wardrobes and much more. Since 1968 the go-to furniture showroom in Ciociaria. Broccostella (FR), Italy.",
  },
  nav: {
    items: [
      { label: "Catalogue", href: "#catalogo" },
      { label: "About", href: "#chi-siamo" },
      { label: "Showroom", href: "#showroom" },
      { label: "Services", href: "#servizi" },
      { label: "Contact", href: "#contatti" },
    ],
    callCta: "Call now",
    otherHref: "/",
    otherName: "IT",
    menu: "Menu",
    close: "Close",
  },
  hero: {
    eyebrow: "Furniture since 1968 — Broccostella (FR), Italy",
    line1: "We furnish",
    line2: "every room",
    line3: "of your home",
    body: "Kitchens, bedrooms, living areas, made-to-measure wardrobes and much more. Since 1968, the reference point for home furnishing in the heart of Ciociaria.",
    ctaPrimary: "Visit the showroom",
    ctaSecondary: "See the catalogue",
    scroll: "Explore", 
  },
  cats: {
    num: "01",
    eyebrow: "What we furnish",
    title: "A whole home, room by room.",
    intro:
      "Not only kitchens. Our showroom has everything to furnish every corner of your home — from the design to the install.",
    items: [
      { img: "cucina", title: "Kitchens", desc: "Modern or classic, modular and made to measure." },
      { img: "camera", title: "Bedrooms", desc: "Beds, dressers and finishes for your rest." },
      { img: "armadi", title: "Wardrobes & closets", desc: "Hinged, sliding doors and walk-in closets." },
      { img: "giorno", title: "Living areas", desc: "Living rooms, wall units and sofas." },
    ],
    moreLabel: "And also",
    more: ["Kids' rooms", "Mattresses & beds", "Sofas & upholstery", "Curtains", "Décor", "Outdoor furniture"],
  },
  about: {
    num: "02",
    eyebrow: "About us",
    title: "Three generations furnishing Ciociaria.",
    p1: "Since 1970 Mobili Rocca has helped local families choose their furniture, with a large showroom in Broccostella and a passion for wood and beauty handed down from father to son.",
    p2: "From the kitchen to the bedroom, from the living room to bespoke wardrobes: we select only quality products from the best Italian brands and follow you from the first design to the install at home.",
    stats: [
      { n: "1970", l: "since we opened" },
      { n: "3", l: "family generations" },
      { n: "100%", l: "Made in Italy quality" },
    ],
    partnersLabel: "In the showroom",
    partnersTail: "and the finest Made in Italy brands.",
  },
  gallery: {
    num: "03",
    eyebrow: "The showroom",
    title: "Come and see it for real.",
    intro:
      "Real room sets, styled so you can feel the materials, finishes and details.",
    cta: "More photos on Facebook",
  },
  services: {
    num: "04",
    eyebrow: "Our services",
    title: "With you from design to install.",
    items: [
      { title: "Design & consultation", desc: "We design every space with you, made to measure, no obligation." },
      { title: "Home delivery", desc: "We deliver across the area, even same-day." },
      { title: "Professional assembly", desc: "Our team installs everything to perfection, at your home." },
      { title: "Showroom & parking", desc: "Large display space, parking and step-free access." },
    ],
    moreLabel: "Also",
    more: ["Card & NFC payments", "In-store pickup", "Wi-Fi", "Wheelchair access"],
  },
  contact: {
    num: "05",
    eyebrow: "Find us",
    title: "Come and visit our showroom.",
    body: "The showroom is the best place to feel the materials and finishes first-hand. We look forward to seeing you in Broccostella.",
    addressLabel: "Address",
    hoursLabel: "Opening hours",
    closed: "Closed",
    call: "Phone",
    whatsapp: "WhatsApp",
    email: "Email",
    directions: "Get directions",
    waText: "Hi Mobili Rocca, I'd like some information about your furniture.",
  },
  footer: {
    tagline: "Furniture since 1968 — Broccostella (FR), Italy",
    explore: "Explore",
    contact: "Contact",
    hours: "Hours",
    rights: "All rights reserved.",
  },
};

const dict = { it, en };

export type Dict = typeof it;

export function useT(lang: Lang): Dict {
  return dict[lang] ?? dict[defaultLang];
}
