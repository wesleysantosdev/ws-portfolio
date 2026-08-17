import '@testing-library/jest-dom'

Object.defineProperty(window.navigator, 'language', {
  configurable: true,
  value: 'pt-BR'
})

Object.defineProperty(window.navigator, 'languages', {
  configurable: true,
  value: ['pt-BR']
})
