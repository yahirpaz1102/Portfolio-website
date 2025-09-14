export const portfolioData = {
   
    name: "Yahir Fernando Paz Ardon",
    contact: {
        email: "yahirpaz15@gmail.com",
        phone: "(786) 740-6104",
        linkedin: "https://www.linkedin.com/in/yahir-paz-915a46189",
        github: "github.com/yahirpaz1102",
    },
    workExperience: [
        {
            role: "Sales Associate",
            company: "Boost Mobile",
            duration: "Nov 2020 - May 2023",
            description: "Delivered personalized customer service and mobile service recommendations were provided to improve" +
                " customer satisfaction and sales. Resolved technical issues with phones and service plans in a high-volume " +
                "retail environment. Strengthened sales, upselling, and communication skills through daily customer interactions."
        }
    ],
    leadershipExperience: [
        {
            role: "Mentor",
            company: "UNC Greensboro Mentor Collective Program",
            duration: "Fall 2024 - Present",
            description: "Guided first-year and transfer students through their academic and social transition to " +
                "university life. Advised mentees on campus resources and effective study habits to promote student success. " +
                "Developed strong communication and leadership skills by providing actionable advice and support for three " +
                "consecutive semesters."
        }
    ],
    projects: [
        {
            title: "React/Tailwind Portfolio",
            subtitle: "Personal Portfolio Website",
            description: "A single page dynamic portfolio built from scratch to showcase my experience, skills, and projects. " +
                "Deployed the website using Vercel with a customized domain. Features a sleek, terminal inspired UI, a dark/light " +
                "mode toggle, and responsive design for all devices. This project demonstrates my ability to blend modern frontend " +
                "technologies with a unique design vision. ",
            tech: ["React", "JavaScript", "TailwindCSS", "Vite"],
            repoUrl: "https://github.com/yahirpaz1102/Portfolio-website",
        },
        {
            title: "Spartan Small Business Manager",
            subtitle: "E-commerce Vendor Portal",
            description: "As a key contributor in a collaborative agile team, I was responsible for the full stack implementation of" +
                " the provider module. I engineered the backend RESTful APIs with Java and Spring Boot to manage all business logic," +
                " including products, events, and profile management. For the frontend, I constructed a dynamic and responsive dashboard" +
                " using FreeMarker and Bootstrap, which allowed providers to perform CRUD operations on their profiles and products." +
                " I also designed the supporting MySQL database schema and integrated a data analysis module.",
            tech: ["Java", "Spring Boot", "MySQL", "FreeMarker", "Bootstrap"],
            repoUrl: "https://github.com/raliahm/SpartanSmallBusinessManager/tree/provider_mvc_app",
        },
        {
            title: "Vinyl Store",
            subtitle: "E-commerce Shopping Cart",
            description: "Built a full stack shopping cart and product management system with checkout logic using Laravel. Created an" +
                " admin dashboard that allowed an administrator to add, edit, and remove products. Seeded the PostgreSQL database with " +
                "product data using Laravel seeders.",
            tech: ["Laravel", "PHP", "PostgreSQL", "Blade", "Bootstrap"],
            repoUrl: "https://github.com/yahirpaz1102/PHP-e-commerce-vinyl-store",
        },
        {
            title: "C++ War Card Game",
            subtitle: "Command-line Game Simulation",
            description: "Developed a command line simulation of the card game 'War' using Object Oriented Programming (OOP) principles." +
                " Implemented Card, Deck, and Game Logic classes to manage game state, card shuffling, and player turns. Utilized C++ STL " +
                "data structures, including vector and stack, to manage player hands and the draw pile.",
            tech: ["C++", "STL"],
            repoUrl: "https://github.com/yahirpaz1102/Playing-Cards---War",
        },
    ],
    skills: [
        {
            category: "Programming Languages",
            list: ["Java", "C++", "PHP", "HTML", "CSS", "SQL", "JavaScript", "React"]
        },
        {
            category: "Frameworks/Tools",
            list: ["Spring Boot", "Laravel", "Git/Github", "VS Code", "JetBrains IDEs", "NetBeans", "Postman", "Blade", "FreeMarker", "Bootstrap", "TailwindCSS", "Vercel"]
        },
        {
            category: "Databases",
            list: ["MySQL", "PostgreSQL"]
        },
        {
            category: "Other",
            list: ["Object-Oriented Programming (OOP)", "Data Structures", "REST APIs", "MVC", "Agile Collaboration", "Trello", "Latex"]
        },
        {
            category: "Languages",
            list: ["English" , "Spanish"]
        }
    ]
};