import { motion } from 'framer-motion'
import { FiGithub, FiMail, FiPhone, FiMapPin, FiLinkedin, FiArrowRight } from 'react-icons/fi'
import SectionHeading from '../shared/SectionHeading'
import { personal } from '../../data/portfolioData'
import styles from './Contact.module.css'

const cards = [
  {
    label: 'Email',
    icon: FiMail,
    content: personal.email,
    href: `mailto:${personal.email}`,
    accent: 'cyan',
  },
  {
    label: 'Phone',
    icon: FiPhone,
    content: personal.phone,
    href: `tel:${personal.phone}`,
    accent: 'cyan',
  },
  {
    label: 'Location',
    icon: FiMapPin,
    content: personal.location,
    href: null,
    accent: 'purple',
  },
  {
    label: 'GitHub',
    icon: FiGithub,
    content: `@${personal.github2}`,
    href: `https://github.com/${personal.github2}`,
    accent: 'cyan',
    external: true,
  },
  {
    label: 'LinkedIn',
    icon: FiLinkedin,
    content: 'Ajay Chintada',
    href: personal.linkedin,
    accent: 'purple',
    external: true,
    wide: true,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
  }),
}

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="section-wrapper">
        <SectionHeading
          eyebrow="Connect"
          title="Contact"
          subtitle="Let's connect for AI engineering, RAG systems, or full-stack product work."
          align="left"
        />

        {/* CTA Banner */}
        <motion.div
          className={styles.ctaBanner}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className={styles.ctaText}>
            <h3 className={styles.ctaTitle}>Open to Opportunities</h3>
            <p className={styles.ctaSubtitle}>
              Currently available for AI/ML roles, freelance projects, and collaboration.
            </p>
          </div>
          <a href={`mailto:${personal.email}`} className={styles.ctaButton}>
            Send a Message
            <FiArrowRight className={styles.ctaArrow} />
          </a>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className={styles.grid}>
          {cards.map((card, i) => {
            const Icon = card.icon
            const inner = (
              <>
                <div className={`${styles.iconWrap} ${card.accent === 'cyan' ? styles.iconCyan : styles.iconPurple}`}>
                  <Icon className={styles.icon} />
                </div>
                <span className={styles.label}>{card.label}</span>
                <span className={styles.value}>{card.content}</span>
              </>
            )

            return (
              <motion.div
                key={card.label}
                className={`${styles.card} ${card.wide ? styles.cardWide : ''} ${card.accent === 'cyan' ? styles.cardCyan : styles.cardPurple}`}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {card.href ? (
                  <a
                    href={card.href}
                    className={styles.cardLink}
                    {...(card.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    {inner}
                    {card.external && <FiArrowRight className={styles.extArrow} />}
                  </a>
                ) : (
                  <div className={styles.cardContent}>{inner}</div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
