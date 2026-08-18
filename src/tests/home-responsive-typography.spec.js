import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const readSource = (path) => readFileSync(resolve(process.cwd(), 'src', path), 'utf8')

describe('home responsive typography', () => {
  it('shares the section title scale between about and stack', () => {
    const globalStyles = readSource('main.css')
    const aboutStyles = readSource('components/sections/About/About.module.css')
    const stackStyles = readSource('components/sections/Stack/Stack.module.css')

    expect(globalStyles).toContain('--section-title-size:clamp(2.65rem,5.4vw,4.5rem)')
    expect(globalStyles).toContain('--section-title-line-height:.98')
    expect(globalStyles).toContain('--section-title-spacing:-.05em')
    expect(aboutStyles).toContain('font-size:var(--section-title-size)')
    expect(stackStyles).toContain('font-size:var(--section-title-size)')
  })

  it('keeps the hero title stretched on desktop and left-aligned on mobile without removing the signature overlay', () => {
    const heroStyles = readSource('components/sections/Hero/Hero.module.css')

    expect(heroStyles).toContain('--hero-title-gutter:clamp(8.67px,.794vw,13px)')
    expect(heroStyles).toContain(".hero h1 { position:relative; z-index:2; width:100%; margin:0; padding-inline:var(--hero-title-gutter);")
    expect(heroStyles).toContain('line-height:.86')
    expect(heroStyles).toContain('font-weight:900')
    expect(heroStyles).toContain('.titleLine:first-child { transform:translateX(-.018em); }')
    expect(heroStyles).toContain('.titleBottom { margin-top:.3em; text-align:left; }')
    expect(heroStyles).toContain('.signature { position:absolute; z-index:3; top:58%; left:72%;')
    expect(heroStyles).toContain('transform:translate(-50%,-50%) rotate(-4deg)')
    expect(heroStyles).toContain('@media (max-width:800px)')
    expect(heroStyles).toContain('.hero h1 { width:100%; margin:0;')
    expect(heroStyles).toContain('.titleLine { white-space:nowrap; text-align:left; }')
    expect(heroStyles).toContain('.titleBottom { margin-top:.88em; text-align:left; }')
    expect(heroStyles).toContain('.signature { top:50%; left:10px;')
    expect(heroStyles).toContain('text-align:left')
    expect(heroStyles).toContain('align-items:flex-start')
    expect(heroStyles).toContain('transform:translateY(-50%) rotate(-4deg)')
  })
})
