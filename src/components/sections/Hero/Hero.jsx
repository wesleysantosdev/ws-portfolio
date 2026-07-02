import { profile } from '../../../content/siteContent'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="inicio" aria-labelledby="hero-title">
      <div className={styles.topline}>
        <p className={styles.kicker}>Portfólio · 2026</p>
        <p className={styles.kicker}>{profile.location}</p>
      </div>
      <h1 id="hero-title" aria-label="Desenvolvedor full stack Wesley Santos">
        <span className={styles.titleLine}>Desenvolvedor</span>
        <span className={styles.signature}>Wesley Santos</span>
        <span className={`${styles.titleLine} ${styles.titleBottom}`}>Full stack</span>
      </h1>
      <p className={styles.summary}>Transformo necessidades de negócio em produtos web claros, rápidos e sustentáveis.</p>
      <div className={styles.meta}>
        <span className={styles.availability} data-testid="availability"><i aria-hidden="true" />{profile.availability}</span>
      </div>
    </section>
  )
}
