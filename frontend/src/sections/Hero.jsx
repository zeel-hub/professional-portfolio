import { motion, useReducedMotion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/portfolio";
import { HeroIllustration } from "../components/HeroIllustration";
import { scrollToSection, downloadResume } from "../components/Navbar";

const fade = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
});

export const Hero = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const reduce = useReducedMotion();
  const m = (delay) => (reduce ? {} : fade(delay));

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pb-16 pt-32"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="accent-blue">
          <motion.div
            {...m(0.05)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-3/60 px-3.5 py-1.5 text-sm text-ink-2"
          >
            <MapPin className="h-3.5 w-3.5 text-blue" />
            {profile.location}
          </motion.div>

          <motion.h1
            {...m(0.12)}
            className="font-display text-4xl font-semibold leading-[1.07] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-grad">{profile.headline}</span>
          </motion.h1>

          <motion.p
            {...m(0.2)}
            className="mt-6 max-w-prose text-lg leading-relaxed text-ink-2"
          >
            {profile.subhead}
          </motion.p>

          <motion.div {...m(0.28)} className="mt-9 flex flex-wrap items-center gap-3">
            <button
              data-testid="hero-view-projects"
              onClick={() => scrollToSection("projects", navigate, pathname)}
              className="btn-press inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white shadow-elevate hover:opacity-90"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              data-testid="hero-download-resume"
              onClick={downloadResume}
              className="btn-press inline-flex items-center gap-2 rounded-full border border-border bg-bg-2 px-6 py-3 text-sm font-semibold text-ink hover:bg-bg-3"
            >
              Download Resume
            </button>
            <button
              data-testid="hero-contact"
              onClick={() => scrollToSection("contact", navigate, pathname)}
              className="btn-press inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-ink-2 hover:text-ink"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div {...m(0.36)} className="mt-8 flex items-center gap-3">
            {[
              { href: profile.linkedin, icon: Linkedin, label: "LinkedIn", id: "linkedin" },
              { href: profile.github, icon: Github, label: "GitHub", id: "github" },
              { href: `mailto:${profile.email}`, icon: Mail, label: "Email", id: "email" },
            ].map((s) => (
              <a
                key={s.id}
                href={s.href}
                target={s.id === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                data-testid={`hero-social-${s.id}`}
                className="btn-press grid h-10 w-10 place-items-center rounded-full border border-border bg-bg-2 text-ink-2 hover:text-ink"
              >
                <s.icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div {...m(0.3)} className="lg:pl-6">
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  );
};
