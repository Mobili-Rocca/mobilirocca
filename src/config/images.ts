
//  ALL SITE IMAGES IN ONE PLACE

import hero from "../assets/NocturnalAbstract_com-2.jpg";
import about from "../assets/cucina0.jpg";

// Category cards
import catKitchen from "../assets/cucina-moderna-legno.jpg";
import catBedroom  from "../assets/src/config/src/config/cameretta-standard-golf-c131.jpg";
import catWardrobe from "../assets/QMC021_soggiorni_imab_concept.jpg";
import catLiving   from "../assets/cucina-living.jpg";

// Galleria cucine
import cucina2 from "../assets/cucina-classica.jpg";
import cucina3 from "../assets/cucina-moderna-dark.jpg";

// Showroom gallery
import gallery1 from "../assets/cucina-classica.jpg";
import gallery2 from "../assets/cucina-moderna-dark.jpg";
import gallery3 from "../assets/25-modern-kitchen-nala-18-2.jpg";
import gallery4 from "../assets/cucina-moderna-legno.jpg";
import gallery5 from "../assets/cucina-elegante-classica-olimpia_ardesia_ghisa_03.jpg";
import gallery6 from "../assets/Cucina-Gaia-PET-sahara-opaco-tortora-opaco.jpg";
import gallery7 from "../assets/cucina-living.jpg";
import gallery8 from "../assets/hero-cucina-verde.jpg";

export const images = {
  hero,
  about,
  categories: {
    cucina:  [catKitchen, cucina2, cucina3],  // ← variabili, non nomi file!
    camera:  [catBedroom],
    armadi:  [catWardrobe],
    giorno:  [catLiving],
  },
  gallery: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8],
};
