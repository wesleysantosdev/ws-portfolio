import styles from './RollingText.module.css'

export function RollingText({ children }) {
  const characters = Array.from(children)

  return (
    <span className={styles.root} data-rolling-text>
      <span className={styles.accessibleText}>{children}</span>
      <span className={styles.animatedText} aria-hidden="true">
        {characters.map((character, index) => (
          <span
            className={styles.characterWindow}
            key={`${character}-${index}`}
            style={{ '--character-index': index }}
          >
            <span className={styles.characterTrack}>
              <span>{character}</span>
              <span>{character}</span>
            </span>
          </span>
        ))}
      </span>
    </span>
  )
}
