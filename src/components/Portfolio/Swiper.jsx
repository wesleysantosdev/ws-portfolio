import project1 from '../../assets/form-project.png'
import project2 from '../../assets/dark-mode-project.png'
import project3 from '../../assets/calculator-project.png'
import project4 from '../../assets/profile-card-project.png'

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css'

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      spaceBetween={40}
      navigation
      loop
      pagination={{ clickable: true }}
      className="swiper__container"
    >
    <SwiperSlide className="swiper__slide">
      <img src={project1} className="swiper__image"/>
      
      <article className="swiper__data">
        <h3 className="data__title">Formulário com Validação</h3>
        <p className="data__description">Um projeto feito a partir de um exercício da <a href="#">Frontend Mentor</a> onde foi dado apenas os assets e exemplo de design. Ele contém validação em todos os inputs, inclusive formato de email.</p>
        <a href="https://wesleysantosdev.github.io/component-with-signup-form/" className="btn btn--colored" target="_blank">Demo</a>
      </article>
    </SwiperSlide>
    
    <SwiperSlide className="swiper__slide">
      <img src={project2}className="swiper__image"/>

      <article className="swiper__data">
        <h3 className="data__title">Login com Dark Mode</h3>
        <p className="data__description">Um simples formulário de login com o foco total no toggle para dark/light mode, sem conexão alguma com back-end.</p>
        <a href="https://wesleysantosdev.github.io/login-dark-mode-switch/" className="btn btn--colored" target="_blank">Demo</a>
      </article>
    </SwiperSlide>
    
    <SwiperSlide className="swiper__slide">
      <img src={project3}className="swiper__image"/>

      <article className="swiper__data">
        <h3 className="data__title">Calculadora</h3>
        <p className="data__description">Uma calculadora simples, porém, totalmente funcional, podendo executar as quatro principais operações perfeitamente.</p>
        <a href="https://wesleysantosdev.github.io/calculator/" className="btn btn--colored" target="_blank">Demo</a>
      </article>
    </SwiperSlide>
    
    <SwiperSlide className="swiper__slide">
      <img src={project4}className="swiper__image"/>
      
      <article className="swiper__data">
        <h3 className="data__title">Card de Perfil</h3>
        <p className="data__description">Um card bem simples que se abre quando passamos o mouse em cima, mostrando ícones que levam às minhas redes sociais e contém uma breve apresentação.</p>
        <a href="https://wesleysantosdev.github.io/animated-profile-card/" className="btn btn--colored" target="_blank">Demo</a>
      </article>
    </SwiperSlide>
    </Swiper>
  )
}