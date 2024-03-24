import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiFigma } from 'react-icons/si'
import { SiBootstrap } from 'react-icons/si'

import './styles.css'

function About () {
  return (
    <section className="about-section" id="about">     
      <div className="container about-container">          
        
        <section className="about-me">
          <div className="me-title">
            <small>ABOUT ME</small>
            <h3>
              My passions<br></br> 
              & current stacks
            </h3>
          </div>

          <p className="me-text">I’m a Frontend Developer with a background in Systems Analysis and Development and 25 years old, I bring nearly two years of hands-on experience to the table. My passion lies in crafting visually stunning and seamlessly functional websites and landing pages that captivate audiences.</p>

          <p className="me-text">My journey in web development began with a curiosity to explore creativity, since I love drawing as well. Through dedicated learning and practical application, I've honed my skills in HTML, CSS, JavaScript, and various frontend frameworks to transform ideas into polished digital experiences.</p>

          <p className="me-text">From responsive designs that adapt flawlessly across devices to optimized user experiences that enhance conversions, I approach each project with enthusiasm and a dedication to excellence.</p>

          <p className="me-text">Beyond code, I'm passionate about collaboration, problem-solving, and continuous growth. Whether I'm diving into a new project or refining existing ones, I thrive on challenges that push me to expand my skills and push the boundaries of what's possible in web development.</p>

          <p className="me-text">Let's build something great together!</p>
        </section>

        <section className="about-skills">
          <div className="skills-wrap">
            <article className="skills-card">  
              <SiHtml5 className="card-icon"/>
              <h3 className="card-title">HTML5</h3>
            </article>

            <article className="skills-card">                           
              <SiCss3 className="card-icon"/>                           
              <h3 className="card-title">CSS3</h3>
            </article>

            <article className="skills-card">                            
              <SiJavascript className="card-icon"/>                           
              <h3 className="card-title">JavaScript</h3>
            </article>

            <article className="skills-card">                           
              <SiReact className="card-icon"/>                            
              <h3 className="card-title">React</h3>
            </article>

            <article className="skills-card">                           
              <SiFigma className="card-icon"/>                            
              <h3 className="card-title">Figma</h3>
            </article>

            <article className="skills-card">                           
              <SiBootstrap className="card-icon"/>                            
              <h3 className="card-title">Bootstrap</h3>
            </article>
          </div>
        </section>
      </div>
    </section>
  )
}

export default About 