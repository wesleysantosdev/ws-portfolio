import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { render, screen } from '@testing-library/react'

import { HomePage } from '../pages/HomePage/HomePage'
import { ProjectCaseStudyPage } from '../pages/ProjectCaseStudyPage/ProjectCaseStudyPage'
import { caseStudyStages, portfolioProjects, sectionIntroductions } from '../content/siteContent'

const readSource = (path) => readFileSync(resolve(process.cwd(), 'src', path), 'utf8')

describe('execution trace system', () => {
  it('integrates contextual copy into the home section labels', () => {
    render(<HomePage />)

    expect(sectionIntroductions).toEqual({
      projects: { label: '/ Projetos selecionados', description: 'Interfaces, decisões e resultados' },
      about: { label: '/ Sobre mim', description: 'Percurso, contexto e forma de trabalhar' },
      stack: { label: '/ Tecnologias', description: 'Ferramentas escolhidas conforme o problema' }
    })
    expect(document.querySelectorAll('[data-process-stage]')).toHaveLength(0)

    Object.values(sectionIntroductions).forEach(({ label, description }) => {
      const descriptionNode = screen.getByText(description)

      expect(screen.getByText(label)).toBeInTheDocument()
      expect(descriptionNode.closest('[data-section-label]')).toHaveAttribute('data-rail-break', 'true')
    })
  })

  it('aligns the availability with the hero summary and keeps content clear of the first rail', () => {
    render(<HomePage />)

    const details = screen.getByTestId('hero-details')
    const heroStyles = readSource('components/sections/Hero/Hero.module.css')
    const footerStyles = readSource('components/layout/Footer/Footer.module.css')

    expect(details).toHaveTextContent(/disponível para trabalho/i)
    expect(details).toHaveTextContent(/transformo necessidades de negócio/i)
    expect(heroStyles).toContain('.topline,.details {')
    expect(heroStyles).toContain('grid-template-columns:repeat(2,minmax(0,1fr))')
    expect(heroStyles).toContain('align-items:flex-start')
    expect(heroStyles).toContain('padding-inline:var(--rail-gutter)')
    expect(heroStyles).toContain('.topline>:last-child,.summary { justify-self:end; }')
    expect(heroStyles).toContain('.summary { width:min(360px,100%);')
    expect(footerStyles).toContain('padding-inline:var(--rail-gutter)')
    expect(footerStyles).toContain('.content [data-section-label] { padding-left:0; }')
  })

  it('uses neutral decorative rails on home and case-study pages', () => {
    const { unmount } = render(<HomePage />)
    const atmosphereStyles = readSource('components/layout/ExecutionAtmosphere/ExecutionAtmosphere.module.css')

    expect(screen.getByTestId('execution-atmosphere')).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByTestId('execution-atmosphere').querySelectorAll('[data-execution-rail]')).toHaveLength(4)
    expect(atmosphereStyles).toContain('background:var(--ink)')
    expect(atmosphereStyles).not.toContain('var(--accent)')
    unmount()

    render(<ProjectCaseStudyPage project={portfolioProjects[0]} />)

    expect(screen.getByTestId('execution-atmosphere')).toBeInTheDocument()
    caseStudyStages.forEach(({ label, description }) => {
      expect(screen.getByText(label)).toBeInTheDocument()
      expect(screen.getByText(description)).toBeInTheDocument()
    })
  })

  it('reveals content with blur while keeping the final footer static and clear', () => {
    const revealStyles = readSource('styles/ScrollReveal.module.css')
    const homeStyles = readSource('pages/HomePage/HomePage.module.css')
    const caseStudyStyles = readSource('pages/ProjectCaseStudyPage/ProjectCaseStudyPage.module.css')
    const labelStyles = readSource('components/ui/SectionLabel/SectionLabel.module.css')
    const footerSource = readSource('components/layout/Footer/Footer.jsx')

    expect(labelStyles).toContain('background:transparent')
    expect(labelStyles).toContain(".root[data-rail-break='true']::before")
    expect(revealStyles).toContain('filter:blur(8px)')
    expect(revealStyles).toContain('filter:blur(6px)')
    expect(revealStyles).toContain('animation-range:entry 0% cover 30%')
    expect(revealStyles).toContain('animation-range:entry 2% cover 26%')
    expect(revealStyles).toContain('transform:translateY(72px)')
    expect(revealStyles).toContain('transform:translateY(46px)')
    expect(revealStyles).toContain('filter:blur(0)')
    expect(revealStyles).toContain('opacity:1')
    expect(revealStyles).toContain('transform:none')
    expect(revealStyles).toContain('filter:none')
    expect(homeStyles).toContain('overflow:clip')
    expect(caseStudyStyles).toMatch(/overflow:\s*clip/)
    expect(footerSource).not.toContain('revealStyles')
    expect(footerSource).not.toContain('data-scroll-reveal')
    expect(footerSource).toContain('data-reveal')
  })
})
