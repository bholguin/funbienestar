import { ShotImg } from "../../components/Shot"
import { shots } from "../../content"

export const Nosotros = () => (
  <>
    <header className="page-shout">
      <h1 className="display">
        <span>Quiénes</span> <span>somos</span>
      </h1>
      <p>Entidad privada, sin ánimo de lucro, con personería jurídica.</p>
    </header>

    <section className="split red" aria-labelledby="mision">
      <div>
        <h2 id="mision" className="head">
          Misión
        </h2>
        <p className="body" style={{ marginTop: "16px" }}>
          Somos una institución sin ánimo de lucro que promueve la protección en necesidades básicas de
          salud, nutrición y recreación de la primera infancia, los adultos mayores y las personas en
          situación de discapacidad. También fomentamos programas y proyectos de inclusión social,
          educativa y económica.
        </p>
      </div>
      <figure>
        <ShotImg shot={shots.familia} />
      </figure>
    </section>

    <section className="split blue" aria-labelledby="vision">
      <figure>
        <ShotImg shot={shots.bandera} />
      </figure>
      <div>
        <h2 id="vision" className="head">
          Visión
        </h2>
        <p className="body" style={{ marginTop: "16px" }}>
          Ser una institución líder que promueva el trabajo digno por medio de la educación y la mejora
          en la calidad de vida de las personas beneficiarias, para contribuir al desarrollo de Colombia
          con profesionales que presten sus servicios con amor, pasión y honestidad.
        </p>
      </div>
    </section>

    <section className="split deep" aria-labelledby="a-quienes">
      <div>
        <h2 id="a-quienes" className="head">
          <span className="break">A quién</span>
          <span className="break">acompaña</span>
        </h2>
        <p className="body" style={{ marginTop: "16px" }}>
          Desde hace años trabaja con hombres y mujeres de las Fuerzas Militares, de la Policía y del
          INPEC heridos o con discapacidad adquirida, con sus familias y con las familias de quienes
          fallecieron en cumplimiento del deber.
        </p>
      </div>
      <figure>
        <ShotImg shot={shots.sillaPolicia} />
      </figure>
    </section>

    <div className="wall">
      <figure className="print">
        <ShotImg shot={shots.medalla} />
        <figcaption>{shots.medalla.label}</figcaption>
      </figure>
      <figure className="print">
        <ShotImg shot={shots.jamundi} />
        <figcaption>{shots.jamundi.label}</figcaption>
      </figure>
      <figure className="print">
        <ShotImg shot={shots.popayan} />
        <figcaption>{shots.popayan.label}</figcaption>
      </figure>
      <figure className="print">
        <ShotImg shot={shots.colombia} />
        <figcaption>{shots.colombia.label}</figcaption>
      </figure>
    </div>
  </>
)
