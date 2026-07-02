import { useState } from 'react'

import { aboutParagraphs, getProjectBySlug, navItems, portfolioProjects, profile, stackGroups } from '../content/siteContent'
import { useTheme } from '../hooks/useTheme'

function Header() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Wesley Santos — início">WS<span>.</span></a>
      <nav className="site-nav" aria-label="Navegação principal">
        {navItems.map((item) => <a href={`/${item.href}`} key={item.href}>{item.label}</a>)}
      </nav>
      <div className="site-actions">
        <a className="site-action-linkedin" href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn de Wesley Santos">in</a>
        <span className="site-actions-divider" aria-hidden="true" />
        <button
          className="theme-toggle"
          type="button"
          aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
          aria-pressed={isDark}
          onClick={toggleTheme}
        >
          <span className="theme-icon theme-icon-sun" aria-hidden="true">☼</span>
          <span className="theme-icon theme-icon-moon" aria-hidden="true">◒</span>
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-topline">
        <p className="hero-kicker">Portfólio · 2026</p>
        <p className="hero-kicker">{profile.location}</p>
      </div>
      <h1 id="hero-title" aria-label="Desenvolvedor full stack Wesley Santos">
        <span className="hero-title-line">Desenvolvedor</span>
        <span className="hero-title-signature">Wesley Santos</span>
        <span className="hero-title-line hero-title-bottom">Full stack</span>
      </h1>
      <p className="hero-summary">Transformo necessidades de negócio em produtos web claros, rápidos e sustentáveis.</p>
      <div className="hero-meta">
        <span className="availability"><i aria-hidden="true" />{profile.availability}</span>
      </div>
    </section>
  )
}

function Projects() {
  const [activeSlug, setActiveSlug] = useState(null)

  return (
    <section className="projects section-shell" id="projetos" aria-label="Projetos selecionados" data-reveal>
      <p className="eyebrow">/Projetos selecionados</p>
      <div className="project-list" aria-label="Lista de projetos">
        {portfolioProjects.map((project, index) => (
          <article
            className="project-row"
            key={project.slug}
            aria-labelledby={`project-${project.slug}`}
            data-active={project.slug === activeSlug}
          >
            <a
              className="project-row-link"
              href={`/projetos/${project.slug}`}
              onMouseEnter={() => setActiveSlug(project.slug)}
              onMouseLeave={() => setActiveSlug((current) => (current === project.slug ? null : current))}
              onFocus={() => setActiveSlug(project.slug)}
              onBlur={() => setActiveSlug((current) => (current === project.slug ? null : current))}
            >
              <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div className="project-row-copy">
                <h3 id={`project-${project.slug}`}>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <p className="project-stack">{project.stack.join(' · ')}</p>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about section-shell" id="sobre" aria-label="Sobre mim" data-reveal>
      <p className="eyebrow">/Sobre mim</p>
      <div className="about-copy">
        <h2 id="about-title">Código é uma parte.<br />Entender o problema é a outra.</h2>
        {aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section className="stack section-shell" id="stack" aria-label="Tecnologias" data-reveal>
      <div className="section-heading compact">
        <p className="eyebrow">/Tecnologias</p>
        <h2 id="stack-title">Ferramentas que uso para tirar ideias do papel.</h2>
      </div>
      <div className="stack-list">
        {stackGroups.map((group) => (
          <div className="stack-row" key={group.label}>
            <h3>{group.label}</h3>
            <p>{group.items.join('  ·  ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer" id="contato" data-reveal>
      <div className="footer-word" aria-hidden="true">WES</div>
      <div className="footer-content section-shell">
        <div>
          <p className="eyebrow">/Vamos conversar</p>
          <h2>Tem um produto para construir ou melhorar?</h2>
          <a className="footer-email" href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <nav aria-label="Links rápidos">
          <p className="eyebrow">/Quick links</p>
          {navItems.slice(0, 3).map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          <a href={profile.resumeUrl} download>Baixar CV</a>
        </nav>
        <nav aria-label="Redes e contato">
          <p className="eyebrow">/Contato</p>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={`mailto:${profile.email}`}>E-mail ↗</a>
        </nav>
      </div>
      <p className="footer-credit">© {new Date().getFullYear()} Wesley Santos · Feito com atenção aos detalhes.</p>
    </footer>
  )
}

function ProjectCaseStudy({ project }) {
  return (
    <>
      <Header />
      <main className="case-study section-shell">
        <a className="back-link" href="/">← Voltar ao portfólio</a>
        <header className="case-hero">
          <p className="eyebrow">/Case study provisório</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="case-meta">
            <span>{project.stack.join(' · ')}</span>
            <a href={project.demoUrl} target="_blank" rel="noreferrer">Abrir projeto ↗</a>
          </div>
        </header>
        <img className="case-poster" src={project.poster} alt={project.mediaDescription} />
        <div className="case-notes">
          <section><p className="eyebrow">/Entender</p><h2>Contexto</h2><p>{project.context}</p></section>
          <section><p className="eyebrow">/Construir</p><h2>Decisão</h2><p>{project.decision}</p></section>
          <section><p className="eyebrow">/Entregar</p><h2>Resultado</h2><p>{project.outcome}</p></section>
        </div>
      </main>
    </>
  )
}

function NotFound() {
  return (
    <main className="not-found section-shell">
      <p className="eyebrow">/404</p>
      <h1>Projeto não encontrado.</h1>
      <p>Este case pode ter mudado de endereço ou ainda não foi publicado.</p>
      <a className="text-link" href="/">Voltar ao portfólio</a>
    </main>
  )
}

function App({ pathname = window.location.pathname }) {
  if (pathname.startsWith('/projetos/')) {
    const slug = pathname.split('/').filter(Boolean)[1]
    const project = getProjectBySlug(slug)
    return project ? <ProjectCaseStudy project={project} /> : <NotFound />
  }

  return <><Header /><main><Hero /><Projects /><About /><Stack /></main><Footer /></>
}

export default App
