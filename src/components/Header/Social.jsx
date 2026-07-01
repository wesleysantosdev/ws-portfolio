import SocialLinks from '../ui/SocialLinks'
import { socialLinks } from '../../content/siteContent'

function Social (){
  return <SocialLinks className="banner-socials" iconClassName="socials-icons" links={socialLinks} />
}

export default Social 
