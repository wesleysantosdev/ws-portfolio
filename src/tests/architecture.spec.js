import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const sourcePath = (path) => resolve(process.cwd(), 'src', path)

describe('React architecture', () => {
  it('keeps app composition, page sections, and component styles in focused modules', () => {
    const expectedModules = [
      'components/layout/Header/Header.jsx',
      'components/layout/Footer/Footer.jsx',
      'components/layout/ExecutionAtmosphere/ExecutionAtmosphere.jsx',
      'components/sections/Hero/Hero.jsx',
      'components/sections/Projects/Projects.jsx',
      'components/sections/About/About.jsx',
      'components/sections/Stack/Stack.jsx',
      'pages/HomePage/HomePage.jsx',
      'pages/ProjectCaseStudyPage/ProjectCaseStudyPage.jsx',
      'pages/NotFoundPage/NotFoundPage.jsx'
    ]

    expect(expectedModules.filter((path) => !existsSync(sourcePath(path)))).toEqual([])

    const appSource = readFileSync(sourcePath('app/App.jsx'), 'utf8')
    const globalStyles = readFileSync(sourcePath('main.css'), 'utf8')

    expect(appSource).not.toMatch(/function (Header|Hero|Projects|About|Stack|Footer)/)
    expect(globalStyles).not.toMatch(/\.(site-header|hero|projects|about|stack|footer|case-study)\b/)
    expect(existsSync(sourcePath('App.jsx'))).toBe(false)
  })
})
