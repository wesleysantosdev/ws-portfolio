import { Header } from '../../components/layout/Header/Header'
import { SectionLabel } from '../../components/ui/SectionLabel/SectionLabel'
import revealStyles from '../../styles/ScrollReveal.module.css'
import styles from './ProjectCaseStudyPage.module.css'

export function ProjectCaseStudyPage({ project }) {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <a className={`${styles.backLink} ${revealStyles.item}`} data-scroll-reveal href="/">← Voltar ao portfólio</a>
        <header className={`${styles.hero} ${revealStyles.section}`} data-scroll-reveal>
          <SectionLabel>/Case study provisório</SectionLabel>
          <h1 className={revealStyles.item} data-scroll-reveal>{project.title}</h1>
          <p className={revealStyles.item} data-scroll-reveal>{project.summary}</p>
          <div className={`${styles.meta} ${revealStyles.item}`} data-scroll-reveal>
            <span>{project.stack.join(' · ')}</span>
            <a href={project.demoUrl} target="_blank" rel="noreferrer">Abrir projeto ↗</a>
          </div>
        </header>
        <img className={`${styles.poster} ${revealStyles.item}`} data-scroll-reveal src={project.poster} alt={project.mediaDescription} />
        <div className={styles.notes}>
          <section className={revealStyles.item} data-scroll-reveal><SectionLabel>/Entender</SectionLabel><h2>Contexto</h2><p>{project.context}</p></section>
          <section className={revealStyles.item} data-scroll-reveal><SectionLabel>/Construir</SectionLabel><h2>Decisão</h2><p>{project.decision}</p></section>
          <section className={revealStyles.item} data-scroll-reveal><SectionLabel>/Entregar</SectionLabel><h2>Resultado</h2><p>{project.outcome}</p></section>
        </div>
      </main>
    </>
  )
}
