import { useRef } from 'react'

function ProjectMedia({ poster, video, description }) {
  const videoRef = useRef(null)

  if (!video) return <img src={poster} alt={description} loading="lazy" />

  function playPreview() {
    videoRef.current?.play()
  }

  return (
    <div className="progressive-media">
      <video
        ref={videoRef}
        src={video}
        poster={poster}
        preload="none"
        muted
        loop
        playsInline
        aria-label={description}
      />
      <button type="button" className="media-play" onClick={playPreview} aria-label="Reproduzir prévia">
        <span aria-hidden="true">▶</span>
      </button>
    </div>
  )
}

export default ProjectMedia
