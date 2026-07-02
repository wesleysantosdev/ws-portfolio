import { Header } from '../../components/layout/Header/Header'
import { SectionLabel } from '../../components/ui/SectionLabel/SectionLabel'
import styles from './ProjectCaseStudyPage.module.css'

export function ProjectCaseStudyPage({ project }) {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <a className={styles.backLink} href="/">← Voltar ao portfólio</a>
        <header className={styles.hero}>
          <SectionLabel>/Case study provisório</SectionLabel>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className={styles.meta}>
            <span>{project.stack.join(' · ')}</span>
            <a href={project.demoUrl} target="_blank" rel="noreferrer">Abrir projeto ↗</a>
          </div>
        </header>
        <img className={styles.poster} src={project.poster} alt={project.mediaDescription} />
        <div className={styles.notes}>
          <section><SectionLabel>/Entender</SectionLabel><h2>Contexto</h2><p>{project.context}</p></section>
          <section><SectionLabel>/Construir</SectionLabel><h2>Decisão</h2><p>{project.decision}</p></section>
          <section><SectionLabel>/Entregar</SectionLabel><h2>Resultado</h2><p>{project.outcome}</p></section>
        </div>
      </main>
    </>
  )
}
