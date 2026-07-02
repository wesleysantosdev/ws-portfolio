import { render, screen } from '@testing-library/react'

import App from '../app/App'
import { portfolioProjects, stackGroups } from '../content/siteContent'

describe('portfolio editorial redesign', () => {
  it('presents a concise Portuguese narrative for technical hiring', () => {
    render(<App />)

    expect(screen.getByRole('heading', {
      level: 1,
      name: /desenvolvedor full stack wesley santos/i
    })).toBeInTheDocument()
    expect(screen.queryByText(/decisões pequenas/i)).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /ver projetos/i })).not.toBeInTheDocument()
    expect(document.querySelector('.hero-thread')).not.toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /principal/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /projetos selecionados/i })).toBeInTheDocument()
    expect(screen.queryByRole('heading', {
      level: 2,
      name: /uma seleção de interfaces e experiências/i
    })).not.toBeInTheDocument()
    expect(screen.getByRole('region', { name: /sobre mim/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /tecnologias/i })).toBeInTheDocument()
    expect(screen.queryByRole('form')).not.toBeInTheDocument()
    expect(document.querySelectorAll('[data-reveal]').length).toBeGreaterThanOrEqual(4)
  })

  it('uses the refined header actions and keeps footer contact links available', () => {
    render(<App />)

    const siteActions = document.querySelector('.site-actions')
    const availability = document.querySelector('.availability')
    const divider = document.querySelector('.site-actions-divider')

    expect(siteActions).toBeInTheDocument()
    expect(siteActions?.querySelector('a[aria-label*="LinkedIn"]')).toBeInTheDocument()
    expect(siteActions?.querySelector('button.theme-toggle')).toBeInTheDocument()
    expect(divider).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /redes e contato/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin ↗/i })).toHaveAttribute('href', expect.stringContaining('linkedin.com'))
    expect(availability).toHaveTextContent(/disponível para novos desafios/i)
  })

  it('keeps stack groups and replaceable case-study data outside components', () => {
    expect(stackGroups.map((group) => group.label)).toEqual([
      'Frontend',
      'Backend',
      'Infra & prática'
    ])

    portfolioProjects.forEach((project) => {
      expect(project).toMatchObject({
        slug: expect.any(String),
        title: expect.any(String),
        summary: expect.any(String),
        context: expect.any(String),
        decision: expect.any(String),
        outcome: expect.any(String),
        demoUrl: expect.stringMatching(/^https:/),
        poster: expect.any(String),
        mediaDescription: expect.any(String)
      })
    })
  })
})
