import { Section, SectionLabel, SectionTitle } from "../components/Section";
import { experience } from "../data/portfolio";
import { Briefcase } from "lucide-react";

export const Experience = () => (
  <Section id="experience">
    <SectionLabel>Experience</SectionLabel>
    <SectionTitle className="max-w-2xl">
      Impact over responsibilities.
    </SectionTitle>

    <div className="mt-12 space-y-5">
      {experience.map((job, idx) => (
        <div
          key={idx}
          data-testid={`experience-${idx}`}
          className="surface relative rounded-3xl p-7 shadow-soft sm:p-9"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-blue/12 text-blue">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">{job.role}</h3>
                <p className="text-ink-2">{job.company}</p>
              </div>
            </div>
            <div className="pl-14 text-sm text-ink-3 sm:pl-0 sm:text-right">
              <p>{job.period}</p>
              <p>{job.location}</p>
            </div>
          </div>

          <ul className="mt-6 space-y-3 pl-14 sm:pl-14">
            {job.impact.map((item, i) => (
              <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);
