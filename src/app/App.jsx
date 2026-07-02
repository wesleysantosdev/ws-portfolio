import { getProjectBySlug } from '../content/siteContent'
import { HomePage } from '../pages/HomePage/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage'
import { ProjectCaseStudyPage } from '../pages/ProjectCaseStudyPage/ProjectCaseStudyPage'

function getProjectSlug(pathname) {
  return pathname.split('/').filter(Boolean)[1]
}

function App({ pathname = window.location.pathname }) {
  if (!pathname.startsWith('/projetos/')) return <HomePage />

  const project = getProjectBySlug(getProjectSlug(pathname))
  return project
    ? <ProjectCaseStudyPage project={project} />
    : <NotFoundPage />
}

export default App
