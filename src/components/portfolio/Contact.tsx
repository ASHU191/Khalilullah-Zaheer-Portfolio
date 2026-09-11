import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { profile, socials } from "@/data/portfolio";
import {
  ActionLink,
  Reveal,
  Section,
  SectionHeading,
  SocialLinks,
  buttonClasses,
} from "./primitives";

const fieldClasses =
  "w-full rounded-2xl border border-glass-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors duration-300 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-ring/30";

export function Contact() {
  const [sending, setSending] = useState(false);
  const upwork = socials.find((s) => s.icon === "upwork")!;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Message ready to send", {
        description:
          "Connect an email service to deliver messages, or reach out on Upwork in the meantime.",
      });
    }, 700);
  };

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something great together"
        description="Tell me about your project and I'll reply within one business day."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <Reveal className="glass-card rounded-3xl p-8 sm:p-10">
          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm">
                <span className="font-medium">Name</span>
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className={fieldClasses}
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="font-medium">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className={fieldClasses}
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm">
              <span className="font-medium">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="What are you building?"
                className={fieldClasses}
              />
            </label>
            <button
              type="submit"
              disabled={sending}
              className={`${buttonClasses("primary")} w-full disabled:opacity-70`}
            >
              {sending ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </form>
        </Reveal>

        <Reveal delay={1} className="glass-card flex flex-col rounded-3xl p-8 sm:p-10">
          <h3 className="font-display text-lg font-semibold">
            Prefer to hire directly?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            I work with most clients through Upwork, where you can see my full
            job history and reviews. Long-term contracts and fixed-scope
            projects both welcome.
          </p>
          <ActionLink href={upwork.href} external className="mt-7 w-full">
            Hire Me on Upwork
          </ActionLink>
          <p className="mt-8 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Elsewhere
          </p>
          <SocialLinks items={socials} className="mt-4" />
          <p className="mt-8 text-sm text-muted-foreground">
            Or email{" "}
            <a
              href={`mailto:${profile.email}`}
              className="text-primary underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
