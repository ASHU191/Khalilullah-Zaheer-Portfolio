import { motion } from "motion/react";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import { profile, socials, stats } from "@/data/portfolio";
import { ActionLink, Pill, SocialLinks, fadeUp } from "./primitives";

export function Hero() {
  const upwork = socials.find((s) => s.icon === "upwork")!;

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="glow-top pointer-events-none absolute inset-x-0 top-0 h-[560px]" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial="hidden" animate="show">
          <motion.div variants={fadeUp} custom={0}>
            <Pill>
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {profile.available}
            </Pill>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-6xl"
          >
            <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-5 font-display text-base font-medium text-foreground/85 sm:text-lg"
          >
            {profile.title}
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <ActionLink href="#work">
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </ActionLink>
            <ActionLink href={upwork.href} external variant="outline">
              Hire Me
            </ActionLink>
            <ActionLink href="#contact" variant="outline">
              <Mail className="h-4 w-4" />
              Contact Me
            </ActionLink>
          </motion.div>

          <motion.div variants={fadeUp} custom={5} className="mt-10">
            <SocialLinks items={socials} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="gradient-brand absolute -inset-4 rounded-[2.5rem] opacity-25 blur-2xl" />
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-3">
            <img
              src={profileImage}
              alt={`${profile.name} — Shopify and WordPress developer`}
              width={1024}
              height={1024}
              className="aspect-square w-full rounded-[1.6rem] object-cover"
            />
            <div className="glass-panel absolute bottom-6 left-6 right-6 rounded-2xl px-4 py-3">
              <p className="font-display text-sm font-semibold">8+ years</p>
              <p className="text-xs text-muted-foreground">
                Building eCommerce that converts
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-20 grid w-full max-w-6xl grid-cols-2 gap-4 px-6 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="glass-card hover-lift rounded-3xl p-6"
          >
            <p className="gradient-text font-display text-2xl font-semibold sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
