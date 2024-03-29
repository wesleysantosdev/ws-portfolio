import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

import './styles.css'

function Footer (){
  return (
    <footer>
      <section className="container footer-container">
        <div className="footer-wrap"> 
          <article className="footer-name">
            <h2>WS</h2>
          </article>

          <nav className="footer-icons">
            <a href="https://www.instagram.com/wes.santosb/" target="_blank"><BsInstagram className="footer-socials-icons"/></a>
            <a href="https://www.linkedin.com/in/wesleysantosdev/" target="_blank"><BsLinkedin className="footer-socials-icons"/></a>
            <a href="https://github.com/wesleysantosdev" target="_blank"><BsGithub className="footer-socials-icons"/></a>
          </nav>

          <nav className="footer-nav">
            <a href="#header">Home</a>
            <a href="#about">About me</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="credits">
          <small>&copy; 2024 Wesley Santos</small>
        </div>
      </section>
    </footer>
  )
}

export default Footer