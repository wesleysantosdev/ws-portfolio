import { stackGroups } from '../../../content/siteContent'
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel'
import revealStyles from '../../../styles/ScrollReveal.module.css'
import styles from './Stack.module.css'

export function Stack() {
  return (
    <section className={`${styles.stack} ${revealStyles.section}`} id="stack" aria-label="Tecnologias" data-reveal data-scroll-reveal>
      <div className={`${styles.heading} ${revealStyles.item}`} data-scroll-reveal>
        <SectionLabel>/Tecnologias</SectionLabel>
        <h2>Ferramentas que uso para tirar ideias do papel.</h2>
      </div>
      <div className={`${styles.list} ${revealStyles.item}`} data-scroll-reveal>
        {stackGroups.map((group) => (
          <div className={`${styles.row} ${revealStyles.item}`} data-scroll-reveal key={group.label}>
            <h3>{group.label}</h3>
            <p>{group.items.join('  ·  ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
