import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = 'service_uzukwpp'
const EMAILJS_TEMPLATE_ID = 'template_3ahh9rq'
const EMAILJS_PUBLIC_KEY = 'WiNciNv3FQV4ymQs0'

export function sendContactEmail(formElement) {
  return emailjs.sendForm(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    formElement,
    EMAILJS_PUBLIC_KEY
  )
}
