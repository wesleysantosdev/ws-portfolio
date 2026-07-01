import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const iconByLabel = {
  LinkedIn: BsLinkedin,
  GitHub: BsGithub,
  Instagram: BsInstagram
}

function SocialLinks({ className, iconClassName, links }) {
  return (
    <nav className={className} aria-label="Social links">
      {links.map((link) => {
        const Icon = iconByLabel[link.label]

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
          >
            <Icon className={iconClassName} />
          </a>
        )
      })}
    </nav>
  )
}

export default SocialLinks
