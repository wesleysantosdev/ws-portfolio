import { aboutContent, skills } from '../../content/siteContent'

import './styles.css'

function About () {
  return (
    <section className="about-section" id="about">     
      <div className="container about-container"> 
        <div className="about-title">
          <small>{aboutContent.eyebrow}</small>
          <h3>
            {aboutContent.title[0]}<br />
            {aboutContent.title[1]}
          </h3>
        </div>
    
        <section className="about-description">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="about-skills">
          <div className="skills-wrap">
            {skills.map((skill) => (
              <article className="skills-card" key={skill.label}>
                <skill.Icon className="card-icon" />
                <h3 className="card-title">{skill.label}</h3>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

export default About 
