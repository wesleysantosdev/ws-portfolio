import CTA from './CTA'
import ME from '../../assets/me-vector.png'
import Social from './Social'

import './styles.css'

function Header () {
  return (
    <header className="header" id="header">
      <div className="container header__container">
        <section className="header__left">
          <h1 className="header__title">Olá! Eu sou o <hr /><strong>Wesley Santos</strong>.</h1>
          <p className="header__text">Um estudante de Análise e Desenvolvimento de Sistemas em busca de se tornar um grande desenvolvedor Front-end.</p>
          <CTA />
        </section>

        <h5 className="header__scroll-down">Role para baixo</h5>

        <section className="header__right">
          <div className="header__me">
            <img src={ME} alt="foto de perfil" />    
          </div>
          <div className="header__bg"></div>
          <Social />
        </section>
      </div>
    </header>
  )

}

export default Header