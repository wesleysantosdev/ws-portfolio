import {MdOutlineAlternateEmail} from 'react-icons/md'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {BsArrowUpRight} from 'react-icons/bs'

import React, { useRef } from 'react'
import emailjs from 'emailjs-com'


import './styles.css'

function Contact () {
    const form = useRef()

    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs.sendForm('service_uzukwpp', 'template_3ahh9rq', form.current, 'WiNciNv3FQV4ymQs0')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })

        e.target.reset()
    }

    return (
      <section className="contact__section" id="contact">     
        <div className="contact__title">
          <small>Vamos conversar!</small>
          <h3>Contatos<strong>.</strong></h3>
        </div>

        <div className="container contact__container">
          <div className="contact__options">
            
            <div className="options__wrap">
              <MdOutlineAlternateEmail className="options__icon"/>
              <article className="options__link">
                <h3>Email</h3>
                <a href="mailto:wesleysantosdev@outlook.com">wesleysantosdev@outlook.com</a>
              </article>
            </div>

            <div className="options__wrap">
              <AiOutlineWhatsApp className="options__icon"/>
              <article className="options__link">
                <h3>Whatsapp</h3>
                <a href="https://api.whatsapp.com/send?phone=5511993142973" target="_blank">(11) 99314-2973 <BsArrowUpRight className="options__link-arrow"/></a>
              </article>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Seu nome" required />
            <input type="email" name="email" placeholder="Seu email" required />
            <textarea name="message" rows="7" placeholder="Sua mensagem" required></textarea>
            <input type="submit" className="btn btn--colored" value="Mandar mensagem" />
          </form>
        </div>
      </section>
    )
}

export default Contact