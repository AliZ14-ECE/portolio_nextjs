import { Code, Lightbulb, User, Globe, Server, Database, Wrench } from "lucide-react";

export const portfolioData = {
  personal: {
    name: "Ali Zahir",
    role: "Software Developer",
    description: "I build reliable software as an adaptable developer skilled in problem‑solving and collaboration.",
    email: "ali.alobadye@gmail.com",
    github: "https://github.com/AliZ14-ECE",
    linkedin: "https://iq.linkedin.com/in/ali-zaher-63a236184",
    mobile: "+964 781 565 4550"
  },

  highlights : [
    {
      icon: <User className="h-6 w-6" />,
      title: "Who I Am",
      description:
        "A passionate developer dedicated to crafting clean, efficient, and user-friendly applications.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "What I Do",
      description:
        "I build modern web applications using cutting-edge technologies and best practices.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "My Approach",
      description:
        "I believe in continuous learning, collaboration, and delivering solutions that make an impact.",
    },
  ],
  about: {
    title: "About Me",
    heading: "Passionate about creating web experiences",
    description: "I am a dedicated developer with a strong foundation in modern web technologies. I love solving complex problems and building applications that make a difference. When I'm not coding, you can find me exploring new technologies or contributing to open source.",
  },

  skills: {
    title: "Skills",
    heading: "Technologies I Work With",
    description: "I've worked with a variety of technologies across the full stack. Here are the tools and technologies I use to bring ideas to life.",
    categories: [
      {
        name: "Frontend",
        icon: <Globe className="h-5 w-5" />,
        items: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS"],
      },
      {
        name: "Backend",
        icon: <Server className="h-5 w-5" />,
        items: ["Node.js", "Express", "REST APIs", "GraphQL"],
      },
      {
        name: "Database",
        icon: <Database className="h-5 w-5" />,
        items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
      },
      {
        name: "DevOps & Tools",
        icon: <Wrench className="h-5 w-5" />,
        items: ["Git", "Docker", "AWS", "CI/CD", "Linux"],
      },
    ],
  },
  projects: [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online store built with Next.js, Stripe, and Sanity CMS. Features include user authentication, cart management, and payment processing.",
      tags: ["Next.js", "TypeScript", "Stripe", "Sanity"],
      link: "#",
      github: null,
    },
    {
      title: "Task Management App",
      description:
        "A productivity tool for managing tasks and projects. Includes real-time updates, drag-and-drop interface, and team collaboration features.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "#",
      github: null,
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather application that provides real-time forecasts and historical data visualization using public APIs.",
      tags: ["Vue.js", "Chart.js", "OpenWeatherMap API"],
      link: "#",
      github: null,
    },
  ],
  experience: {
    title: "Experience",
    heading: "Where I've Worked",
    description: "A timeline of my professional journey and the companies I've had the privilege to work with.",
    jobs: [
      {
        title: "Software Developer",
        company: "Tech Solutions Inc.",
        companyUrl: "#",
        date: "2022 — Present",
        description: "Build and maintain critical features for customer-facing web applications. Work closely with cross-functional teams to implement new functionality and improve existing codebase. Lead code reviews and mentor junior developers.",
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
      },
      {
        title: "Frontend Developer",
        company: "Digital Agency Co.",
        companyUrl: "#",
        date: "2020 — 2022",
        description: "Developed responsive and accessible web applications for various clients. Collaborated with designers to implement pixel-perfect UIs. Optimized application performance and improved load times by 40%.",
        technologies: ["JavaScript", "React", "Next.js", "Tailwind CSS", "GraphQL"],
      },
      {
        title: "Junior Web Developer",
        company: "StartUp Hub",
        companyUrl: "#",
        date: "2019 — 2020",
        description: "Built and shipped features for the company's main product. Worked on both frontend and backend tasks. Participated in agile development processes and contributed to sprint planning.",
        technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "Node.js"],
      },
    ],
  },
};
