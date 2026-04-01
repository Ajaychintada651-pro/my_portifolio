import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { FaRobot, FaFileContract, FaChalkboardTeacher, FaBrain } from 'react-icons/fa'
import SectionHeading from '../shared/SectionHeading'
import { projects } from '../../data/portfolioData'
import styles from './Projects.module.css'

const iconMap = {
  FaRobot: <FaRobot />,
  FaFileContract: <FaFileContract />,
  FaChalkboardTeacher: <FaChalkboardTeacher />,
  FaBrain: <FaBrain />,
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}
const cardVariants = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="section-wrapper">
        <SectionHeading
          eyebrow="What I've Built"
          title="Featured Projects"
          subtitle="A selection of AI-powered and full-stack projects I've engineered"
        />

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className={`${styles.card} ${project.accent === 'cyan' ? styles.cardCyan : styles.cardPurple}`}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              {/* Accent top bar */}
              <div className={`${styles.accentBar} ${project.accent === 'cyan' ? styles.barCyan : styles.barPurple}`} />

              {/* Icon */}
              <div className={`${styles.iconWrap} ${project.accent === 'cyan' ? styles.iconCyan : styles.iconPurple}`}>
                {iconMap[project.icon] || <FaBrain />}
              </div>

              {/* Content */}
              <div className={styles.body}>
                <span className={styles.subtitle}>{project.subtitle}</span>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                {/* Highlights */}
                <ul className={styles.highlights}>
                  {project.highlights.map((h) => (
                    <li key={h} className={`${styles.highlight} ${project.accent === 'cyan' ? styles.highlightCyan : styles.highlightPurple}`}>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className={styles.techStack}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.tech}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className={styles.footer}>
                <a
                  href={`https://github.com/${project.github}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.githubLink} ${project.accent === 'cyan' ? styles.linkCyan : styles.linkPurple}`}
                >
                  <FiGithub />
                  <span>View on GitHub</span>
                  <FiExternalLink className={styles.extIcon} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
