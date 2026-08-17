import { siteContent } from '../../../content/siteContent'
import { RollingText } from '../../ui/RollingText/RollingText'
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel'
import styles from './Footer.module.css'

export function Footer({ content = siteContent }) {
  const { footer, navItems, profile } = content

  return (
    <footer className={styles.footer} id="contato" data-reveal>
      <div className={styles.backgroundWord} aria-hidden="true">WES</div>
      <div className={styles.content}>
        <div>
          <SectionLabel>{footer.invitationLabel}</SectionLabel>
          <h2>{footer.heading}</h2>
          <a className={styles.email} href={`mailto:${profile.email}`}><RollingText>{profile.email}</RollingText></a>
        </div>
        <nav aria-label={footer.quickLinksAriaLabel}>
          <SectionLabel>{footer.quickLinksLabel}</SectionLabel>
          {navItems.slice(0, 3).map((item) => <a href={item.href} key={item.href}><RollingText>{item.label}</RollingText></a>)}
          <a href={profile.resumeUrl} download><RollingText>{footer.resumeLabel}</RollingText></a>
        </nav>
        <nav aria-label={footer.contactAriaLabel}>
          <SectionLabel>{footer.contactLabel}</SectionLabel>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer"><RollingText>LinkedIn ↗</RollingText></a>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer"><RollingText>GitHub ↗</RollingText></a>
          <a href={`mailto:${profile.email}`}><RollingText>E-mail ↗</RollingText></a>
        </nav>
      </div>
      <p className={styles.credit}>© {new Date().getFullYear()} Wesley Santos · {footer.credit}</p>
    </footer>
  )
}
