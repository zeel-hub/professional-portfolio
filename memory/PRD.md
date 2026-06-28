# PRD — Zeel Patel Portfolio (Apple/macOS-inspired)

## Original Problem Statement
Build a premium, Apple/macOS-inspired personal portfolio for Zeel Patel (Senior Quality Engineer / Automation Engineer / Python Developer, Hamilton ON). It must feel like a native macOS app — calm, minimal, elegant, polished. Story: "I don't just test software. I build tools that make engineering teams faster." Audience: SWE/QA/SDET Managers, Recruiters, Staff Engineers, CTOs.

## User Choices
- Frontend-only static site (no backend).
- Contact via `mailto`. Resume = placeholder (toast) until a URL/file is provided.
- Polished placeholder content (user to provide real details + photo + resume later).
- Dark mode default, light mode toggle.

## Architecture
- React (CRA + craco, `@/` alias) + Tailwind + Framer Motion + lucide-react + react-router-dom 7 + next-themes + cmdk/sonner. No backend, no DB.
- Token-driven theming in `index.css` (light + `.dark`); design tokens from `/app/design_guidelines.json`.
- Routes: `/` (Home), `/projects/:slug` (case study). `Layout` wraps Navbar + CommandPalette + Footer + Toaster.
- Content single source: `src/data/portfolio.js`.

## Implemented (2026-06)
- Floating glass navbar w/ macOS traffic lights, scroll-blur, active-link tracking, theme toggle, Resume, Cmd+K button.
- Hero with custom CSS/Framer macOS "automation pipeline" illustration (no stock photos), CTAs, social links.
- About (monogram card + philosophy), Experience timeline (impact-focused), Skills (chips, 8 groups), Education, minimal Contact, Footer.
- 6 Featured Projects as floating macOS-window cards + dedicated case-study pages (Overview→Future Improvements) with GitHub/Demo + next-project nav.
- Cmd/Ctrl+K command palette (Spotlight-style) — navigate, open projects, toggle theme, resume, social. a11y title/description added.
- Light/dark themes, subtle motion respecting reduced-motion, mobile overflow fixed.
- Verified by testing agent: ~98% pass, all core flows working.

## Backlog / Next Tasks
- P0: User to provide real photo (swap monogram in `About.jsx` `about-photo`), resume URL (`profile.resumeUrl`), real GitHub/demo/LinkedIn/email in `portfolio.js`, and real project/experience details.
- P1: Per-project live demos; real project screenshots if desired.
- P2: MDX-powered case studies; analytics; GitHub Pages export.

## Notes
- NO backend/DB. Contact = mailto. Resume/Demo links show a toast when URL empty (intentional).
