import Swiper from './Swiper'

import './styles.css'

function Portfolio () {
  return (
    <section className="portfolio__section" id="portfolio">
        
        <div className="portfolio__title">
          <small>Projetos mais recentes</small>
          <h3>Portfolio<strong>.</strong></h3>
        </div>

      <div className="container portfolio__container">
        <Swiper />
      </div>
    </section>
  )
}

export default Portfolio