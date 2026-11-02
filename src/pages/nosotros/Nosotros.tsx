import { Link } from "react-router-dom"
import { ShotImg } from "../../components/Shot"
import { shots } from "../../content"

export const Nosotros = () => (
  <>
    <header className="page-banner">
      <ShotImg shot={shots.bandera} priority />
      <div className="page-banner-scrim" />
      <div className="wrap page-banner-copy">
        <h1>Quiénes somos</h1>
        <p>Fundación Nacional de Bienestar Social. Entidad privada, sin ánimo de lucro, con personería jurídica.</p>
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
          <p>
            Ese cuidado llega, en el trabajo de la fundación, a hombres y mujeres de las Fuerzas Militares,
            de la Policía y del INPEC, y a sus familias.
          </p>
        </div>
        <figure>
          <ShotImg shot={shots.familia} />
        </figure>
      </div>
    </section>
    <section className="prose band">
      <div className="wrap split flip">
        <div>
          <h2 id="vision">Visión</h2>
          <p>
            Ser una institución líder que promueva el trabajo digno por medio de la educación y la mejora
            en la calidad de vida de las personas beneficiarias, para contribuir al desarrollo de Colombia
            con profesionales que presten sus servicios con amor, pasión y honestidad.
          </p>
          <p>
            Por eso la educación y una mejor calidad de vida están en el centro de lo que se ofrece a los
            beneficiarios.
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
            Desde hace años la fundación trabaja con hombres y mujeres de las Fuerzas Militares, de la
            Policía y del INPEC que resultaron heridos o adquirieron una discapacidad, con sus familias y
            con las familias de quienes fallecieron en cumplimiento del deber. Ese acompañamiento pasa por
            los seis programas: deporte, retiro, rehabilitación, orientación jurídica, orientación
            psicológica y bienestar social.
          </p>
        </div>
        <figure>
          <ShotImg shot={shots.sillaPolicia} />
        </figure>
      </div>
    </section>
    <section className="next-step">
      <div className="wrap">
        <h2>Seis programas, y un aporte que se acuerda por WhatsApp</h2>
        <p>
          Los programas están abiertos. Si quiere aportar tiempo, trabajo o recursos, el acuerdo se hace
          por WhatsApp. En esta página no hay un pago en línea.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-blue" to="/nuestros-programas">
            Ver programas
          </Link>
          <Link className="btn btn-red" to="/donaciones#escribir">
            Donar
          </Link>
        </div>
      </div>
    </section>
  </>
)
