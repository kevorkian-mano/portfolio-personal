import studyBuddyCover from './assets/projects/covers/studybuddy.png'
import miniJiraCover from './assets/projects/covers/minijira.png'
import citiBikeCover from './assets/projects/covers/citibike.png'
import playLearnCover from './assets/projects/covers/playlearn.png'
import likeALocalCover from './assets/projects/covers/likealocal.png'
import lucineCover from './assets/projects/covers/lucine.png'
import healthcareCover from './assets/projects/covers/healthcare.png'
import hrSystemCover from './assets/projects/covers/hrsystem.png'

import pwcLogo from './assets/logos/pwc.png'
import pmiLogo from './assets/logos/pmi.png'
import kodakLogo from './assets/logos/kodak.png'
import abgLogo from './assets/logos/abg.png'
import giuLogo from './assets/logos/giu.png'
import knasLogo from './assets/logos/knas.png'

export const profile = {
  name: 'Manuel Youssef Haik Kevorkian',
  firstName: 'Manuel',
  title: 'Software Engineer',
  location: 'Cairo, Egypt',
  email: 'mano.kevorkian@yahoo.com',
  phone: '+20 01201698890',
  github: 'https://github.com/kevorkian-mano',
  linkedin: 'https://www.linkedin.com/in/manuel-haik-kevorkian-261102371/',
  credly: 'https://www.credly.com/users/manuel-kevorkian/edit/badges/credly',
  tagline:
    'a software engineer crafting full-stack systems, cloud-native apps, and ai-powered tools',
  about:
    "I'm Manuel, a Software Engineering student at GIU Cairo with a minor in Data Science and AI. Over the past year I've interned at PwC, Eastman Kodak, and Accord Business Group, shipping cloud-deployed AI tools and full-stack apps in production. My work pairs solid engineering with research, from distributed systems to AI-powered agents. Let's build something great together!",
}

export const stats = [
  { value: '4', label: 'Internships & roles' },
  { value: '60K+', label: 'Repositories analyzed' },
  { value: '21', label: 'Engineers led on one build' },
  { value: '2027', label: 'Expected graduation' },
]

export interface Experience {
  company: string
  logo: string
  role: string
  period: string
  location: string
  current?: boolean
  bullets: string[]
  tech: string[]
}

export const experiences: Experience[] = [
  {
    company: 'PwC ETIC',
    logo: pwcLogo,
    role: 'Managed Services & AI Intern',
    period: 'Jul 2026 - Present',
    location: 'Cairo, Egypt',
    current: true,
    bullets: [
      'Built 3 AI agentic tools turning BRDs into HTML prototypes in 15 min; co-designed AI training for 40-60 staff.',
      'Deployed Azure Document Intelligence models, Function Apps & AI configs across Dev, Staging & Prod for 2 tax apps.',
      'Resolved Level 1 incidents across 25+ enterprise apps via ServiceNow, Jira & Azure DevOps; wrote team support guides.',
    ],
    tech: ['Azure OpenAI', 'Document Intelligence', 'Function Apps', 'ServiceNow', 'Azure DevOps'],
  },
  {
    company: 'Project Management Institute',
    logo: pmiLogo,
    role: 'PM Course Pilot Volunteer',
    period: 'Sep 2025 - Oct 2025',
    location: 'Cairo, Egypt',
    bullets: [
      'Evaluated a 4-hour Software Project Management eLearning course focused on Agile methodologies and sprint planning.',
      'Provided 20+ improvement recommendations across PM case studies, schedules, and process diagrams.',
      'Reviewed and refined 95% of course content for clarity, technical accuracy, and Agile best practices alignment.',
    ],
    tech: ['Agile', 'Scrum', 'PM Case Studies'],
  },
  {
    company: 'Accord Business Group',
    logo: abgLogo,
    role: 'Software Engineer Intern',
    period: 'Aug 2025 - Sep 2025',
    location: 'Cairo, Egypt',
    bullets: [
      'Collaborated with a fraud analysis team to understand the end-to-end fraud detection lifecycle in banking systems.',
      'Gained hands-on exposure to SAS fraud and analytics tools (SAS FM, SAS VA, SAS VI, SAS SQL).',
      'Analyzed 100+ sample banking transactions and fraud alerts as part of a structured supervised training program.',
    ],
    tech: ['SAS FM', 'SAS VA', 'SAS VI', 'SAS SQL'],
  },
  {
    company: 'Eastman Kodak Company',
    logo: kodakLogo,
    role: 'Software Engineer Intern',
    period: 'May 2025 - Jul 2025',
    location: 'Cairo, Egypt',
    bullets: [
      'Developed a full-stack web application to digitally transform in-store queue management and customer records.',
      'Digitized 200+ daily paper-based entries into structured records, integrating APIs to support real-time operations.',
      'Worked in an Agile team of 5 across sprints, driving digital transformation that cut wait times by an estimated 20%.',
    ],
    tech: ['Full Stack', 'REST APIs', 'Agile'],
  },
]

