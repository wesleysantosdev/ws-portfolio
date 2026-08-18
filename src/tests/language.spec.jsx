import { fireEvent, render, screen, within } from '@testing-library/react'

import App from '../app/App'
import { getSiteContent } from '../content/siteContent'

function setBrowserLanguage(language) {
  Object.defineProperty(window.navigator, 'language', {
    configurable: true,
    value: language
  })
  Object.defineProperty(window.navigator, 'languages', {
    configurable: true,
    value: [language]
  })
}

describe('portfolio language preference', () => {
  beforeEach(() => {
    localStorage.clear()
    setBrowserLanguage('pt-BR')
    document.documentElement.lang = ''
    document.title = ''
    document.head.innerHTML = '<meta name="description" content="">'
  })

  it('starts in Portuguese for a pt-BR browser and links the Portuguese CV', () => {
    render(<App />)

    expect(screen.getByRole('heading', {
      level: 1,
      name: /desenvolvedor full stack wesley santos/i
    })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Switch to English' })).toHaveTextContent('EN')
    expect(screen.getByRole('link', { name: 'Baixar CV' })).toHaveAttribute(
      'href',
      expect.stringMatching(/cv-ptbr\.pdf$/)
    )
    expect(document.documentElement).toHaveAttribute('lang', 'pt-BR')
  })

  it('places the language switcher with the textual navigation', () => {
    render(<App />)

    const navigation = screen.getByRole('navigation', { name: 'Navegação principal' })
    const localeToggle = within(navigation).getByRole('button', { name: 'Switch to English' })

    expect(localeToggle.querySelector('[data-rolling-text]')).toBeInTheDocument()
    expect(screen.getByTestId('site-actions')).not.toContainElement(localeToggle)
  })

  it('starts in English outside pt-BR and localizes document metadata', () => {
    setBrowserLanguage('en-US')

    render(<App />)

    expect(screen.getByRole('heading', {
      level: 1,
      name: /full stack developer wesley santos/i
    })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Selected projects' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Download CV' })).toHaveAttribute(
      'href',
      expect.stringMatching(/cv-en\.pdf$/)
    )
    expect(document.documentElement).toHaveAttribute('lang', 'en')
    expect(document.title).toBe('Wesley Santos — Full Stack Developer')
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      'Portfolio of Wesley Santos, a full stack developer with a strong frontend foundation.'
    )
  })

  it('lets a saved manual choice override the browser language', () => {
    setBrowserLanguage('en-US')
    localStorage.setItem('portfolio-locale', 'pt-BR')

    render(<App />)

    expect(screen.getByRole('region', { name: 'Projetos selecionados' })).toBeInTheDocument()
    expect(document.documentElement).toHaveAttribute('lang', 'pt-BR')
  })

  it('switches the complete home immediately and persists the explicit choice', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: 'Switch to English' }))

    expect(screen.getByRole('button', { name: 'Mudar para português' })).toHaveTextContent('PT')
    expect(screen.getAllByRole('link', { name: 'Projects' })[0]).toHaveAttribute('href', '/#projetos')
    expect(screen.getByRole('heading', { name: 'I build interfaces and the systems that support them.' })).toBeInTheDocument()
    expect(screen.getByText('Tools I use to turn ideas into working products.')).toBeInTheDocument()
    expect(screen.getByText(/I build efficient web solutions that solve real business problems/i)).toBeInTheDocument()
    expect(screen.getAllByText('Demo').length).toBeGreaterThan(0)
    expect(localStorage.getItem('portfolio-locale')).toBe('en')
    expect(document.documentElement).toHaveAttribute('lang', 'en')
  })

  it('localizes case-study UI, video controls and the recoverable 404', () => {
    setBrowserLanguage('en-US')
    const { unmount } = render(<App pathname="/projetos/senior-academy" />)

    expect(screen.getByRole('link', { name: 'Back to portfolio' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('heading', { name: 'Context' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Decisions' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Outcome' })).toBeInTheDocument()
    expect(screen.getByText('Running')).toBeInTheDocument()
    expect(screen.getByRole('group', { name: 'Demo scenes' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /live classes/i })).toBeInTheDocument()
    expect(screen.getByText('Fictional data')).toBeInTheDocument()

    unmount()
    render(<App pathname="/projetos/calculadora" />)

    expect(screen.getByRole('heading', { name: 'Project not found.' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Back to portfolio' })).toHaveAttribute('href', '/')
  })

  it('keeps links, slugs and media structurally aligned across both catalogs', () => {
    const portuguese = getSiteContent('pt-BR')
    const english = getSiteContent('en')
    const projectStructure = (content) => content.portfolioProjects.map((project) => ({
      actions: project.actions.map((action) => action.href),
      slug: project.slug,
      stack: project.stack,
      videos: project.videos.map((video) => ({ id: video.id, src: video.src }))
    }))

    expect(projectStructure(english)).toEqual(projectStructure(portuguese))
    expect(getSiteContent('fr')).toBe(english)
  })

  it('omits retired technologies from both language catalogs', () => {
    for (const locale of ['pt-BR', 'en']) {
      const technologies = getSiteContent(locale).stack.groups.flatMap((group) => group.items)

      expect(technologies).not.toContain('JSON Web Token (JWT)')
      expect(technologies).not.toContain('GitHub Actions')
    }
  })
})
