# How to edit this website

No coding experience needed for the common changes below. After any change, run
`npm run build` (or keep `npm run dev` running to preview live at http://localhost:4321).

Everything you'd normally want to change lives in **four files**.

---

## 1. Text / wording  →  `src/i18n/ui.ts`

All the words on the site are here, in two blocks:
- `const it = { ... }`  → Italian (the main `/` page)
- `const en = { ... }`  → English (the `/en/` page)

Find the sentence you want to change between the `" "` quotes and type the new text.
**Change it in BOTH `it` and `en`** so the two languages stay in sync.

> Tip: don't delete the quotes, commas, or the words before the `:`. Only change the
> text inside the `"..."`.

---

## 2. Contact details  →  `src/config/site.ts`

Phone, address, email, opening hours, VAT number, Facebook link, map — all here.
Each line is labelled. Change the value inside the quotes.

**WhatsApp button:** it's hidden/disabled until you add a number. Find:
```ts
whatsapp: { display: "", href: "" },
```
and fill it in (mobile number, international format):
```ts
whatsapp: { display: "+39 351 234 5678", href: "393512345678" },
```
`href` = the number with country code, **no “+” and no spaces**. Once filled, the
WhatsApp button turns on automatically everywhere.

---

## 3. Photos  →  `src/config/images.ts`  (+ the `src/assets/` folder)

**Easiest way:** put your new photo in the `src/assets/` folder using the **same file
name** as the one you're replacing (for example overwrite `hero-cucina-verde.jpg`).
Done — nothing else to edit.

**To use a different file name:** drop your photo in `src/assets/`, open
`src/config/images.ts`, and change the matching `import ... from "../assets/..."` line
to your new file name. Each line says where that photo appears.

> Use good-quality JPGs. The site shrinks and optimizes them for you automatically.

---

## 4. Colors & fonts  →  `src/styles/global.css`

At the very top, in the box marked **“EDIT BRAND COLORS & FONTS HERE”**. Change a colour
value (e.g. `--color-red: #d11f0f;`) and it updates across the whole site.

---

## Running the site

| Command         | What it does                                   |
| :-------------- | :--------------------------------------------- |
| `npm install`   | First-time setup (run once)                    |
| `npm run dev`   | Live preview while editing → http://localhost:4321 |
| `npm run build` | Make the final site (creates the `dist/` folder) |

To publish, upload the `dist/` folder to your host (or connect the project to Vercel/Netlify).
