import { portfolioContent, portfolioProjects } from '../../content/siteContent'
import ProjectCard from '../ui/ProjectCard'
import './styles.css'

function Portfolio () {
  const projectRows = [
    portfolioProjects.slice(0, 2),
    portfolioProjects.slice(2, 4)
  ]

  return (
    <section className="container portfolio-section" id="portfolio">
      <div className="portfolio-title">
        <div>
          <small>{portfolioContent.eyebrow}</small>
          <h3>{portfolioContent.title}</h3>
        </div>

        <a href={portfolioContent.cta.href} target="_blank" rel="noreferrer" className="btn">
          {portfolioContent.cta.label}
        </a>
      </div>

      <div className="portfolio-container">
        {projectRows.map((row, rowIndex) => (
          <div className="portfolio-row" key={`portfolio-row-${rowIndex}`}>
            {row.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
