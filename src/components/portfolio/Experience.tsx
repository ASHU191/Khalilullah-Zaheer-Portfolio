import { experience } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Eight years of shipping"
        description="A short timeline of the teams and studios I have built with."
      />

      <div className="relative mt-14 pl-8 sm:pl-0">
        <span className="gradient-brand absolute left-[7px] top-2 bottom-2 w-px opacity-40 sm:left-1/2" />

        <div className="space-y-10">
          {experience.map((item, i) => (
            <Reveal key={item.company} delay={i} className="relative">
              <span className="gradient-brand absolute -left-8 top-7 h-3.5 w-3.5 rounded-full ring-4 ring-background sm:left-1/2 sm:-translate-x-1/2" />
              <div
                className={
                  i % 2 === 0
                    ? "sm:mr-[calc(50%+2rem)]"
                    : "sm:ml-[calc(50%+2rem)]"
                }
              >
                <div className="glass-card hover-lift rounded-3xl p-7">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                    {item.period}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/80">
                    {item.company}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
