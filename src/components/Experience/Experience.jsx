import { motion } from 'framer-motion'
import { FiChevronRight, FiMapPin, FiBriefcase } from 'react-icons/fi'
import SectionHeading from '../shared/SectionHeading'
import { experience } from '../../data/portfolioData'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-wrapper">
        <SectionHeading
          eyebrow="Career Path"
          title="Work Experience"
          subtitle="My professional journey building real-world software systems"
        />

        <div className={styles.timeline}>
          {/* Vertical line */}
          <motion.div
            className={styles.line}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          />

          {experience.map((job, i) => {
            const isLeft = i % 2 === 0
            return (
              <div
                key={i}
                className={`${styles.item} ${isLeft ? styles.left : styles.right}`}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`${styles.dot} ${job.accent === 'cyan' ? styles.dotCyan : styles.dotPurple}`}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                />

                {/* Card */}
                <motion.div
                  className={`${styles.card} ${job.accent === 'cyan' ? styles.cardCyan : styles.cardPurple}`}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  {/* Card top */}
                  <div className={styles.cardTop}>
                    <div className={styles.cardMeta}>
                      <div className={styles.roleRow}>
                        <h3 className={styles.role}>{job.role}</h3>
                        {job.current && (
                          <span className={styles.currentBadge}>Current</span>
                        )}
                      </div>
                      <div className={styles.company}>
                        <FiBriefcase className={styles.metaIcon} />
                        {job.company}
                      </div>
                      <div className={styles.meta}>
                        <span className={styles.period}>{job.period}</span>
                        <span className={styles.separator}>·</span>
                        <FiMapPin className={styles.metaIcon} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <span className={styles.typeBadge}>{job.type}</span>
                  </div>

                  {/* Bullets */}
                  <ul className={styles.bullets}>
                    {job.bullets.map((b, bi) => (
                      <li key={bi} className={styles.bullet}>
                        <FiChevronRight className={styles.bulletIcon} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
