import { ExecutionAtmosphere } from '../../components/layout/ExecutionAtmosphere/ExecutionAtmosphere'
import { Header } from '../../components/layout/Header/Header'
import { ProjectVideoGallery } from '../../components/ui/ProjectVideoGallery/ProjectVideoGallery'
import { SectionLabel } from '../../components/ui/SectionLabel/SectionLabel'
import { siteContent } from '../../content/siteContent'
import revealStyles from '../../styles/ScrollReveal.module.css'
import styles from './ProjectCaseStudyPage.module.css'

export function ProjectCaseStudyPage({ content = siteContent, onToggleLocale, project }) {
  const { caseStudy, gallery } = content

  return (
    <div className={styles.shell}>
      <Header content={content} onToggleLocale={onToggleLocale} />
      <ExecutionAtmosphere />
      <main className={styles.page}>
        <a className={`${styles.backLink} ${revealStyles.item}`} data-scroll-reveal href="/">
          <span aria-hidden="true">← </span>{caseStudy.backLabel}
        </a>

        <header className={`${styles.hero} ${revealStyles.section}`} data-scroll-reveal>
          <SectionLabel description={project.category}>{caseStudy.sectionLabel}</SectionLabel>
          <h1 className={revealStyles.item} data-scroll-reveal>{project.title}</h1>
          <p className={`${styles.summary} ${revealStyles.item}`} data-scroll-reveal>{project.summary}</p>

          <div className={`${styles.heroDetails} ${revealStyles.item}`} data-scroll-reveal>
            <p className={styles.stack}>{project.stack.join(' · ')}</p>
            {project.actions.length > 0 ? (
              <nav className={styles.actions} aria-label={`${caseStudy.actionsLabel} ${project.title}`}>
                {project.actions.map((action) => (
                  <a href={action.href} target="_blank" rel="noreferrer" key={action.href}>{action.label} ↗</a>
                ))}
              </nav>
            ) : null}
          </div>

          {project.tags.length > 0 ? (
            <ul className={`${styles.tags} ${revealStyles.item}`} data-scroll-reveal aria-label={caseStudy.tagsLabel}>
              {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          ) : null}

        </header>

        <div className={revealStyles.item} data-scroll-reveal>
          <ProjectVideoGallery labels={gallery} projectTitle={project.title} videos={project.videos} />
        </div>

        <div className={styles.notes}>
          {caseStudy.stages.map((stage) => (
            <section className={`${styles.note} ${revealStyles.item}`} data-scroll-reveal key={stage.field}>
              <div className={styles.noteHeading}>
                <SectionLabel description={stage.description}>{stage.label}</SectionLabel>
                <h2>{stage.heading}</h2>
              </div>
              <div className={styles.noteCopy}>
                {project[stage.field].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}
