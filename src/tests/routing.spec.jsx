import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fireEvent, render, screen, within } from '@testing-library/react'

import App from '../app/App'

const readSource = (path) => readFileSync(resolve(process.cwd(), 'src', path), 'utf8')

describe('project routes', () => {
  it('renders Shrten as a complete case with its exclusive external links', () => {
    render(<App pathname="/projetos/shrten" />)

    expect(screen.getByRole('heading', { level: 1, name: 'Shrten' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contexto' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Decisões' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Resultado' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /acessar shrten/i })).toHaveAttribute('href', 'https://shrten.pro')
    expect(screen.getByRole('link', { name: /ver repositório/i })).toHaveAttribute(
      'href',
      'https://github.com/wesleysantosdev/url-shortener'
    )
  })

  it('removes the intermediate project-highlights strip', () => {
    render(<App pathname="/projetos/shrten" />)

    expect(screen.queryByRole('list', { name: /destaques do projeto/i })).not.toBeInTheDocument()
  })

  it('uses distinct supporting copy for the result stage', () => {
    render(<App pathname="/projetos/shrten" />)

    expect(screen.getByText('O que mudou após a entrega')).toBeInTheDocument()
    expect(screen.queryByText('O resultado colocado em uso')).not.toBeInTheDocument()
  })

  it('aligns narrative labels with their headings', () => {
    const caseStudyStyles = readSource('pages/ProjectCaseStudyPage/ProjectCaseStudyPage.module.css')

    expect(caseStudyStyles).toMatch(/\.noteHeading \[data-section-label\]\s*{[^}]*padding-left:\s*0/s)
  })

  it('renders project videos as silent, continuous and control-free media', () => {
    const { container } = render(<App pathname="/projetos/shrten" />)
    const video = container.querySelector('video')

    expect(video).toBeInTheDocument()
    expect(video).toHaveAttribute('autoplay')
    expect(video).toHaveAttribute('loop')
    expect(video).toHaveProperty('muted', true)
    expect(video).toHaveAttribute('playsinline')
    expect(video).not.toHaveAttribute('controls')
  })

  it('switches video and description together in a multi-scene case', () => {
    const { container } = render(<App pathname="/projetos/senior-academy" />)
    const sceneNavigation = screen.getByRole('group', { name: /cenas da demonstração/i })
    const liveClassesButton = within(sceneNavigation).getByRole('button', { name: /aulas ao vivo/i })

    expect(within(sceneNavigation).getByRole('button', { name: /administração autônoma/i })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText(/cliente administrasse as aulas de forma autônoma/i)).toBeInTheDocument()

    fireEvent.click(liveClassesButton)

    expect(liveClassesButton).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText(/zoom server-to-server oauth e meeting sdk/i)).toBeInTheDocument()
    expect(container.querySelector('video')).toHaveAttribute('src', expect.stringMatching(/aulas-ao-vivo\.mp4$/))
  })

  it('shows trust tags but no project actions for private demonstrations', () => {
    render(<App pathname="/projetos/agente-telehelp" />)

    const caseMain = screen.getByRole('main')
    expect(within(caseMain).getByText('Demonstração')).toBeInTheDocument()
    expect(within(caseMain).getByText('Dados fictícios')).toBeInTheDocument()
    expect(within(caseMain).getByText('Repositório privado')).toBeInTheDocument()
    expect(within(caseMain).queryByRole('link', { name: /acessar|repositório/i })).not.toBeInTheDocument()
  })

  it('removes legacy project routes and preserves the recoverable not-found page', () => {
    render(<App pathname="/projetos/calculadora" />)

    expect(screen.getByRole('heading', { name: /projeto não encontrado/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /voltar ao portfólio/i })).toHaveAttribute('href', '/')
  })
})
