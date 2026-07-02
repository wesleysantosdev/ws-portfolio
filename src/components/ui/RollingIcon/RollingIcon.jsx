import styles from './RollingIcon.module.css'

export function RollingIcon({ className = '', size, src }) {
  const dimensions = size ? { width: size, height: size } : undefined

  return (
    <span className={`${styles.root} ${className}`} data-rolling-icon aria-hidden="true" style={dimensions}>
      <span className={styles.track}>
        <img src={src} alt="" />
        <img src={src} alt="" />
      </span>
    </span>
  )
}
