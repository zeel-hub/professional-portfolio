import { Section, SectionLabel, SectionTitle } from "../components/Section";
import { skillGroups } from "../data/portfolio";

export const Skills = () => (
  <Section id="skills">
    <SectionLabel>Skills</SectionLabel>
    <SectionTitle className="max-w-2xl">
      A toolkit built around automation.
    </SectionTitle>

    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {skillGroups.map((group) => (
        <div
          key={group.title}
          data-testid={`skill-group-${group.title}`}
          className="surface rounded-3xl p-6 shadow-soft"
        >
          <h3 className="font-display text-base font-semibold">{group.title}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);
