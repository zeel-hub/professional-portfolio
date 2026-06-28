import { Section, SectionLabel, SectionTitle } from "../components/Section";
import { profile, philosophy } from "../data/portfolio";

export const About = () => (
  <Section id="about">
    <SectionLabel>About</SectionLabel>
    <SectionTitle className="max-w-2xl">
      I solve the engineering problem, not just the symptom.
    </SectionTitle>

    <div className="mt-12 grid gap-6 lg:grid-cols-[280px_1fr]">
      {/* Photo / monogram card */}
      <div className="surface flex flex-col items-center gap-4 rounded-3xl p-6 text-center shadow-soft">
        <div
          className="h-40 w-40 overflow-hidden rounded-3xl border border-border shadow-elevate"
          data-testid="about-photo"
        >
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="text-sm text-ink-3">{profile.roles[0]}</p>
        </div>
      </div>

      {/* Story + philosophy */}
      <div className="surface rounded-3xl p-8 shadow-soft sm:p-10">
        <p className="max-w-prose text-lg leading-relaxed text-ink-2">
          {profile.summary}
        </p>

        <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {philosophy.map((p) => (
            <div key={p.title} data-testid={`philosophy-${p.title}`}>
              <h3 className="font-display text-base font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);
