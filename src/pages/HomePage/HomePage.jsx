import { Footer } from '../../components/layout/Footer/Footer'
import { Header } from '../../components/layout/Header/Header'
import { About } from '../../components/sections/About/About'
import { Hero } from '../../components/sections/Hero/Hero'
import { Projects } from '../../components/sections/Projects/Projects'
import { Stack } from '../../components/sections/Stack/Stack'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Stack />
      </main>
      <Footer />
    </>
  )
}
