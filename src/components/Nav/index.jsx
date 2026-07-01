import BrandMark from '../ui/BrandMark'
import { navItems } from '../../content/siteContent'
import { useMobileMenu } from '../../hooks/useMobileMenu'
import { useScrolledPast } from '../../hooks/useScrolledPast'

import './styles.css'

function Nav (){
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu()
  const hasScrolledPast = useScrolledPast(80)

  return (
    <nav className={hasScrolledPast ? "navbar window-scroll" : "navbar"}>
      <div className="container navbar-container" >       
        <BrandMark />
            
        <div className="navbar-wrap">
          <ul className={isOpen ? "navbar-list navbar-list--active" : "navbar-list"}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className={isOpen ? "navbar-hamburguer navbar-hamburguer--active" : "navbar-hamburguer"}
            onClick={toggleMenu}
            aria-hidden="true"
          >
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
