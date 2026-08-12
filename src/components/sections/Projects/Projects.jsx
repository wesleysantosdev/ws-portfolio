import { useState } from 'react'

import { portfolioProjects, sectionIntroductions } from '../../../content/siteContent'
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel'
import revealStyles from '../../../styles/ScrollReveal.module.css'
import styles from './Projects.module.css'

export function Projects() {
  const [activeSlug, setActiveSlug] = useState(null)

  function activateProject(slug) {
    setActiveSlug(slug)
  }

  function deactivateProject(slug) {
    setActiveSlug((current) => (current === slug ? null : current))
  }

  return (
    <section className={`${styles.projects} ${revealStyles.section}`} id="projetos" aria-label="Projetos selecionados" data-reveal data-scroll-reveal>
      <div className={revealStyles.item} data-scroll-reveal><SectionLabel description={sectionIntroductions.projects.description} breakRail>{sectionIntroductions.projects.label}</SectionLabel></div>
      <div className={`${styles.list} ${revealStyles.item}`} aria-label="Lista de projetos" data-scroll-reveal>
        {portfolioProjects.map((project, index) => (
          <article className={`${styles.row} ${revealStyles.item}`} key={project.slug} aria-labelledby={`project-${project.slug}`} data-active={project.slug === activeSlug} data-scroll-reveal>
            <a
              className={styles.link}
              href={`/projetos/${project.slug}`}
              data-cursor-label="Ver projeto"
              onMouseEnter={() => activateProject(project.slug)}
              onMouseLeave={() => deactivateProject(project.slug)}
              onFocus={() => activateProject(project.slug)}
              onBlur={() => deactivateProject(project.slug)}
            >
              <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div className={styles.copy}>
                <h3 id={`project-${project.slug}`}>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <p className={styles.stack}>{project.stack.join(' · ')}</p>
              <span className={styles.arrow} aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
