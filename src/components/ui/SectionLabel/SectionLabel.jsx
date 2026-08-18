import styles from './SectionLabel.module.css'

export function SectionLabel({ children, description, breakRail = false }) {
  return (
    <div className={styles.root} data-section-label data-rail-break={breakRail}>
      <p className={styles.label}>{children}</p>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  )
}
