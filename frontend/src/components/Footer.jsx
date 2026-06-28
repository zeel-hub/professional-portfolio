import { profile } from "../data/portfolio";

export const Footer = () => (
  <footer className="mx-auto w-full max-w-6xl px-6 pb-12 pt-8" data-testid="footer">
    <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-ink-3 sm:flex-row">
      <p>
        © {new Date().getFullYear()} {profile.name}. Designed with attention to detail.
      </p>
      <p>Built with React, Tailwind CSS &amp; Framer Motion.</p>
    </div>
  </footer>
);
