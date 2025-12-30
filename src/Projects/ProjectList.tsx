export interface Project {
    title: string,
    date: string,
    description: string,
    skills: string[],
    repo: string,
    media?: {
        type: "image" | "video";
        src: string;
        caption?: string;
        poster?: string;
    };
};

const PROJECTS: Project[] = [
    {
        title: "Dev Blog",
        date: "December 2025 — Present",
        description:  "A archive blog of personal insights and self explanations to Leetcode problems. Currently building a blog where I post about recent Leetcode problems, so I can revist them in the future and recollect how I solved them :)",
        skills: ["Next.js", "React", "MongoDB", "Vercel", "TypeScript", "Tailwind"],
        repo: "https://github.com/susiekim101/dev-blog",
    },
    {
        title: "Bruin Plan",
        date: "October 2025 – December 2025",
        description:  "An interactive 4-year planner that enables UCLA engineering students to plan out their degree",
        skills: ["React", "MySQL", "Node.js", "Express", "Typescript", "Tailwind", "Axios", "Cucumber", "Jest", "Playwright", "JWT"],
        repo: "https://github.com/susiekim101/bruin-plan",
        media: {
            type: "video",
            src: "https://youtu.be/892KyBB5XXc",
            caption: "Demo video of Bruin Plan including the landing page, user dashboard, and public bulletin"
        },
        // longDescription: [
        //     "A visual drag-an-drop interface to add courses to the user dashboard with secure user authentication with server-side JWT",
        //     "An anonymous, public bulletin to share and view other students' sample 4-year plans",
        //     "Spearheaded design of fullstack React and Node.js web application, utilizing UML diagrams to model architecture",
        //     "Architected backend with 5 MySQL tables to query 200+ courses, handling authentication with JWT",
        //     "Developed comprehensive REST APIs to connect components and build end-to-end unit tests to validate workflows",
        // ]
    },
    {
        title: "POSCO Reinforcement Learning",
        date: "June 2025 – August 2025",
        description: "A reinforcement learning simulation using Isaac Lab that defines the markov decision process problem for construction work for POSCO (South Korean steel manufacturer).",
        skills: ["Python", "Isaac Lab", "Isaac Sim", "PyTorch"],
        repo: "https://github.com/susiekim101/posco-mdp",
        media: {
            type: "video",
            src: "/posco-demo.mov",
            caption: "Demonstration of brick simulation using Isaac Sim"
        },
        // longDescription: [
        //     "Designed a robotic simulation in Python using Isaac Lab to solve a markov decision process with a proximal policy optimization algorithm for construction tasks at POSCO, reducing site-related dangers for workers",
        //     "Engineered custom reward functions, integrating 30+ observation states in 32 training environments, domain randomization, and curriculum learning to accelerate convergence"
        // ]
    },
    {
        title: "Personal Website",
        date: "July 2025",
        description: "This website! A personal portfolio website to share a little bit about myself and my projects :)",
        skills: ["React", "Lucide", "TypeScript", "Tailwind"],
        repo: "https://github.com/susiekim101/susiekim101.github.io"
    },
    {
        title: "Stile Profile",
        date: "May 2025 – November 2025",
        description: "A trauma-informed interior design quiz that gathers comprehensive input regarding style preferences, accessibility needs, and emotional triggers and generates personalized interior design information with the help of AI.",
        skills: ['React', 'Node.js', 'Tailwind', 'Google Cloud Platform', 'Gemini API'],
        repo: "https://github.com/susiekim101/",
        media: {
            type: "video",
            src: "/stile-demo.mov",
            caption: "Initial ideation for Tori in the House at a hackathon. Currently working on new iteration of this original project."
        },
        // longDescription: [
        //     "Won 1st place at hackathon among 20 teams, selected to continue building for the nonprofit organization",
        //     "Built full-stack web application with React and Node.js, improving client-server responsiveness and reliability",
        //     "Engineered 3 Google Cloud Platform APIs (Gemini, Text-To-Speech, Cloud Translation) with Express.js",
        //     "Reduced manual workload by 80% by automating data entry with JavaScript to populate Firebase database",
        //     "Addresses the problem of other conventional style assessments, which are not trauma-informed and fail to gather the depth of detail of each client. Aims to use AI to summarize each individual's response and generate images of interior designs, color palettes, and suggested furniture all tailors to each unique client."
        // ]
    },
    {
        title: "Flight Itinerary",
        date: "March 2025",
        description: "Coursework project to get hands-on experience with data structures and algorithms and challenging path-finding algorithms",
        skills: ["C++", "Data Structues", "Algorithms", "LLDB"],
        repo: "https://github.com/katieyungchung/athenahacks25",
        // longDescription: [
        //     'Implementeded breadth-first-search and depth-first-search algorithms in C++ to generate optimized flight itineraries across 180,000+ real-life simulated flights',
        //     'Debugged Dijkstra’s algorithm with LLDB in Xcode, improving runtime efficiency by over 250% (<800ms)'
        // ]
    },
    {
        title: "Clouds2Campus",
        date: "April 2025",
        description: "Web application that matches university students based on flight arrival times for rideshare to campus.",
        skills: ["Hackathon", "React", "Javascript", "Gemini", "Tailwind", "Node.js", "Express.js", "MongoDB"],
        repo: "https://github.com/susiekim101/la-hacks-25",
        // longDescription: [
        //     "Designed a full-stack web platform using React, Tailwind CSS, Node.js, and MongoDB to connect university students for airport carpooling, aimed at cutting travel costs and carbon emissions",
        //     "Leveraged Google Gemini 2.0 Flash API to automatically extract structured flight information from uploaded itineraries and match riders based on location and time overlap"
        // ],
        media: {
            type: "video",
            src: "/clouds2campus-demo.mp4",
            caption: "Demo video of Clouds2Campus, including log in/sign up features and file upload with AI extraction"
        }
    },
    {
        title: "TimeLeaf",
        date: "February 2025",
        description: "Personal discovery quiz to help users discover new passions and hobbies. Includes a progress tracker to record daily activity logs.",
        skills: ["Hackathon", "HTML", "CSS", "Gemini", "Javascript", "Next.js", "Node.js", "MongoDB"],
        repo: "https://github.com/katieyungchung/athenahacks25"
    }
]

export default PROJECTS;