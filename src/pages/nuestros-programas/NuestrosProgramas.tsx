import { ShotImg } from "../../components/Shot"
import { motivos, programs, shots, wa } from "../../content"

const motivoDe = (id: string) => motivos.find((item) => item.id === (id === "patrocinio" ? "deporte" : "orientacion")) ?? motivos[0]

export const NuestrosProgramas = () => (
  <>
    <header className="page-banner portrait">
      <ShotImg shot={shots.medalla} priority />
      <div className="page-banner-scrim" />
      <div className="wrap page-banner-copy">
        <h1>Seis programas</h1>
        <p>
          Patrocinio deportivo, retiro, rehabilitación, orientación jurídica, orientación psicológica y
          bienestar social. Cada uno se pide por WhatsApp.
        </p>
      </div>
    </header>
    {programs.map((program, index) => {
      const motivo = motivoDe(program.id)
      return (
        <article className={index % 2 ? "band" : undefined} id={program.id} key={program.id}>
          <div className={index % 2 ? "wrap sheet sheet-flip" : "wrap sheet"}>
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
