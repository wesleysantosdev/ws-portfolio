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
      <div className="container navbar-container" >       
        <h2>WS</h2>
            
        <div className="navbar-wrap">
          <ul className={active ? "navbar-list navbar-list--active" : "navbar-list"}>
            <li><a href="#header" onClick={toggleMode}>Home</a></li>
            <li><a href="#about" onClick={toggleMode}>About me</a></li>
            <li><a href="#portfolio" onClick={toggleMode}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMode}>Contact</a></li>
          </ul>

          <div className={active ? "navbar-hamburguer navbar-hamburguer--active" : "navbar-hamburguer"} onClick={toggleMode}>
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