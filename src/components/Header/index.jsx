import CTA from './CTA'
import Vetor from '../../assets/header-image.svg'
import Social from './Social'

import './styles.css'

function Header () {
  return (
    <header className="banner" id="header">
      <div className="container banner-container">
        <article className="banner-left">
          <p className="banner-upper-title">Hi, I'm Wesley Santos</p>
          <h1 className="banner-title">
            Frontend<br></br>
            Developer<br></br>
            & <span>Dreamer</span>
          </h1>
          <CTA />
        </article>

        <section className="banner-right">
          <div className="banner-vector">
            <img src={Vetor} alt="Vetor" />    
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