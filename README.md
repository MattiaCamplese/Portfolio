# Portfolio — Mattia Camplese

Personal portfolio website built with React 19 + Vite, deployed on Vercel.

## Tech stack

- **React 19** + **TypeScript** (strict)
- **Vite 7** — bundler and dev server
- **Tailwind CSS v4** — utility-first styling via `@tailwindcss/vite`
- **shadcn/ui** — accessible UI primitives (Radix UI under the hood)
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Type-check + production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## Project structure

```
src/
├── sections/          # Page sections (Hero, Esperienza, Projects, Stack, Formazione, Contact)
├── components/        # Shared UI components (NavBar, Footer, AnimatedBackdrop, Section, shadcn)
├── lib/
│   ├── data.ts        # All portfolio content (experiences, projects, stack, education)
│   └── utils.ts       # cn() utility
└── main.tsx           # App entry point

public/
├── mattia.png         # Profile photo
└── cv-mattia-camplese.pdf
```

## Static assets

Place `mattia.png` and `cv-mattia-camplese.pdf` in the `public/` folder. They are served at the root path (`/mattia.png`, `/cv-mattia-camplese.pdf`).

## Deployment

The project deploys automatically to Vercel. `vercel.json` contains an SPA rewrite rule so all routes resolve to `index.html`.

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

Push to `main` → Vercel picks it up and builds with `npm run build`.

## Updating content

All portfolio data lives in [src/lib/data.ts](src/lib/data.ts). Edit the `experiences`, `projects`, `stackGroups`, and `education` arrays — no need to touch the components.
