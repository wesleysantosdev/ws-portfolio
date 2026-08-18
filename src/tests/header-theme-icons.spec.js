import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('header icons in dark mode', () => {
  it('renders the LinkedIn and moon icons in pure white', () => {
    const styles = readFileSync(
      resolve(process.cwd(), 'src/components/layout/Header/Header.module.css'),
      'utf8'
    )

    expect(styles).toContain(":global([data-theme='dark']) .linkedin .icon,:global([data-theme='dark']) .moon .icon { filter:brightness(0) invert(1); }")
  })

  it('keeps only the rolling animation on hover', () => {
    const styles = readFileSync(
      resolve(process.cwd(), 'src/components/layout/Header/Header.module.css'),
      'utf8'
    )

    expect(styles).not.toContain('.actions>a:hover,.themeToggle:hover')
    expect(styles).not.toContain('.actions>a:hover .icon,.themeToggle:hover .icon')
  })

  it('does not fill navigation items on hover', () => {
    const styles = readFileSync(
      resolve(process.cwd(), 'src/components/layout/Header/Header.module.css'),
      'utf8'
    )

    const hoverRule = styles.match(/\.navigation a:hover,\.localeToggle:hover \{([^}]*)\}/)?.[1]

    expect(hoverRule).toBeDefined()
    expect(hoverRule).not.toMatch(/\bbackground\s*:/)
  })

  it('uses 4px by 16px padding on the responsive navigation', () => {
    const styles = readFileSync(
      resolve(process.cwd(), 'src/components/layout/Header/Header.module.css'),
      'utf8'
    )

    expect(styles).toMatch(
      /@media \(max-width:800px\).*?\.navigation \{[^}]*padding:4px 16px;/s
    )
  })

  it('applies the navigation rolling effect to text buttons', () => {
    const styles = readFileSync(
      resolve(process.cwd(), 'src/components/ui/RollingText/RollingText.module.css'),
      'utf8'
    )

    expect(styles).toContain(':global(button:hover) .characterTrack')
    expect(styles).toContain(':global(button:focus-visible) .characterTrack')
  })
})
