import { motion } from 'framer-motion'
import styles from './SectionHeading.module.css'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <motion.div
      className={styles.wrapper}
      style={{ textAlign: align }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <motion.div
        className={styles.underline}
        style={{ margin: align === 'center' ? '0 auto' : '0' }}
        initial={{ width: 0 }}
        whileInView={{ width: '60px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  )
}
