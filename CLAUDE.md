# CLAUDE.md

Project guidance for Claude Code. The full, canonical guide is **[AGENTS.md](AGENTS.md)** —
read it first. This file repeats the essentials.

## TL;DR

Static bilingual (IT/EN) Astro + Tailwind v4 landing page for **Mobili Rocca** (furniture
showroom). No backend, no tests, minimal client JS.

```bash
npm run dev      # http://localhost:4321
npm run build    # MUST pass before committing — this is the verification step
```

## Where things live (don't hardcode in components)

- **Text** → `src/i18n/ui.ts` — edit **both** `it` and `en` (shapes must match).
- **Business facts** (address, phone, hours, WhatsApp, email, VAT, map) → `src/config/site.ts`.
- **Images** → `src/config/images.ts` (components import from here, not `../assets`).
- **Colours / fonts** → `@theme` block at the top of `src/styles/global.css` (no `tailwind.config`).

## Must-respect rules

- Never commit `dist/` or `node_modules/`.
- `// PLACEHOLDER` values in `site.ts` are fake (founding year, WhatsApp, email, VAT) — don't
  present them as real.
- Empty `business.whatsapp` ⇒ `hasWhatsapp=false` ⇒ WhatsApp button disabled/hidden. Keep it.
- Keep `prefers-reduced-motion`, `:focus-visible`, and `aria-*` intact.
- Don't add a client framework or unnecessary dependencies.

## Easy-to-break spots (see AGENTS.md "Component gotchas")

- **Hero** headline: `line1` + italic `line2` on one line; `line3` has **no trailing period**
  (the red dot is added by `.tail::after`). `.lwrap` clips descenders — keep its bottom padding.
- **Header**: light over hero, ink on scroll / menu-open. Keep both states.
- **Gallery**: 3 equal-height columns (each = 1 tall + 1 wide + 1 square) for a flush bottom;
  the Facebook link is the middle square. Preserve that balance when changing photos.
