# Zeel Patel — Portfolio

A premium, Apple/macOS-inspired personal portfolio for **Zeel Patel**, Quality Engineer & Automation Engineer.
It's designed to feel like a calm, native macOS application — minimal, elegant, and intentional — built to showcase engineering tools that make teams faster.

🔗 **Live:** _add your GitHub Pages URL here_

---

## ✨ Features

- **macOS-inspired design** — floating glass navigation with traffic lights, soft charcoal dark theme (default) + warm light theme, subtle depth and motion.
- **Light / Dark mode** with a smooth, persistent theme toggle.
- **Command palette** — press `⌘K` / `Ctrl+K` for Spotlight-style navigation, project search, and quick actions.
- **Featured projects** as floating macOS-window cards, each with a dedicated engineering case-study page (Overview → Problem → Solution → Architecture → Challenges → Decisions → Lessons → Future Improvements) and real screenshots.
- **Live web projects** — embedded previews of deployed GitHub Pages apps.
- **Request Resume** — opens a pre-filled email instead of a static download.
- **Accessible & responsive** — keyboard navigation, reduced-motion support, and layouts tuned for desktop, tablet, and mobile.

---

## 🛠 Tech Stack

- **React** (Create React App + CRACO)
- **Tailwind CSS** for styling
- **Framer Motion** for subtle, premium animations
- **lucide-react** for icons
- **React Router** (`HashRouter`) for client-side routing
- **shadcn/ui** + **cmdk** for the command palette

> This is a **frontend-only** static site — no backend or database required.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- [Yarn](https://yarnpkg.com/) (this project uses Yarn, not npm)

### Install & run
```bash
cd frontend
yarn install
yarn start
```
The app runs at `http://localhost:3000`.

### Build for production
```bash
cd frontend
yarn build
```
This outputs a `build/` folder containing `index.html` (at its root) and a `static/` assets folder.

---

## 📦 Deploying to GitHub Pages

The project is preconfigured for GitHub Pages:
- `"homepage": "."` in `package.json` → relative asset paths (works at any repo path).
- `HashRouter` → deep links like `/#/projects/...` work without server config or 404 hacks.

**Steps:**
```bash
cd frontend
yarn add -D gh-pages        # one-time
yarn build
npx gh-pages -d build       # publishes build/ to the gh-pages branch root
```
Then in your repo: **Settings → Pages → Source → `gh-pages` branch (root)**.

---

## 📁 Project Structure

```
frontend/
├── public/                 # static assets + index.html template
└── src/
    ├── App.js              # routes + theme provider
    ├── data/portfolio.js   # all content (profile, experience, projects, skills, education)
    ├── components/         # Navbar, CommandPalette, ProjectPreview, WebProjectCard, etc.
    ├── sections/           # Hero, About, Experience, Projects, Skills, Education, Contact
    └── pages/              # Home, ProjectDetail
```

> ✏️ **Editing content:** almost everything (bio, experience, projects, skills, education, contact, links) lives in **`frontend/src/data/portfolio.js`**. Update that one file to change the site's content.

---

## 📬 Contact

- **Email:** 0210zeel@gmail.com
- **Phone:** +1 647 540 5725
- **LinkedIn:** [zeel-patel-4a19491a7](https://www.linkedin.com/in/zeel-patel-4a19491a7/)
- **Location:** Ontario, Canada

---

Built with attention to detail using React, Tailwind CSS & Framer Motion.
