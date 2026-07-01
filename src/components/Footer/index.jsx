import { navItems, socialLinks } from '../../content/siteContent'
import BrandMark from '../ui/BrandMark'
import SocialLinks from '../ui/SocialLinks'
import './styles.css'

function Footer (){
  return (
    <footer>
      <section className="container footer-container">
        <div className="footer-wrap"> 
          <article className="footer-name">
            <BrandMark />
          </article>

          <SocialLinks className="footer-icons" iconClassName="footer-socials-icons" links={socialLinks} />

          <nav className="footer-nav">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="credits">
          <small>&copy; {new Date().getFullYear()} Wesley Santos</small>
        </div>
      </section>
    </footer>
  )
}

export default Footer
