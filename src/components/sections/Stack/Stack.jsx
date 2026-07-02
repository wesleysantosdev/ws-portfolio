import { stackGroups } from '../../../content/siteContent'
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel'
import styles from './Stack.module.css'

export function Stack() {
  return (
    <section className={styles.stack} id="stack" aria-label="Tecnologias" data-reveal>
      <div className={styles.heading}>
        <SectionLabel>/Tecnologias</SectionLabel>
        <h2>Ferramentas que uso para tirar ideias do papel.</h2>
      </div>
      <div className={styles.list}>
        {stackGroups.map((group) => (
          <div className={styles.row} key={group.label}>
            <h3>{group.label}</h3>
            <p>{group.items.join('  ·  ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
