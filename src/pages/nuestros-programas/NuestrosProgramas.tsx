import { ShotImg } from "../../components/Shot"
import { programs, shots } from "../../content"

export const NuestrosProgramas = () => (
  <>
    <header className="page-head">
      <div className="wrap page-head-grid">
        <div>
          <h1>Seis programas</h1>
          <p>Deporte, retiro, rehabilitación, orientación y bienestar social.</p>
        </div>
        <figure>
          <ShotImg shot={shots.medalla} priority />
        </figure>
      </div>
    </header>
    <div className="wrap">
      {programs.map((program) => (
        <article className="sheet" id={program.id} key={program.id}>
          <figure>
            <ShotImg shot={program.image} />
          </figure>
          <div>
            <h2>
              {program.lines[0]} {program.lines[1]}
            </h2>
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
