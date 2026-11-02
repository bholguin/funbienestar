import { ShotImg } from "../../components/Shot"
import { motivos, programs, shots, wa } from "../../content"

const motivoDe = (id: string) => motivos.find((item) => item.id === (id === "patrocinio" ? "deporte" : "orientacion")) ?? motivos[0]

export const NuestrosProgramas = () => (
  <>
    <header className="page-head">
      <div className="wrap page-head-grid">
        <div>
          <h1>Seis programas</h1>
          <p>Deporte, retiro, rehabilitación, orientación y bienestar social.</p>
          <nav className="jump" aria-label="Programas">
            {programs.map((program) => (
              <a key={program.id} href={`#${program.id}`}>
                {program.lines[0]} {program.lines[1]}
              </a>
            ))}
          </nav>
        </div>
        <figure>
          <ShotImg shot={shots.medalla} priority />
          <figcaption>{shots.medalla.label}</figcaption>
        </figure>
      </div>
    </header>
    {programs.map((program, index) => {
      const motivo = motivoDe(program.id)
      return (
        <article className={index % 2 ? "band" : undefined} id={program.id} key={program.id}>
          <div className={index % 2 ? "wrap sheet sheet-flip" : "wrap sheet"}>
            <figure>
              <ShotImg shot={program.image} />
              <figcaption>{program.image.label}</figcaption>
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
              <a className="btn btn-red" href={wa(motivo.text)} target="_blank" rel="noreferrer">
                Escribir
              </a>
            </div>
          </div>
        </article>
      )
    })}
  </>
)