export interface Project {
  title: string
  tag: string
  date: string
  repo: string
  bullets: string[]
  stack: string[]
  coverIcon: string
  coverLabel: string
  coverIllustration?: string
  coverImage?: string
}

export const projects: Project[] = [
  {
    title: 'B.Sc. Thesis: AI Coding Agent Adoption in npm',
    tag: 'Research',
    date: 'Nov 2026',
    repo: 'https://github.com/kevorkian-mano/thesis-coding-agent-adoption',
    stack: ['Python', 'GitHub API', 'GraphQL'],
    coverIcon: 'Bot',
    coverLabel: 'AI Research',
    bullets: [
      'Built a 5-stage pipeline with a 3-pass detection cascade, classifying 60,129 GitHub repos for AI coding agent use.',
      "Found 74.4% adoption and produced the first 66-country ranking using Wilson CIs, McNemar's and chi-squared tests.",
    ],
  },
  {
    title: 'Real-Time Study Buddy Matcher',
    tag: 'Full Stack',
    date: 'May 2026',
    repo: 'https://github.com/kevorkian-mano/buddymatcher-microservices',
    stack: ['React', 'Node.js', 'GraphQL', 'Kafka', 'PostgreSQL'],
    coverIcon: 'UsersRound',
    coverLabel: 'Microservices',
    coverImage: studyBuddyCover,
    bullets: [
      'Led a team of 5 to build 7 microservices communicating via Kafka across 6 event streams and 7 PostgreSQL databases.',
      'Developed a 7-factor compatibility algorithm to generate real-time, personalized study buddy recommendations.',
    ],
  },
  {
    title: 'Mini-Jira AWS',
    tag: 'Cloud',
    date: 'May 2026',
    repo: 'https://github.com/kevorkian-mano/aws-mini-jira',
    stack: ['AWS', 'React', 'Node.js', 'DynamoDB', 'Lambda'],
    coverIcon: 'Cloud',
    coverLabel: 'AWS Cloud',
    coverImage: miniJiraCover,
    bullets: [
      'Deployed a Jira-like task platform across 2 AZs using EC2, ALB & CloudFront, integrating 10+ AWS services.',
      'Built 3 event-driven Lambda workflows via SNS, SQS & EventBridge for image processing, alerts and daily digests.',
    ],
  },
  {
    title: 'Citi Bike NYC Analytics & ML Pipeline',
    tag: 'Data / ML',
    date: 'May 2026',
    repo: 'https://github.com/kevorkian-mano/Citi-Bike-NYC',
    stack: ['PySpark', 'Spark SQL', 'SparkML', 'Plotly'],
    coverIcon: 'Bike',
    coverLabel: 'Big Data / ML',
    coverImage: citiBikeCover,
    bullets: [
      'Cleaned 1.3M Citi Bike records to a 99.92% clean-data rate and ran 10 Spark SQL queries to uncover demand patterns.',
      'Evaluated 3 SparkML models on 624K+ records, achieving 59.81% accuracy and delivering an interactive dashboard.',
    ],
  },
  {
    title: 'LikeALocal - City Discovery App',
    tag: 'Mobile',
    date: 'Jun 2026',
    repo: 'https://github.com/kevorkian-mano/likealocal-mobile-app',
    stack: ['Flutter', 'Dart', 'Firebase'],
    coverIcon: 'MapPin',
    coverLabel: 'Flutter App',
    coverImage: likeALocalCover,
    bullets: [
      'Built a premium Flutter travel app for discovering curated "Hidden Gems" via an interactive map, personalized feed, and community contributions.',
      'Designed 5 hierarchical user roles with an AI local guide, P2P chat, and premium tiers including an AI trip planner and offline maps.',
    ],
  },
  {
    title: 'HR System',
    tag: 'Full Stack',
    date: 'Dec 2025',
    repo: 'https://github.com/kevorkian-mano/DataOrbit---HealthCare-Provider-Fraud-Detection-Project',
    stack: ['MongoDB', 'Nest.js', 'Next.js'],
    coverIcon: 'Building2',
    coverLabel: 'Enterprise System',
    coverImage: hrSystemCover,
    bullets: [
      'Led a 21-member team delivering an HR system with 7 subsystems to production, ranked among the top 5 projects.',
      'Unified subsystem repos into one NestJS/Next.js codebase, with 75+ REST endpoints delivered over 3 milestones.',
    ],
  },
  {
    title: 'LUCINE - Full-Stack E-Commerce',
    tag: 'Full Stack',
    date: 'Jan 2026',
    repo: 'https://github.com/kevorkian-mano/lucine-ecommerce_testdriven',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    coverIcon: 'ShoppingBag',
    coverLabel: 'E-Commerce',
    coverImage: lucineCover,
    bullets: [
      'Developed a production-ready MERN e-commerce platform with JWT auth, Stripe payments, stock-validated cart, and an admin dashboard.',
      'Followed a test-driven, layered 3-tier architecture with SOLID principles and 300+ unit tests across backend and frontend.',
    ],
  },
  {
    title: 'Play, Learn & Protect',
    tag: 'Full Stack',
    date: 'Jan 2026',
    repo: 'https://github.com/kevorkian-mano/play-Learn-requirements-engineering',
    stack: ['Next.js', 'Nest.js', 'MongoDB'],
    coverIcon: 'Gamepad2',
    coverLabel: 'EdTech Platform',
    coverImage: playLearnCover,
    bullets: [
      'Built a gamified learning platform for Egyptian children (ages 3-12) with 33 games across 6 subjects and 3 difficulty levels.',
      'Engineered full requirements and SRS covering the teacher/course system plus online-safety monitoring and parental controls.',
    ],
  },
  {
    title: 'Healthcare Appointment Scheduling System',
    tag: 'Architecture',
    date: 'Nov 2025',
    repo: 'https://github.com/kevorkian-mano/Healthcare_Appointment_Scheduling_System',
    stack: ['UML', 'Microservices', 'System Design'],
    coverIcon: 'Building2',
    coverLabel: 'System Architecture',
    coverImage: healthcareCover,
    bullets: [
      'Ran 12 client interviews to extract 10 functional and 11 non-functional requirements for a platform supporting 10,000+ concurrent users.',
      'Designed a 7-service microservices architecture with 5 UML sequence diagrams, evolving a monolith MVP to a horizontally scaled, <2s-response system.',
    ],
  },
]

