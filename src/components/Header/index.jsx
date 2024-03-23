import CTA from './CTA'
import ME from '../../assets/me-vector.png'
import Social from './Social'

import './styles.css'

function Header () {
  return (
    <header className="header" id="header">
      <div className="container header-container">
        <section className="header-left">
          <p className="header-upper-title">Hi, I'm Wesley Santos</p>
          <h1 className="header-title">
            Frontend<br></br>
            Developerbr<br></br>
            & <span>Dreamer</span>
          </h1>
          <CTA />
        </section>

        <section className="header-right">
          <div className="header-me">
            <img src={ME} alt="foto de perfil" />    
          </div>
          <Social />
        </section>

        <div className='header-line-left'></div>
        <div className='header-line-right'></div>
      </div>
    </header>
  )

}

export default Header