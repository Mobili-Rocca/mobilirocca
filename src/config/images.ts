
//  ALL SITE IMAGES IN ONE PLACE

import hero from "../assets/hero_cucina_beige.jpg";
import about from "../assets/showroom.jpg";

// Category cards
import catKitchen from "../assets/cucina-moderna-legno.jpg";
import catBedroom  from "../assets/camera.jpg";
import catWardrobe from "../assets/armadi.jpg";
import catLiving   from "../assets/cucina-living.jpg";

// Galleria cucine
import cucina2 from "../assets/cucina-classica.jpg";
import cucina3 from "../assets/cucina-moderna-dark.jpg";

// Showroom gallery
import gallery1 from "../assets/cucina-classica.jpg";
import gallery2 from "../assets/cucina-moderna-dark.jpg";
import gallery3 from "../assets/showroom.jpg";
import gallery4 from "../assets/cucina-moderna-legno.jpg";
import gallery5 from "../assets/camera.jpg";
import gallery6 from "../assets/armadi.jpg";
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
