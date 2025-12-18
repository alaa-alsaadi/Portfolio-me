export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  status: 'completed' | 'active' | 'in-progress';
  techStack: string[];
  demoLink: string | null;
  githubLink: string | null;
  caseStudyLink: string | null;
  completionPercentage: number;
  startDate: string;
  endDate: string | null;
  featured: boolean;
}

export const portfolioData = {
  personalInfo: {
    name: "Alaa Abdulhussein",
    title: "IT Specialist & Full Stack Developer",
    specialization: "System Administration & Web Development",
    location: "Basra, Iraq",
    timezone: "Asia/Baghdad (UTC+3)",
    avatar: "/Profile-05.png",
    email: "alaa.alsaadi.dev@gmail.com",
    phone: "+9647716461687",
    availability: "Available for Freelance",
    bio: "Experienced IT Specialist with expertise in network management, system administration, and technical support. Skilled in troubleshooting, maintaining systems like SAP, Windows Server, CRM, Office 365, and IT infrastructure. Passionate about enhancing IT and software development operations through modern web development using HTML, CSS, JavaScript, Vue.js, and Laravel.",
    cvDownloadLink: "/cv/alaa-abdulhussein-cv.pdf",
    socialLinks: [
      { name: "GitHub", url: "https://github.com/alaa-alsaadi", icon: "i-lucide-github" },
      { name: "LinkedIn", url: "https://linkedin.com/in/alaa-abdulhuussein", icon: "i-lucide-linkedin" },
      { name: "YouTube", url: "https://www.youtube.com/", icon: "i-lucide-youtube" },
      { name: "Email", url: "mailto:alaa.alsaadi.dev@gmail.com", icon: "i-lucide-mail" },
    ],
  },

  metrics: {
    yearsExperience: 6,
    completedProjects: 11,
    clientCollaborations: 19,
    githubStars: 30,
    coreTechnologies: ["PHP", "Laravel", "Vue.js", "MySQL", "JavaScript", "Python", "Flutter", "SAP", "Windows Server", "Linux", "MongoDB", "Alpine.js", "Ionic"],
    projectCompletionRate: 11,
    activeDevelopmentHours: 200,
  },

  projects: [
    {
      id: "portfolio-me",
      title: "Portfolio Me",
      description: "My personal portfolio website featuring a modern dark theme, bento-grid layout, and high-performance optimizations. Built with Nuxt 3.",
      thumbnail: "https://picsum.photos/seed/portfolio/800/600",
      status: "completed" as const,
      techStack: ["Nuxt 3", "Tailwind CSS", "Vue.js", "TypeScript"],
      demoLink: null,
      githubLink: "https://github.com/alaa-alsaadi/Portfolio-me",
      caseStudyLink: null,
      completionPercentage: 100,
      startDate: "2023-11",
      endDate: "2023-12",
      featured: true,
    },
    {
      id: "focusmind-platform",
      title: "FocusMind Platform",
      description: "A comprehensive platform dedicated to improving mental focus and productivity. Features scientifically backed exercises and tracking.",
      thumbnail: "https://picsum.photos/seed/focusmind/800/600",
      status: "active" as const,
      techStack: ["Nuxt 3", "Vue.js", "Supabase", "Pinia"],
      demoLink: null,
      githubLink: "https://github.com/alaa-alsaadi/focusmind-platform",
      caseStudyLink: null,
      completionPercentage: 80,
      startDate: "2023-10",
      endDate: null,
      featured: true,
    },
    {
      id: "techstore-online",
      title: "TechStore Online",
      description: "A fully functional e-commerce platform for tech products. Includes cart management, product filtering, and payment integration.",
      thumbnail: "https://picsum.photos/seed/techstore/800/600",
      status: "completed" as const,
      techStack: ["Vue.js", "Laravel", "MySQL", "Tailwind CSS"],
      demoLink: null,
      githubLink: "https://github.com/alaa-alsaadi/TechStore-Online",
      caseStudyLink: null,
      completionPercentage: 100,
      startDate: "2023-01",
      endDate: "2023-05",
      featured: true,
    },
    {
      id: "pass-generator-tool",
      title: "Pass Generator Tool",
      description: "A security-focused tool for generating strong, random passwords with customizable parameters (length, symbols, numbers).",
      thumbnail: "https://picsum.photos/seed/passgen/800/600",
      status: "completed" as const,
      techStack: ["JavaScript", "HTML5", "CSS3"],
      demoLink: null,
      githubLink: "https://github.com/alaa-alsaadi/Pass-Generator-Tool",
      caseStudyLink: null,
      completionPercentage: 100,
      startDate: "2022-12",
      endDate: "2023-01",
      featured: false,
    },
    {
      id: "rest-landing-page",
      title: "Rest Landing Page",
      description: "A modern, responsive landing page designed for restaurants. Features menu display, reservation forms, and gallery sections.",
      thumbnail: "https://picsum.photos/seed/restlanding/800/600",
      status: "completed" as const,
      techStack: ["HTML5", "CSS3", "JavaScript"],
      demoLink: null,
      githubLink: "https://github.com/alaa-alsaadi/rest-landing-page",
      caseStudyLink: null,
      completionPercentage: 100,
      startDate: "2022-08",
      endDate: "2022-09",
      featured: false,
    },
    {
      id: "guangzhou-website",
      title: "Guangzhou Website",
      description: "A corporate business website showcasing services, portfolio, and company information for the Guangzhou market.",
      thumbnail: "https://picsum.photos/seed/guangzhou/800/600",
      status: "completed" as const,
      techStack: ["HTML", "CSS", "Bootstrap", "jQuery"],
      demoLink: null,
      githubLink: "https://github.com/alaa-alsaadi/GUANGZHOU-WEBSITE",
      caseStudyLink: null,
      completionPercentage: 100,
      startDate: "2021-05",
      endDate: "2021-07",
      featured: false,
    },
  ] as Project[],

  skills: [
    // System Administration
    { name: "SAP", img: "https://cdn.simpleicons.org/sap/0FAAFF", proficiency: 85, yearsUsed: 1, category: "System Administration" },
    { name: "Windows Server", img: "https://cdn.simpleicons.org/microsoftwindowsserver/227ED8", proficiency: 90, yearsUsed: 5, category: "System Administration" },
    { name: "Office 365", img: "https://cdn.simpleicons.org/microsoftoffice/D83B01", proficiency: 95, yearsUsed: 6, category: "Productivity" },

    // Frontend Development
    { name: "HTML5", img: "https://cdn.simpleicons.org/html5/E34F26", proficiency: 95, yearsUsed: 6, category: "Frontend" },
    { name: "CSS3", img: "https://cdn.simpleicons.org/css3/1572B6", proficiency: 95, yearsUsed: 6, category: "Frontend" },
    { name: "JavaScript", img: "https://cdn.simpleicons.org/javascript/F7DF1E", proficiency: 90, yearsUsed: 6, category: "Frontend" },
    { name: "Vue.js", img: "https://cdn.simpleicons.org/vuedotjs/4FC08D", proficiency: 90, yearsUsed: 4, category: "Frontend" },
    { name: "Alpine.js", img: "https://cdn.simpleicons.org/alpinedotjs/8BC0D0", proficiency: 80, yearsUsed: 2, category: "Frontend" },

    // Backend Development
    { name: "PHP", img: "https://cdn.simpleicons.org/php/777BB4", proficiency: 90, yearsUsed: 6, category: "Backend" },
    { name: "Laravel", img: "https://cdn.simpleicons.org/laravel/FF2D20", proficiency: 88, yearsUsed: 5, category: "Backend" },
    { name: "MySQL", img: "https://cdn.simpleicons.org/mysql/4479A1", proficiency: 85, yearsUsed: 6, category: "Database" },
    { name: "SQLite", img: "https://cdn.simpleicons.org/sqlite/003B57", proficiency: 80, yearsUsed: 3, category: "Database" },

    // Mobile Development
    { name: "Flutter", img: "https://cdn.simpleicons.org/flutter/02569B", proficiency: 75, yearsUsed: 2, category: "Mobile" },
    { name: "Ionic", img: "https://cdn.simpleicons.org/ionic/3880FF", proficiency: 70, yearsUsed: 2, category: "Mobile" },

    // Programming Languages
    { name: "Python", img: "https://cdn.simpleicons.org/python/3776AB", proficiency: 70, yearsUsed: 3, category: "Programming" },
    { name: "C++", img: "https://cdn.simpleicons.org/cplusplus/00599C", proficiency: 65, yearsUsed: 2, category: "Programming" },

    // Design Tools
    { name: "Figma", img: "https://cdn.simpleicons.org/figma/F24E1E", proficiency: 85, yearsUsed: 3, category: "Design" },
    { name: "Adobe XD", img: "https://cdn.simpleicons.org/adobexd/FF61F6", proficiency: 80, yearsUsed: 3, category: "Design" },
    { name: "Canva", img: "https://cdn.simpleicons.org/canva/00C4CC", proficiency: 90, yearsUsed: 4, category: "Design" },
  ],

  experience: [
    {
      id: "numerus-it",
      role: "IT Specialist",
      company: "Numerus Group",
      companyLogo: "https://ui-avatars.com/api/?name=Numerus+Group&size=80&background=10b981&color=fff",
      period: "August 2024 - Present",
      location: "Basra, Iraq",
      description: [
        "Oversee management and troubleshooting of computer systems, printers, and CCTV infrastructure",
        "Utilize SAP and CRM systems for business processes and data management",
        "Administer Windows Server and manage network security"
      ],
      achievements: [
        "Improved system uptime by implementing proactive maintenance protocols",
        "Enhanced security measures protecting sensitive company data",
        "Streamlined helpdesk operations reducing average resolution time by 30%"
      ],
      technologies: ["SAP", "Windows Server", "CRM", "Office 365", "Network Security", "CCTV Systems"]
    },
    {
      id: "fateh-data",
      role: "Data Entry Specialist",
      company: "Fateh Al-Barri Co.",
      companyLogo: "https://ui-avatars.com/api/?name=Fateh+Co&size=80&background=10b981&color=fff",
      period: "May 2021 - 2024",
      location: "Basra, Iraq",
      description: [
        "Managed data entry tasks ensuring accuracy and timely data transmission",
        "Conducted error checks and prepared comprehensive reports",
        "Contributed to improved data integrity across operations"
      ],
      achievements: [
        "Achieved 99.8% data accuracy rate",
        "Reduced processing time by 40% through process optimization",
        "Developed automated verification systems using Excel and Python"
      ],
      technologies: ["Excel", "Python", "Data Analysis", "Quality Control"]
    },
    {
      id: "fb-it",
      role: "IT Specialist & Help Desk",
      company: "F.B CO.",
      companyLogo: "https://ui-avatars.com/api/?name=FB+CO&size=80&background=10b981&color=fff",
      period: "2019 - 2021",
      location: "Basra, Iraq",
      description: [
        "Administered network systems and implemented security protocols",
        "Resolved hardware and software issues for improved operational efficiency",
        "Provided comprehensive helpdesk support to end users"
      ],
      achievements: [
        "Implemented network security measures reducing security incidents by 60%",
        "Improved system performance through regular maintenance and updates",
        "Maintained 95% user satisfaction rating in helpdesk services"
      ],
      technologies: ["Network Administration", "Windows Server", "Hardware Support", "Security Protocols"]
    },
    {
      id: "freelance-dev",
      role: "Freelance Web Developer & Designer",
      company: "Freelancer",
      companyLogo: "https://ui-avatars.com/api/?name=Freelance&size=80&background=10b981&color=fff",
      period: "2019 - Present",
      location: "Remote",
      description: [
        "Design and develop websites and mobile applications using modern technologies",
        "Build robust backend solutions with PHP, Laravel, and MySQL",
        "Create responsive and user-friendly interfaces"
      ],
      achievements: [
        "Completed 23+ web development projects successfully",
        "Maintained 100% client satisfaction rate",
        "Developed applications serving 100,000+ users"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "PHP", "Laravel", "MySQL", "Flutter", "Ionic"]
    },
  ],

  achievements: {
    certifications: [
      {
        id: "computer-science",
        title: "Bachelor of Computer Science",
        issuer: "Shatt Al-Arab University College",
        date: "2014 - 2018",
        verificationUrl: "",
        badge: "https://placehold.co/200x200/10b981/fff?text=BSc"
      },
      {
        id: "comptia-a-plus",
        title: "CompTIA A+ 1000 - Part 1",
        issuer: "Alison / CompTIA",
        date: "2020",
        verificationUrl: "",
        badge: "https://placehold.co/200x200/10b981/fff?text=A+"
      },
      {
        id: "ieee-2019",
        title: "IEEE Certificate of Recognition",
        issuer: "IEEE Iraq Young Professionals",
        date: "June 2019",
        verificationUrl: "",
        badge: "https://placehold.co/200x200/10b981/fff?text=IEEE"
      },
      {
        id: "code-for-iraq-2018",
        title: "IEEE Certificate of Recognition",
        issuer: "Code for Iraq",
        date: "October 2018",
        verificationUrl: "",
        badge: "https://placehold.co/200x200/10b981/fff?text=Code"
      },
      {
        id: "mcsa",
        title: "MCSA: Microsoft Certified Solutions Associate",
        issuer: "Microsoft",
        date: "2022",
        verificationUrl: "",
        badge: "https://placehold.co/200x200/10b981/fff?text=MCSA"
      },
      {
        id: "ccna",
        title: "CCNA: Cisco Certified Network Associate",
        issuer: "Cisco",
        date: "2024",
        verificationUrl: "",
        badge: "https://placehold.co/200x200/10b981/fff?text=CCNA"
      }
    ],
    awards: [],
    publications: [],
    openSource: [],
  },

  activityData: {
    contributions: {
      total: 500,
      lastYear: 350,
      streak: 30,
    },
    languageDistribution: [
      { language: "PHP", percentage: 30, color: "#777BB4" },
      { language: "JavaScript", percentage: 25, color: "#F7DF1E" },
      { language: "Python", percentage: 15, color: "#3776AB" },
      { language: "HTML/CSS", percentage: 20, color: "#E34F26" },
      { language: "Other", percentage: 10, color: "#888888" },
    ],
    monthlyCommits: [
      { month: "Jan", commits: 45 },
      { month: "Feb", commits: 52 },
      { month: "Mar", commits: 48 },
      { month: "Apr", commits: 55 },
      { month: "May", commits: 60 },
      { month: "Jun", commits: 58 },
      { month: "Jul", commits: 50 },
      { month: "Aug", commits: 65 },
      { month: "Sep", commits: 70 },
      { month: "Oct", commits: 68 },
      { month: "Nov", commits: 72 },
      { month: "Dec", commits: 55 },
    ],
  },
};

// Export individual sections for easier access
export const { personalInfo, metrics, projects, skills, experience, achievements, activityData } = portfolioData;

export default portfolioData;
