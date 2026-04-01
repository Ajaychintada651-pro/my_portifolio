import { FiGithub, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import SectionHeading from '../shared/SectionHeading'
import { personal } from '../../data/portfolioData'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="section-wrapper">
        <SectionHeading
          eyebrow="Connect"
          title="Contact"
          subtitle="Let’s connect for AI engineering, RAG systems, or full-stack product work."
          align="left"
        />

        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.label}>Email</span>
            <a href={`mailto:${personal.email}`} className={styles.link}>
              <FiMail className={styles.icon} />
              {personal.email}
            </a>
          </div>

          <div className={styles.card}>
            <span className={styles.label}>Phone</span>
            <a href={`tel:${personal.phone}`} className={styles.link}>
              <FiPhone className={styles.icon} />
              {personal.phone}
            </a>
          </div>

          <div className={styles.card}>
            <span className={styles.label}>Location</span>
            <p className={styles.body}>
              <FiMapPin className={styles.icon} />
              {personal.location}
            </p>
          </div>

          <div className={styles.card}>
            <span className={styles.label}>GitHub</span>
            <div className={styles.linkList}>
              <a
                href={`https://github.com/${personal.github2}`}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <FiGithub className={styles.icon} />
                @{personal.github2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
