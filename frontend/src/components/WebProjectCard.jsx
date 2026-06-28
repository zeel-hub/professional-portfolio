import { motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  ClipboardList,
  GraduationCap,
  Dices,
  Map,
  Plane,
  ExternalLink,
} from "lucide-react";
import { TrafficLights } from "./TrafficLights";

const icons = { Building2, ClipboardList, GraduationCap, Dices, Map, Plane };
const accentRGB = {
  "accent-blue": "10 132 255",
  "accent-lavender": "175 82 222",
  "accent-indigo": "94 92 230",
  "accent-mint": "102 212 207",
};

export const WebProjectCard = ({ project, index = 0 }) => {
  const reduce = useReducedMotion();
  const Icon = icons[project.icon] || Building2;
  const rgb = accentRGB[project.accent] || accentRGB["accent-blue"];

  return (
    <motion.a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={`web-project-${index}`}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduce ? {} : { y: -6 }}
      className="group surface block overflow-hidden rounded-3xl shadow-soft transition-shadow duration-300 hover:shadow-float"
    >
      <div className="flex items-center gap-3 border-b border-border px-4 py-2.5">
        <TrafficLights />
        <span className="truncate font-display text-xs font-medium tracking-wide text-ink-3">
          {project.name}
        </span>
      </div>

      {/* live site thumbnail */}
      <div
        className="relative h-44 overflow-hidden"
        style={{ background: `rgb(${rgb} / 0.06)` }}
      >
        <iframe
          src={project.demo}
          title={project.name}
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          scrolling="no"
          sandbox="allow-scripts allow-same-origin"
          className="absolute left-0 top-0 origin-top-left"
          style={{
            width: "1200px",
            height: "850px",
            transform: "scale(0.315)",
            border: 0,
            pointerEvents: "none",
          }}
        />
        {/* click shield + hover veil */}
        <div className="absolute inset-0 bg-transparent transition-colors duration-300 group-hover:bg-black/[0.04]" />
      </div>

      <div className="flex items-center justify-between gap-3 p-5">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span
              className="grid h-7 w-7 shrink-0 place-items-center rounded-lg text-white"
              style={{ background: `rgb(${rgb})` }}
            >
              <Icon className="h-4 w-4" />
            </span>
            <h3 className="truncate font-display text-base font-semibold">
              {project.name}
            </h3>
          </div>
          <p className="mt-1.5 text-sm text-ink-2">{project.tagline}</p>
        </div>
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-ink-2 transition-colors group-hover:border-blue group-hover:bg-blue group-hover:text-white">
          <ExternalLink className="h-4 w-4" />
        </span>
      </div>
    </motion.a>
  );
};
