import { Code, Lightbulb, User, Globe, Server, Database, Wrench, Smartphone, BarChart3 } from "lucide-react";

export const portfolioData = {
  personal: {
    name: "Ali Zahir Al-Saygh",
    role: "Software Developer",
    description: "I turn complex problems into elegant solutions—whether it's building apps, automating workflows, or analyzing data.",
    email: "ali.alobadye@gmail.com",
    github: "https://github.com/AliZ14-ECE",
    linkedin: "https://iq.linkedin.com/in/ali-zaher-63a236184",
    mobile: "+964 781 565 4550",
    location: "Najaf, Iraq"
  },

  highlights: [
    {
      icon: <User className="h-6 w-6" />,
      title: "Who I Am",
      description:
        "A motivated engineer with expertise in software development, data analysis, and deep learning. Adaptable and ready to tackle new challenges.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "What I Do",
      description:
        "I build software solutions, automate processes, and create data-driven insights using modern technologies.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "My Approach",
      description:
        "Keep it simple, make it work, then make it better. Quality matters more than complexity.",
    },
  ],
  about: {
    title: "About Me",
    heading: "Engineer passionate about innovation and problem-solving",
    description: "I am a motivated engineer with a strong programming foundation, experienced in Quality Control, software development, and deep learning. I am skilled at solving complex problems and creating innovative solutions. Adaptable and ready to tackle new challenges and deliver high-quality results. I hold a Bachelor's degree in Electronics and Communication Engineering from the University of Kufa (2017–2021).",
  },

  skills: {
    title: "Skills",
    heading: "Technologies I Work With",
    description: "I've worked with a variety of technologies across software development, data analysis, and telecommunications. Here are the tools and technologies I use to bring ideas to life.",
    categories: [
      {
        name: "Programming & Backend",
        icon: <Server className="h-5 w-5" />,
        items: ["Python", "Golang", "REST APIs", "Software Engineering"],
      },
      {
        name: "Mobile Development",
        icon: <Smartphone className="h-5 w-5" />,
        items: ["Flutter", "Dart", "Cross-platform Apps"],
      },
      {
        name: "Data & Analytics",
        icon: <BarChart3 className="h-5 w-5" />,
        items: ["Power BI", "Excel Dashboards", "Data Analysis", "Python Libraries"],
      },
      {
        name: "Web Development",
        icon: <Globe className="h-5 w-5" />,
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML/CSS"],
      },
      {
        name: "Database",
        icon: <Database className="h-5 w-5" />,
        items: ["Database Design", "SQL", "PostgreSQL"],
      },
      {
        name: "DevOps & Tools",
        icon: <Wrench className="h-5 w-5" />,
        items: ["Git", "GitHub", "QGIS", "FTTH Testing"],
      },
      {
        name: "AI & Machine Learning",
        icon: <Globe className="h-5 w-5" />,
        items: ["Neural Networks", "Deep Learning", "CNN", "RNN"],
      },
    ],
  },
  projects: [
    {
      title: "Graduation Tracking System",
      description:
        "Full-stack system for the University of Kufa to track student graduation progress.",
      tags: ["Flutter", "Golang", "Database Design", "Next.js"],
      link: null,
      github: null,
    },
    {
      title: "QGIS Automation Plugin",
      description:
        "A Python plugin that automates data filtering for FTTH networks. Won the Innovation and Process Improvement award in 2024. from Earthlink Tel.",
      tags: ["Python", "QGIS", "Automation"],
      link: null,
      github: null,
    },
    {
      title: "Data Analytics Dashboards",
      description:
        "Interactive Power BI and Excel dashboards for business reporting. Includes automated data pipelines built with Python.",
      tags: ["Python", "Power BI", "Excel", "Data Visualization"],
      link: null,
      github: null,
    },
  ],
  experience: {
    title: "Experience",
    heading: "Where I've Worked",
    description: "My professional journey so far.",
    jobs: [
      {
        title: "FTTH Quality Control Engineer",
        company: "Earthlink Telecommunication Company",
        companyUrl: "https://earthlink.iq",
        date: "Jan 2022 — 2025",
        description: "Testing and troubleshooting fiber networks. Built Python tools to automate repetitive tasks—one of which earned me an Innovation award in 2024.",
        technologies: ["Python", "Flutter", "QGIS", "FTTH", "Network Testing", "Automation", "Problem Solving"],
      },
      {
        title: "Data Analyst",
        company: "Earthlink Telecommunication Company",
        companyUrl: "https://earthlink.iq",
        date: "Apr 2023 — Oct 2024",
        description: "Turned raw data into actionable insights. Built dashboards in Power BI and automated data pipelines with Python.",
        technologies: ["Python", "Power BI", "Excel", "Data Analysis", "Dashboards"],
      },
      {
        title: "Software Developer",
        company: "University of Kufa",
        companyUrl: "https://uokufa.edu.iq",
        date: "2023",
        description: "Built a graduation tracking system from scratch—database design, Golang backend, and Flutter mobile app.",
        technologies: ["Flutter", "Golang", "Database Design", "Full Stack"],
      },
    ],
  },
  education: {
    title: "Education",
    heading: "Academic Background",
    items: [
      {
        degree: "Bachelor of Electronics and Communication Engineering",
        institution: "University of Kufa",
        location: "Najaf, Iraq",
        period: "2017 — 2021",
      },
    ],
  },
  certifications: {
    title: "Training & Certifications",
    heading: "Continuous Learning",
    items: [
      {
        name: "Neural Networks and Deep Learning",
        issuer: "DeepLearning.AI, Coursera",
        date: "2019",
        link: "https://coursera.org/share/a1a9d5e56270321ce1c5f63baf8d94ec",
      },
      {
        name: "Hyperparameter Tuning, Regularization and Optimization",
        issuer: "DeepLearning.AI, Coursera",
        date: "2019",
        link: "https://coursera.org/share/48c2508198f81e76dd41e6cb73a8c18b",
      },
      {
        name: "Structuring Machine Learning Projects",
        issuer: "DeepLearning.AI, Coursera",
        date: "2019",
        link: "https://coursera.org/share/a2851fc4094e33133903e0dc800aa2a7",
      },
      {
        name: "Foundations of Project Management",
        issuer: "Google, Coursera",
        date: "2023",
        link: "https://coursera.org/share/1d4ca8a7bc5b55518bd65037c131b9ce",
      },
    ],
  },
  interests: ["Programming", "Machine Learning", "Algorithms & Data Structures", "Large Language Models"],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Proficient" },
  ],
};
