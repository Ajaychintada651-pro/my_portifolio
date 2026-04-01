import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { FiGithub, FiMail, FiPhone, FiArrowDown } from 'react-icons/fi'
import { FaBrain } from 'react-icons/fa'
import { personal } from '../../data/portfolioData'
import styles from './Hero.module.css'
import { FaLinkedin } from 'react-icons/fa'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}
const itemVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

function useTypewriter(words, typingSpeed = 100, deletingSpeed = 50, pauseMs = 1600) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, displayed.length + 1)
        setDisplayed(next)
        if (next === current) setTimeout(() => setDeleting(true), pauseMs)
      } else {
        const next = current.slice(0, displayed.length - 1)
        setDisplayed(next)
        if (next === '') {
          setDeleting(false)
          setWordIndex((i) => (i + 1) % words.length)
        }
      }
    }, deleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timeout)
  }, [displayed, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs])

  return displayed
}

export default function Hero() {
  const role = useTypewriter(personal.roles)

  return (
    <section id="hero" className={styles.hero}>
      {/* Background glows */}
      <div className={styles.glow1} />
      <div className={styles.glow2} />

      <div className={styles.content}>
        {/* Left — text */}
        <motion.div
          className={styles.textCol}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className={styles.greeting} variants={itemVariants}>
            Hello, I&apos;m
          </motion.span>

          <motion.h1 className={styles.name} variants={itemVariants}>
            <span className="gradient-text">{personal.name}</span>
          </motion.h1>

          <motion.div className={styles.roleRow} variants={itemVariants}>
            <span className={styles.roleStatic}>I&apos;m a </span>
            <span className={styles.typewriter}>
              {role}
              <span className={styles.cursor}>|</span>
            </span>
          </motion.div>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            {personal.subtitle}
          </motion.p>

          <motion.div className={styles.ctas} variants={itemVariants}>
            <Link to="projects" smooth duration={600} offset={-72}>
              <motion.button
                className={styles.btnPrimary}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work
              </motion.button>
            </Link>
            <Link to="contact" smooth duration={600} offset={-72}>
              <motion.button
                className={styles.btnSecondary}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>

          <motion.div className={styles.socials} variants={itemVariants}>
            <a 
              href={personal.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className={styles.social}
            >
              <FaLinkedin />
            </a>
            <a href={`https://github.com/${personal.github2}`} target="_blank" rel="noreferrer" className={styles.social} title="GitHub (pro)">
              <FiGithub />
            </a>
            <a href={`mailto:${personal.email}`} className={styles.social} title="Email">
              <FiMail />
            </a>
            <a href={`tel:${personal.phone}`} className={styles.social} title="Phone">
              <FiPhone />
            </a>
          </motion.div>
        </motion.div>

        {/* Right — neural visual */}
        <motion.div
          className={styles.visualCol}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className={styles.orb}>
            {/* Rings */}
            <div className={`${styles.ring} ${styles.ring1}`} />
            <div className={`${styles.ring} ${styles.ring2}`} />
            <div className={`${styles.ring} ${styles.ring3}`} />

            {/* Center icon */}
            <div className={styles.centerIcon}>
              <FaBrain size={48} />
            </div>

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.span
                key={i}
                className={styles.particle}
                style={{ '--i': i }}
                animate={{ y: [0, -14, 0], opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2.5 + i * 0.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              />
            ))}

            {/* Floating badges */}
            <motion.div
              className={`${styles.badge} ${styles.badgeLangChain}`}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              LangChain
            </motion.div>
            <motion.div
              className={`${styles.badge} ${styles.badgeRAG}`}
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              RAG
            </motion.div>
            <motion.div
              className={`${styles.badge} ${styles.badgeFastAPI}`}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              FastAPI
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Link to="about" smooth duration={600} offset={-72}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiArrowDown size={22} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
