export interface ProjectItem {
  id: string;
  title: string;
  category: "Full Stack" | "Frontend" | "Mobile" | "Backend";
  tagline: string;
  description: string;
  highlights?: { title: string; desc: string }[];
  tags: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  techStack: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Swapnil Raut",
    headline: "Full Stack & Cross-Platform Mobile Engineer",
    subheadline:
      "Crafting high-performance web applications and fluid mobile experiences using React, Next.js 16, React Native (Expo), TypeScript, and Node.js.",
    status: "Available for Hire",
    statusDetail: "Open to Full-time roles, Remote opportunities & Full Stack projects",
    location: "Solapur, Maharashtra, India",
    email: "swapnilraut.dev@gmail.com",
    linkedin: "https://www.linkedin.com/in/swapnil12/",
    github: "https://github.com/",
    bio: [
      "I am a Full Stack Developer specializing in building high-performance web applications and cross-platform mobile solutions. My core expertise spans across React.js, Next.js (App Router, SSR, SSG), React Native (Expo), TypeScript, and Node.js ecosystems.",
      "I genuinely enjoy translating complex business requirements into intuitive, scalable, and responsive digital products. With strong foundations in modern state management, backend APIs, and clean architecture, I ensure every feature is engineered for speed and user delight.",
    ],
  },

  skillsCategories: [
    {
      title: "Frontend & Web",
      description: "Modern, reactive, and accessible web experiences",
      icon: "layout",
      skills: [
        { name: "React.js", highlight: true },
        { name: "Next.js (App Router / SSR / SSG)", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "Tailwind CSS / NativeWind", highlight: true },
        { name: "Redux Toolkit" },
        { name: "TanStack Query" },
        { name: "HTML5 / Modern CSS3" },
        { name: "Responsive UI / UX" },
      ],
    },
    {
      title: "Mobile Development",
      description: "Performant cross-platform mobile apps for iOS & Android",
      icon: "smartphone",
      skills: [
        { name: "React Native", highlight: true },
        { name: "Expo", highlight: true },
        { name: "NativeWind" },
        { name: "Mobile UI Architecture" },
        { name: "Offline Sync & Caching" },
        { name: "Device APIs & Push Notifications" },
      ],
    },
    {
      title: "Backend & Databases",
      description: "Scalable APIs, reliable data layers, and business logic",
      icon: "server",
      skills: [
        { name: "Node.js", highlight: true },
        { name: "Express.js", highlight: true },
        { name: "Frappe Framework", highlight: true },
        { name: "Python" },
        { name: "RESTful APIs & GraphQL" },
        { name: "MongoDB (NoSQL)" },
        { name: "MySQL / MariaDB" },
        { name: "Database Design & Optimization" },
      ],
    },
    {
      title: "Tools & Engineering Practices",
      description: "High-standard engineering workflows and best practices",
      icon: "tool",
      skills: [
        { name: "Git / GitHub", highlight: true },
        { name: "Clean Architecture", highlight: true },
        { name: "Performance Optimization" },
        { name: "SEO & Web Vitals" },
        { name: "Component-Driven Design" },
        { name: "Agile / Scrum" },
      ],
    },
  ] as SkillCategory[],

  experience: [
    {
      company: "Hybrowlabs Technologies",
      role: "Full Stack Engineer",
      period: "Present",
      location: "India (Remote/Hybrid)",
      type: "Full-time",
      description: [
        "Developing high-impact enterprise web applications utilizing Next.js, React, and Node.js.",
        "Architecting robust API endpoints and managing database schemas with MongoDB and relational databases.",
        "Collaborating across agile teams to improve core web performance metrics and deliver responsive user interfaces.",
      ],
      techStack: ["Next.js", "React.js", "TypeScript", "Node.js", "Tailwind CSS", "REST APIs"],
    },
    {
      company: "skillians",
      role: "Frontend & Full Stack Developer",
      period: "Previous",
      location: "Solapur, India",
      type: "Full-time",
      description: [
        "Built responsive client portals and interactive dashboards with React.js and modern state management.",
        "Engineered backend services and business automation utilizing Frappe Framework and Python.",
        "Implemented seamless cross-platform user flows for web and mobile clients.",
      ],
      techStack: ["React.js", "Frappe Framework", "Python", "MySQL", "JavaScript", "CSS3"],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "project-ragnar-dataops",
      title: "Ragnar DataOps",
      category: "Full Stack",
      tagline: "Enterprise Modern Web Platform with Headless CMS & Lead Pipelines",
      description:
        "Architected and built a high-performance, responsive enterprise web application featuring a custom dark-tech design system, automated lead-generation pipelines, and Headless Frappe/ERPNext CMS.",
      highlights: [
        {
          title: "Modern Web Platform Architecture",
          desc: "Engineered a fast, responsive enterprise web app using Next.js, React, and Tailwind CSS with a custom dark-tech design system.",
        },
        {
          title: "Headless CMS & Integrations",
          desc: "Integrated Frappe / ERPNext CMS for real-time blog delivery and embedded Cal.com for automated meeting scheduling.",
        },
        {
          title: "Lead Generation & Data Pipelines",
          desc: "Implemented custom API routes for webinar registrations and lead-capture forms, connecting directly with backend business systems.",
        },
        {
          title: "SEO & Performance Tuning",
          desc: "Optimized Core Web Vitals, dynamic sitemaps with next-sitemap, and structured OpenGraph metadata for superior search discoverability.",
        },
      ],
      tags: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Headless CMS (ERPNext/Frappe)",
        "REST APIs",
        "SEO Optimization",
        "Cal.com Embed",
      ],
      metrics: "Live Enterprise Production • Optimized Core Web Vitals",
      liveUrl: "https://ragnardataops.com/",
      featured: true,
    },
  ] as ProjectItem[],
};
