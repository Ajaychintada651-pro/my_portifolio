export const personal = {
  name: 'Ajay Chintada',
  title: 'AI/ML Engineer',
  subtitle: 'Building intelligent systems with LLMs, RAG pipelines & FastAPI',
  phone: '+918106575869',
  email: 'chintadaajay72645@gmail.com',
  github2: 'Ajaychintada651-pro',
  linkedin: 'https://www.linkedin.com/in/ajay-chintada-0a30761a0/',
  location: 'Pune, Maharashtra, India',
  roles: ['AI/ML Engineer', 'LangChain Developer', 'RAG Architect',],
}

export const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'Python',      icon: 'SiPython',     level: 90 },
      { name: 'SQL',         icon: 'SiPostgresql',  level: 75 },
      { name: 'HTML / CSS',  icon: 'SiHtml5',       level: 82 },
    ],
  },
  {
    category: 'AI / ML',
    items: [
      { name: 'LangChain',    icon: 'SiLangchain',     level: 88 },
      { name: 'HuggingFace',  icon: 'SiHuggingface',   level: 82 },
      { name: 'RAG Pipelines',icon: 'FaBrain',         level: 85 },
      { name: 'Prompt Eng.',  icon: 'FaMicrochip',     level: 83 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'FastAPI',    icon: 'SiFastapi',    level: 85 },
      { name: 'REST APIs',  icon: 'FaServer',     level: 82 },
    ],
  },
  {
    category: 'Cloud & Infra',
    items: [
      { name: 'AWS S3',       icon: 'FaAws',         level: 70 },
      { name: 'PostgreSQL',   icon: 'SiPostgresql',  level: 76 },
      { name: 'Supabase',     icon: 'SiSupabase',    level: 74 },
      { name: 'GitHub',       icon: 'SiGithub',      level: 85 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Gusto MCP',  icon: 'FaPlug',     level: 80 },
      { name: 'Keka API',   icon: 'FaLayerGroup', level: 72 },
      { name: 'VS Code',    icon: 'SiVisualstudiocode', level: 92 },
    ],
  },
]

