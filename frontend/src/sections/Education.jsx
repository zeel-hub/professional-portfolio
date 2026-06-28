import { Section, SectionLabel, SectionTitle } from "../components/Section";
import { education } from "../data/portfolio";
import { GraduationCap } from "lucide-react";

export const Education = () => (
  <Section id="education">
    <SectionLabel>Education</SectionLabel>
    <SectionTitle className="max-w-2xl">Foundations.</SectionTitle>

    <div className="mt-12 grid gap-6 sm:grid-cols-2">
      {education.map((e, i) => (
        <div
          key={i}
          data-testid={`education-${i}`}
          className={`surface rounded-3xl p-8 shadow-soft ${e.accent}`}
        >
          <div
            className="grid h-11 w-11 place-items-center rounded-2xl text-white shadow-elevate"
            style={{ background: "rgb(var(--acc))" }}
          >
            <GraduationCap className="h-5 w-5" />
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold">{e.school}</h3>
          <p className="mt-1 text-ink-2">{e.degree}</p>
          <p className="text-ink-3">{e.field}</p>
          <p className="mt-2 text-sm text-ink-3">{e.period}</p>
        </div>
      ))}
    </div>
  </Section>
);
