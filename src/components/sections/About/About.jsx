import { aboutParagraphs } from '../../../content/siteContent'
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel'
import styles from './About.module.css'

export function About() {
  return (
    <section className={styles.about} id="sobre" aria-label="Sobre mim" data-reveal>
      <SectionLabel>/Sobre mim</SectionLabel>
      <div className={styles.copy}>
        <h2>Código é uma parte.<br />Entender o problema é a outra.</h2>
        {aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  )
}
