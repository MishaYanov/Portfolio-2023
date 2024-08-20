import { alpha, browsi, ff } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
    typescript,
    cpp,
    csharp,
    angular,
    unreal,
    unity,
    docker,
    python,
    rust,
    vite,
    nest,
    java
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: unreal,
        name: "Unreal Engine",
        type: "Game Development",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Game Development",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Deployment",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: rust,
        name: "Rust",
        type: "Backend",
    },
    {
        imageUrl: vite,
        name: "Vite",
        type: "Frontend",
    },
    {
        imageUrl: nest,
        name: "NestJS",
        type: "Backend",
    }, 
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Browsi",
        icon: browsi,
        iconBg: "#F9D3BC",
        date: "2024 - 2024",
        points: [
            "Developed and maintained web applications using Angular and Play Framework.",
            "Build unit and E2E tests (in Playwright) to ensure code quality and application reliability.",
            "Participated in agile sprints and contributed to the continuous improvement and development processes.",
            "Worked with various tools and services such as AWS, and Jenkins. Auth0 to provide the best solutions for our applications."
        ],
    },
    {
        title: "Support Engineer Tier 2",
        company_name: "Browsi",
        icon: browsi,
        iconBg: "#F9D3BC",
        date: "2022 - Present",
        points: [
            "Providing solutions to complex technical issues for customers and partners.",
            "Modifying the product code and behaviour to customer needs.",
            "Designing and building various tools to improve  browser extension with vite and react that provides metrics and information regarding our service and correlated services like google publisher ads"
        ],
    },
    {
        title: "Fire Fighter",
        company_name: "Israel Fire and Rescue Services",
        icon: ff,
        iconBg: "#c62a41",
        date: "2018 - November 2021",
        points: [
            "Respond promptly to emergency calls, specializing in fire suppression, search and rescue operation.",
            "Skillfully operate and maintain a range of firefighting equipment and vehicles, ensuring readiness for rapid deployment.",
            "Collaborate closely with local emergency services and law enforcement agencies during crisis situations to ensure a coordinated and effective response."
        ],
    },
    {
        "title": "Indie Game Developer",
        "company_name": "",
        "iconBg": "#c62a41",
        "date": "2021 - Present",
        "points": [
            "Implemented industry best practices in Unity, ensuring optimized performance and clean, maintainable code for various game projects.",
            "Developed custom shaders and animations to enhance visual fidelity, providing unique and engaging visual effects that set my games apart.",
            "Designed and built multiple game demos, including both top-down and first-person shooter (FPS) genres, showcasing a wide range of gameplay mechanics and technical skills."
        ]
    }    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: alpha,
        theme: 'btn-back-red',
        name: 'Alfa Romeo Parts Store',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        technologies: ['Angular', 'NestJs', 'TypeScript', 'Postgres', 'Docker', 'Prisma'],
        link: 'https://github.com/MishaYanov/AlfaStore',
    },
    {
        iconUrl: "",
        theme: 'btn-back-green',
        name: 'Extension Skeleton',
        description: 'A chrome extension inital setup with vite and react, using modular design, content and background scripts, and popup window, which compile and build with vite',
        technologies: ["Unity", "C#"],
        link: 'https://www.npmjs.com/package/ext-skeleton'
    },
    {
        iconUrl: "",
        theme: 'btn-back-yellow',
        name: 'Zombie survival game',
        description: '',
        technologies: ["Unity", 'C#'],
        link: ''
    },
    // {
    //     iconUrl: "",
    //     theme: 'btn-back-pink',
    //     name: '',
    //     description: '',
    //     technologies: ["python", ],
    //     link: ''
    // }
    
];