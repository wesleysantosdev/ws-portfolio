import { fireEvent, render, screen } from '@testing-library/react'

import App from '../app/App'

describe('projects editorial index', () => {
  it('keeps projects as a full-width editorial list without homepage preview media', () => {
    render(<App />)

    const projectsRegion = screen.getByRole('region', { name: /projetos selecionados/i })
    const projectLink = screen.getByRole('link', { name: /formulário com validação/i })

    expect(screen.queryByRole('heading', {
      level: 2,
      name: /uma seleção de interfaces e experiências/i
    })).not.toBeInTheDocument()
    expect(screen.queryByRole('img', { name: /tela do formulário de cadastro/i })).not.toBeInTheDocument()
    expect(projectLink).toHaveAttribute('href', '/projetos/formulario-com-validacao')
    expect(projectsRegion).toContainElement(projectLink)
  })

  it('reveals the active project description when a project row receives attention', () => {
    render(<App />)

    const loginArticle = screen.getByRole('article', { name: /login com tema claro e escuro/i })
    const loginLink = screen.getByRole('link', { name: /login com tema claro e escuro/i })
    const loginSummary = screen.getByText(/um fluxo de login compacto/i)

    expect(loginArticle).toHaveAttribute('data-active', 'false')
    fireEvent.mouseEnter(loginLink)
    expect(loginArticle).toHaveAttribute('data-active', 'true')
    expect(loginSummary).toBeInTheDocument()
  })
})
