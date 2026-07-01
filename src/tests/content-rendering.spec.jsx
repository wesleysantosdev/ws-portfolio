import { render, screen } from '@testing-library/react'

import About from '../components/About'
import Portfolio from '../components/Portfolio'
import { portfolioProjects, skills } from '../content/siteContent'

describe('content-driven sections', () => {
  it('renders every skill from the shared content module', () => {
    render(<About />)

    expect(skills).toHaveLength(6)

    skills.forEach((skill) => {
      expect(screen.getByText(skill.label)).toBeInTheDocument()
    })
  })

  it('renders every featured project from the shared content module', () => {
    render(<Portfolio />)

    expect(portfolioProjects).toHaveLength(4)

    portfolioProjects.forEach((project) => {
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument()
    })
  })
})
