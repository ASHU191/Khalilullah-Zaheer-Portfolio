import { skillGroups } from "@/data/portfolio";
import { Reveal, Section, SectionHeading, TechBadge } from "./primitives";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="The stack behind every build"
        description="Tools I use daily to ship fast, maintainable and search-friendly websites."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i}
            className="glass-card hover-lift h-full rounded-3xl p-8"
          >
            <span className="gradient-brand block h-1 w-10 rounded-full" />
            <h3 className="mt-5 font-display text-lg font-semibold">
              {group.title}
            </h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <TechBadge key={skill}>{skill}</TechBadge>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
