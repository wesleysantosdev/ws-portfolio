import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import App from '../app/App'
import { portfolioProjects } from '../content/siteContent'

function installMediaQueries({ finePointer = true, reducedMotion = false } = {}) {
  vi.stubGlobal('matchMedia', vi.fn((query) => ({
    matches: query.includes('prefers-reduced-motion') ? reducedMotion : finePointer,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn()
  })))
}

describe('purple project cursor', () => {
  beforeEach(() => {
    installMediaQueries()
    vi.stubGlobal('requestAnimationFrame', vi.fn(() => 1))
    vi.stubGlobal('cancelAnimationFrame', vi.fn())
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('stays hidden until a fine pointer moves and hides when it leaves the window', () => {
    render(<App />)

    const cursor = screen.getByTestId('cursor-follower')

    expect(cursor).toHaveAttribute('aria-hidden', 'true')
    expect(cursor).toHaveAttribute('data-visible', 'false')

    fireEvent.pointerMove(window, { clientX: 120, clientY: 160 })
    expect(cursor).toHaveAttribute('data-visible', 'true')
    expect(requestAnimationFrame).toHaveBeenCalled()

    fireEvent.pointerOut(document, { relatedTarget: null })
    expect(cursor).toHaveAttribute('data-visible', 'false')
  })

  it('expands with the project label only over marked project rows', () => {
    render(<App />)

    const cursor = screen.getByTestId('cursor-follower')
    const projectLink = screen.getByRole('link', { name: /formulário com validação/i })

    fireEvent.pointerMove(projectLink, { clientX: 180, clientY: 220 })
    expect(cursor).toHaveAttribute('data-expanded', 'true')
    expect(cursor).toHaveTextContent('Ver projeto')

    fireEvent.pointerMove(screen.getByRole('main'), { clientX: 240, clientY: 280 })
    expect(cursor).toHaveAttribute('data-expanded', 'false')
  })

  it('marks only the editorial project links on the home', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('[data-cursor-label="Ver projeto"]')).toHaveLength(portfolioProjects.length)
    expect(screen.getByRole('link', { name: /baixar cv/i })).not.toHaveAttribute('data-cursor-label')
  })

  it('is globally mounted but remains inactive for reduced motion', () => {
    installMediaQueries({ reducedMotion: true })
    render(<App pathname="/projetos/calculadora" />)

    const cursor = screen.getByTestId('cursor-follower')
    fireEvent.pointerMove(window, { clientX: 100, clientY: 100 })

    expect(cursor).toHaveAttribute('data-enabled', 'false')
    expect(cursor).toHaveAttribute('data-visible', 'false')
    expect(document.querySelector('[data-cursor-label]')).not.toBeInTheDocument()
  })
})
