import { getProjectBySlug } from '../content/siteContent'
import { CursorFollower } from '../components/ui/CursorFollower/CursorFollower'
import { HomePage } from '../pages/HomePage/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage'
import { ProjectCaseStudyPage } from '../pages/ProjectCaseStudyPage/ProjectCaseStudyPage'
import { useLocale } from '../hooks/useLocale'

function getProjectSlug(pathname) {
  return pathname.split('/').filter(Boolean)[1]
}

function App({ pathname = window.location.pathname }) {
  const { content, locale, toggleLocale } = useLocale()
  let page = <HomePage content={content} onToggleLocale={toggleLocale} />

  if (pathname.startsWith('/projetos/')) {
    const project = getProjectBySlug(getProjectSlug(pathname), locale)
    page = project
      ? <ProjectCaseStudyPage content={content} onToggleLocale={toggleLocale} project={project} />
      : <NotFoundPage content={content} />
  }

  return (
    <>
      <CursorFollower label={content.projectsUi.cursorLabel} />
      {page}
    </>
  )
}

export default App
