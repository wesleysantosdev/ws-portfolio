import { useEffect, useState } from 'react'

import {
  ENGLISH_LOCALE,
  getSiteContent,
  PORTUGUESE_LOCALE
} from '../content/siteContent'

const STORAGE_KEY = 'portfolio-locale'

function getPreferredLanguage() {
  return window.navigator.languages?.[0] || window.navigator.language
}

function getInitialLocale() {
  try {
    const savedLocale = window.localStorage.getItem(STORAGE_KEY)
    if (savedLocale === PORTUGUESE_LOCALE || savedLocale === ENGLISH_LOCALE) {
      return savedLocale
    }
  } catch {
    // Storage can be unavailable in privacy-focused browser contexts.
  }

  return getPreferredLanguage()?.toLowerCase() === 'pt-br'
    ? PORTUGUESE_LOCALE
    : ENGLISH_LOCALE
}

export function useLocale() {
  const [locale, setLocale] = useState(getInitialLocale)
  const content = getSiteContent(locale)

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dataset.locale = locale
    document.title = content.meta.title

    const description = document.querySelector('meta[name="description"]')
    description?.setAttribute('content', content.meta.description)
  }, [content.meta.description, content.meta.title, locale])

  function toggleLocale() {
    setLocale((currentLocale) => {
      const nextLocale = currentLocale === PORTUGUESE_LOCALE
        ? ENGLISH_LOCALE
        : PORTUGUESE_LOCALE

      try {
        window.localStorage.setItem(STORAGE_KEY, nextLocale)
      } catch {
        // The in-memory choice still applies when storage is unavailable.
      }

      return nextLocale
    })
  }

  return { content, locale, toggleLocale }
}
