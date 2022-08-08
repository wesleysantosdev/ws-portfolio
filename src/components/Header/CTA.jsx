import CV from '../../assets/CV.pdf'

function CTA () {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Download CV</a>
    </div>
  )
}

export default CTA