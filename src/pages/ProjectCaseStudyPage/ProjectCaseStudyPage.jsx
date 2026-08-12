import { ExecutionAtmosphere } from '../../components/layout/ExecutionAtmosphere/ExecutionAtmosphere'
import { Header } from '../../components/layout/Header/Header'
import { SectionLabel } from '../../components/ui/SectionLabel/SectionLabel'
import { caseStudyStages } from '../../content/siteContent'
import revealStyles from '../../styles/ScrollReveal.module.css'
import styles from './ProjectCaseStudyPage.module.css'

export function ProjectCaseStudyPage({ project }) {
  return (
    <div className={styles.shell}>
      <Header />
      <ExecutionAtmosphere />
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
          {caseStudyStages.map((stage) => (
            <section className={revealStyles.item} data-scroll-reveal key={stage.field}>
              <SectionLabel description={stage.description}>{stage.label}</SectionLabel>
              <h2>{stage.heading}</h2>
              <p>{project[stage.field]}</p>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}
