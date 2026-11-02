import { ShotImg } from "../../components/Shot"
import { shots } from "../../content"

export const Nosotros = () => (
  <>
    <header className="page-hero">
      <ShotImg shot={shots.bandera} priority />
      <div className="hero-scrim" />
      <div className="wrap">
        <h1>Quiénes somos</h1>
        <p>Entidad privada, sin ánimo de lucro, con personería jurídica.</p>
      </div>
    </header>
    <section className="prose">
      <div className="wrap split">
        <div>
          <h2 id="mision">Misión</h2>
          <p>
            Somos una institución sin ánimo de lucro que promueve la protección en necesidades básicas de
            salud, nutrición y recreación de la primera infancia, los adultos mayores y las personas en
            situación de discapacidad. También fomentamos programas y proyectos de inclusión social,
            educativa y económica.
          </p>
        </div>
        <figure>
          <ShotImg shot={shots.familia} />
        </figure>
      </div>
    </section>
    <section className="prose">
      <div className="wrap split flip">
        <div>
          <h2 id="vision">Visión</h2>
          <p>
            Ser una institución líder que promueva el trabajo digno por medio de la educación y la mejora
            en la calidad de vida de las personas beneficiarias, para contribuir al desarrollo de Colombia
            con profesionales que presten sus servicios con amor, pasión y honestidad.
          </p>
        </div>
        <figure>
          <ShotImg shot={shots.jamundi} />
        </figure>
      </div>
    </section>
    <section className="prose">
      <div className="wrap split">
        <div>
          <h2 id="a-quienes">A quién acompaña</h2>
          <p>
            Desde hace años trabaja con hombres y mujeres de las Fuerzas Militares, de la Policía y del
            INPEC heridos o con discapacidad adquirida, con sus familias y con las familias de quienes
            fallecieron en cumplimiento del deber.
          </p>
        </div>
        <figure>
          <ShotImg shot={shots.sillaPolicia} />
        </figure>
      </div>
    </section>
  </>
)
