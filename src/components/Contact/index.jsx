import { CiMail } from "react-icons/ci"
import { PiWhatsappLogoLight } from "react-icons/pi"
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
      <section className="contact-section" id="contact">     
        <div className="contact-title">
          <small>CONTACT ME</small>
          <h3>
            Get in touch with me
          </h3>
        </div>

        <div className="container contact-container">
          <div className="contact-options">
            <div className="options-title">
              <h4>Contact information</h4>
              <p>Feel free to contact me at any time and I’ll answer you as soon as I can!</p>
            </div>

            <div className="options-wrap">
              <CiMail className="options-icon"/>
                <a href="mailto:wesleysantosdev@outlook.com">wesleysantosdev@outlook.com</a>
            </div>

            <div className="options-wrap">
              <PiWhatsappLogoLight className="options-icon"/>
              <a href="https://api.whatsapp.com/send?phone=5511993142973" target="_blank">(11) 99314-2973 <BsArrowUpRight className="options-link-arrow"/></a>
            </div>
          </div>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea name="message" rows="7" placeholder="Message" required></textarea>
              <input type="submit" className="btn btn--alt" value="Mandar mensagem" />
            </form>
          </div>

          <div className='contact-line-left'></div>
          <div className='contact-line-right'></div>
        </div>
      </section>
    )
}

export default Contact