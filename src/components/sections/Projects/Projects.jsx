import { useState } from 'react'

import { portfolioProjects } from '../../../content/siteContent'
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel'
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
    <section className={styles.projects} id="projetos" aria-label="Projetos selecionados" data-reveal>
      <SectionLabel>/Projetos selecionados</SectionLabel>
      <div className={styles.list} aria-label="Lista de projetos">
        {portfolioProjects.map((project, index) => (
          <article className={styles.row} key={project.slug} aria-labelledby={`project-${project.slug}`} data-active={project.slug === activeSlug}>
            <a
              className={styles.link}
              href={`/projetos/${project.slug}`}
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
