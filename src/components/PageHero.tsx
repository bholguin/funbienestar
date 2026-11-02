import { Shot } from "../content"
import { ShotImg } from "./Shot"

type Props = {
  lines: string[]
  standfirst: string
  shot: Shot
}

export const PageHero = ({ lines, standfirst, shot }: Props) => (
  <header className="page-hero">
    <div className="page-hero-photo">
      <ShotImg shot={shot} priority />
    </div>
    <div className="hero-copy">
      <p className="statement" data-load="" style={{ ["--d" as string]: "420ms" }}>
        {standfirst}
      </p>
      <h1 className="display lines">
        {lines.map((line, index) => (
          <span className="line" key={line}>
            <span data-line="" style={{ ["--i" as string]: index }}>
              {line}
            </span>
          </span>
        ))}
      </h1>
    </div>
  </header>
)
