import { motion } from 'framer-motion'
import { FaUniversity, FaGraduationCap, FaSchool, FaStar } from 'react-icons/fa'
import SectionHeading from '../shared/SectionHeading'
import { education } from '../../data/portfolioData'
import styles from './Education.module.css'

const iconMap = {
  FaUniversity: <FaUniversity />,
  FaGraduationCap: <FaGraduationCap />,
  FaSchool: <FaSchool />,
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}
const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function Education() {
  return (
    <section id="education">
      <div className="section-wrapper">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education"
          subtitle="The academic foundations that shaped my engineering mindset"
        />

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className={`${styles.card} ${i % 2 === 0 ? styles.cardCyan : styles.cardPurple}`}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              {/* Icon */}
              <div className={`${styles.iconBox} ${i % 2 === 0 ? styles.iconCyan : styles.iconPurple}`}>
                {iconMap[edu.icon]}
              </div>

              <div className={styles.content}>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.institution}>{edu.institution}</p>
                <p className={styles.period}>{edu.period}</p>

                <div className={styles.gradeRow}>
                  <span className={`${styles.grade} ${edu.perfect ? styles.gradePerfect : styles.gradeGood}`}>
                    {edu.grade}
                  </span>
                  {edu.perfect && (
                    <span className={styles.perfectBadge}>
                      <FaStar className={styles.starIcon} />
                      Perfect Score
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
