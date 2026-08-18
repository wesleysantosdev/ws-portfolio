import { siteContent } from '../../../content/siteContent'
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel'
import revealStyles from '../../../styles/ScrollReveal.module.css'
import styles from './About.module.css'

export function About({ content = siteContent }) {
  const { about, sectionIntroductions } = content

  return (
    <section className={`${styles.about} ${revealStyles.section}`} id="sobre" aria-label={about.ariaLabel} data-reveal data-scroll-reveal>
      <div className={revealStyles.item} data-scroll-reveal><SectionLabel description={sectionIntroductions.about.description} breakRail>{sectionIntroductions.about.label}</SectionLabel></div>
      <div className={styles.body}>
        <span aria-hidden="true" />
        <div className={styles.copy}>
          <h2 className={revealStyles.item} data-scroll-reveal>{about.heading}</h2>
          {about.paragraphs.map((paragraph) => <p className={revealStyles.item} data-scroll-reveal key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  )
}
