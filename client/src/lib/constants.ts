import aerotokenxrp from "@assets/aerotokenxrp.png";
import beatwave from "@assets/beatwave.png";
import buzzlines from "@assets/buzzlines.png";
import cardify from "@assets/cardify.png";
import ciphervault from "@assets/ciphervault.png";
import dragonscribe from "@assets/dragonscribe.png";
import envelope from "@assets/envelope.png";
import ethgasfee from "@assets/ethgasfee.png";
import evbreeze from "@assets/evbreeze.png";
import flick from "@assets/flick.png";
import healthchain from "@assets/healthchain.png";
import kaleido from "@assets/kaleido.png";
import lolcode from "@assets/lolcode.png";
import mintnfticp from "@assets/mintnfticp.png";
import mta from "@assets/mta.png";
import pennywise from "@assets/pennywise.png";
import rag from "@assets/rag.png";
import sbtdapp from "@assets/sbtdapp.png";
import skyquest from "@assets/skyquest.png";
import steller from "@assets/steller.jpg";
import taskchain from "@assets/taskchain.png";
import threatscan from "@assets/threatscan.png";
import tokendrip from "@assets/tokendrip.png";
import wdao from "@assets/wdao.png";
import aerotokeneth from "@assets/aerotokeneth.png";
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
    image: tokendrip,
    category: "Web3",
    technologies: ["React", "Ethers.js", "Solidity"],
    githubLink: "https://github.com/GayathriPCh/TokenDrip-custom-token-faucet"
  },
  {
    id: 2,
    title: "Profesor Review RAG Application",
    description: "A scalable AI-enhanced professor rating system using Pinecone Vector DB and Gemini AI with custom embeddings.",
    image: rag,
    category: "Full Stack",
    technologies: ["Pinecone", "Gemini AI", "Vector DB"],
    githubLink: "https://github.com/GayathriPCh/rag-rateprofessor-ai"
  },
  {
    id: 3,
    title: "AeroToken - XRP Ledger based NFT DApp",
    description: "An NFT-based flight ticketing DApp on the XRP Ledger, ensuring secure, fraud-proof resale of tickets.",
    image: aerotokenxrp,
    category: "Hackathon",
    technologies: ["XRP Ledger", "React.js", "Xumm API"],
    githubLink: "https://github.com/GayathriPCh/IITB_Hackathon"
  },
  {
    id: 4,
    title: "HealthChain",
    description: "This is a decentralized healthcare system that leverages AI for predictive healthcare analytics while ensuring data privacy and security through Zero-Knowledge Proofs (ZKP) on the Aleph Zero blockchain. This system enables patients to control their health data, allows secure access for medical professionals, and ensures AI-driven disease risk prediction while preserving privacy.",
    image: healthchain,
    category: "Hackathon",
    technologies: ["React", "Typescript","Aleph Zero","Pinata IPFS","Tailwind CSS","Solidity"],
    githubLink: "https://github.com/GayathriPCh/HealthDapp_Azero"
  },
  {
    id: 5,
    title: "Aerotoken - Ethereum based NFT DApp",
    description: "AeroToken is a decentralized application (DApp) that leverages blockchain technology to revolutionize flight ticketing. Users can book flights and receive NFTs as proof of their tickets, ensuring transparency, security, and ownership.",
    image: aerotokeneth,
    category: "Hackathon",
    technologies: ["React", "Ethers.js", "Sepolia Testnet","Pinata IPFS","Solidity"],
    githubLink: "https://github.com/GayathriPCh/Aerotoken"
  },
  {
    id: 6,
    title: "LoLCode - AI-powered coding assistant",
    description: "LOLCode AI is a Next.js-based AI-powered coding assistant designed to help developers debug, optimize, and even roast their code in a fun and engaging way. Built with Firebase authentication, Firestore for data storage, and OpenAI API integration, this platform enables users to receive AI-generated code reviews, sarcastic roasts, and insightful debugging tips—all while maintaining a conversational and interactive UI.",
    image: lolcode,
    category:"Full Stack",
    technologies:["meta-llama/meta-llama-3.1-405b-instruct","Nebius Studio","Next.js","Firebase firestore","Tailwind CSS"],
    githubLink: "https://github.com/GayathriPCh/LoLCode-AI"
  },
  {
    id:7,
    title:"CipherVault",
    description:"This is a Svelte-based Password Vault that securely stores, categorizes, and manages user credentials. It also checks for password breaches and allows users to view encrypted passwords securely via AES (Advanced Encryption Standard). Uses Firebase Auth for Authentication.",
    image: ciphervault,
    category:"Cybersecurity",
    technologies:["Svelte","Firebase","AES","Firebase Auth","Pwned Passwords API"],
    githubLink:"https://github.com/GayathriPCh/ciphervault"
  },
  {
    id:8,
    title:"Malware Traffic Analyzer",
    description:"Malware Traffic Analyzer is a real-time network monitoring tool that captures network packets, analyzes them for malicious activity using AbuseIPDB, and logs detected threats. It features a Streamlit UI, visualization graphs, logging, and simulated attack testing.",
    image: mta,
    category:"Cybersecurity",
    technologies:['Python', 'Streamlit', 'Scapy', 'AbuseIPDB API', 'Matplotlib'],
    githubLink:"https://github.com/GayathriPCh/Malware-Traffic-Analyzer"
  },
  {
    id:9,
    title:"ThreatScan - Simple Malware Analysis Tool",
    description:"ThreatScan is a lightweight malware analysis tool that helps users inspect files for potential threats. It calculates cryptographic hashes, detects file types, and integrates with VirusTotal to check for known malware signatures.",
    image: threatscan,
    category:"Cybersecurity",
    technologies:['Python', 'Tkinter', 'VirusTotal API', 'python-magic'],
    githubLink:"https://github.com/GayathriPCh/Threatscan-malware-analysis"
  },
  {
    id:9,
    title:"Taskchain",
    description:"A decentralized todo list application built on the Ethereum blockchain. It allows users to create, manage, and complete tasks in a decentralized manner.",
    image: taskchain,
    category:"Web3",
    technologies:["React","Ethers.js","Sepolia Testnet","Solidity"],
    githubLink:"https://github.com/GayathriPCh/TaskChain-decentralizedtodo"
  },
  {
    id:9,
    title:"Eth gas fee tracker",
    description:"A UI for learning purposes on calculating and understanding Ethereum gas fees using Etherscan API",
    image: ethgasfee,
    category:"Web3",
    technologies:["Etherscan API","React.js"],
    githubLink:"https://github.com/GayathriPCh/Eth_gas_fee_tracker",
  },
  {
    id:10,
    title:"On chain Certification Dapp",
    description:"Build Your Own Certification System using Soulbound Tokens on Kalp Blockchain",
    image: sbtdapp,
    category:"Hackathon",
    technologies:["GoLang","SBT","Kalp SDK","Next.js","Kalp network","TypeScript","Tailwind Css"],
    githubLink:"https://github.com/GayathriPCh/build-hack-sbtdapp",
  },
  {
    id: 11,
    title: "EV Breeze: Eco-Friendly Transportation Planning App",
    description: "Built during my first hackathon – ImpacTech 2K23 (24hr) – EV Breeze helps users plan and track their eco-friendly transportation options like EV charging stations, public transit, and bike-sharing. It includes a carbon footprint calculator, station locator, and community reviews.",
    image: evbreeze,
    category: "Hackathon",
    technologies: ["HTML", "CSS", "JavaScript", "Django", "MySQL"],
    githubLink: "https://github.com/GayathriPCh/EV_Breeze"
  }, 
  {
    id: 12,
    title: "BeatWave: Generate Music from Images",
    description: "BeatWave is a Django-based web app developed for the Python Full Stack Development course. It maps image pixels to frequencies to generate unique music. Upload an image and download both WAV and MIDI compositions derived from it.",
    image: beatwave,
    category: "Full Stack",
    technologies: ["Python", "Django", "JavaScript", "CSS", "HTML"],
    githubLink: "https://github.com/GayathriPCh/Image-to-music-mapping-with-python-libraries"
  },
  {
    id: 13,
    title: "SkyQuest: Stargazing & Celestial Event Explorer",
    description: "SkyQuest is an experimental static site that explores astronomy through constellation facts, celestial event calendars, stargazing tips, and a night sky photography gallery. Built with HTML, CSS, and JavaScript.",
    image: skyquest,
    category: "Frontend",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/GayathriPCh/SKYQUEST"
  },
  {
    id: 14,
    title: "Kaleido: Color Exploration with Gemini AI",
    description: "Kaleido is a creative tool for artists and designers to explore color schemes, meanings, and swaps. Built in under 12 hours for the Google AI Hackathon using the Gemini API to enhance visual storytelling through color.",
    image: kaleido,
    category: "Full Stack",
    technologies: ["JavaScript", "React.js", "Gemini API"],
    githubLink: "https://github.com/GayathriPCh/Kaleido"
  },
  {
    id: 15,
    title: "Steller Society: Space-Themed Music Player",
    description: "Steller Society is a MERN stack-based music player website featuring a space-inspired UI, integrated chat, and customizable themes. Built for music and space lovers, it offers a cosmic listening experience with planned features like listening parties and mobile app support.",
    image: steller,
    category: "Full Stack",
    technologies: ["React", "Node.js", "Express", "MongoDB", "React Router", "React Icons", "Chat Engine"],
    githubLink: "https://github.com/GayathriPCh/Steller-Society"
  },
  {
    id: 16,
    title: "Interactive Envelope: Surprise Message & GIF Revealer",
    description: "My first ever project as a CS student — a simple interactive envelope that reveals a surprise GIF and message on click. Built with HTML, CSS, and JavaScript, this playful web app helped me explore the basics of frontend development in a fun way.",
    image: envelope,
    category: "Frontend",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/GayathriPCh/envelope"
  },
  {
    id: 17,
    title: "Buzzlines: AI-Powered News Aggregator",
    description: "A full-stack news aggregator that scrapes real-time articles from sources like BBC and AP News, categorizes them with Python scripts, and summarizes them using the Groq AI API. The React frontend presents clean, readable news cards by category.",
    image: buzzlines,
    category: "Full Stack",
    technologies: ["React", "Python", "Groq AI API", "Web Scraping"],
    githubLink: "https://github.com/GayathriPCh/WKTN_32_News_aggregator"
  },
  {
    id: 18,
    title: "Pennywise: Budget Tracker Bot",
    description: "A sleek and smart expense tracker app featuring a chatbot for financial guidance. Pennywise leverages Firebase for authentication and Firestore for storing and categorizing expenses, all wrapped in a stylish custom-font UI.",
    image: pennywise,
    category: "Full Stack",
    technologies: ["React", "Firebase", "Firestore", "Custom Fonts"],
    githubLink: "https://github.com/GayathriPCh/Budget-tracker-bot"
  },
  {
    id: 19,
    title: "Cardify: Flashcard SaaS",
    description: "Cardify is a modern, AI-powered SaaS platform for learners to create, manage, and study flashcards. It features intelligent flashcard generation using Groq AI, secure authentication with Clerk, real-time updates with Firebase, and Stripe-powered subscriptions.",
    image: cardify,
    category: "Full Stack",
    technologies: ["Next.js", "Material UI", "Firebase", "Groq AI", "Clerk API", "Stripe"],
    githubLink: "https://github.com/GayathriPCh/Flashcard-saas"
  },
  {
    id: 20,
    title: "IcpNFTMarketplace",
    description: "A simple NFT marketplace built on the ICP Protocol using Rust for the backend and React for the frontend. It allows users to mint and trade NFTs on the ICP blockchain, with a clean and intuitive interface.",
    image: mintnfticp,
    category: "Web3",
    technologies: ["Rust", "React", "ICP Protocol"],
    githubLink: "https://github.com/GayathriPCh/MIntNFT_ICP"
  },
  {
    id: 21,
    title: "DragonScribe",
    description: "DragonScribe is a dynamic web application designed to help users craft imaginative stories by inputting specific story elements like characters, objects, and scenarios. The app generates unique stories based on user input, ideal for overcoming writer's block and sparking creativity.",
    image: dragonscribe,
    category: "Full Stack",
    technologies: ["Next.js", "Gemini API", "Firebase", "Material-UI"],
    githubLink: "https://github.com/GayathriPCh/starwars-inventory"
  },
  {
    id: 22,
    title: "Flick: Your Personalized News and Content Creator",
    description: "Flick is an AI-powered platform that allows users to create, manage, and share personalized content across multiple platforms. It offers a tailored news feed, AI-driven content creation, and multi-platform sharing capabilities.",
    image: flick,  // Ensure you have an image link for this project
    category: "Hackathon",
    technologies: ["React", "Firebase", "GROQ AI", "Python (News Scraper)"],
    githubLink: "https://github.com/GayathriPCh/Flick"
  },
  {
    id: 23,
    title: "Wallstreet DAO Website",
    description: "The Wallstreet DAO website is the official web presence for the Web3 Club at KL University. It includes features like blogs, club news, and an option for users to claim club membership NFTs on the Ethereum Sepolia testnet. Built using React, TypeScript, and Wagmi for seamless blockchain integration.",
    image: wdao, // Add the image link for the website here
    category: "Web3",
    technologies: ["React", "TypeScript", "Wagmi", "Ethereum Sepolia", "NFTs"],
    githubLink: "https://github.com/GayathriPCh/WDAO-web"
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
    title: "Frontend UI Hackathon by Outlier AI Finalist",
    badge: "Runner Up",
    description: "Finalist in a frontend UI hackathon focused on building intuitive user interfaces for AI applications.",
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
