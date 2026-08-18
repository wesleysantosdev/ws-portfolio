import { Footer } from '../../components/layout/Footer/Footer'
import { ExecutionAtmosphere } from '../../components/layout/ExecutionAtmosphere/ExecutionAtmosphere'
import { Header } from '../../components/layout/Header/Header'
import { About } from '../../components/sections/About/About'
import { Hero } from '../../components/sections/Hero/Hero'
import { Projects } from '../../components/sections/Projects/Projects'
import { Stack } from '../../components/sections/Stack/Stack'
import { siteContent } from '../../content/siteContent'
import styles from './HomePage.module.css'

export function HomePage({ content = siteContent, onToggleLocale }) {
  return (
    <div className={styles.page}>
      <Header content={content} onToggleLocale={onToggleLocale} />
      <ExecutionAtmosphere />
      <main className={styles.content}>
        <Hero hero={content.hero} profile={content.profile} />
        <Projects content={content} />
        <About content={content} />
        <Stack content={content} />
      </main>
      <Footer content={content} />
    </div>
  )
}
