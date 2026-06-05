# Mobili Rocca — Landing page

One-page bilingual (IT / EN) marketing site for **Mobili Rocca S.r.l.**, a furniture
showroom in Broccostella (FR). Built with **Astro 5 + Tailwind v4**, static output,
zero client JS except the header/menu/scroll-reveal helper.

## Design

Editorial Italian showroom: cream paper ground, warm near-black ink, brand **red**
(`#d11f0f`) as sharp punctuation. Display type **Fraunces**, body **Schibsted Grotesk**
(self-hosted via `@fontsource-variable`). Tokens live in `src/styles/global.css` (`@theme`).

## Structure

```
src/
├── assets/            showroom photos + logo (optimized at build by astro:assets)
├── components/        Home + section components (Header, Hero, Categories, About,
│                      Gallery, Services, Contact, Footer, Logo, SectionHead)
├── config/site.ts     business facts (address, phone, hours, map, partners)
├── i18n/ui.ts         all copy, IT + EN dictionaries (single source of truth)
├── layouts/Base.astro <html> shell, head/SEO, fonts, global scripts
└── pages/
    ├── index.astro    Italian  →  /
    └── en/index.astro English  →  /en/
```

The CSS wordmark in `Logo.astro` reconstructs the logo so it stays crisp and recolors
on dark/light grounds. The raster logo (`public/logo.jpg`) is used only for favicon / OG.

## Commands

| Command           | Action                                  |
| :---------------- | :-------------------------------------- |
| `npm run dev`     | Dev server at `localhost:4321`          |
| `npm run build`   | Build static site to `./dist/`          |
| `npm run preview` | Preview the production build            |

Deploy `dist/` anywhere static (Vercel / Netlify / any host).

## ⚠️ Placeholder data — REPLACE BEFORE LAUNCH

Invented per request; search `PLACEHOLDER` in `src/config/site.ts`:

- **Founding year** `1968` — used in hero, About "Est." tag, footer.
- **WhatsApp** `+39 351 234 5678` — a real mobile is required (the `0776 890050`
  landline cannot receive WhatsApp).
- **Email** `info@mobilirocca.it`.
- **VAT / P. IVA** `IT 02784500608`.

Confirmed real: address `Via Stella 116, 03030 Broccostella (FR)`, phone `0776 890050`,
opening hours, Facebook URL.

## Notes

- Photos are showroom/Mobilturi catalogue shots supplied by the owner. More can be
  pulled from the [Facebook page](https://www.facebook.com/MobilificioRoccaBroccostella/)
  or the Mobilturi catalogue. Drop new images in `src/assets/` and wire them in the
  relevant component.
- To edit any text, change `src/i18n/ui.ts` (keep IT and EN in sync).
- The embedded map uses a keyless Google Maps query; swap to a precise place URL if needed.
