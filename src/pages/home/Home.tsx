import { Link } from "react-router-dom"
import { ShotImg } from "../../components/Shot"
import { aliados, EMAIL, PHONE_DISPLAY, PHONE_TEL, programs, registro, shots, videos } from "../../content"

const rise = (ms: number) => ({ ["--d" as string]: `${ms}ms` })

export const Home = () => (
  <>
    <section className="hero" aria-label="Inicio">
      <div className="hero-field">
        <div className="hero-copy">
          <h1 className="display">
            <span>Apoyo</span> <span>sigue</span>
          </h1>
        </div>
        <figure className="hero-shot">
          <ShotImg shot={shots.medalla} priority />
        </figure>
      </div>
      <div className="hero-band">
        <p>Para heridos de la Fuerza Pública y del INPEC, y para sus familias.</p>
        <Link className="chunky" to="/donaciones#escribir">
          Escribir
        </Link>
      </div>
    </section>

    <section aria-labelledby="en-video">
      <div className="band" style={{ background: "var(--ink)", color: "var(--white)" }}>
        <h2 id="en-video" className="head" data-reveal="">
          En video
        </h2>
      </div>
      <div className="reels">
        {videos.map((video) => (
          <figure className="reel" key={video.src}>
            <video
              src={video.src}
              poster={video.poster}
              muted
              loop
              playsInline
              autoPlay
              controls
              aria-label={video.alt}
            />
            <figcaption>{video.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>

    <section className="allies" aria-labelledby="aliados">
      <h2 id="aliados" className="head" data-reveal="">
        Aliados
      </h2>
      <p className="lead" data-reveal="" style={rise(80)}>
        Policía Nacional, INPEC, Ejército Nacional, CASUR y el Ministerio de Educación.
      </p>
      <ul className="crest-board">
        {aliados.map((ally) => (
          <li className="crest" key={ally.name}>
            <img src={ally.src} alt="" width={ally.width} height={ally.height} />
            <span>{ally.name}</span>
          </li>
        ))}
      </ul>
    </section>

    <section className="stairs-section" aria-labelledby="la-fundacion">
      <div>
        <h2 id="la-fundacion" className="head">
          La fundación
        </h2>
        <p className="stairs">
          <span>Heridos del servicio,</span>
          <span>sus familias, y las de</span>
          <span>quienes murieron en el deber.</span>
        </p>
        <p style={{ marginTop: "18px" }}>
          <Link className="note-link" to="/nosotros">
            Misión, visión y a quién acompaña
          </Link>
        </p>
      </div>
      <div className="stair-photos">
        <ShotImg shot={shots.podio} />
        <ShotImg shot={shots.popayan} />
      </div>
    </section>

    <section aria-labelledby="programas">
      <div className="band">
        <h2 id="programas" className="head" data-reveal="">
          Seis programas
        </h2>
      </div>
      <div className="program-grid">
        {programs.map((program) => (
          <Link className="program-tile" key={program.id} to={`/nuestros-programas#${program.id}`}>
            <ShotImg shot={program.image} />
            <span>
              {program.lines[0]} {program.lines[1]}
            </span>
          </Link>
        ))}
      </div>
    </section>

    <section aria-labelledby="registro">
      <div className="band band-split" style={{ background: "var(--ink)", color: "var(--white)" }}>
        <h2 id="registro" className="head" data-reveal="">
          El registro
        </h2>
        <p className="lead" data-reveal="" style={{ ...rise(70), color: "var(--white)" }}>
          Entregas, deporte y acompañamiento en las fotos de la fundación.
        </p>
      </div>
      <div className="wall">
        {registro.map((shot) => (
          <figure className="print" key={shot.src}>
            <ShotImg shot={shot} />
            <figcaption>{shot.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>

    <section aria-labelledby="contacto">
      <div className="band">
        <h2 id="contacto" className="head">
          Contacto
        </h2>
      </div>
      <ContactRows />
    </section>

    <Link className="escriba" to="/donaciones#escribir">
      <p>El mensaje sale escrito. Solo falta enviarlo.</p>
      <svg className="arrow-corner" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 40 L40 8 M18 8 H40 V30" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
      <span className="giant">Escriba</span>
    </Link>
  </>
)

export function ContactRows() {
  return (
    <div className="rows">
      <p className="row">Funbienestar</p>
      <p className="row">Atención virtual</p>
      <p className="row">Colombia</p>
      <a className="row" href={`tel:${PHONE_TEL}`}>
        {PHONE_DISPLAY}
      </a>
      <a className="row row-mail" href={`mailto:${EMAIL}`}>
        {EMAIL}
      </a>
    </div>
  )
}
