import { render, screen } from '@testing-library/react'

import App from '../app/App'

describe('project routes', () => {
  it('renders a concise case study for a known project slug', () => {
    render(<App pathname="/projetos/calculadora" />)

    expect(screen.getByRole('heading', { level: 1, name: 'Calculadora' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contexto' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Decisão' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Resultado' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /abrir projeto/i })).toHaveAttribute(
      'href',
      'https://wesleysantosdev.github.io/calculator/'
    )
  })

  it('offers a route back home when the project does not exist', () => {
    render(<App pathname="/projetos/inexistente" />)

    expect(screen.getByRole('heading', { name: /projeto não encontrado/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /voltar ao portfólio/i })).toHaveAttribute('href', '/')
  })
})
