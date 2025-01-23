import { CiMail } from "react-icons/ci"
import { PiWhatsappLogoLight } from "react-icons/pi"
import { BsArrowUpRight } from 'react-icons/bs'

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


import './styles.css'

function Contact () {
    const form = useRef()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

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
              <div class="form-group">
                <input                  
                  type="text" 
                  name="name" 
                  className={`form-input ${name ? 'has-content' : ''}`} 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
                <label for="name" class="form-label">Name</label>
              </div>

              <div class="form-group">
                <input 
                  type="email" 
                  name="email" 
                  className={`form-input ${email ? 'has-content' : ''}`} 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
                <label for="email" class="form-label" >Email</label>
              </div>

              <div class="form-group">
                <textarea 
                  name="message" 
                  rows="7"                 
                  className={`form-input ${message ? 'has-content' : ''}`} 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  required 
                ></textarea>
                <label for="message" class="form-label">Message</label>
              </div>
              
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