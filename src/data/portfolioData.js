export const personal = {
  name: 'Ajay Chintada',
  title: 'AI/ML Engineer',
  subtitle: 'Building intelligent systems with LLMs, RAG pipelines & FastAPI',
  phone: '+918106575869',
  email: 'chintadaajay72645@gmail.com',
  github2: 'Ajaychintada651-pro',
  linkedin: 'https://www.linkedin.com/in/ajay-chintada-0a30761a0/',
  location: 'AndhraPradesh, India',
  roles: ['AI/ML Engineer', 'LangChain Developer', 'RAG Architect',],
}

export const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python',     icon: 'SiPython',    level: 90 },
      { name: 'SQL',        icon: 'SiPostgresql', level: 75 },
      { name: 'HTML / CSS', icon: 'SiHtml5',      level: 82 },
    ],
  },
  {
    category: 'AI / LLM Technologies',
    items: [
      { name: 'LangChain',          icon: 'SiLangchain',   level: 88 },
      { name: 'HuggingFace',        icon: 'SiHuggingface', level: 82 },
      { name: 'RAG Pipelines',      icon: 'FaBrain',       level: 85 },
      { name: 'Vector Embeddings',  icon: 'FaMicrochip',   level: 83 },
      { name: 'Prompt Engineering', icon: 'FaMicrochip',   level: 83 },
      { name: 'RAGAS',              icon: 'FaBrain',       level: 76 },
    ],
  },
  {
    category: 'Models Used',
    items: [
      { name: 'Amazon Titan Embed. V1', icon: 'FaAws',       level: 80 },
      { name: 'Claude Haiku 4.5',       icon: 'FaRobot',     level: 82 },
      { name: 'GPT-4o-mini',            icon: 'FaMicrochip', level: 78 },
      { name: 'text-embedding-3-small', icon: 'FaMicrochip', level: 76 },
      { name: 'Cohere Rerank v3.5',     icon: 'FaBrain',     level: 78 },
    ],
  },
  {
    category: 'Backend Development',
    items: [
      { name: 'FastAPI',   icon: 'SiFastapi', level: 85 },
      { name: 'REST APIs', icon: 'FaServer',  level: 82 },
    ],
  },
  {
    category: 'Databases & Storage',
    items: [
      { name: 'PostgreSQL', icon: 'SiPostgresql', level: 76 },
      { name: 'Supabase',   icon: 'SiSupabase',   level: 74 },
      { name: 'AWS S3',     icon: 'FaAws',        level: 78 },
    ],
  },
  {
    category: 'Cloud & Integrations',
    items: [
      { name: 'AWS Bedrock',          icon: 'FaLayerGroup', level: 74 },
      { name: 'AWS SNS',              icon: 'FaBell',       level: 76 },
      { name: 'AWS Marketplace SaaS', icon: 'FaAws',        level: 78 },
      { name: 'Gusto MCP',            icon: 'FaServer',     level: 78 },
      { name: 'Keka API',             icon: 'FaServer',     level: 74 },
      { name: 'Docker',               icon: 'FaDocker',     level: 80 },
    ],
  },
  {
    category: 'Tools & Technologies',
    items: [
      { name: 'Git',         icon: 'SiGit',              level: 88 },
      { name: 'GitHub',      icon: 'SiGithub',           level: 85 },
      { name: 'VS Code',     icon: 'SiVisualstudiocode', level: 92 },
      { name: 'Postman',     icon: 'SiPostman',          level: 82 },
      { name: 'Claude Code', icon: 'FaRobot',            level: 85 },
    ],
  },
]

export const experience = [
  {
    role: 'AI/ML Engineer',
    company: 'Proxima Systems Pvt Ltd',
    period: 'May 2025 – Present',
    location: 'Remote',
    type: 'Full-time',
    current: true,
    accent: 'cyan',
    tags: ['LangChain', 'RAG', 'FastAPI', 'AWS S3', 'Gusto MCP', 'HuggingFace'],
    bullets: [
      'Built production-grade RAG system using LangChain, Amazon Titan Embeddings V1, and Claude Haiku as the generation model, with hybrid retrieval (MMR + BM25), reranking, and response validation.',
      'Evaluated RAG pipeline quality using RAGAS framework with GPT-4o-mini and text-embedding-3-small, tracking faithfulness, answer relevancy, and context precision metrics.',
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
    tags: ['SAP HANA', 'System Monitoring', 'Performance Optimization'],
    bullets: [
      'Successfully completed training in SAP HANA system management.',
      'Worked on system monitoring, backup strategies, and performance optimization.',
      'Collaborated with cross-functional teams to troubleshoot software reliability and performance issues.',
      'Recognized on the Wall of Fame at Accenture for outstanding contributions as an SAP Basis Consultant.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Blackbucks Education Pvt Ltd',
    period: 'Jul 2024 – Oct 2024',
    location: 'Hyderabad, India',
    type: 'Internship',
    current: false,
    accent: 'cyan',
    tags: ['React.js', 'Node.js', 'PostgreSQL', 'JavaScript', 'HTML/CSS'],
    bullets: [
      'Developed responsive web applications using HTML, CSS, JavaScript, and React.js.',
      'Built and optimized backend services using Node.js and PostgreSQL.',
      'Worked extensively on the TapTap admin portal, managing user authentication, course listings, and internship opportunities for students.',
      'Implemented dashboards for admins to track student enrollments and course progress.',
      'Adopted a data-driven approach for managing course enrollments, tracking progress, and automating job postings, improving efficiency by 30%.',
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
    tags: ['React.js', 'Material UI', 'Axios', 'JavaScript'],
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
    tech: ['LangChain', 'RAG', 'FastAPI', 'Amazon Titan Embeddings', 'Claude Haiku', 'RAGAS', 'Gusto MCP', 'PostgreSQL'],
    accent: 'cyan',
    icon: 'FaRobot',
    github: 'ajaychintada',
    highlights: ['Amazon Titan V1 embeddings + Claude Haiku generation', 'RAGAS evaluation (GPT-4o-mini)', '40–60% latency reduction'],
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
