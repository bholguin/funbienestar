import { Motivos } from "../../components/Motivos"
import { ShotImg } from "../../components/Shot"
import { shots } from "../../content"

const entregas = [
  shots.bonoCasa,
  shots.popayan,
  shots.bonoOficina,
  shots.reconocimiento,
  shots.sillaInpec,
  shots.balones,
  shots.camara,
  shots.tresBonos,
]

export const Donaciones = () => (
  <>
    <header className="page-shout">
      <h1 className="display">
        <span>Escriba</span> <span>y aporte</span>
      </h1>
      <p>El aporte se acuerda por WhatsApp: tiempo, trabajo o recursos.</p>
    </header>

    <section className="split paper" id="escribir" aria-labelledby="como-aportar">
      <div>
        <h2 id="como-aportar" className="head">
          Cómo aportar
        </h2>
        <p className="body" style={{ marginTop: "16px" }}>
          Apoyamos la inclusión laboral formal de los beneficiarios con discapacidad y de sus familias.
          Acompañamos a nuestros héroes y a las empresas que quieran sumarse, y construimos alianzas
          para abrir oportunidades de trabajo.
        </p>
        <p className="body" style={{ marginTop: "12px" }}>
          Elija el motivo. El mensaje sale escrito y solo falta enviarlo.
        </p>
      </div>
      <figure>
        <ShotImg shot={shots.bonoComedor} />
      </figure>
    </section>

    <Motivos />

    <section aria-labelledby="entregas">
      <div className="band" style={{ background: "var(--ink)", color: "var(--white)" }}>
        <h2 id="entregas" className="head">
          Entregas
        </h2>
      </div>
      <div className="wall">
        {entregas.map((shot) => (
          <figure className="print" key={shot.src}>
            <ShotImg shot={shot} />
            <figcaption>{shot.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  </>
)
