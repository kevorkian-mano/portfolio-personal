import studyBuddyImg from '../assets/projects/studybuddy.png'
import miniJiraImg from '../assets/projects/minijira.png'
import citiBikeImg from '../assets/projects/citibike.png'
import likeALocalImg from '../assets/projects/likealocal.jpg'

import pwcLogo from '../assets/logos/pwc.png'
import pmiLogo from '../assets/logos/pmi.png'
import kodakLogo from '../assets/logos/kodak.png'
import abgLogo from '../assets/logos/abg.png'
import giuLogo from '../assets/logos/giu.png'
import knasLogo from '../assets/logos/knas.png'

export const profile = {
  name: 'Manuel Youssef Haik Kevorkian',
  shortName: 'Manuel Haik Kevorkian',
  title: 'Software Engineer',
  location: 'Cairo, Egypt',
  email: 'mano.kevorkian@yahoo.com',
  phone: '+20 01201698890',
  github: 'https://github.com/kevorkian-mano',
  linkedin: 'https://www.linkedin.com/in/manuel-haik-kevorkian-261102371/',
  credly: 'https://www.credly.com/users/manuel-kevorkian/edit/badges/credly',
  tagline: 'Software Engineering student at GIU Cairo, minoring in Data Science & AI. I build full-stack systems, cloud-native apps, and AI-powered tools.',
}

export const stats = [
  { value: '4', label: 'Internships & roles' },
  { value: '60K+', label: 'Repositories analyzed' },
  { value: '21', label: 'Engineers led on one build' },
  { value: '2027', label: 'Expected graduation' },
]

export const education = {
  school: 'German International University',
  degree: 'B.Sc. in Software Engineering',
  minor: 'Minor in Data Science & AI',
  location: 'New Administrative Capital, Cairo, Egypt',
  graduation: 'Expected June 2027',
  gpa: '1.16 (German Scale)',
  coursework: [
    'Object-Oriented Programming', 'Data Structures & Algorithms', 'Operating Systems',
    'Databases', 'Distributed Systems', 'Machine Learning',
    'Software Engineering', 'Cloud Computing', 'Cybersecurity', 'Project Management',
  ],
}

