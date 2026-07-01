import CV from '../assets/CV.pdf'
import project1 from '../assets/form-project.png'
import project2 from '../assets/dark-mode-project.png'
import project3 from '../assets/calculator-project.png'
import project4 from '../assets/profile-card-project.png'
import { SiBootstrap, SiCss3, SiFigma, SiHtml5, SiJavascript, SiReact } from 'react-icons/si'

export const heroWords = ['Dreamer', 'Artist', 'Explorer', 'Creator']

export const heroContent = {
  greeting: "Hi, I'm Wesley Santos",
  title: ['Frontend', 'Developer', '&'],
  resumeLink: CV,
  resumeLabel: 'Download CV'
}

export const navItems = [
  { href: '#header', label: 'Home' },
  { href: '#about', label: 'About me' },
  { href: '#portfolio', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
]

export const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/wesleysantosdev/',
    label: 'LinkedIn'
  },
  {
    href: 'https://github.com/wesleysantosdev',
    label: 'GitHub'
  },
  {
    href: 'https://www.instagram.com/wes.santosb/',
    label: 'Instagram'
  }
]

export const aboutContent = {
  eyebrow: 'ABOUT ME',
  title: ['My passions', '& current stacks'],
  paragraphs: [
    "I'm a Frontend Developer with a background in Systems Analysis and Development and nearly two years of hands-on experience. My passion lies in crafting visually striking and highly functional websites and landing pages.",
    "My journey in web development began with a curiosity to explore creativity, since I also love drawing. Through dedicated learning and practical application, I've honed my skills in HTML, CSS, JavaScript and frontend frameworks to transform ideas into polished digital experiences.",
    "From responsive designs that adapt across devices to user experiences that support better conversions, I approach each project with enthusiasm and attention to detail.",
    "Beyond code, I'm passionate about collaboration, problem-solving and continuous growth. Whether I'm diving into a new project or refining an existing one, I enjoy challenges that expand my skills and push the boundaries of what's possible on the web.",
    "Let's build something great together!"
  ]
}

export const skills = [
  { label: 'HTML5', Icon: SiHtml5 },
  { label: 'CSS3', Icon: SiCss3 },
  { label: 'JavaScript', Icon: SiJavascript },
  { label: 'React', Icon: SiReact },
  { label: 'Figma', Icon: SiFigma },
  { label: 'Bootstrap', Icon: SiBootstrap }
]

export const portfolioContent = {
  eyebrow: 'PORTFOLIO',
  title: 'Featured projects',
  cta: {
    href: 'https://github.com/wesleysantosdev?tab=repositories',
    label: 'View All'
  }
}

export const portfolioProjects = [
  {
    title: 'Form with validation',
    description:
      'A project made from a Frontend Mentor challenge, where only the assets and design were provided. It includes validation for all user inputs.',
    href: 'https://wesleysantosdev.github.io/component-with-signup-form/',
    image: project1
  },
  {
    title: 'Login with dark mode',
    description: 'A simple login form with a dark/light mode switch, focused entirely on frontend behavior.',
    href: 'https://wesleysantosdev.github.io/login-dark-mode-switch/',
    image: project2
  },
  {
    title: 'Calculator',
    description: 'A simple and functional calculator able to execute the four main math operations.',
    href: 'https://wesleysantosdev.github.io/calculator/',
    image: project3
  },
  {
    title: 'Profile card',
    description: 'A simple card that expands on hover, revealing social links and a short description.',
    href: 'https://wesleysantosdev.github.io/animated-profile-card/',
    image: project4
  }
]

export const contactContent = {
  eyebrow: 'CONTACT ME',
  title: 'Get in touch with me',
  detailsTitle: 'Contact information',
  detailsDescription: "Feel free to contact me at any time and I'll answer you as soon as I can!",
  submitLabel: 'Send message'
}

export const contactLinks = [
  {
    type: 'email',
    label: 'Email',
    value: 'wesleysantosdev@outlook.com',
    href: 'mailto:wesleysantosdev@outlook.com'
  },
  {
    type: 'whatsapp',
    label: 'WhatsApp',
    value: '(11) 99314-2973',
    href: 'https://api.whatsapp.com/send?phone=5511993142973',
    external: true
  }
]
