import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fireEvent, render, screen } from '@testing-library/react'

import App from '../app/App'

const readSource = (path) => readFileSync(resolve(process.cwd(), 'src', path), 'utf8')

describe('projects editorial index', () => {
  it('lists only the four new projects in recruiter-first order', () => {
    render(<App />)

    const projectsRegion = screen.getByRole('region', { name: /projetos selecionados/i })
    const projectLinks = screen.getAllByRole('link', { name: /ver case/i })

    expect(projectsRegion).toContainElement(projectLinks[0])
    expect(projectLinks).toHaveLength(4)
    expect(projectLinks.map((link) => link.getAttribute('href'))).toEqual([
      '/projetos/shrten',
      '/projetos/paglias',
      '/projetos/senior-academy',
      '/projetos/agente-telehelp'
    ])
    expect(projectLinks.map((link) => link.textContent)).toEqual(expect.arrayContaining([
      expect.stringMatching(/shrten/i),
      expect.stringMatching(/paglias/i),
      expect.stringMatching(/senior academy/i),
      expect.stringMatching(/agente telehelp/i)
    ]))
    expect(screen.queryByText('Calculadora')).not.toBeInTheDocument()
    expect(screen.queryByText(/formulário com validação/i)).not.toBeInTheDocument()
  })

  it('reveals the active project description when a project row receives attention', () => {
    render(<App />)

    const projectLink = screen.getByRole('link', { name: /ver case shrten/i })
    const projectArticle = projectLink.closest('article')

    expect(projectArticle).toHaveAttribute('data-active', 'false')
    fireEvent.mouseEnter(projectLink)
    expect(projectArticle).toHaveAttribute('data-active', 'true')
    expect(screen.getByText(/encurtamento de urls como exercício de system design/i)).toBeInTheDocument()
  })

  it('surfaces private-demo context directly in the project index', () => {
    render(<App />)

    const pagliasLink = screen.getByRole('link', { name: /ver case paglias/i })

    expect(pagliasLink).toHaveTextContent('Demonstração')
    expect(pagliasLink).toHaveTextContent('Dados fictícios')
    expect(pagliasLink).toHaveTextContent('Repositório privado')
  })

  it('aligns the project stack with the editorial copy', () => {
    const projectStyles = readSource('components/sections/Projects/Projects.module.css')

    expect(projectStyles).toMatch(/\.stack\s*{[^}]*text-align:\s*left/s)
    expect(projectStyles).not.toMatch(/\.stack\s*{[^}]*text-align:\s*right/s)
  })
})
