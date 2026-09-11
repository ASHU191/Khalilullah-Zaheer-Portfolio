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
    "https://res.cloudinary.com/yoof237d/image/upload/v1789145848/0_4.png",
  title: "Bauerfeind USA E-Commerce Store",
  description:
    "Premium medical products e-commerce platform with a clean shopping experience, product discovery and optimized online storefront.",
  link: "https://www.bauerfeind.us",
  tech: ["Shopify", "E-Commerce", "Custom Theme"],
  category: "Shopify",
},
{
  image:
    "https://res.cloudinary.com/yoof237d/image/upload/v1789145847/0_6.png",
  title: "Jungle Boys Florida Store",
  description:
    "Modern cannabis brand website with product showcases, location experience and a strong brand-focused digital presence.",
  link: "https://jungleboysflorida.com/",
  tech: ["Shopify", "Liquid", "E-Commerce"],
  category: "Shopify",
},
{
  image:
    "https://res.cloudinary.com/yoof237d/image/upload/v1789145848/0_7.png",
  title: "Maison De Luxe Website",
  description:
    "Luxury fashion storefront designed with an elegant interface, premium visuals and a smooth customer journey.",
  link: "https://maisondeluxe.co.in/",
  tech: ["Shopify", "Liquid", "Tailwind CSS"],
  category: "Shopify",
},
{
  image:
    "https://res.cloudinary.com/yoof237d/image/upload/v1789145849/0_5.png",
  title: "Sleep Shop Canada",
  description:
    "Sleep products e-commerce platform featuring product collections, online shopping experience and conversion-focused layouts.",
  link: "https://sleepshop.ca/",
  tech: ["WooCommerce", "WordPress", "PHP"],
  category: "WordPress",
},
{
  image:
    "https://res.cloudinary.com/yoof237d/image/upload/v1789145849/0_3.png",
  title: "Media Lab Website",
  description:
    "Creative digital platform showcasing services, projects and interactive content with a modern responsive design.",
  link: "https://medialab.aua.am/",
  tech: ["WordPress", "PHP", "Custom Design"],
  category: "WordPress",
},
{
  image:
    "https://res.cloudinary.com/yoof237d/image/upload/v1789145848/0_8.png",
  title: "Grounded Brand Website",
  description:
    "Brand-focused website with storytelling sections, modern layouts and an engaging user experience.",
  link: "https://grounded.org/",
  tech: ["WordPress", "CMS", "UI Design"],
  category: "WordPress",
},
{
  image:
    "https://res.cloudinary.com/yoof237d/image/upload/v1789146081/1_3.png",
  title: "Heritage Kulfi Store",
  description:
    "Food brand website highlighting products, brand identity and a smooth customer browsing experience.",
  link: "https://heritagekulfi.com/",
  tech: ["Shopify", "Liquid", "E-Commerce"],
  category: "Shopify",
},
{
  image:
    "https://res.cloudinary.com/yoof237d/image/upload/v1789145848/0_7.png",
  title: "Mission Digital Platform",
  description:
    "Professional business website built with clear messaging, modern sections and optimized user navigation.",
  link: "https://www.mission.com/",
  tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  category: "Landing Pages",
},
{
  image:
    "https://res.cloudinary.com/yoof237d/image/upload/v1789145848/0_9.png",
  title: "Skinchanted Beauty Store",
  description:
    "Beauty brand e-commerce experience with product presentation, premium visuals and customer-focused shopping flow.",
  link: "https://skinchanted.com/",
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
