import { useEffect, useState } from 'react'

export function useRotatingText(words, intervalMs = 110) {
  const [wordIndex, setWordIndex] = useState(0)
  const [visibleLetters, setVisibleLetters] = useState(0)

  useEffect(() => {
    const activeWord = words[wordIndex]

    const timeoutId = window.setTimeout(() => {
      setVisibleLetters((currentLetters) => {
        const nextLetters = currentLetters + 1

        if (nextLetters > activeWord.length) {
          setWordIndex((currentWordIndex) => (currentWordIndex + 1) % words.length)
          return 0
        }

        return nextLetters
      })
    }, intervalMs)

    return () => window.clearTimeout(timeoutId)
  }, [intervalMs, wordIndex, words])

  return words[wordIndex].slice(0, visibleLetters)
}
