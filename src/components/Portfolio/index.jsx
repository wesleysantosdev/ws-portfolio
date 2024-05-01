// import Swiper from './Swiper'
import project1 from '../../assets/form-project.png'
import project2 from '../../assets/dark-mode-project.png'
import project3 from '../../assets/calculator-project.png'
import project4 from '../../assets/profile-card-project.png'
import './styles.css'

function Portfolio () {
  return (
    <section className="container portfolio-section" id="portfolio">
      <div className="portfolio-title">
        <div>
          <small>PORTFOLIO</small>
          <h3>
            Featured projects
          </h3>
        </div>

        <a href="https://github.com/wesleysantosdev?tab=repositories" target='_blank' className="btn">View All</a>
      </div>

      <div className="portfolio-container">
        <div className='portfolio-row'>
          <article className="portfolio-card">
            <a href="https://wesleysantosdev.github.io/component-with-signup-form/" className="portfolio-card-image-container" target="_blank">
              <img src={project1} />
            </a>
            
            <h3 className="portfolio-card-title">Form with validation</h3>
            <p className="portfolio-card-description">A project made from a Frontend Mentor challenge, where it was given only the assets and design. It has all the input validation for the user.</p>
          </article>

          <article className="portfolio-card">
            <a href="https://wesleysantosdev.github.io/login-dark-mode-switch/" className="portfolio-card-image-container" target="_blank">
              <img src={project2} />
            </a>
            
            <h3 className="portfolio-card-title">Login with dark mode</h3>
            <p className="portfolio-card-description">A simple login form with a dark/light mode switch but focusing only on frontend.</p>
          </article>
        </div>

        <div className='portfolio-row'>
          <article className="portfolio-card">
            <a href="https://wesleysantosdev.github.io/calculator/" className="portfolio-card-image-container" target="_blank">
              <img src={project3} />
            </a>

            <h3 className="portfolio-card-title">Calculator</h3>
            <p className="portfolio-card-description">A simple and functional calculator that is able to execute all four main math operations.</p>
          </article>
      
          <article className="portfolio-card">
            <a href="https://wesleysantosdev.github.io/animated-profile-card/" className="portfolio-card-image-container" target="_blank">
              <img src={project4} />
            </a>
           
            <h3 className="portfolio-card-title">Profile card</h3>
            <p className="portfolio-card-description">A simple card that expands when you hover it, showing my socials and a short description.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Portfolio