import { ShotImg } from "../../components/Shot"
import { programs } from "../../content"

export const NuestrosProgramas = () => (
  <>
    <header className="page-shout">
      <h1 className="display">
        <span>Seis</span> <span>programas</span>
      </h1>
      <p>Deporte, retiro, rehabilitación, orientación y bienestar social.</p>
    </header>
    <div className="sheet-stack">
      {programs.map((program) => (
        <article className="sheet" id={program.id} key={program.id}>
          <h2 className="sheet-name">
            {program.lines[0]} {program.lines[1]}
          </h2>
          <figure>
            <ShotImg shot={program.image} />
          </figure>
          <div className="sheet-copy">
            <p>{program.body}</p>
            {program.note ? <p>{program.note}</p> : null}
            <ul className="terms">
              {program.terms.map((term) => (
                <li key={term}>{term}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </>
)
