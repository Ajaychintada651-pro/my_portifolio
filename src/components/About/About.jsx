import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiZap } from 'react-icons/fi'
import { FaMapMarkerAlt } from 'react-icons/fa'
import SectionHeading from '../shared/SectionHeading'
import styles from './About.module.css'

const stats = [
  { value: '1+',  label: 'Years Experience', icon: <FiZap /> },
  { value: '3',   label: 'Key Projects',      icon: <FiCode /> },
  { value: '2',   label: 'Awards Won',         icon: <FiCpu /> },
]

const codeLines = [
  { type: 'keyword', text: 'const' },
  { type: 'var',     text: ' ajay' },
  { type: 'op',      text: ' = {' },
  { type: 'key',     text: '\n  role:' },
  { type: 'str',     text: ' "AI/ML Engineer",' },
  { type: 'key',     text: '\n  focus:' },
  { type: 'str',     text: ' "LLMs + RAG",' },
  { type: 'key',     text: '\n  location:' },
  { type: 'str',     text: ' "Pune, India",' },
  { type: 'key',     text: '\n  passion:' },
  { type: 'str',     text: ' "Building AI",' },
  { type: 'op',      text: '\n}' },
]

export default function About() {
  return (
    <section id="about">
      <div className="section-wrapper">
        <div className={styles.grid}>
          {/* Left — terminal card */}
          <motion.div
            className={styles.terminalWrap}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.terminal}>
              <div className={styles.termHeader}>
                <span className={`${styles.dot} ${styles.red}`} />
                <span className={`${styles.dot} ${styles.yellow}`} />
                <span className={`${styles.dot} ${styles.green}`} />
                <span className={styles.termTitle}>profile.js</span>
              </div>
              <div className={styles.termBody}>
                <pre className={styles.code}>
                  {codeLines.map((line, i) => (
                    <span key={i} className={styles[line.type]}>{line.text}</span>
                  ))}
                </pre>
              </div>
            </div>

            {/* Location badge */}
            <motion.div
              className={styles.locationBadge}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaMapMarkerAlt className={styles.pinIcon} />
              Pune, India
            </motion.div>

            {/* Status badge */}
            <motion.div
              className={styles.statusBadge}
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <span className={styles.statusDot} />
              Open to Opportunities
            </motion.div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            className={styles.textSide}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              eyebrow="About Me"
              title="Who I Am"
              align="left"
            />

            <p className={styles.bio}>
              I&apos;m an AI/ML Engineer at <strong>Proxima Systems</strong> specializing in building
              production-grade intelligent systems. My work spans LLM-powered enterprise assistants,
              RAG architectures, and scalable FastAPI backends.
            </p>
            <p className={styles.bio}>
              With a background in Electrical Engineering from <strong>Andhra University</strong>,
              I bridge the gap between theoretical AI concepts and real-world deployments — optimizing
              latency, memory, and accuracy in systems that actually matter.
            </p>
            <p className={styles.bio}>
              I&apos;m passionate about the intersection of language models and practical automation,
              and I thrive on challenging engineering problems that push the boundaries of what AI
              can do for enterprise workflows.
            </p>

            {/* Stats row */}
            <div className={styles.stats}>
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className={styles.stat}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <span className={styles.statIcon}>{s.icon}</span>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
