import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

import './styles.css'

function Footer (){
  return (
    <footer>
      <section className="container footer__container">
        <div className="footer__wrap"> 
          <article className="footer__name">
            <h3>Wesley</h3>
            <h5>Desenvolvedor Front-end</h5>
          </article>

          <nav className="footer__nav">
            <a href="#header">Início</a>
            <a href="#about">Sobre mim</a>
            <a href="#portfolio">Projetos</a>
            <a href="#contact">Contatos</a>
          </nav>

          <nav className="footer__icons">
            <a href="https://www.linkedin.com/in/wesleysantosdev/" target="_blank"><BsLinkedin className="footer__socials-icons"/></a>
            <a href="https://github.com/wesleysantosdev" target="_blank"><BsGithub className="footer__socials-icons"/></a>
            <a href="https://www.instagram.com/wes.santosb/" target="_blank"><BsInstagram className="footer__socials-icons"/></a>
          </nav>
        </div>

        <small>&copy; 2022 Wesley Santos</small>
      </section>
    </footer>
  )
}

export default Footer