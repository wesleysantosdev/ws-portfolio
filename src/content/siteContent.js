import CV from '../assets/CV.pdf'
import calculatorPoster from '../assets/calculator-project.png'
import darkModePoster from '../assets/dark-mode-project.png'
import formPoster from '../assets/form-project.png'
import profilePoster from '../assets/profile-card-project.png'

export const navItems = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#stack', label: 'Stack' },
  { href: '#contato', label: 'Contato' }
]

export const profile = {
  name: 'Wesley Santos',
  shortName: 'Wes',
  role: 'Full stack developer · frontend-heavy',
  location: 'São Paulo, Brasil',
  availability: 'Disponível para novos desafios',
  email: 'wesleysantosdev@outlook.com',
  resumeUrl: CV,
  linkedinUrl: 'https://www.linkedin.com/in/wesleysantosdev/',
  githubUrl: 'https://github.com/wesleysantosdev'
}

export const aboutParagraphs = [
  'Sou desenvolvedor full stack com mais de três anos de experiência e uma base forte em frontend. Já construí páginas, sistemas internos, plataformas SaaS e produtos digitais voltados ao cliente.',
  'Gosto de acompanhar o trabalho de ponta a ponta: entender a necessidade do negócio, avaliar caminhos técnicos, cuidar da experiência, integrar APIs e apoiar o que chega à produção.',
  'Hoje aprofundo arquitetura de software, testes e fluxos de desenvolvimento assistidos por IA para entregar código mais confiável e simples de manter.'
]

export const stackGroups = [
  { label: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'JavaScript'] },
  { label: 'Backend', items: ['Node.js', 'Prisma ORM', 'PostgreSQL'] },
  { label: 'Infra & prática', items: ['Docker', 'Azure', 'Testes', 'Spec-Driven Development'] }
]

export const portfolioProjects = [
  {
    slug: 'formulario-com-validacao',
    title: 'Formulário com validação',
    summary: 'Uma interface de cadastro que transforma regras de validação em orientações claras para quem está preenchendo.',
    context: 'Exercício de frontend criado a partir de um layout e assets fornecidos, com foco no comportamento completo do formulário.',
    decision: 'Centralizei a validação nos campos e mantive os erros próximos da ação que precisa ser corrigida.',
    outcome: 'Uma experiência responsiva e previsível, com feedback para diferentes entradas inválidas.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://wesleysantosdev.github.io/component-with-signup-form/',
    poster: formPoster,
    mediaDescription: 'Tela do formulário de cadastro com campos e painel ilustrado.'
  },
  {
    slug: 'login-com-tema',
    title: 'Login com tema claro e escuro',
    summary: 'Um fluxo de login compacto em que a escolha de tema permanece coerente em toda a interface.',
    context: 'Estudo de interface dedicado à troca entre temas claro e escuro sem depender de backend.',
    decision: 'Modelei cores como tokens e concentrei a mudança de tema em um único controle.',
    outcome: 'Uma tela de acesso adaptável, legível e consistente nos dois modos.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://wesleysantosdev.github.io/login-dark-mode-switch/',
    poster: darkModePoster,
    mediaDescription: 'Tela de login dividida entre formulário e ilustração abstrata.'
  },
  {
    slug: 'calculadora',
    title: 'Calculadora',
    summary: 'Uma calculadora direta que organiza entrada, operação e resultado sem esconder o estado atual.',
    context: 'Projeto de prática para consolidar manipulação de estado e operações matemáticas no navegador.',
    decision: 'Separei entrada, operador e resultado para que cada nova ação tivesse um comportamento previsível.',
    outcome: 'As quatro operações principais funcionam em uma interface simples e responsiva.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://wesleysantosdev.github.io/calculator/',
    poster: calculatorPoster,
    mediaDescription: 'Calculadora escura com teclado numérico e visor de resultado.'
  },
  {
    slug: 'card-de-perfil',
    title: 'Card de perfil interativo',
    summary: 'Um cartão compacto que revela contexto e contatos sem tirar o foco da identidade principal.',
    context: 'Experimento de microinteração para apresentar uma pessoa e seus links sociais em pouco espaço.',
    decision: 'Usei uma expansão progressiva e mantive os links disponíveis dentro do mesmo componente.',
    outcome: 'Uma peça pequena que explora hierarquia, hover e transições de forma controlada.',
    stack: ['HTML', 'CSS'],
    demoUrl: 'https://wesleysantosdev.github.io/animated-profile-card/',
    poster: profilePoster,
    mediaDescription: 'Card vertical de perfil com retrato e ícones sociais.'
  }
]

export function getProjectBySlug(slug) {
  return portfolioProjects.find((project) => project.slug === slug)
}
