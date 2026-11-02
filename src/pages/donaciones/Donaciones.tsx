import { Motivos } from "../../components/Motivos"
import { PageHero } from "../../components/PageHero"
import { ShotImg } from "../../components/Shot"
import { shots } from "../../content"

export const Donaciones = () => (
  <>
    <PageHero
      lines={["Donar empieza", "por escribir"]}
      standfirst="El aporte se acuerda por WhatsApp: tiempo, trabajo o recursos."
      shot={shots.bonoComedor}
    />
    <section className="block" id="escribir" aria-labelledby="como-donar">
      <div className="axis">
        <h2 id="como-donar" className="head" data-reveal="">
          <span className="break">Cómo</span>
          <span className="break">aportar</span>
        </h2>
        <div data-reveal="" style={{ ["--d" as string]: "80ms" }}>
          <p className="body">
            Apoyamos la inclusión laboral formal de los beneficiarios con discapacidad y de sus
            familias. Acompañamos a nuestros héroes y a las empresas que quieran sumarse, y construimos
            alianzas para abrir oportunidades de trabajo.
          </p>
          <p className="body" style={{ marginTop: "1rem" }}>
            Elija el motivo. El mensaje sale escrito y solo falta enviarlo.
          </p>
        </div>
      </div>
      <div style={{ marginTop: "2.5rem" }}>
        <Motivos />
      </div>
    </section>
    <section aria-labelledby="entregas">
      <div className="block" style={{ paddingBottom: "1.5rem" }}>
        <h2 id="entregas" className="head" data-reveal="">
          <span className="break">Entregas</span>
          <span className="break">y acompañamiento</span>
        </h2>
      </div>
      <div className="mosaic">
        <figure>
          <ShotImg shot={shots.bonoCasa} />
        </figure>
        <figure>
          <ShotImg shot={shots.popayan} />
        </figure>
        <figure>
          <ShotImg shot={shots.bonoOficina} />
        </figure>
        <figure>
          <ShotImg shot={shots.reconocimiento} />
        </figure>
      </div>
    </section>
  </>
)
