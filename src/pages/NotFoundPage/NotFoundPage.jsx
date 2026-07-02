import { SectionLabel } from '../../components/ui/SectionLabel/SectionLabel'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  return (
    <main className={styles.page}>
      <SectionLabel>/404</SectionLabel>
      <h1>Projeto não encontrado.</h1>
      <p>Este case pode ter mudado de endereço ou ainda não foi publicado.</p>
      <a href="/">Voltar ao portfólio</a>
    </main>
  )
}
