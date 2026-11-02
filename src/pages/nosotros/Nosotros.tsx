import { PageHero } from "../../components/PageHero"
import { ShotImg } from "../../components/Shot"
import { shots } from "../../content"

export const Nosotros = () => (
  <>
    <PageHero
      lines={["Quiénes somos"]}
      standfirst="Entidad privada, sin ánimo de lucro, con personería jurídica."
      shot={shots.bandera}
    />
    <section className="block" aria-labelledby="mision-completa">
      <div className="axis">
        <h2 id="mision-completa" className="head" data-reveal="">
          Misión
        </h2>
        <p className="body" data-reveal="" style={{ ["--d" as string]: "80ms" }}>
          Somos una institución sin ánimo de lucro que promueve la protección en necesidades básicas de
          salud, nutrición y recreación de la primera infancia, los adultos mayores y las personas en
          situación de discapacidad. También fomentamos programas y proyectos de inclusión social,
          educativa y económica.
        </p>
      </div>
    </section>
    <figure className="page-hero-photo shutter" data-reveal="">
      <ShotImg shot={shots.popayan} />
    </figure>
    <section className="block" aria-labelledby="vision">
      <div className="axis">
        <h2 id="vision" className="head" data-reveal="">
          Visión
        </h2>
        <p className="body" data-reveal="" style={{ ["--d" as string]: "80ms" }}>
          Ser una institución líder que promueva el trabajo digno por medio de la educación y la mejora
          en la calidad de vida de las personas beneficiarias, para contribuir al desarrollo de Colombia
          con profesionales que presten sus servicios con amor, pasión y honestidad.
        </p>
      </div>
    </section>
    <section className="block" aria-labelledby="a-quienes">
      <div className="axis">
        <h2 id="a-quienes" className="head" data-reveal="">
          <span className="break">A quién</span>
          <span className="break">acompaña</span>
        </h2>
        <p className="body" data-reveal="" style={{ ["--d" as string]: "80ms" }}>
          Desde hace años trabaja con hombres y mujeres de las Fuerzas Militares, de la Policía y del
          INPEC heridos o con discapacidad adquirida, con sus familias y con las familias de quienes
          fallecieron en cumplimiento del deber.
        </p>
      </div>
    </section>
    <div className="mosaic">
      <figure>
        <ShotImg shot={shots.medalla} />
      </figure>
      <figure>
        <ShotImg shot={shots.jamundi} />
      </figure>
      <figure>
        <ShotImg shot={shots.bonoCasa} />
      </figure>
    </div>
  </>
)
