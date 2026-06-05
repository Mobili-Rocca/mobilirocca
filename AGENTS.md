# AGENTS.md

Guidance for AI coding agents working on this repository. Human-readable too. Keep it current.

## What this is

A static, bilingual (IT/EN) one-page marketing site for **Mobili Rocca**, a furniture
showroom. Astro + Tailwind CSS v4. No backend, no database, minimal client JS.

## Commands

```bash
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # static build to ./dist/  — MUST pass before committing
npm run preview   # serve the built ./dist/
```

There is no test suite. **Verification = `npm run build` succeeds** and the change renders
correctly. If you need a visual check, run the build/preview yourself; do not add a test
framework unless asked.

## Architecture

- **Pages** (`src/pages/`): `index.astro` (IT, `/`) and `en/index.astro` (EN, `/en/`). Both
  render `src/components/Home.astro` with a `lang` prop. Keep them thin.
- **`Home.astro`** wraps `Base.astro` (the `<html>` shell) and renders the section components
  in order: Header → Hero → Categories → About → Gallery → Services → Contact → Footer.
- **Section components** (`src/components/*.astro`) are self-contained: markup + scoped
  `<style>`. They take a `lang` prop and pull their copy from the i18n dictionary.
- **Global JS** lives only in `Base.astro` (scroll-reveal, sticky-header state, mobile menu).
  Don't introduce a client framework (React/Vue/etc.).

## Single sources of truth — do NOT hardcode these in components

| Concern | File | Notes |
| --- | --- | --- |
| All copy/text | `src/i18n/ui.ts` | Two dicts: `it` and `en`. **Always edit both.** `en` is typed `: typeof it`, so the shapes must match. |
| Business facts | `src/config/site.ts` | Address, phone, hours, email, VAT, WhatsApp, map, partners. |
| Images | `src/config/images.ts` | Every photo imported once and named. Components import from here, not from `../assets` directly. |
| Colours / fonts | `src/styles/global.css` | Tailwind v4 `@theme` block at the top (`--color-*`, `--font-*`). There is **no `tailwind.config`** — tokens live in CSS. |

## Conventions

- **Astro components**, scoped styles. Prefer plain CSS in the component `<style>` for
  layout; use Tailwind utilities where convenient. Brand values come from CSS custom
  properties (`var(--color-red)` etc.), not hardcoded hex.
- **Images**: always use `astro:assets` `<Image>` with `widths`/`sizes`. Source files go in
  `src/assets/` and are wired through `src/config/images.ts`.
- **i18n**: keep `it` and `en` dictionaries structurally identical. Section anchors
  (`#catalogo`, `#chi-siamo`, …) are language-stable — do not localize the `id`s.
- **Accessibility**: keep `:focus-visible`, `aria-*`, and the `prefers-reduced-motion`
  handling in `global.css`. New motion must be disabled under reduced-motion.

## Guardrails

- **Never commit** `dist/` or `node_modules/` (already in `.gitignore`).
- Values marked `// PLACEHOLDER` in `src/config/site.ts` are **fake** (founding year, WhatsApp,
  email, VAT). Do not present them as real; do not invent more without flagging.
- **WhatsApp**: `business.whatsapp` empty ⇒ `hasWhatsapp` is false ⇒ the button is disabled
  (Contact) / hidden (Footer). Keep that conditional intact when touching those components.
- Don't add dependencies casually. This site is intentionally lean (Astro + Tailwind + fonts).

## Component gotchas (read before editing these)

- **Hero** (`Hero.astro`): fullscreen, bottom-anchored. The headline is two visual lines:
  line 1 = `line1` + italic `<em class="ac">line2</em>` (so "Arrediamo *ogni stanza*" share a
  line); line 2 = `line3`, which gets a red period via `.tail::after`. Therefore `line3` in
  `ui.ts` has **no trailing period**. `.lwrap` uses `overflow:hidden` for the reveal mask and
  has bottom padding so italic descenders (e.g. the "g") aren't clipped.
- **Header** (`Header.astro`): transparent with **light** text over the dark hero; switches to
  a paper background with **ink** text on scroll (`.is-scrolled`) and when the mobile menu is
  open (`:has(.burger[aria-expanded="true"])`). Keep both states working.
- **Gallery** (`Gallery.astro`): desktop is 3 explicit equal-height columns. Each column holds
  one tall (`r45`), one wide (`r43`) and one square (`r11`) tile so column heights match and the
  **bottom edge is flush**. The Facebook link is the square tile in the middle column. If you
  add/remove photos, preserve the per-column 1×tall + 1×wide + 1×square balance, or the bottoms
  will go ragged. Tiles use `aspect-ratio` so a slow/missing image never collapses to alt text.
- **Logo** (`Logo.astro`): the wordmark is reconstructed in CSS (red "MOBILI" block + "ROCCA" in
  `currentColor`), so it recolors on light/dark grounds. The raster `public/logo.jpg` is only
  favicon/OG.

## Adding a new section

1. Create `src/components/MySection.astro` (take `lang`, pull copy from `useT(lang)`).
2. Add its copy to **both** `it` and `en` in `src/i18n/ui.ts`.
3. Render it in `Home.astro` in the desired order.
4. If it appears in the nav, add an entry to `nav.items` (both languages) and give the section
   a stable `id`. Section numbers ("01 / 05" …) are manual — update `SectionHead` numbers and
   the `/ 05` total if the count changes.
