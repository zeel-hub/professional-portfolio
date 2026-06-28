import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { projectBySlug, projects } from "../data/portfolio";
import { ProjectPreview } from "../components/ProjectPreview";
import { TrafficLights } from "../components/TrafficLights";

const Block = ({ title, children }) => (
  <div className="border-t border-border pt-8">
    <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink-3">
      {title}
    </h2>
    <div className="mt-4 max-w-prose text-[17px] leading-relaxed text-ink-2">
      {children}
    </div>
  </div>
);

const List = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3">
        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
        {item}
      </li>
    ))}
  </ul>
);

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const reduce = useReducedMotion();
  const project = projectBySlug(slug);

  if (!project) {
    return (
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-3xl font-semibold">Project not found</h1>
        <Link to="/" className="mt-4 text-blue hover:underline">
          Back home
        </Link>
      </div>
    );
  }

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className={`mx-auto w-full max-w-4xl px-6 pb-24 pt-32 ${project.accent}`}>
      <button
        onClick={() => navigate("/")}
        data-testid="project-back"
        className="btn-press mb-10 inline-flex items-center gap-2 rounded-full border border-border bg-bg-2 px-4 py-2 text-sm font-medium text-ink-2 hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to portfolio
      </button>

      <motion.header
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          <span className="text-grad">{project.name}</span>
        </h1>
        <p className="mt-4 max-w-prose text-xl leading-relaxed text-ink-2">
          {project.tagline}
        </p>

        {(project.github || project.demo) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.github && (
              <a
                data-testid="project-github"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-bg hover:opacity-90"
              >
                <Github className="h-4 w-4" />
                GitHub Repository
              </a>
            )}
            {project.demo && (
              <a
                data-testid="project-demo"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center gap-2 rounded-full border border-border bg-bg-2 px-5 py-2.5 text-sm font-semibold hover:bg-bg-3"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        )}
      </motion.header>

      {/* hero screenshot window */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="surface mt-10 overflow-hidden rounded-3xl shadow-float"
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <TrafficLights />
          <span className="font-display text-xs font-medium tracking-wide text-ink-3">
            {project.name}
          </span>
        </div>
        <div className="h-72 sm:h-80">
          {project.screenshots ? (
            <img
              src={project.screenshots[0]}
              alt={`${project.name} screenshot`}
              className="h-full w-full bg-bg-3 object-cover object-top"
              loading="lazy"
            />
          ) : (
            <ProjectPreview project={project} />
          )}
        </div>
      </motion.div>

      <div className="mt-14 space-y-10">
        <Block title="Overview">{project.overview}</Block>
        <Block title="Problem">{project.problem}</Block>
        <Block title="Solution">{project.solution}</Block>
        <Block title="Architecture">
          <List items={project.architecture} />
        </Block>
        <Block title="Technology Stack">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </Block>
        {project.screenshots && (
          <div className="border-t border-border pt-8">
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink-3">
              Screenshots
            </h2>
            <div className="mt-5 grid gap-5">
              {project.screenshots.map((src, i) => (
                <figure
                  key={i}
                  data-testid={`project-screenshot-${i}`}
                  className="surface overflow-hidden rounded-2xl shadow-soft"
                >
                  <div className="flex items-center gap-2 border-b border-border px-3 py-2">
                    <TrafficLights />
                  </div>
                  <img
                    src={src}
                    alt={`${project.name} screenshot ${i + 1}`}
                    className="w-full bg-bg-3 object-contain"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </div>
        )}
        <Block title="Challenges">
          <List items={project.challenges} />
        </Block>
        <Block title="Engineering Decisions">
          <List items={project.decisions} />
        </Block>
        <Block title="Lessons Learned">{project.lessons}</Block>
        <Block title="Future Improvements">
          <List items={project.future} />
        </Block>
      </div>

      {/* next project */}
      <Link
        to={`/projects/${next.slug}`}
        data-testid="project-next"
        className="surface group mt-16 flex items-center justify-between rounded-3xl p-6 shadow-soft transition-shadow hover:shadow-elevate"
      >
        <div>
          <p className="text-sm text-ink-3">Next project</p>
          <p className="font-display text-xl font-semibold">{next.name}</p>
        </div>
        <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-ink-2 transition-colors group-hover:bg-blue group-hover:text-white group-hover:border-blue">
          <ArrowRight className="h-5 w-5" />
        </span>
      </Link>
    </article>
  );
}
