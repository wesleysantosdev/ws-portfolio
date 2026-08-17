import { siteContent } from '../../../content/siteContent'
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel'
import revealStyles from '../../../styles/ScrollReveal.module.css'
import styles from './Stack.module.css'

export function Stack({ content = siteContent }) {
  const { sectionIntroductions, stack } = content

  return (
    <section className={`${styles.stack} ${revealStyles.section}`} id="stack" aria-label={stack.ariaLabel} data-reveal data-scroll-reveal>
      <div className={revealStyles.item} data-scroll-reveal><SectionLabel description={sectionIntroductions.stack.description} breakRail>{sectionIntroductions.stack.label}</SectionLabel></div>
      <div className={`${styles.heading} ${revealStyles.item}`} data-scroll-reveal>
        <h2>{stack.heading}</h2>
      </div>
      <div className={`${styles.list} ${revealStyles.item}`} data-scroll-reveal>
        {stack.groups.map((group) => (
          <div className={`${styles.row} ${revealStyles.item}`} data-scroll-reveal key={group.label}>
            <h3>{group.label}</h3>
            <p>{group.items.join('  ·  ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
