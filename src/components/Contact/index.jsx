import { CiMail } from "react-icons/ci"
import { PiWhatsappLogoLight } from "react-icons/pi"
import { BsArrowUpRight } from 'react-icons/bs'

import { useRef, useState } from 'react'
import ContactField from '../ui/ContactField'
import { contactContent, contactLinks } from '../../content/siteContent'
import { sendContactEmail } from '../../lib/sendContactEmail'

import './styles.css'

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  message: ''
}

function Contact () {
    const form = useRef(null)
    const [formValues, setFormValues] = useState(INITIAL_FORM_STATE)
    const [submitState, setSubmitState] = useState('idle')

    const handleChange = (event) => {
      const { name, value } = event.target

      setFormValues((currentValues) => ({
        ...currentValues,
        [name]: value
      }))
    }

    const handleSubmit = async (event) => {
      event.preventDefault()
      setSubmitState('sending')

      try {
        await sendContactEmail(form.current)
        setFormValues(INITIAL_FORM_STATE)
        setSubmitState('success')
      } catch (error) {
        setSubmitState('error')
      }
    }

    return (
      <section className="contact-section" id="contact">     
        <div className="contact-title">
          <small>{contactContent.eyebrow}</small>
          <h3>{contactContent.title}</h3>
        </div>

        <div className="container contact-container">
          <div className="contact-options">
            <div className="options-title">
              <h4>{contactContent.detailsTitle}</h4>
              <p>{contactContent.detailsDescription}</p>
            </div>

            {contactLinks.map((contactLink) => (
              <div className="options-wrap" key={contactLink.label}>
                {contactLink.type === 'email' ? (
                  <CiMail className="options-icon" aria-hidden="true" />
                ) : (
                  <PiWhatsappLogoLight className="options-icon" aria-hidden="true" />
                )}
                <a
                  href={contactLink.href}
                  target={contactLink.external ? '_blank' : undefined}
                  rel={contactLink.external ? 'noreferrer' : undefined}
                >
                  {contactLink.value}
                  {contactLink.external ? <BsArrowUpRight className="options-link-arrow" aria-hidden="true" /> : null}
                </a>
              </div>
            ))}
          </div>

          <div className="contact-form">
            <form ref={form} onSubmit={handleSubmit}>
              <ContactField
                id="name"
                type="text"
                name="name"
                label="Name"
                value={formValues.name}
                onChange={handleChange}
              />

              <ContactField
                id="email"
                type="email"
                name="email"
                label="Email"
                value={formValues.email}
                onChange={handleChange}
              />

              <ContactField
                id="message"
                as="textarea"
                name="message"
                label="Message"
                value={formValues.message}
                onChange={handleChange}
                rows={7}
              />
              
              <input
                type="submit"
                className="btn btn--alt"
                value={submitState === 'sending' ? 'Sending...' : contactContent.submitLabel}
              />
              <p className="form-status" role="status">
                {submitState === 'success' ? 'Your message was sent successfully.' : null}
                {submitState === 'error' ? 'Something went wrong. Please try again.' : null}
              </p>
            </form>
          </div>

          <div className='contact-line-left'></div>
          <div className='contact-line-right'></div>
        </div>
      </section>
    )
}

export default Contact