export interface SkillGroup {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'Java', 'JavaScript (ES6+)', 'TypeScript', 'C', 'C++', 'C#', 'Dart'],
  },
  {
    category: 'Web & Backend',
    skills: ['HTML5', 'CSS3', 'React.js', 'Next.js', 'Node.js', 'Nest.js', 'Spring Boot', 'GraphQL', 'Flutter', 'OutSystems'],
  },
  {
    category: 'Databases & ORM',
    skills: ['PostgreSQL', 'NeonDB', 'DynamoDB', 'MongoDB', 'Cassandra', 'MSSQL', 'Redis', 'Firebase', 'Prisma ORM'],
  },
  {
    category: 'Cloud, Big Data & ML',
    skills: ['AWS', 'Apache Spark', 'SparkSQL', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Power BI'],
  },
  {
    category: 'AI & Automation',
    skills: ['Azure OpenAI', 'LangGraph', 'MCP', 'A2A', 'RAG', 'n8n', 'Copilot Studio', 'Power Platform'],
  },
  {
    category: 'Tools & Practices',
    skills: ['Docker', 'Linux/WSL', 'Git', 'Postman', 'ServiceNow', 'Jira', 'Azure DevOps', 'Figma', 'Agile/Scrum', 'UML'],
  },
]

export interface EducationItem {
  school: string
  logo: string
  degree: string
  minor?: string
  location: string
  period: string
  note?: string
}

export const educationHistory: EducationItem[] = [
  {
    school: 'German International University',
    logo: giuLogo,
    degree: 'B.Sc. in Software Engineering',
    minor: 'Minor in Data Science & AI',
    location: 'New Administrative Capital, Cairo, Egypt',
    period: 'Expected June 2027',
    note: 'GPA 1.16 (German Scale)',
  },
  {
    school: 'Kaloudian Nubarian Armenian School',
    logo: knasLogo,
    degree: 'Graduated - Mathematics Section',
    location: 'Cairo, Egypt',
    period: 'Secondary education',
  },
]

export interface Achievement {
  title: string
  issuer: string
  year: string
  link: string
  type: string
}

export const achievements: Achievement[] = [
  {
    title: 'Confluent Apache Kafka Fundamentals',
    issuer: 'Confluent',
    year: '2026',
    link: 'https://certificates.confluent.io/ac700098-4e77-4748-8e2d-7754e1e1631d',
    type: 'Certification',
  },
  {
    title: 'AWS Academy Graduate - Cloud Foundations',
    issuer: 'AWS Academy',
    year: '2026',
    link: 'https://www.credly.com/badges/123b3967-1b0d-4ab9-a2cc-38d7078a3fe2/public_url',
    type: 'Certification',
  },
  {
    title: 'DAAD Scholarship Recipient',
    issuer: 'German International University',
    year: '',
    link: 'https://drive.google.com/file/d/1ir1m7NR7aHjLuTo0yNrfQyzGijuoDPG3/view?usp=drive_link',
    type: 'Award',
  },
]
