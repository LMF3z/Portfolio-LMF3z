# Portfolio — LMF3z Dev

Personal portfolio website built with Astro 7 (SSR) + React 19 + Tailwind CSS 4.

## Stack

- **Framework:** Astro 7.3 (SSR, `output: 'server'`)
- **Adapter:** `@astrojs/node` (standalone)
- **UI:** React 19 + Tailwind CSS 4 (Vite plugin)
- **Email:** Resend via Astro Actions (`src/actions/index.ts`)
- **Env var:** `RESEND_KEY` in `.env`

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm preview      # Preview production build
```

## Project Structure

```
src/
  actions/index.ts          # Astro Actions (sendEmail via Resend)
  components/
    App.tsx                 # Root layout — wraps all sections
    Nav.tsx                 # Fixed nav with section links
    Hero.tsx                # Landing section
    TechStack.tsx           # Arsenal — tech categories grid
    Projects.tsx            # Files — project cards
    Experience.tsx          # Work log — job history
    About.tsx               # About me + principles
    Contact.tsx             # Contact form (Astro Action → Resend)
    Footer.tsx              # Footer
    BatSymbol.tsx           # SVG bat icon component
  constants/
    projects.constants.ts   # Project data (CASE #001–#005)
    techStack.constants.ts  # Tech categories + items
  hooks/
    useReveal.ts            # IntersectionObserver for scroll animations
  pages/
    index.astro             # Single page — renders <App />
  styles/                   # Global styles
```

## Conventions

- **Components:** Functional, no comments, no i18n.
- **Styling:** Tailwind utility classes. Gold accent: `#c9a84c`. Font families: Cinzel (headings), JetBrains Mono (labels).
- **Glass cards:** Use `glass-card` class for card containers.
- **Animations:** `reveal` + `reveal-delay-{1-4}` classes for scroll reveal.
- **Actions:** Use `defineAction` from `astro:actions` with Zod validation from `astro/zod`.
- **Form inputs:** Always include `name` attribute — required for FormData extraction.
- **Package manager:** pnpm.

## Key Files

| File | Purpose |
|---|---|
| `astro.config.mjs` | SSR mode, Node adapter, React + Tailwind plugins |
| `src/actions/index.ts` | `sendEmail` action — Resend integration |
| `src/constants/projects.constants.ts` | All project data (edit to add/update projects) |
| `src/constants/techStack.constants.ts` | Tech arsenal categories and items |
| `.env` | `RESEND_KEY` for Resend API |

## Deployment

The app builds as a standalone Node server:

```bash
pnpm build
node dist/server/entry.mjs
```

Requires `HOST` and `PORT` env vars (or defaults to `0.0.0.0:4321`).
