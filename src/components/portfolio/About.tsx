import { Check } from "lucide-react";
import { about } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title={about.heading}
        description="Senior Web Developer specialising in Shopify, WordPress and conversion-focused frontend work."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="glass-card hover-lift rounded-3xl p-8 sm:p-10">
          <div className="space-y-5">
            {about.paragraphs.map((text) => (
              <p key={text} className="text-base leading-relaxed text-muted-foreground">
                {text}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={1} className="glass-card rounded-3xl p-8 sm:p-10">
          <h3 className="font-display text-lg font-semibold">What I do</h3>
          <ul className="mt-6 grid gap-3">
            {about.services.map((service) => (
              <li key={service} className="flex items-center gap-3 text-sm">
                <span className="gradient-brand flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  <Check className="h-3.5 w-3.5 text-primary-foreground" />
                </span>
                <span className="text-foreground/90">{service}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
