import { useState } from 'react'

export function useMobileMenu(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue)

  const toggleMenu = () => {
    setIsOpen((currentValue) => !currentValue)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return {
    isOpen,
    toggleMenu,
    closeMenu
  }
}
