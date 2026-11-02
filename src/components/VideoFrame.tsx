import { useState } from "react"

type Video = {
  src: string
  poster: string
  alt: string
}

export const VideoFrame = ({ video, caption }: { video: Video; caption?: string }) => {
  const [playing, setPlaying] = useState(false)

  return (
    <figure className="video-frame">
      <div className="video-stage">
        <video
          src={video.src}
          poster={video.poster}
          controls
          playsInline
          aria-label={video.alt}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        {playing ? null : (
          <button
            type="button"
            className="video-play"
            aria-label="Reproducir video"
            onClick={(event) => {
              const stage = event.currentTarget.parentElement
              const media = stage?.querySelector("video")
              if (media) void media.play()
            }}
          >
            <span className="video-play-icon" />
          </button>
        )}
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}
