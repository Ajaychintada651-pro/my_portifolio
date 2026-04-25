import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiPython, SiJavascript, SiHtml5, SiPostgresql,
  SiFastapi, SiReact, SiMui, SiSupabase,
  SiGithub, SiNodedotjs, SiVisualparadigm,
  SiGit, SiPostman,
} from 'react-icons/si'
import {
  FaBrain, FaMicrochip, FaServer, FaAws, FaPlug, FaLayerGroup,
  FaBell, FaDocker, FaRobot,
} from 'react-icons/fa'
import SectionHeading from '../shared/SectionHeading'
import { skills } from '../../data/portfolioData'
import styles from './Skills.module.css'

// Icon registry
const iconMap = {
  SiPython, SiJavascript, SiHtml5, SiPostgresql,
  SiFastapi, SiReact, SiMui, SiSupabase,
  SiGithub, SiNodedotjs, SiVisualparadigm, SiGit, SiPostman,
  FaBrain, FaMicrochip, FaServer, FaAws, FaPlug, FaLayerGroup,
  FaBell, FaDocker, FaRobot,
  SiVisualstudiocode: SiVisualparadigm,
  SiLangchain: FaBrain,   // fallback for LangChain
  SiHuggingface: FaMicrochip, // fallback for HuggingFace
}

function getIcon(name) {
  const Icon = iconMap[name]
  return Icon ? <Icon /> : <FaBrain />
}

function SkillBar({ level, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div className={styles.barTrack} ref={ref}>
      <motion.div
        className={styles.barFill}
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.4, 0, 0.2, 1] }}
      />
    </div>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="section-wrapper">
        <SectionHeading
          eyebrow="What I Know"
          title="Technical Skills"
          subtitle="A curated stack of technologies I use to build production AI systems"
        />

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className={styles.cardTitle}>{group.category}</h3>
              <ul className={styles.skillList}>
                {group.items.map((skill, i) => (
                  <li key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillTop}>
                      <span className={styles.skillIcon}>{getIcon(skill.icon)}</span>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <SkillBar level={skill.level} delay={0.1 + i * 0.08} />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
