import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title="What clients say"
        description="Placeholder reviews — swap them for real client feedback any time."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((item, i) => (
          <Reveal
            key={item.quote}
            delay={i}
            className="glass-card hover-lift flex h-full flex-col rounded-3xl p-8"
          >
            <Quote className="h-7 w-7 text-primary/70" />
            <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
              &ldquo;{item.quote}&rdquo;
            </p>
            <div className="mt-6 flex gap-1">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-3.5 w-3.5 fill-accent text-accent" />
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 border-t border-glass-border pt-6">
              <span className="gradient-brand flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-primary-foreground">
                {item.initials}
              </span>
              <div>
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
