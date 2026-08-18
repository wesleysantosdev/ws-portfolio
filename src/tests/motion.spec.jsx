import { render } from '@testing-library/react'

import App from '../app/App'

describe('editorial scroll reveal', () => {
  it('keeps progressive reveals on the home without kinetic-letter animation', () => {
    render(<App />)

    expect(document.querySelectorAll('[data-scroll-reveal]').length).toBeGreaterThanOrEqual(12)
    expect(document.querySelector('[data-kinetic-text]')).not.toBeInTheDocument()
    expect(document.querySelector('[data-spinning]')).not.toBeInTheDocument()
  })

  it('keeps progressive reveals on a project case without kinetic-letter animation', () => {
    render(<App pathname="/projetos/shrten" />)

    expect(document.querySelectorAll('[data-scroll-reveal]').length).toBeGreaterThanOrEqual(6)
    expect(document.querySelector('[data-kinetic-text]')).not.toBeInTheDocument()
  })
})
