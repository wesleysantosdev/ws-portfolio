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

  it('presents the name as a continuous typographic signature', () => {
    render(<App />)

    const signature = screen.getByText('Wesley Santos')

    expect(signature).toHaveAttribute('data-typographic-loop')
    expect(signature).toHaveAttribute('aria-hidden', 'true')
  })

  it('uses the refined header actions and keeps footer contact links available', () => {
    render(<App />)

    const siteActions = screen.getByTestId('site-actions')
    const availability = screen.getByTestId('availability')
    const divider = screen.getByTestId('site-actions-divider')

    expect(siteActions).toBeInTheDocument()
    const linkedInLink = screen.getByRole('link', { name: /linkedin de wesley santos/i })
    const themeButton = screen.getByRole('button', { name: /ativar tema/i })

    expect(screen.queryByRole('link', { name: /wesley santos — início/i })).not.toBeInTheDocument()
    expect(linkedInLink.querySelector('img')).toHaveAttribute('src', expect.stringContaining('linkedin.svg'))
    expect(themeButton.querySelectorAll('img')).toHaveLength(4)
    expect(divider).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /redes e contato/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin ↗/i })).toHaveAttribute('href', expect.stringContaining('linkedin.com'))
    expect(availability).toHaveTextContent(/disponível para trabalho/i)
  })

  it('uses accessible rolling text on header and footer text links', () => {
    render(<App />)

    const mainNavigation = screen.getByRole('navigation', { name: /principal/i })
    const contactNavigation = screen.getByRole('navigation', { name: /redes e contato/i })

    expect(mainNavigation.querySelectorAll('[data-rolling-text]')).toHaveLength(4)
    expect(contactNavigation.querySelectorAll('[data-rolling-text]')).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Projetos' })).toHaveLength(2)
  })

  it('uses the same rolling motion for header action icons', () => {
    render(<App />)

    const siteActions = screen.getByTestId('site-actions')
    const rollingIcons = siteActions.querySelectorAll('[data-rolling-icon]')
    const themeButton = screen.getByRole('button', { name: /ativar tema/i })

    expect(rollingIcons).toHaveLength(3)
    rollingIcons.forEach((icon) => expect(icon.querySelectorAll('img')).toHaveLength(2))
    themeButton.querySelectorAll('[data-rolling-icon]').forEach((icon) => {
      expect(getComputedStyle(icon).width).toBe('18px')
    })
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
