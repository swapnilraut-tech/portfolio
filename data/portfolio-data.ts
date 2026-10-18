export interface ProjectItem {
  id: string;
  title: string;
  category: "Full Stack" | "Frontend" | "Mobile" | "Backend";
  tagline: string;
  description: string;
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

  /* 
   * NOTE FOR SWAPNIL:
   * Project details can be updated easily here whenever you are ready!
   * Just replace the title, tagline, tags, and github/live links.
   */
  projects: [
    {
      id: "project-enterprise-portal",
      title: "Enterprise ERP & Operations Hub",
      category: "Full Stack",
      tagline: "Automated business workflow engine with real-time analytics",
      description:
        "Engineered a scalable multi-tenant management portal built with Frappe Framework, React.js, and Node.js. Features automated report generation, custom role-based permissions, and fast relational database queries.",
      tags: ["Frappe Framework", "Python", "React.js", "MySQL", "Tailwind CSS"],
      metrics: "40% faster data retrieval & streamlined daily operations",
      githubUrl: "https://github.com",
      liveUrl: "https://swapnil-demo.vercel.app",
      featured: true,
    },
    {
      id: "project-saas-platform",
      title: "Next.js 16 Cloud Commerce & Analytics",
      category: "Full Stack",
      tagline: "Ultra-fast modern commerce with App Router & Server Components",
      description:
        "High-performance cloud storefront and dashboard powered by Next.js 16, TypeScript, and MongoDB. Includes TanStack Query data caching, instant search filtering, and responsive glassmorphic UI.",
      tags: ["Next.js 16", "React", "TypeScript", "MongoDB", "Tailwind CSS"],
      metrics: "99+ Lighthouse performance & sub-second page loads",
      githubUrl: "https://github.com",
      liveUrl: "https://swapnil-demo.vercel.app",
      featured: true,
    },
    {
      id: "project-mobile-crossplatform",
      title: "PulseFit - React Native & Expo Mobile App",
      category: "Mobile",
      tagline: "Cross-platform iOS & Android lifestyle tracker with offline sync",
      description:
        "Cross-platform mobile application featuring smooth 60fps animations, NativeWind styling, device sensor integration, and offline-first state synchronization via Redux Toolkit.",
      tags: ["React Native", "Expo", "NativeWind", "Redux Toolkit", "TypeScript"],
      metrics: "Shared 90%+ codebase between iOS & Android",
      githubUrl: "https://github.com",
      liveUrl: "https://swapnil-demo.vercel.app",
      featured: true,
    },
    {
      id: "project-rest-api-service",
      title: "Microservices API Gateway & Engine",
      category: "Backend",
      tagline: "Secure RESTful API infrastructure with automated token validation",
      description:
        "Modular Node.js and Express backend service handling high concurrent user requests, JWT authentication, MariaDB transactions, and structured logging.",
      tags: ["Node.js", "Express.js", "MariaDB", "RESTful APIs", "JWT"],
      metrics: "Under 60ms average API response latency",
      githubUrl: "https://github.com",
      liveUrl: "https://swapnil-demo.vercel.app",
      featured: false,
    },
  ] as ProjectItem[],
};
