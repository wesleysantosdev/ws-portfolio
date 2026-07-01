import CTA from './CTA'
import Vetor from '../../assets/header-image.svg'
import Social from './Social'
import { heroContent, heroWords } from '../../content/siteContent'
import { useRotatingText } from '../../hooks/useRotatingText'

import './styles.css'

function Header () {
  const rotatingWord = useRotatingText(heroWords)

  return (
    <header className="banner" id="header">
      <div className="container banner-container">
        <article className="banner-left">
          <p className="banner-upper-title">{heroContent.greeting}</p>
          <h1 className="banner-title">
            {heroContent.title[0]}<br />
            {heroContent.title[1]}<br />
            {heroContent.title[2]} <span>{rotatingWord}</span>
          </h1>
          <CTA />
        </article>

        <section className="banner-right">
          <div className="banner-vector">
            <img src={Vetor} alt="Abstract illustration" />
          </div>
          <Social />
        </section>

        <div className='banner-line-left'></div>
        <div className='banner-line-right'></div>
      </div>
    </header>
  )

}

export default Header
