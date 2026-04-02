import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './JobMatcher.module.css'

const CIRCUMFERENCE = 2 * Math.PI * 52

const scenarios = [
  {
    id: 'aiml',
    keywords: ['langchain', 'rag', 'llm', 'large language model', 'huggingface', 'hugging face', 'fastapi', 'embeddings', 'vector', 'retrieval', 'generative ai', 'openai', 'claude', 'gpt', 'transformer', 'nlp', 'natural language'],
    score: 88,
    matchedSkills: ['LangChain', 'RAG Pipelines', 'HuggingFace', 'FastAPI', 'Python', 'Prompt Engineering', 'AWS S3'],
    gapSkills: ['Kubernetes'],
    tailoredSummary:
      'Ajay is an excellent fit for this role. His hands-on production experience building RAG systems with LangChain, HuggingFace, and hybrid retrieval (MMR + BM25) aligns directly with the core requirements. His FastAPI backend skills, AWS S3 integration, and 40–60% latency optimization work add strong engineering depth that goes beyond typical AI/ML candidates.',
  },
  {
    id: 'fullstack',
    keywords: ['react', 'node', 'node.js', 'javascript', 'typescript', 'frontend', 'backend', 'postgresql', 'full stack', 'fullstack', 'web developer', 'html', 'css', 'rest api'],
    score: 72,
    matchedSkills: ['React.js', 'Node.js', 'PostgreSQL', 'REST APIs', 'HTML / CSS', 'JavaScript'],
    gapSkills: ['TypeScript', 'Next.js'],
    tailoredSummary:
      'Ajay has solid full-stack experience from building the TapTap admin portal at Blackbucks using React, Node.js, and PostgreSQL — achieving 30% efficiency gains. While his primary focus has since shifted to AI/ML engineering, his frontend and backend foundations are strong and production-tested.',
  },
  {
    id: 'backend',
    keywords: ['python', 'api', 'rest', 'microservices', 'aws', 'cloud', 'database', 'supabase', 'scalable', 'backend engineer', 'server', 'django', 'flask'],
    score: 68,
    matchedSkills: ['Python', 'FastAPI', 'REST APIs', 'AWS S3', 'PostgreSQL', 'Supabase', 'GitHub'],
    gapSkills: ['Kubernetes', 'Go'],
    tailoredSummary:
      "Ajay's backend expertise with FastAPI and Python is a strong match. His production deployments at Proxima Systems include scalable async FastAPI services with AWS S3 document storage and Supabase/PostgreSQL data management. His experience with concurrent request handling and memory-efficient pipelines shows real engineering maturity.",
  },
  {
    id: 'datascience',
    keywords: ['machine learning', 'deep learning', 'tensorflow', 'pytorch', 'scikit', 'data science', 'data scientist', 'analytics', 'statistics', 'computer vision', 'model training', 'jupyter'],
    score: 60,
    matchedSkills: ['Python', 'HuggingFace', 'SQL', 'Prompt Engineering'],
    gapSkills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Statistics'],
    tailoredSummary:
      "Ajay's background in applied NLP and LLM engineering gives him relevant ML exposure. His HuggingFace transformer experience and text processing work are directly applicable. His focus has been on production AI systems rather than research/experimental ML, making him better suited for applied ML roles than pure data science research.",
  },
  {
    id: 'default',
    keywords: [],
    score: 24,
    matchedSkills: ['Python', 'GitHub'],
    gapSkills: ['Role-specific skills not identified'],
    tailoredSummary:
      "Ajay's profile has limited overlap with this specific role based on the keywords detected. However, his strong Python foundation, problem-solving track record (2nd place Hackathon, Wall of Fame at Accenture), and fast learning curve make him worth a conversation for adjacent opportunities.",
  },
]

function matchScenario(jdText) {
  const lower = jdText.toLowerCase()
  let bestHits = 0
  let bestScenario = scenarios[4]

  for (const s of scenarios.slice(0, 4)) {
    const hits = s.keywords.filter((kw) => lower.includes(kw)).length
    if (hits > bestHits) {
      bestHits = hits
      bestScenario = s
    }
  }

  return bestScenario
}

function scoreColor(score) {
  if (score >= 70) return 'var(--cyan)'
  if (score >= 50) return '#f5b820'
  return 'var(--text-muted)'
}

export default function JobMatcher() {
  const [jobDesc, setJobDesc] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  function handleAnalyze() {
    if (!jobDesc.trim()) return
    setLoading(true)
    setResult(null)
    setTimeout(() => {
      setResult(matchScenario(jobDesc))
      setLoading(false)
    }, 1400)
  }

  const color = result ? scoreColor(result.score) : 'var(--cyan)'
  const dashOffset = result
    ? CIRCUMFERENCE * (1 - result.score / 100)
    : CIRCUMFERENCE

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerIcon}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3z"/>
          </svg>
        </div>
        <div>
          <h3 className={styles.title}>AI Job Match Analyzer</h3>
          <p className={styles.subtitle}>Paste a job description to see how well Ajay matches</p>
        </div>
      </div>

      {/* Input area */}
      <textarea
        className={styles.textarea}
        placeholder="Paste a job description here — e.g. 'We are looking for a Python developer with LangChain and RAG experience...'"
        value={jobDesc}
        onChange={(e) => setJobDesc(e.target.value)}
        rows={5}
      />

      <button
        className={styles.button}
        onClick={handleAnalyze}
        disabled={!jobDesc.trim() || loading}
      >
        {loading ? (
          <span className={styles.loadingDots}>
            <span />
            <span />
            <span />
          </span>
        ) : (
          <>
            Analyze Match
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </>
        )}
      </button>

      {/* Results */}
      <AnimatePresence>
        {result && (
          <motion.div
            className={styles.results}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className={styles.resultsTop}>
              {/* Score Ring */}
              <div className={styles.scoreWrap}>
                <svg width="128" height="128" viewBox="0 0 128 128">
                  {/* Track */}
                  <circle
                    cx="64" cy="64" r="52"
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="10"
                  />
                  {/* Fill */}
                  <motion.circle
                    cx="64" cy="64" r="52"
                    fill="none"
                    stroke={color}
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    initial={{ strokeDashoffset: CIRCUMFERENCE }}
                    animate={{ strokeDashoffset: dashOffset }}
                    transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                    style={{
                      transformOrigin: '64px 64px',
                      transform: 'rotate(-90deg)',
                      filter: `drop-shadow(0 0 8px ${color})`,
                    }}
                  />
                </svg>
                <div className={styles.scoreInner}>
                  <motion.span
                    className={styles.scoreNumber}
                    style={{ color }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    {result.score}%
                  </motion.span>
                  <span className={styles.scoreLabel}>Match</span>
                </div>
              </div>

              {/* Skills columns */}
              <div className={styles.skillsGrid}>
                <div className={styles.skillsCol}>
                  <p className={styles.colLabel}>Matched Skills</p>
                  <div className={styles.chips}>
                    {result.matchedSkills.map((s, i) => (
                      <motion.span
                        key={s}
                        className={styles.chipMatch}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.07, duration: 0.3 }}
                      >
                        ✓ {s}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className={styles.skillsCol}>
                  <p className={styles.colLabel}>Skill Gaps</p>
                  <div className={styles.chips}>
                    {result.gapSkills.map((s, i) => (
                      <motion.span
                        key={s}
                        className={styles.chipGap}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.07, duration: 0.3 }}
                      >
                        ⚠ {s}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <motion.div
              className={styles.summary}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <p className={styles.summaryLabel}>Tailored Summary</p>
              <p className={styles.summaryText}>{result.tailoredSummary}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
