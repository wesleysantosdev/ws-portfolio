import styles from './ExecutionAtmosphere.module.css'

const executionRails = Array.from({ length: 4 }, (_, index) => (
  <i className={styles.rail} data-execution-rail key={index} />
))

export function ExecutionAtmosphere() {
  return (
    <div className={styles.atmosphere} data-testid="execution-atmosphere" aria-hidden="true">
      <div className={styles.rails}>{executionRails}</div>
    </div>
  )
}