export const experiences = [
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

export const projects = [
  {
    title: 'B.Sc. Thesis: AI Coding Agent Adoption in npm',
    stack: ['Python', 'GitHub API', 'GraphQL'],
    date: 'Nov 2026',
    repo: 'https://github.com/kevorkian-mano/thesis-coding-agent-adoption',
    bullets: [
      'Built a 5-stage pipeline with a 3-pass detection cascade, classifying 60,129 GitHub repos for AI coding agent use.',
      'Found 74.4% adoption and produced the first 66-country ranking using Wilson CIs, McNemar\'s and chi-squared tests.',
    ],
    tag: 'Research',
  },
  {
    title: 'Real-Time Study Buddy Matcher',
    image: studyBuddyImg,
    imageAlt: 'Study Buddy Matcher landing page',
    imageFit: 'cover',
    stack: ['React', 'Node.js', 'GraphQL', 'Kafka', 'PostgreSQL'],
    date: 'May 2026',
    repo: 'https://github.com/kevorkian-mano/software_hidden',
    bullets: [
      'Led a team of 5 to build 7 microservices communicating via Kafka across 6 event streams and 7 PostgreSQL databases.',
      'Developed a 7-factor compatibility algorithm to generate real-time, personalized study buddy recommendations.',
    ],
    tag: 'Full Stack',
  },
  {
    title: 'Mini-Jira AWS',
    image: miniJiraImg,
    imageAlt: 'Mini-Jira AWS cloud architecture diagram',
    stack: ['AWS', 'React', 'Node.js', 'DynamoDB', 'Lambda'],
    date: 'May 2026',
    repo: 'https://github.com/kevorkian-mano/aws-mini-jira',
    bullets: [
      'Deployed a Jira-like task platform across 2 AZs using EC2, ALB & CloudFront, integrating 10+ AWS services.',
      'Built 3 event-driven Lambda workflows via SNS, SQS & EventBridge for image processing, alerts and daily digests.',
    ],
    tag: 'Cloud',
  },
  {
    title: 'Citi Bike NYC Analytics & ML Pipeline',
    image: citiBikeImg,
    imageAlt: 'Citi Bike hourly trip demand analysis chart',
    stack: ['PySpark', 'Spark SQL', 'SparkML', 'Plotly'],
    date: 'May 2026',
    repo: 'https://github.com/kevorkian-mano/Citi-Bike-NYC',
    bullets: [
      'Cleaned 1.3M Citi Bike records to a 99.92% clean-data rate and ran 10 Spark SQL queries to uncover demand patterns.',
      'Evaluated 3 SparkML models on 624K+ records, achieving 59.81% accuracy and delivering an interactive dashboard.',
    ],
    tag: 'Data / ML',
  },
  {
    title: 'HR System',
    stack: ['MongoDB', 'Nest.js', 'Next.js'],
    date: 'Dec 2025',
    repo: 'https://github.com/kevorkian-mano/DataOrbit---HealthCare-Provider-Fraud-Detection-Project',
    bullets: [
      'Led a 21-member team delivering an HR system with 7 subsystems to production, ranked among the top 5 projects.',
      'Unified subsystem repos into one NestJS/Next.js codebase, with 75+ REST endpoints delivered over 3 milestones.',
    ],
    tag: 'Full Stack',
  },
  {
    title: 'LikeALocal - City Discovery App',
    image: likeALocalImg,
    imageAlt: 'LikeALocal mobile app promotional screens',
    imageFit: 'cover',
    stack: ['Flutter', 'Dart', 'Firebase'],
    date: 'Jun 2026',
    repo: 'https://github.com/kevorkian-mano/likealocal-mobile-app',
    bullets: [
      'Built a premium Flutter travel app for discovering curated "Hidden Gems" via an interactive map, personalized feed, and community contributions.',
      'Designed 5 hierarchical user roles with an AI local guide, P2P chat, and premium tiers including an AI trip planner and offline maps.',
    ],
    tag: 'Mobile',
  },
  {
    title: 'LUCINE - Full-Stack E-Commerce',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    date: 'Jan 2026',
    repo: 'https://github.com/kevorkian-mano/lucine-ecommerce_testdriven',
    bullets: [
      'Developed a production-ready MERN e-commerce platform with JWT auth, Stripe payments, stock-validated cart, and an admin dashboard.',
      'Followed a test-driven, layered 3-tier architecture with SOLID principles and 300+ unit tests across backend and frontend.',
    ],
    tag: 'Full Stack',
  },
  {
    title: 'Play, Learn & Protect',
    stack: ['Next.js', 'Nest.js', 'MongoDB'],
    date: 'Jan 2026',
    repo: 'https://github.com/kevorkian-mano/play-Learn-requirements-engineering',
    bullets: [
      'Built a gamified learning platform for Egyptian children (ages 3-12) with 33 games across 6 subjects and 3 difficulty levels.',
      'Engineered full requirements and SRS covering the teacher/course system plus online-safety monitoring and parental controls.',
    ],
    tag: 'Full Stack',
  },
]

export const educationHistory = [
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
    minor: '',
    location: 'Cairo, Egypt',
    period: 'Secondary education',
    note: '',
  },
]

export const skillGroups = [
  {
    category: 'Programming Languages',
    icon: 'Code',
    skills: ['Python', 'Java', 'JavaScript (ES6+)', 'TypeScript', 'C', 'C++', 'C#', 'Dart'],
  },
  {
    category: 'Web & Backend',
    icon: 'Globe',
    skills: ['HTML5', 'CSS3', 'React.js', 'Next.js', 'Node.js', 'Nest.js', 'Spring Boot', 'GraphQL', 'Flutter', 'OutSystems'],
  },
  {
    category: 'Databases & ORM',
    icon: 'Database',
    skills: ['PostgreSQL', 'NeonDB', 'DynamoDB', 'MongoDB', 'Cassandra', 'MSSQL', 'Redis', 'Firebase', 'Prisma ORM'],
  },
  {
    category: 'Cloud, Big Data & ML',
    icon: 'Cloud',
    skills: ['AWS', 'Apache Spark', 'SparkSQL', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Power BI'],
  },
  {
    category: 'AI & Automation',
    icon: 'Sparkles',
    skills: ['Azure OpenAI', 'LangGraph', 'MCP', 'A2A', 'RAG', 'n8n', 'Copilot Studio', 'Power Platform'],
  },
  {
    category: 'Tools & Practices',
    icon: 'Wrench',
    skills: ['Docker', 'Linux/WSL', 'Git', 'Postman', 'ServiceNow', 'Jira', 'Azure DevOps', 'Figma', 'Agile/Scrum', 'UML'],
  },
]

export const achievements = [
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
