import { useEffect, useState } from 'react'

export function useScrolledPast(offset = 80) {
  const [hasScrolledPast, setHasScrolledPast] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolledPast(window.scrollY >= offset)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [offset])

  return hasScrolledPast
}
