import { aboutParagraphs } from '../../../content/siteContent'
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel'
import revealStyles from '../../../styles/ScrollReveal.module.css'
import styles from './About.module.css'

export function About() {
  return (
    <section className={`${styles.about} ${revealStyles.section}`} id="sobre" aria-label="Sobre mim" data-reveal data-scroll-reveal>
      <div className={revealStyles.item} data-scroll-reveal><SectionLabel>/Sobre mim</SectionLabel></div>
      <div className={styles.copy}>
        <h2 className={revealStyles.item} data-scroll-reveal>Código é uma parte.<br />Entender o problema é a outra.</h2>
        {aboutParagraphs.map((paragraph) => <p className={revealStyles.item} data-scroll-reveal key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  )
}
