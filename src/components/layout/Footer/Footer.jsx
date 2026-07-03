import { navItems, profile } from '../../../content/siteContent'
import { RollingText } from '../../ui/RollingText/RollingText'
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel'
import revealStyles from '../../../styles/ScrollReveal.module.css'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={`${styles.footer} ${revealStyles.section}`} id="contato" data-reveal data-scroll-reveal>
      <div className={styles.backgroundWord} aria-hidden="true">WES</div>
      <div className={styles.content}>
        <div className={revealStyles.item} data-scroll-reveal>
          <SectionLabel>/Vamos conversar</SectionLabel>
          <h2>Tem um produto para construir ou melhorar?</h2>
          <a className={styles.email} href={`mailto:${profile.email}`}><RollingText>{profile.email}</RollingText></a>
        </div>
        <nav className={revealStyles.item} aria-label="Links rápidos" data-scroll-reveal>
          <SectionLabel>/Links Rápidos</SectionLabel>
          {navItems.slice(0, 3).map((item) => <a href={item.href} key={item.href}><RollingText>{item.label}</RollingText></a>)}
          <a href={profile.resumeUrl} download><RollingText>Baixar CV</RollingText></a>
        </nav>
        <nav className={revealStyles.item} aria-label="Redes e contato" data-scroll-reveal>
          <SectionLabel>/Contato</SectionLabel>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer"><RollingText>LinkedIn ↗</RollingText></a>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer"><RollingText>GitHub ↗</RollingText></a>
          <a href={`mailto:${profile.email}`}><RollingText>E-mail ↗</RollingText></a>
        </nav>
      </div>
      <p className={styles.credit}>© {new Date().getFullYear()} Wesley Santos · Feito com atenção aos detalhes.</p>
    </footer>
  )
}
