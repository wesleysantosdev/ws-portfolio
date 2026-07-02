import styles from './SectionLabel.module.css'

export function SectionLabel({ children }) {
  return <p className={styles.label}>{children}</p>
}
