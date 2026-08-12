import { Footer } from '../../components/layout/Footer/Footer'
import { ExecutionAtmosphere } from '../../components/layout/ExecutionAtmosphere/ExecutionAtmosphere'
import { Header } from '../../components/layout/Header/Header'
import { About } from '../../components/sections/About/About'
import { Hero } from '../../components/sections/Hero/Hero'
import { Projects } from '../../components/sections/Projects/Projects'
import { Stack } from '../../components/sections/Stack/Stack'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <div className={styles.page}>
      <Header />
      <ExecutionAtmosphere />
      <main className={styles.content}>
        <Hero />
        <Projects />
        <About />
        <Stack />
      </main>
      <Footer />
    </div>
  )
}
