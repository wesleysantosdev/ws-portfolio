import { useState } from 'react'

import './styles.css'

function Nav (){
  const [active, setActive] = useState(false)
  
  const toggleMode = () => {
    setActive(!active)
  }

  const [navbar, setNavbar] = useState(false)
  
  const changeNavbarColor = () => {
    if (window.scrollY >= 80){
      setNavbar(true)
    }else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeNavbarColor)

  return (
    <nav className={navbar ? "navbar window-scroll" : "navbar"}>
      <div className="container navbar__container" >       
        <h2>WS<strong>.</strong></h2>
            
        <div className="navbar__wrap">
          <ul className={active ? "navbar__list navbar__list--active" : "navbar__list"}>
            <li><a href="#header" onClick={toggleMode}>Início</a></li>
            <li><a href="#about" onClick={toggleMode}>Sobre mim</a></li>
            <li><a href="#portfolio" onClick={toggleMode}>Projetos</a></li>
            <li><a href="#contact" onClick={toggleMode}>Contatos</a></li>
          </ul>

          <div className={active ? "navbar__hamburguer navbar__hamburguer--active" : "navbar__hamburguer"} onClick={toggleMode}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
          </div>      
        </div>
      </div>
    </nav>
  )
}

export default Nav