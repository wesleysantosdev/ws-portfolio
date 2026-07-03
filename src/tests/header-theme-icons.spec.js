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
})