export const experience = [
  {
    role: 'AI/ML Engineer',
    company: 'Proxima Systems Pvt Ltd',
    period: 'May 2025 – Present',
    location: 'Pune, India',
    type: 'Full-time',
    current: true,
    accent: 'cyan',
    bullets: [
      'Enhanced AI-powered enterprise assistants using LangChain, Hugging Face, and RAG pipelines for intelligent document retrieval and automation.',
      'Built production-grade RAG system with hybrid retrieval (MMR + BM25), vector embeddings, reranking, and response validation for high accuracy.',
      'Optimized LLM latency by ~40–60% via async processing, caching strategies, reranker timeouts, and prompt/chunk optimization.',
      'Implemented memory-efficient query handling, reducing per-request memory by limiting context size and avoiding redundant computations.',
      'Designed concurrency-safe pipelines to handle multiple requests efficiently under load.',
      'Integrated HRMS platforms via Gusto APIs and MCP architecture to fetch employee profiles, payroll, and HR policies.',
      'Contributed to AWS-based SaaS deployments with scalable FastAPI services and AWS S3 document storage.',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Accenture Solutions Pvt Ltd',
    period: 'Oct 2024 – May 2025',
    location: 'Bengaluru, India',
    type: 'Full-time',
    current: false,
    accent: 'purple',
    bullets: [
      'Successfully completed training in SAP HANA system management.',
      'Worked on system monitoring, backup strategies, and performance optimization.',
      'Collaborated with cross-functional teams to troubleshoot software reliability and performance issues.',
      'Recognized on the Wall of Fame at Accenture for outstanding contributions as an SAP Basis Consultant.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Proxima Systems Pvt Ltd',
    period: 'May 2023 – Jul 2023',
    location: 'Hyderabad, India',
    type: 'Internship',
    current: false,
    accent: 'cyan',
    bullets: [
      'Developed a responsive Employee Profile Management System using React.js for efficient data handling.',
      'Integrated Axios and third-party libraries for smooth frontend-backend communication.',
      'Enhanced UI with Material-UI components like forms, cards, and modals.',
      'Designed modular, reusable components for better scalability and maintainability.',
    ],
  },
]

export const projects = [
  {
    title: 'AI-Powered HR Assistant',
    subtitle: 'Enterprise RAG System',
    description:
      'An intelligent HR assistant that answers employee queries using company policy documents. Built with LangChain and RAG architecture featuring hybrid retrieval (MMR + BM25) and reranking. Integrated Gusto MCP and Keka APIs for real-time employee profile, payroll, and HR data.',
    tech: ['LangChain', 'RAG', 'FastAPI', 'Gusto MCP', 'Keka API', 'PostgreSQL'],
    accent: 'cyan',
    icon: 'FaRobot',
    github: 'ajaychintada',
    highlights: ['Hybrid MMR + BM25 retrieval', 'Gusto MCP integration', '40–60% latency reduction'],
  },
  {
    title: 'Legal Document Intelligence',
    subtitle: 'Document Analysis Platform',
    description:
      'AI system for analyzing legal documents using HuggingFace transformers and FastAPI. Implements text extraction, clause detection, risk prediction, and automated summarization. Integrated AWS S3 for document storage and Supabase/PostgreSQL for metadata management.',
    tech: ['HuggingFace', 'FastAPI', 'AWS S3', 'Supabase', 'PostgreSQL', 'Python'],
    accent: 'purple',
    icon: 'FaFileContract',
    github: 'ajaychintada',
    highlights: ['Clause detection & risk prediction', 'AWS S3 storage', 'Automated summarization'],
  },
  {
    title: 'Management Dev. Program',
    subtitle: 'MDP Platform',
    description:
      'Responsive website for Blackbucks and Symbiosis showcasing Management Development Programs and FDPs with focus on user engagement. Backend built with Node.js and PostgreSQL; enhanced UI with Material-UI and optimized backend communication with Axios.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Material UI', 'Axios'],
    accent: 'cyan',
    icon: 'FaChalkboardTeacher',
    github: 'Ajaychintada651-pro',
    highlights: ['Responsive design', 'Node.js + PostgreSQL backend', 'Material UI components'],
  },
]

export const education = [
  {
    degree: 'B.Tech – Electrical Engineering',
    institution: 'Andhra University College of Engineering',
    period: 'Jun 2020 – Apr 2024',
    grade: 'CGPA 8.31 / 10',
    icon: 'FaUniversity',
    perfect: false,
  },
  {
    degree: 'Intermediate – MPC',
    institution: 'Sri Chaitanya Junior College',
    period: 'Jun 2018 – Apr 2020',
    grade: 'CGPA 10 / 10',
    icon: 'FaGraduationCap',
    perfect: true,
  },
  {
    degree: 'SSC (10th Grade)',
    institution: 'Amar EM High School',
    period: 'Jun 2017 – Apr 2018',
    grade: 'CGPA 10 / 10',
    icon: 'FaSchool',
    perfect: true,
  },
]

export const achievements = [
  {
    title: '2nd Place – Proxima Systems Hackathon',
    description:
      'Secured runner-up position among all engineering teams for building an AI-powered internal tool under a 24-hour constraint. Demonstrated effective teamwork and delivered an innovative, production-quality solution.',
    icon: 'FaTrophy',
    accent: 'cyan',
    year: '2025',
    badge: 'Hackathon Winner',
  },
  {
    title: 'Wall of Fame – Accenture',
    description:
      'Recognized on Accenture\'s prestigious Wall of Fame for outstanding contributions and exceptional performance as an Associate Software Engineer and SAP Basis Consultant. This recognition significantly boosted career growth.',
    icon: 'FaMedal',
    accent: 'purple',
    year: '2025',
    badge: 'Excellence Award',
  },
]
