export const SKILLS = {
  programmingLanguages: [
    { name: "Java", level: "Advanced" },
    { name: "C", level: "Intermediate" },
    { name: "Python", level: "Advanced" },
    { name: "C++", level: "Intermediate" }, 
    { name: "JavaScript", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" }
  ],
  systemsAndCore: [
    "Unix/Linux Environments",
    "Operating Systems",
    "TCP/IP Networking",
    "Distributed Systems",
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Information Retrieval",
    "Large-Scale System Design"
  ],
  fullStack: [
    "Spring Boot",
    "ReactJS",
    "Next.js",
    "Angular",
    "Node.js",
    "FastAPI",
    "Flask",
    "Django",
    "REST APIs",
    "Microservices"
  ],
  ai: [
    "NLP",
    "Transformers",
    "LangChain",
    "Gemini API",
    "Pinecone Vector DB",
    "OpenAI API"
  ],
  cloudDevOps: [
    "AWS",
    "Linux",
    "Git",
    "Docker",
    "CI/CD"
  ],
  databases: [
    "MySQL",
    "MongoDB",
    "Firestore"
  ],
  blockchain: [
    "Solidity",
    "XRP Ledger",
    "Smart Contracts"
  ]
};

export const PROJECTS = [
  {
    id: 1,
    title: "TokenDrip",
    description: "A multi-token faucet using React, Ethers.js, and Solidity, allowing users to distribute and fund tokens.",
    image: "https://images.unsplash.com/photo-1639322537231-2f206e06af84?auto=format&fit=crop&q=80",
    category: "Web3",
    technologies: ["React", "Ethers.js", "Solidity"],
    githubLink: "https://github.com/GayathriPCh"
  },
  {
    id: 2,
    title: "RAG Application",
    description: "A scalable AI-enhanced professor rating system using Pinecone Vector DB and Gemini AI with custom embeddings.",
    image: "https://images.unsplash.com/photo-1678995632928-478a41076da9?auto=format&fit=crop&q=80",
    category: "AI/ML",
    technologies: ["Pinecone", "Gemini AI", "Vector DB"],
    githubLink: "https://github.com/GayathriPCh"
  },
  {
    id: 3,
    title: "AeroToken",
    description: "An NFT-based flight ticketing DApp on the XRP Ledger, ensuring secure, fraud-proof resale of tickets.",
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&q=80",
    category: "Web3",
    technologies: ["XRP Ledger", "NFT", "DApp"],
    githubLink: "https://github.com/GayathriPCh"
  }
];

export const EXPERIENCE = [
  {
    title: "Incoming Software Development Intern",
    company: "Siemens EDA",
    period: "Upcoming July 2025",
    description: "Selected for a 1-year internship focused on enterprise application development and debugging. Will work on projects involving C++, Java, Spring Boot, Angular, and microservices architecture.",
    skills: ["C++", "Java", "Spring Boot", "Angular", "Microservices"],
    badgeColor: "bg-primary-100 text-primary-800"
  },
  {
    title: "Co-founder",
    company: "Wallstreet DAO Club",
    period: "July 2024 - Present",
    description: "Launched & scaled a Web3 community to 100+ members, leading workshops & NFT-based memberships fostering Web3 innovation. Mentored peers in blockchain and Web3 technologies through university clubs and hackathons.",
    skills: ["Web3", "Blockchain", "Community Building"],
    badgeColor: "bg-green-100 text-green-800"
  },
  {
    title: "Full Stack Developer Intern",
    company: "WalletHunter Token 2049",
    period: "June 2024 - July 2024",
    description: "Designed WalletHunter's website, built a Web3 automation tool with 5+ APIs, and enhanced application reliability via testing & debugging.",
    skills: ["Web Development", "Web3", "API Integration"],
    badgeColor: "bg-yellow-100 text-yellow-800"
  },
  {
    title: "Software Engineering Fellow",
    company: "Headstarter AI",
    period: "August 2024 - September 2024",
    description: "Built 5 AI-powered applications and participated in two hackathons over the course of 7 weeks. Used tech stack: React.js, Next.js, Pinecone, Groq API, Gemini API, OpenAI, LangChain, Firebase, etc.",
    skills: ["AI Applications", "React/Next.js", "LangChain", "Firebase"],
    badgeColor: "bg-yellow-100 text-yellow-800"
  }
];

export const ACHIEVEMENTS = [
  {
    title: "KLH University ImpacTech 2K24 Hackathon",
    badge: "1st Prize Winner",
    description: "Developed an NFT-based flight ticketing DApp on Ethereum Sepolia, winning 1st prize.",
    icon: "trophy"
  },
  {
    title: "MAH Mini App Hackathon",
    badge: "Top 15 Teams",
    description: "Shortlisted among the top 15 teams for the demo day, developed a mini app for the Wallstreet DAO DApp.",
    icon: "award"
  },
  {
    title: "Frontend UI Hackathon by Outlier AI",
    badge: "Runner Up",
    description: "Secured 2nd place in a frontend UI hackathon focused on building intuitive user interfaces for AI applications.",
    icon: "medal"
  },
  {
    title: "Adobe Gensolve Hackathon",
    badge: "Top 5%",
    description: "Scored 80% overall, built a classification model for curve detection using AI techniques.",
    icon: "star"
  }
];

export const EDUCATION = [
  {
    school: "KL University",
    degree: "Bachelor of Technology in Computer Science",
    period: "2022-2026",
    score: "CGPA: 9.47/10",
    icon: "graduation-cap"
  },
  {
    school: "KLN Junior College",
    degree: "TSBIE Intermediate Education in Mathematics, Physics, Chemistry",
    period: "2020-2022",
    score: "Percentile: 92.7%",
    icon: "school"
  },
  {
    school: "DPS",
    degree: "SSC 10th Board",
    period: "2020 passout",
    score: "CGPA: 10/10",
    icon: "school"
  }
];

export const CERTIFICATIONS = [
  {
    name: "AWS Cloud Practitioner",
    icon: "aws"
  },
  {
    name: "Red Hat Certified Enterprise Application Developer",
    icon: "redhat"
  },
  {
    name: "MongoDB Associate Developer",
    icon: "database" 
  }
];

export const PUBLICATIONS = {
  blogs: {
    title: "Technical Blogs",
    description: "Authored several technical blogs on blockchain, covering topics such as decentralized applications, NFT-based systems, and Web3 security.",
    links: [
      { text: "Wallstreet DAO Club Blog", url: "#" },
      { text: "Personal Medium Articles", url: "#" }
    ]
  },
  conferences: {
    title: "Conference Presentation",
    description: "Environmental Impact of Blockchain Computation: Presented a paper at a university conference on the environmental impact of computational processes on blockchain networks.",
    links: [
      { text: "View Presentation Details", url: "#" }
    ]
  }
};

export const CONTACT_INFO = {
  email: "2210030477cse@gmail.com",
  location: "Hyderabad, Telangana, India",
  socials: [
    { platform: "GitHub", icon: "github", url: "https://github.com/GayathriPCh" },
    { platform: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/gayathri-pch/" },
    { platform: "Medium", icon: "medium", url: "#" }
  ]
};
