import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import type { Social } from "@/data/portfolio";

/* ---------------- Motion helpers ---------------- */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Layout ---------------- */

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-24 sm:py-32", className)}>
      <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <Pill>{eyebrow}</Pill>
      <h2 className="mt-5 text-3xl font-semibold sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  );
}

export function Pill({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TechBadge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-glass-border bg-surface-strong px-3 py-1 text-xs font-medium text-foreground/90">
      {children}
    </span>
  );
}

/* ---------------- Buttons ---------------- */

type ButtonVariant = "primary" | "outline" | "ghost";

const buttonBase =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "gradient-brand text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:brightness-110",
  outline:
    "glass-card text-foreground hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary",
  ghost:
    "text-muted-foreground hover:text-foreground",
};

export function ActionLink({
  href,
  variant = "primary",
  external,
  className,
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(buttonBase, buttonVariants[variant], className)}
    >
      {children}
    </a>
  );
}

export function buttonClasses(variant: ButtonVariant = "primary") {
  return cn(buttonBase, buttonVariants[variant]);
}

/* ---------------- Social icons ---------------- */

function UpworkGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      <path d="M18.6 6.3c-2.2 0-3.9 1.4-4.6 3.7-1.1-1.6-1.9-3.5-2.4-5.1H8.9v6.2c0 1.2-1 2.3-2.3 2.3-1.2 0-2.3-1-2.3-2.3V4.9H1.6v6.2c0 2.8 2.2 5 5 5s5-2.2 5-5V9.9c.4.9.9 1.8 1.5 2.6l-1.3 6.2h2.7l1-4.5c.8.5 1.8.8 2.9.8h.2c2.6 0 4.8-2.1 4.8-4.9 0-2.5-2.1-4.6-4.8-4.6zm.1 6.9c-.9 0-1.7-.4-2.4-1l.2-.9c.2-1.2.9-2.4 2.2-2.4 1.1 0 2 .9 2 2.1s-.9 2.2-2 2.2z" />
    </svg>
  );
}

const socialIcons = {
  upwork: UpworkGlyph,
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  instagram: Instagram,
} as const;

export function SocialLinks({
  items,
  className,
}: {
  items: Social[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {items.map((social) => {
        const Icon = socialIcons[social.icon];
        return (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              className="glass-card flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
