import { motion } from 'framer-motion'
import { FaMedal, FaTrophy } from 'react-icons/fa'
import SectionHeading from '../shared/SectionHeading'
import { achievements } from '../../data/portfolioData'
import styles from './Achievements.module.css'

const iconMap = {
  FaTrophy: <FaTrophy />,
  FaMedal: <FaMedal />,
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function Achievements() {
  return (
    <section id="achievements" className={styles.section}>
      <div className="section-wrapper">
        <SectionHeading
          eyebrow="Achievements"
          title="Career Highlights"
          subtitle="Professional recognition, awards, and project milestones that reflect real impact."
          align="left"
        />

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {achievements.map((item, index) => (
            <motion.article
              key={index}
              className={`${styles.card} ${item.accent === 'cyan' ? styles.cyan : styles.purple}`}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className={styles.header}>
                <span className={styles.icon}>{iconMap[item.icon] || <FaTrophy />}</span>
                <span className={styles.badge}>{item.badge}</span>
              </div>

              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              <div className={styles.footer}>
                <span className={styles.year}>{item.year}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
