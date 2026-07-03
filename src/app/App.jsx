import { getProjectBySlug } from '../content/siteContent'
import { CursorFollower } from '../components/ui/CursorFollower/CursorFollower'
import { HomePage } from '../pages/HomePage/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage'
import { ProjectCaseStudyPage } from '../pages/ProjectCaseStudyPage/ProjectCaseStudyPage'

function getProjectSlug(pathname) {
  return pathname.split('/').filter(Boolean)[1]
}

function App({ pathname = window.location.pathname }) {
  let page = <HomePage />

  if (pathname.startsWith('/projetos/')) {
    const project = getProjectBySlug(getProjectSlug(pathname))
    page = project
      ? <ProjectCaseStudyPage project={project} />
      : <NotFoundPage />
  }

  return (
    <>
      <CursorFollower />
      {page}
    </>
  )
}

export default App
