// ============================================================
//  ALL SITE IMAGES IN ONE PLACE
//  ------------------------------------------------------------
//  Two ways to change a photo:
//
//  EASIEST — keep the same file name:
//    Put your new photo in  src/assets/  with the SAME name as the
//    one you want to replace (e.g. overwrite "hero-cucina-verde.jpg").
//    Nothing else to edit.
//
//  OR — use a new file name:
//    1. Drop your photo in  src/assets/  (e.g. "my-photo.jpg")
//    2. Change the matching `import ... from` line below to point at it.
//
//  Use good-quality landscape/portrait JPGs. Astro shrinks & optimizes
//  them automatically at build time.
// ============================================================

import hero from "../assets/hero-cucina-verde.jpg"; // big background photo at the top
import about from "../assets/showroom.jpg"; // photo in the "Chi siamo / About" section

// Category cards (section 01)
import catKitchen from "../assets/cucina-moderna-legno.jpg"; // "Cucine"
import catBedroom from "../assets/camera.jpg"; // "Camere da letto"
import catWardrobe from "../assets/armadi.jpg"; // "Armadi & cabine"
import catLiving from "../assets/cucina-living.jpg"; // "Zona giorno"

// Showroom gallery (section 03) — 8 photos fill the 3x3 grid (9th cell = Facebook link)
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
  // keys here must match the "img" value used in src/i18n/ui.ts -> cats.items
  categories: {
    cucina: catKitchen,
    camera: catBedroom,
    armadi: catWardrobe,
    giorno: catLiving,
  },
  gallery: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8],
};
