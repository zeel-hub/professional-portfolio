import { Section } from "../components/Section";
import { profile } from "../data/portfolio";
import { downloadResume } from "../components/Navbar";
import { Mail, Linkedin, FileText } from "lucide-react";

export const Contact = () => (
  <Section id="contact">
    <div className="surface accent-indigo relative overflow-hidden rounded-[2rem] px-8 py-16 text-center shadow-elevate sm:px-12 sm:py-20">
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(94,92,230,0.25), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-ink-3">
        Contact
      </p>
      <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Have a problem worth automating? Let's talk.
      </h2>
      <p className="mx-auto mt-4 max-w-prose text-lg text-ink-2">
        I'm always happy to talk about engineering tooling, automation, and
        making teams faster.
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          data-testid="contact-email"
          className="btn-press inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white shadow-elevate hover:opacity-90"
        >
          <Mail className="h-4 w-4" />
          {profile.email}
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="contact-linkedin"
          className="btn-press inline-flex items-center gap-2 rounded-full border border-border bg-bg-2 px-5 py-3 text-sm font-semibold hover:bg-bg-3"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
        <button
          onClick={downloadResume}
          data-testid="contact-resume"
          className="btn-press inline-flex items-center gap-2 rounded-full border border-border bg-bg-2 px-5 py-3 text-sm font-semibold hover:bg-bg-3"
        >
          <FileText className="h-4 w-4" />
          Resume
        </button>
      </div>
    </div>
  </Section>
);
