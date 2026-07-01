import { render, screen } from '@testing-library/react'

import App from '../app/App'
import { portfolioProjects, stackGroups } from '../content/siteContent'

describe('portfolio editorial redesign', () => {
  it('presents a concise Portuguese narrative for technical hiring', () => {
    render(<App />)

    expect(screen.getByRole('heading', {
      level: 1,
      name: /transformo necessidades de negócio em produtos web/i
    })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /principal/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /projetos selecionados/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /sobre mim/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /tecnologias/i })).toBeInTheDocument()
    expect(screen.queryByRole('form')).not.toBeInTheDocument()
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
