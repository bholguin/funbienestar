import { PageHero } from "../../components/PageHero"
import { ShotImg } from "../../components/Shot"
import { programs, shots } from "../../content"

export const NuestrosProgramas = () => (
  <>
    <PageHero
      lines={["Seis programas", "en marcha"]}
      standfirst="Deporte, retiro, rehabilitación, orientación y bienestar social."
      shot={shots.medalla}
    />
    {programs.map((program, index) =>
      program.image ? (
        <article
          id={program.id}
          key={program.id}
          className={index % 2 === 1 ? "chapter chapter--flip" : "chapter"}
        >
          <figure className="shutter" data-reveal="">
            <ShotImg shot={program.image} />
          </figure>
          <div className="chapter-copy">
            <h2 className="head">
              <span className="break">{program.lines[0]}</span>
              <span className="break">{program.lines[1]}</span>
            </h2>
            <p>{program.body}</p>
            <ul>
              {program.terms.map((term) => (
                <li key={term}>{term}</li>
              ))}
            </ul>
          </div>
        </article>
      ) : (
        <article id={program.id} key={program.id} className="chapter chapter--ink">
          <p className="statement" data-reveal="">
            {program.note}
          </p>
          <div className="chapter-copy" style={{ padding: 0 }}>
            <h2 className="head">
              <span className="break">{program.lines[0]}</span>
              <span className="break">{program.lines[1]}</span>
            </h2>
            <p>{program.body}</p>
            <ul>
              {program.terms.map((term) => (
                <li key={term}>{term}</li>
              ))}
            </ul>
          </div>
        </article>
      )
    )}
  </>
)
