function ProjectCard({ project }) {
  return (
    <article className="portfolio-card">
      <a
        href={project.href}
        className="portfolio-card-image-container"
        target="_blank"
        rel="noreferrer"
        aria-label={`Open project ${project.title}`}
      >
        <img src={project.image} alt={project.title} />
      </a>

      <h3 className="portfolio-card-title">{project.title}</h3>
      <p className="portfolio-card-description">{project.description}</p>
    </article>
  )
}

export default ProjectCard
