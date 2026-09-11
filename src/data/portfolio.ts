/**
 * SINGLE SOURCE OF TRUTH for all website content.
 * Edit this file to update the site — no component changes needed.
 */

export interface Project {
  image: string;
  title: string;
  description: string;
  link: string;
  tech: string[];
  category: ProjectCategory;
}

export type ProjectCategory =
  | "Shopify"
  | "WordPress"
  | "Landing Pages"
  | "Custom Development";

export interface Social {
  name: string;
  href: string;
  icon: "upwork" | "linkedin" | "github" | "twitter" | "instagram";
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const profile = {
  name: "Khalil U.",
  title:
    "Shopify & WordPress Expert | eCommerce Developer | Frontend Developer",
  tagline:
    "I build high-converting websites, landing pages, Shopify stores, and custom web solutions that help businesses grow online.",
  available: "Available for new projects",
  email: "hello@example.com",
};

export const socials: Social[] = [
  {
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/~018c59e29fe3bebd70",
    icon: "upwork",
  },
  { name: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { name: "GitHub", href: "https://github.com/", icon: "github" },
  { name: "Twitter", href: "https://x.com/", icon: "twitter" },
  { name: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  heading: "Senior Web Developer building stores that sell",
  paragraphs: [
    "For over eight years I have partnered with founders, agencies and eCommerce brands to design and develop websites that do more than look good — they convert. My focus is Shopify and WordPress development, backed by a strong frontend foundation.",
    "From a full Shopify Plus build to a WooCommerce migration, a fast landing page or a speed and SEO overhaul, I handle the work end to end: clean code, clear communication and a result you can hand straight to your marketing team.",
  ],
  services: [
    "Shopify Development",
    "WordPress Development",
    "WooCommerce",
    "Landing Pages",
    "Website Optimization",
    "Conversion-focused Design",
  ],
};

export const stats: Stat[] = [
  { value: "8+", label: "Years Experience" },
  { value: "Expert", label: "Shopify & WordPress" },
  { value: "100%", label: "Responsive Websites" },
  { value: "Always", label: "Client-focused Solutions" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "eCommerce",
    skills: ["Shopify", "Shopify Plus", "Liquid", "WooCommerce"],
  },
  {
    title: "CMS & Backend",
    skills: ["WordPress", "PHP", "API Integration", "SEO Optimization"],
  },
  {
    title: "Frontend",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
];

export const projectFilters = [
  "All",
  "Shopify",
  "WordPress",
  "Landing Pages",
  "Custom Development",
] as const;

/**
 * ADD YOUR PROJECTS HERE.
 * Only image / title / description / link / tech / category are needed.
 */
export const projects: Project[] = [
  {
    image:
      "https://res.cloudinary.com/yoof237d/image/upload/f_auto,q_auto/1_4",
    title: "Premium Watch Store",
    description:
      "Shopify Plus storefront with custom product configurator and a checkout flow that lifted conversions by 34%.",
    link: "https://example.com",
    tech: ["Shopify Plus", "Liquid", "Tailwind CSS"],
    category: "Shopify",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
    title: "SaaS Launch Landing Page",
    description:
      "High-converting launch page with animated sections, A/B tested hero and a 4.1% signup rate.",
    link: "https://example.com",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Landing Pages",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=80",
    title: "Interior Studio Website",
    description:
      "Custom WordPress theme with a visual page builder the client's team manages entirely on their own.",
    link: "https://example.com",
    tech: ["WordPress", "PHP", "ACF"],
    category: "WordPress",
  },
  {
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    title: "Organic Grocery WooCommerce",
    description:
      "WooCommerce store with subscription boxes, delivery slots and a 1.8s load time after optimization.",
    link: "https://example.com",
    tech: ["WooCommerce", "WordPress", "PHP"],
    category: "WordPress",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    title: "Analytics Dashboard",
    description:
      "Custom React dashboard pulling live order data from Shopify and Stripe into one clean view.",
    link: "https://example.com",
    tech: ["React", "TypeScript", "API Integration"],
    category: "Custom Development",
  },
  {
    image:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1200&q=80",
    title: "Skincare Brand Store",
    description:
      "Full Shopify build with bundle upsells, quiz-based product finder and a refreshed brand system.",
    link: "https://example.com",
    tech: ["Shopify", "Liquid", "JavaScript"],
    category: "Shopify",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Co-Founder",
    company: "Webions",
    period: "2019 - Present",
    description:
      "Leading a small senior team delivering Shopify and WordPress builds for brands across the US, UK and Australia.",
  },
  {
    role: "Senior Web Developer",
    company: "The HelpAce",
    period: "2022 - 2025",
    description:
      "Owned eCommerce delivery end to end: theme architecture, performance work and conversion optimization.",
  },
  {
    role: "Full Stack Developer",
    company: "Inceptives Digital",
    period: "2017 - 2019",
    description:
      "Built custom WordPress and WooCommerce solutions, integrations and marketing landing pages.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Khalil rebuilt our Shopify store from the ground up. Sales are up, the site is fast, and communication was effortless throughout.",
    name: "Client Name",
    role: "Founder, Brand Co.",
    initials: "CN",
  },
  {
    quote:
      "One of the few developers who thinks about conversions, not just code. Our landing page doubled its signup rate.",
    name: "Client Name",
    role: "Marketing Lead, SaaS Inc.",
    initials: "CN",
  },
  {
    quote:
      "Delivered ahead of schedule and handled every revision without a fuss. We have hired him for three projects since.",
    name: "Client Name",
    role: "Agency Owner",
    initials: "CN",
  },
];
