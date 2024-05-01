import CTA from './CTA'
import Vetor from '../../assets/header-image.svg'
import Social from './Social'
import { useState, useEffect } from 'react'

import './styles.css'

function Header () {
  const words = ["Dreamer", "Artist", "Explorer", "Creator"];
  const [index, setIndex] = useState(0);
  const [displayedLetters, setDisplayedLetters] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setDisplayedLetters((prev) => {
          const totalLetters = words[index].length;
          const next = prev + 1;
          if (next > totalLetters) {
            setIndex((index + 1) % words.length); // Troca para a próxima palavra
            return 0; // Reinicia a contagem de letras
          }
          return next;
        });
      }, 110);
  
      return () => clearInterval(intervalId);
    }, [index, words]);

  return (
    <header className="banner" id="header">
      <div className="container banner-container">
        <article className="banner-left">
          <p className="banner-upper-title">Hi, I'm Wesley Santos</p>
          <h1 className="banner-title">
            Frontend<br></br>
            Developer<br></br>
            & <span>{words[index].substring(0, displayedLetters)}</span>
          </h1>
          <CTA />
        </article>

        <section className="banner-right">
          <div className="banner-vector">
            <img src={Vetor} alt="Vetor" />    
          </div>
          <Social />
        </section>

        <div className='banner-line-left'></div>
        <div className='banner-line-right'></div>
      </div>
    </header>
  )

}

export default Header