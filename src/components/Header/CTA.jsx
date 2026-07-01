import { heroContent } from '../../content/siteContent'

function CTA () {
  return (
    <div className="cta">
      <a href={heroContent.resumeLink} download className="btn">{heroContent.resumeLabel}</a>
    </div>
  )
}

export default CTA
