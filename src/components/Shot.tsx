import { Shot } from "../content"

type Props = {
  shot: Shot
  priority?: boolean
  className?: string
}

export const ShotImg = ({ shot, priority = false, className }: Props) => (
  <img
    className={className ? `photo ${className}` : "photo"}
    src={shot.src}
    alt={shot.alt}
    width={shot.width}
    height={shot.height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
  />
)
