import { SectionLabel } from '../../components/ui/SectionLabel/SectionLabel'
import { siteContent } from '../../content/siteContent'
import styles from './NotFoundPage.module.css'

export function NotFoundPage({ content = siteContent }) {
  const { notFound } = content

  return (
    <main className={styles.page}>
      <SectionLabel>/404</SectionLabel>
      <h1>{notFound.heading}</h1>
      <p>{notFound.description}</p>
      <a href="/">{notFound.backLabel}</a>
    </main>
  )
}
