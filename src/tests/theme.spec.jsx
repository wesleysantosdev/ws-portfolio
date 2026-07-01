import { fireEvent, render, screen } from '@testing-library/react'

import App from '../app/App'

describe('theme preference', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
    window.matchMedia = vi.fn().mockReturnValue({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn()
    })
  })

  it('starts from the system preference and persists an explicit choice', () => {
    render(<App />)

    const toggle = screen.getByRole('button', { name: /ativar tema claro/i })
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
    expect(toggle).toHaveAttribute('aria-pressed', 'true')

    fireEvent.click(toggle)

    expect(document.documentElement).toHaveAttribute('data-theme', 'light')
    expect(localStorage.getItem('portfolio-theme')).toBe('light')
    expect(screen.getByRole('button', { name: /ativar tema escuro/i })).toHaveAttribute('aria-pressed', 'false')
  })
})
