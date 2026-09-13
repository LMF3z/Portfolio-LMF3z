# LMF3z Dev — Portfolio

Personal portfolio website built with Astro 7 (SSR) + React 19 + Tailwind CSS 4.

## Tech Stack

- **Framework:** [Astro 7](https://astro.build) (SSR, `output: 'server'`)
- **Adapter:** `@astrojs/node` (standalone)
- **UI:** [React 19](https://react.dev) + [Tailwind CSS 4](https://tailwindcss.com)
- **Email:** [Resend](https://resend.com) via Astro Actions
- **Language:** TypeScript

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Run production server
node dist/server/entry.mjs
```

## Environment Variables

Create a `.env` file:

```env
RESEND_KEY=re_your_api_key_here
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
    index.astro             # Single page
```

## Sections

| Section | Description |
|---|---|
| **Hero** | Name, role, stats, CTA |
| **Arsenal** | Tech stack grid (Backend, Frontend, Databases, DevOps) |
| **Projects** | Featured work (Pharma Dash, Farma24 Flota, Client VIP, CLI Manager, Wear OS) |
| **Experience** | Work history (Farma24, Atik Solutions, Atel Comunicaciones) |
| **About** | Bio + principles |
| **Contact** | Form → Resend email |

## Deployment

```bash
pnpm build
node dist/server/entry.mjs
```

Requires `HOST` and `PORT` env vars (defaults to `0.0.0.0:4321`).

## License

Private — LMF3z Enterprises
