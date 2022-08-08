import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

function Social (){
  return (
    <nav className="header__socials">
      <a href="https://www.linkedin.com/in/wesleysantosdev/" target="_blank"><BsLinkedin className="socials-icons"/></a>
      <a href="https://github.com/wesleysantosdev" target="_blank"><BsGithub className="socials-icons"/></a>
      <a href="https://www.instagram.com/wes.santosb/" target="_blank"><BsInstagram className="socials-icons"/></a>
    </nav>
  )
}

export default Social 