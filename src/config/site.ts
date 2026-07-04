// Business facts. Items marked PLACEHOLDER are invented per request and
// must be replaced with real data before going live.

export const business = {
  name: "Mobili Rocca",
  legalName: "Mobili Rocca S.r.l.",
  town: "Broccostella",
  province: "FR",
  region: "Lazio",
  foundedYear: 1970, // PLACEHOLDER

  address: {
    street: "Via Stella 166 ",
    zip: "03030",
    city: "Broccostella",
    province: "FR",
    full: "Via Stella 166, 03030 Broccostella (FR)",
  },

  phone: { display: "0776 890050", href: "+390776890050" },
  // WhatsApp: leave both strings empty ("") to hide / disable the WhatsApp button.
  // To enable it, put the mobile number in international format WITHOUT "+" or spaces,
  // e.g. display: "+39 351 234 5678", href: "393512345678".
  whatsapp: { display: "", href: "" },
  email: "info@mobilirocca.it", // PLACEHOLDER
  vat: "IT 02784500608", // PLACEHOLDER

  social: {
    facebook: "https://www.facebook.com/MobilificioRoccaBroccostella/",
  },

  // Embedded map (no API key needed)
  mapEmbed:
    "https://www.google.com/maps?q=Mobili+Rocca+Via+Stella+116+Broccostella&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Mobili+Rocca+Via+Stella+116+Broccostella",

  partners: ["Mobilturi", "IMAB Group", "Colombini Group", "Merolla", "Tancredi", "La Seggiola"],
} as const;

export type Day = { d: string; en: string; h: string[] | null };

export const hours: Day[] = [
  { d: "Lunedì",    en: "Monday",    h: ["09:00 – 13:00", "16:00 – 20:00"] },
  { d: "Martedì",   en: "Tuesday",   h: ["09:00 – 13:00", "16:00 – 20:00"] },
  { d: "Mercoledì", en: "Wednesday", h: ["09:00 – 13:00", "16:00 – 20:00"] },
  { d: "Giovedì",   en: "Thursday",  h: ["09:00 – 13:00", "16:00 – 20:00"] },
  { d: "Venerdì",   en: "Friday",    h: ["09:00 – 13:00", "16:00 – 20:00"] },
  { d: "Sabato",    en: "Saturday",  h: ["09:00 – 13:00", "16:00 – 20:00"] },
  { d: "Domenica",  en: "Sunday",    h: null },
];

// True only when a WhatsApp number has been configured above.
export const hasWhatsapp = business.whatsapp.href.trim() !== "";

export const waLink = (text: string) =>
  `https://wa.me/${business.whatsapp.href}?text=${encodeURIComponent(text)}`;
