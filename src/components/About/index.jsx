import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiReact} from 'react-icons/si'

import './styles.css'

function About () {
  return (
    <section className="about__section" id="about">     
      <div className="container about__container">          
        
        <section className="about__me">
          <div className="me__title">
            <small>Saiba um pouco</small>
            <h3>Sobre mim<strong>.</strong></h3>
          </div>
          <p className="me__text">Sou uma pessoa muito interessada em aprender coisas novas, apaixonado por arte, games e tecnologia. Comecei a cursar <strong>Análise e Desenvolvimento de Sistemas</strong> em agosto de 2021, mas só no início de 2022 que comecei a focar em desenvolver websites em HTML, CSS e Javascript, e mais recentemente, utilizando a biblioteca React. <strong>Não possuo experiência</strong> com programação e desenvolvimento web além dos meus projetos pessoais.</p>
        </section>

        <section className="about__skills">
          <div className="skills__title">
              <small>Minhas principais</small>
              <h3>Habilidades<strong>.</strong></h3>
          </div>

          <div className="skills__wrap">
            <article className="skills__card">  
              <SiHtml5 className="card__icon"/>
              <h3 className="card__title">HTML5<strong>.</strong></h3>
              <p className="card__text">Conhecimento intermediário em tags semânticas, formulários, em como utilizar o BEM para organizar melhor as classes.</p>
            </article>

            <article className="skills__card">                           
              <SiCss3 className="card__icon"/>                           
              <h3 className="card__title">CSS3<strong>.</strong></h3>
              <p className="card__text">Cada vez mais familiarizado com o uso do Flexbox e Grid para criar layouts diferentes, além de conseguir criar animações simples. </p>
            </article>

            <article className="skills__card">                            
              <SiJavascript className="card__icon"/>                           
              <h3 className="card__title">JavaScript<strong>.</strong></h3>
              <p className="card__text">Conhecimento básico em programação funcional, e métodos como map, filter e reduce. Familiarizado com eventos DOM e lógica de programação.</p>
            </article>

            <article className="skills__card">                           
              <SiReact className="card__icon"/>                            
              <h3 className="card__title">React<strong>.</strong></h3>
              <p className="card__text">Conhecimento básico de como funciona a estrutura, a organização dos componentes e importações. Utilizei todos meus conhecimentos desenvolvendo esse portfólio.</p>
            </article>
          </div>
        </section>
      </div>
    </section>
  )
}

export default About 