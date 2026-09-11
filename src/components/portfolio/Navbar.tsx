import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { navLinks, profile, socials } from "@/data/portfolio";
import { ActionLink } from "./primitives";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const upwork = socials.find((s) => s.icon === "upwork")!;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500",
          scrolled ? "glass-panel shadow-elevated" : "border border-transparent",
        )}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="gradient-brand flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-primary-foreground">
            K
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:bg-surface-strong hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ActionLink href={upwork.href} external className="px-5 py-2.5">
            Hire Me
          </ActionLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="glass-card flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel mx-auto mt-3 max-w-6xl rounded-3xl p-4 lg:hidden"
        >
          <ul className="grid gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-surface-strong hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ActionLink
            href={upwork.href}
            external
            className="mt-3 w-full"
          >
            Hire Me on Upwork
          </ActionLink>
        </motion.div>
      )}
    </motion.header>
  );
}
