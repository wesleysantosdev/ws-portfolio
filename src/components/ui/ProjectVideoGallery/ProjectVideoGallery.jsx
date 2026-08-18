import { useState } from 'react'

import { siteContent } from '../../../content/siteContent'
import styles from './ProjectVideoGallery.module.css'

export function ProjectVideoGallery({ labels = siteContent.gallery, projectTitle, videos }) {
  const [activeVideoId, setActiveVideoId] = useState(videos[0].id)
  const activeVideoIndex = videos.findIndex((video) => video.id === activeVideoId)
  const activeVideo = videos[activeVideoIndex]
  const hasMultipleVideos = videos.length > 1

  return (
    <figure className={styles.gallery} aria-labelledby={`${projectTitle}-video-title`}>
      <div className={styles.stage}>
        <div className={styles.stageHeader} aria-hidden="true">
          <span>{labels.demoLabel} / {projectTitle}</span>
          <span>{labels.runningLabel}</span>
        </div>
        <video
          key={activeVideo.id}
          className={styles.video}
          src={activeVideo.src}
          aria-describedby={`${projectTitle}-video-description`}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      </div>

      <figcaption className={styles.caption} aria-live="polite">
        <p className={styles.counter} aria-hidden="true">
          {String(activeVideoIndex + 1).padStart(2, '0')} / {String(videos.length).padStart(2, '0')}
        </p>
        <div className={styles.activeCopy}>
          <h2 id={`${projectTitle}-video-title`}>{activeVideo.title}</h2>
          <p id={`${projectTitle}-video-description`}>{activeVideo.description}</p>
        </div>
      </figcaption>

      {hasMultipleVideos ? (
        <div className={styles.sceneNavigation} role="group" aria-label={labels.scenesLabel}>
          {videos.map((video, index) => (
            <button
              className={styles.sceneButton}
              type="button"
              key={video.id}
              aria-pressed={video.id === activeVideo.id}
              onClick={() => setActiveVideoId(video.id)}
            >
              <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              {video.title}
            </button>
          ))}
        </div>
      ) : null}
    </figure>
  )
}
