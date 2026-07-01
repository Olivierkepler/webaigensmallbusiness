# WebAiGen — Next.js + TypeScript + Tailwind

Agency landing page with a light/dark theme toggle (light is the default).

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## How theming works

- Color tokens live as CSS variables in `app/globals.css` (`:root` = light, `[data-theme="dark"]` = dark).
- `tailwind.config.ts` maps those variables to Tailwind color names (`bg-bg`, `bg-surface`, `text-muted`, `text-accent-ink`, ...), so components never hardcode hex values.
- `components/ThemeToggle.tsx` flips the `data-theme` attribute on `<html>` and persists the choice in `localStorage`.
- An inline script in `app/layout.tsx` applies a saved dark preference before first paint so there is no flash of the wrong theme.

## Structure

```
app/            layout, page, global styles
components/     one component per section + ThemeToggle + Reveal
lib/data.ts     all page content (stats, partners, work, FAQ, ...)
```

Edit `lib/data.ts` to change content without touching any component.
