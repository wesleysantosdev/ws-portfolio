import { fireEvent, render, screen } from '@testing-library/react'

import App from '../app/App'
import ProjectMedia from '../components/ui/ProjectMedia'

describe('projects carousel', () => {
  it('offers explicit controls in addition to native horizontal scrolling', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: /projeto anterior/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /próximo projeto/i })).toBeInTheDocument()
    expect(screen.getByRole('group', { name: /navegação do carrossel/i })).toBeInTheDocument()
  })

  it('keeps optional video idle until the user requests a preview', () => {
    render(
      <ProjectMedia
        poster="poster.png"
        video="preview.webm"
        description="Demonstração do produto em uso."
      />
    )

    const video = screen.getByLabelText('Demonstração do produto em uso.')
    expect(video).toHaveAttribute('preload', 'none')
    expect(video).not.toHaveAttribute('autoPlay')

    video.play = vi.fn(() => Promise.resolve())
    fireEvent.click(screen.getByRole('button', { name: /reproduzir prévia/i }))
    expect(video.play).toHaveBeenCalledOnce()
  })
})
