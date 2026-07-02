import { navItems, profile } from '../../../content/siteContent'
import { useTheme } from '../../../hooks/useTheme'
import linkedInIcon from '../../../assets/linkedin.svg'
import moonIcon from '../../../assets/moon.svg'
import sunIcon from '../../../assets/sun.svg'
import { RollingIcon } from '../../ui/RollingIcon/RollingIcon'
import { RollingText } from '../../ui/RollingText/RollingText'
import styles from './Header.module.css'

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <header className={styles.header}>
      <span className={styles.brandSlot} aria-hidden="true" />
      <nav className={styles.navigation} aria-label="Navegação principal">
        {navItems.map((item) => <a href={`/${item.href}`} key={item.href}><RollingText>{item.label}</RollingText></a>)}
      </nav>
      <div className={styles.actions} data-testid="site-actions">
        <a className={styles.linkedin} href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn de Wesley Santos">
          <RollingIcon className={styles.icon} src={linkedInIcon} />
        </a>
        <span className={styles.divider} aria-hidden="true" data-testid="site-actions-divider" />
        <button
          className={styles.themeToggle}
          type="button"
          aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
          aria-pressed={isDark}
          onClick={toggleTheme}
        >
          <span className={`${styles.themeIcon} ${styles.sun}`} aria-hidden="true">
            <RollingIcon className={styles.icon} size={18} src={sunIcon} />
          </span>
          <span className={`${styles.themeIcon} ${styles.moon}`} aria-hidden="true">
            <RollingIcon className={styles.icon} size={18} src={moonIcon} />
          </span>
        </button>
      </div>
    </header>
  )
}
