import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionLabel, SectionTitle } from "../components/Section";
import { projects, webProjects } from "../data/portfolio";
import { ProjectPreview } from "../components/ProjectPreview";
import { TrafficLights } from "../components/TrafficLights";
import { WebProjectCard } from "../components/WebProjectCard";

export const Projects = () => {
  const navigate = useNavigate();
  const reduce = useReducedMotion();

  return (
    <Section id="projects">
      <SectionLabel>Featured Projects</SectionLabel>
      <SectionTitle className="max-w-2xl">
        Tools that make engineering teams faster.
      </SectionTitle>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.button
            key={p.slug}
            type="button"
            data-testid={`project-card-${p.slug}`}
            onClick={() => navigate(`/projects/${p.slug}`)}
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={reduce ? {} : { y: -6 }}
            className="group surface overflow-hidden rounded-3xl text-left shadow-soft transition-shadow duration-300 hover:shadow-float"
          >
            {/* window title bar */}
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <TrafficLights />
              <span className="font-display text-xs font-medium tracking-wide text-ink-3">
                {p.name}
              </span>
            </div>

            {/* screenshot preview */}
            <div className="h-52 overflow-hidden">
              <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                <ProjectPreview project={p} />
              </div>
            </div>

            {/* meta */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-ink-2 transition-colors group-hover:bg-blue group-hover:text-white group-hover:border-blue">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
                {p.tagline}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.slice(0, 4).map((s) => (
                  <span key={s} className="chip py-1 text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="mt-20">
        <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
          Web &amp; coursework
        </h3>
        <p className="mt-2 max-w-prose text-ink-2">
          A few front-end builds — each one is live, click through to try it.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {webProjects.map((p, i) => (
            <WebProjectCard key={p.demo} project={p} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
};
