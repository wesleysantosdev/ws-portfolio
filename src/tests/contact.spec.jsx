import { render, screen } from '@testing-library/react'

import Contact from '../components/Contact'

vi.mock('@emailjs/browser', () => ({
  default: {
    sendForm: vi.fn(() => Promise.resolve({ text: 'ok' }))
  }
}))

describe('Contact', () => {
  it('exposes accessible form controls by label', () => {
    render(<Contact />)

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })
})
