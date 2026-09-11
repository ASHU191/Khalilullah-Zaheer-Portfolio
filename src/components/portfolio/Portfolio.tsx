import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projectFilters, projects, type Project } from "@/data/portfolio";
import { Section, SectionHeading, TechBadge, fadeUp } from "./primitives";
import { cn } from "@/lib/utils";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card hover-lift group overflow-hidden rounded-3xl"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-background/75 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100" />
          <span className="glass-panel absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-[calc(50%+4px)]">
            View Project
            <ArrowUpRight className="h-4 w-4 text-primary" />
          </span>
        </div>

        <div className="p-7">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
              {project.title}
            </h3>
            <span className="rounded-full border border-glass-border px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground">
              {project.category}
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
        </div>
      </a>
    </motion.article>
  );
}

export function Portfolio() {
  const [active, setActive] = useState<string>("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  );

  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected client work"
        description="Stores, landing pages and custom builds shipped for brands and agencies worldwide."
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="glass-panel mx-auto mt-10 flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-full p-1.5"
      >
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
              active === filter
                ? "gradient-brand text-primary-foreground shadow-glow"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {filter}
          </button>
        ))}
      </motion.div>

      <motion.div layout className="mt-12 grid gap-7 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="mt-12 text-center text-sm text-muted-foreground">
          No projects in this category yet.
        </p>
      )}
    </Section>
  );
}
