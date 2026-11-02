import { Motivos } from "../../components/Motivos"
import { ShotImg } from "../../components/Shot"
import { shots } from "../../content"

const entregas = [shots.bonoCasa, shots.popayan, shots.bonoOficina, shots.reconocimiento, shots.sillaInpec, shots.balones, shots.camara, shots.tresBonos]

export const Donaciones = () => (
  <>
    <header className="page-head">
      <div className="wrap page-head-grid">
        <div>
          <h1>Donar empieza por escribir</h1>
          <p>El aporte se acuerda por WhatsApp: tiempo, trabajo o recursos.</p>
        </div>
        <figure>
          <ShotImg shot={shots.bonoComedor} priority />
          <figcaption>{shots.bonoComedor.label}</figcaption>
        </figure>
      </div>
    </header>
    <section className="prose" aria-labelledby="como-aportar">
      <div className="wrap split">
        <div>
          <h2 id="como-aportar">Cómo aportar</h2>
          <p>
            Apoyamos la inclusión laboral formal de los beneficiarios con discapacidad y de sus familias.
            Acompañamos a nuestros héroes y a las empresas que quieran sumarse, y construimos alianzas
            para abrir oportunidades de trabajo.
          </p>
          <p>Elija el motivo. El mensaje sale escrito y solo falta enviarlo.</p>
        </div>
        <figure>
          <ShotImg shot={shots.bonoPendón} />
          <figcaption>{shots.bonoPendón.label}</figcaption>
        </figure>
      </div>
    </section>
    <section className="section band" id="escribir" aria-labelledby="motivos">
      <div className="wrap">
        <h2 id="motivos">Elija el motivo</h2>
        <p className="lede">El mensaje sale escrito. Solo falta enviarlo por WhatsApp.</p>
        <Motivos />
      </div>
    </section>
    <section className="section" aria-labelledby="entregas">
      <div className="wrap">
        <h2 id="entregas">Entregas</h2>
        <div className="album">
          {entregas.map((shot) => (
            <figure key={shot.src}>
              <ShotImg shot={shot} />
              <figcaption>{shot.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  </>
)
