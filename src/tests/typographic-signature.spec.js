import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const readSource = (path) => readFileSync(resolve(process.cwd(), 'src', path), 'utf8')

describe('hero typographic signature', () => {
  it('cycles quickly through the requested font sampler', () => {
    const globalStyles = readSource('main.css')
    const heroStyles = readSource('components/sections/Hero/Hero.module.css')
    const animatedFonts = [
      'Monsieur La Doulaise',
      'Ephesis',
      'Almendra',
      'UnifrakturMaguntia',
      'Story Script',
      'Alex Brush'
    ]
    const keyframes = heroStyles.slice(heroStyles.indexOf('@keyframes typographicSignature'))

    animatedFonts.forEach((font) => {
      expect(globalStyles).toContain(`family=${font.replaceAll(' ', '+')}`)
      expect(keyframes).toContain(`font-family:'${font}'`)
    })
    expect(keyframes).not.toMatch(/Archivo|JetBrains Mono|Fontdiner Swanky|Poppins/)
    expect(`${globalStyles}${heroStyles}`).not.toMatch(/Cormorant Garamond|Caveat|Fontdiner Swanky|Poppins/)
    expect(heroStyles).toContain('animation:typographicSignature 2.1s steps(1,end) infinite')
  })
})
