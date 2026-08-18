import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fireEvent, render, screen } from '@testing-library/react'

import App from '../app/App'
import { getProjectBySlug } from '../content/siteContent'

const readSource = (path) => readFileSync(resolve(process.cwd(), 'src', path), 'utf8')

describe('projects editorial index', () => {
  it('uses the approved Portuguese copy for the individual projects', () => {
    const seniorAcademy = getProjectBySlug('senior-academy')
    const paglias = getProjectBySlug('paglias')
    const agenteTeleHelp = getProjectBySlug('agente-telehelp')

    expect(seniorAcademy.decision).toContain(
      'Criei um painel em que o cliente cadastra, edita, segmenta e desativa aulas. Para encontros ao vivo, integrei o Zoom Meeting SDK e colaborei no fluxo de criação e autenticação das reuniões entre backend, SDK e frontend.'
    )
    expect(seniorAcademy.outcome).toContain(
      'Interações e participações também passaram a fornecer indicadores de uso para acompanhar a evolução do produto.'
    )
    expect(seniorAcademy.videos.find(({ id }) => id === 'aulas-ao-vivo').description).toBe(
      'A integração com o Zoom Meeting SDK conecta a criação das reuniões no backend à experiência incorporada diretamente na plataforma.'
    )

    expect(paglias).toMatchObject({
      summary: 'Um canal de autosserviço conectado ao ERP para reduzir a redigitação manual de pedidos.',
      context: expect.arrayContaining([
        'O processo de pedidos dependia de atendimento via WhatsApp e posterior registro no ERP. A nova plataforma precisava criar um canal de autosserviço integrado ao SIGE Cloud sem duplicar as regras comerciais já existentes.'
      ]),
      decision: expect.arrayContaining([
        'Mantive o ERP como fonte única da verdade. A identificação do cliente valida seu acesso e permite recuperar do SIGE as condições comerciais necessárias para montar o catálogo e processar o pedido.',
        'O catálogo é montado de acordo com as condições retornadas pelo ERP e complementado com categorias e imagens dos produtos. O Cloudinary e o PostgreSQL evitam transferências repetidas de mídia.',
        'Tratei instabilidades 503 com novas tentativas e espera progressiva. Antes do envio ao ERP, o pedido é reconstruído e validado no backend a partir dos dados confiáveis da integração, evitando depender de valores enviados pelo cliente.'
      ]),
      outcome: expect.arrayContaining([
        'Clientes previamente cadastrados podem criar uma conta, acessar seu catálogo, pesquisar produtos, selecionar quantidades e confirmar o pedido em um único fluxo.',
        'A jornada elimina a redigitação no canal digital e preserva o SIGE como sistema central para dados e regras comerciais.'
      ])
    })

    expect(agenteTeleHelp.decision).toContain(
      'Modelei o ciclo de cada indicação por status, mantendo também um histórico das alterações realizadas. Autenticação, permissões por perfil, validações e proteção dos dados sensíveis sustentam o fluxo.'
    )
    expect(agenteTeleHelp.videos.find(({ id }) => id === 'visao-do-agente').description).toBe(
      'Cada agente acompanha suas indicações e a evolução de cada atendimento sem depender de consultas manuais.'
    )
  })

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

  it('keeps the mobile project arrow anchored while its hover state changes', () => {
    const projectStyles = readSource('components/sections/Projects/Projects.module.css')
    const mobileStyles = projectStyles.slice(projectStyles.indexOf('@media (max-width: 800px)'))

    expect(mobileStyles).toMatch(/\.arrow\s*{[^}]*justify-self:\s*start/s)
    expect(mobileStyles).toMatch(/\.row\[data-active='true'\] \.arrow,[^{]*\.link:hover \.arrow,[^{]*\.link:focus-visible \.arrow\s*{[^}]*transform:\s*rotate\(45deg\)/s)
  })

  it('assigns Azure to Senior Academy instead of Shrten', () => {
    const shrten = getProjectBySlug('shrten')
    const seniorAcademy = getProjectBySlug('senior-academy')

    expect(shrten.stack).not.toContain('Azure')
    expect(seniorAcademy.stack).toContain('Azure')
  })
})
