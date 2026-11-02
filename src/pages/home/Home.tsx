import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Motivos } from "../../components/Motivos"
import { ShotImg } from "../../components/Shot"
import {
  aliados,
  EMAIL,
  PDF,
  PHONE_DISPLAY,
  programs,
  shots,
  wa,
} from "../../content"

const delay = (ms: number) => ({ ["--d" as string]: `${ms}ms` })

export const Home = () => {
  const [lit, setLit] = useState(0)

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLit(-1)
      document.querySelectorAll("video").forEach((video) => {
        video.pause()
        video.removeAttribute("autoplay")
      })
      return
    }
    const timer = window.setInterval(() => {
      setLit((value) => (value + 1) % aliados.length)
    }, 2000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <>
      <section className="home-hero" aria-label="Inicio">
        <div className="masthead">
          <div className="cell cell-a">
            <ShotImg shot={shots.podio} priority />
          </div>
          <div className="cell tile-accent hide-sm cell-yellow" />
          <div className="cell cell-b">
            <ShotImg shot={shots.jamundi} priority />
          </div>
          <div className="cell tile-ink hide-sm cell-ink">
            <p>Colombia</p>
          </div>
          <div className="cell cell-video">
            <ShotImg shot={shots.bandera} />
          </div>
          <div className="cell tile-surface hide-sm cell-surface" />
          <div className="cell cell-c">
            <ShotImg shot={shots.popayan} />
          </div>
        </div>
        <div className="hero-copy">
          <p className="statement" data-load="" style={delay(420)}>
            Para heridos del servicio y sus familias.
          </p>
          <h1 className="display lines">
            <span className="line">
              <span data-line="" style={{ ["--i" as string]: 0 }}>
                El bienestar
              </span>
            </span>
            <span className="line">
              <span data-line="" style={{ ["--i" as string]: 1 }}>
                no se retira
              </span>
            </span>
          </h1>
        </div>
      </section>

      <section className="block" aria-labelledby="fundacion">
        <div className="axis">
          <h2 id="fundacion" className="head" data-reveal="">
            La fundación
          </h2>
          <p className="statement" data-reveal="" style={delay(80)}>
            Entidad privada, sin ánimo de lucro, con personería jurídica.
          </p>
        </div>
        <div className="quad">
          <p data-reveal="">
            <strong>Quién. </strong>
            Hombres y mujeres de las Fuerzas Militares, de la Policía y del INPEC que quedaron heridos o
            con una discapacidad adquirida. También sus familias, y las de quienes murieron cumpliendo
            su deber.
          </p>
          <p data-reveal="" style={delay(70)}>
            <strong>Qué. </strong>
            Concibe, promueve y ejecuta planes de bienestar: patrocinio deportivo, apoyo después del
            retiro, material de rehabilitación, orientación jurídica y psicológica, y bienestar social.
          </p>
          <p data-reveal="" style={delay(140)}>
            <strong>Dónde. </strong>
            El trabajo es en Colombia. La oficina física se está reubicando y la atención sigue por
            canales virtuales, con la misma validez.{" "}
            <a className="mark" href={PDF} target="_blank" rel="noreferrer">
              Leer el aviso de reubicación
            </a>
            .
          </p>
          <p data-reveal="" style={delay(210)}>
            <strong>Cómo. </strong>
            Por WhatsApp al {PHONE_DISPLAY} o al correo {EMAIL}.{" "}
            <a className="mark" href="/assets/video.mp4">
              Ver el registro de actividades
            </a>{" "}
            y{" "}
            <a className="mark" href="/assets/video-paralimpicos.mp4">
              el de deporte
            </a>
            .
          </p>
        </div>
        <video
          className="registro"
          poster={shots.medalla.src}
          muted
          playsInline
          loop
          autoPlay
          preload="metadata"
          aria-label="Registro en video del acompañamiento deportivo"
        >
          <source src="/assets/video-paralimpicos.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="block" aria-labelledby="mision">
        <div className="axis">
          <h2 id="mision" className="head" data-reveal="">
            <span className="break">Misión</span>
            <span className="break">y visión</span>
          </h2>
          <p className="statement" data-reveal="" style={delay(80)}>
            Protege la salud, la nutrición y la recreación, y abre caminos de inclusión social, educativa
            y económica.
          </p>
        </div>
        <div className="about-grid">
          <figure className="about-photo shutter" data-reveal="">
            <ShotImg shot={shots.bandera} />
            <figcaption className="about-note">
              Un acto con personal del Ejército, frente a la bandera de Colombia.
            </figcaption>
          </figure>
          <div className="about-tile" data-reveal="" style={delay(90)}>
            <p className="place">Colombia</p>
            <dl className="facts">
              <div>
                <dt>Atención</dt>
                <dd>Virtual, mientras se reubica la oficina</dd>
              </div>
              <div>
                <dt>Teléfono</dt>
                <dd>
                  <a href="tel:+573118270406">{PHONE_DISPLAY}</a>
                </dd>
              </div>
              <div>
                <dt>Correo</dt>
                <dd>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </dd>
              </div>
            </dl>
            <Link className="mark" to="/nosotros">
              Leer la misión completa
            </Link>
          </div>
        </div>
      </section>

      <section className="split" aria-labelledby="programas">
        <div className="split-lead">
          <h2 id="programas" className="head" data-reveal="">
            <span className="break">Seis formas</span>
            <span className="break">de acompañar</span>
          </h2>
          <div className="split-foot">
            <p data-reveal="" style={delay(80)}>
              Deporte, retiro, rehabilitación, orientación y bienestar social.
            </p>
            <Link className="mark" to="/nuestros-programas" data-reveal="" style={delay(140)}>
              Ver cada programa
            </Link>
          </div>
        </div>
        <div className="rows">
          {programs.map((program, index) => (
            <Link
              key={program.id}
              to={`/nuestros-programas#${program.id}`}
              data-reveal=""
              style={delay(index * 70)}
            >
              <h3>
                <span className="break">{program.lines[0]}</span>
                <span className="break">{program.lines[1]}</span>
              </h3>
              <p>{program.summary}</p>
              <ul>
                {program.terms.map((term) => (
                  <li key={term}>{term}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section className="triptych" aria-labelledby="registro">
        <div className="triptych-stage">
          <div className="triptych-copy">
            <h2 id="registro" className="head" data-reveal="">
              <span className="break">El trabajo</span>
              <span className="break">en imágenes</span>
            </h2>
            <p className="statement" data-reveal="" style={delay(80)}>
              Competencia, entrega de reconocimientos y acompañamiento en el terreno.
            </p>
          </div>
          <div className="triptych-row">
            <ShotImg shot={shots.reconocimiento} className="side" />
            <ShotImg shot={shots.medalla} className="center" />
            <ShotImg shot={shots.colombia} className="side" />
          </div>
        </div>
      </section>

      <section className="block names-block" aria-labelledby="aliados">
        <h2 id="aliados" className="head" data-reveal="">
          Trabaja junto a
        </h2>
        <p className="statement names" data-reveal="" style={delay(80)}>
          {aliados.map((name, index) => (
            <span key={name}>
              <span className={lit === -1 || lit === index ? "name is-on" : "name"}>{name}</span>
              {index < aliados.length - 1 ? ", " : "."}
            </span>
          ))}
        </p>
      </section>

      <section className="block contact" aria-labelledby="escribanos">
        <div>
          <h2 id="escribanos" className="head" data-reveal="">
            Escríbanos
          </h2>
          <p className="statement" data-reveal="" style={delay(80)}>
            La orientación, la donación y las alianzas llegan al mismo número.
          </p>
        </div>
        <div className="contact-photo shutter" data-reveal="">
          <ShotImg shot={shots.bonoOficina} />
        </div>
        <div className="contact-links" data-reveal="" style={delay(90)}>
          <p>¿Por qué escribe?</p>
          <a href={wa("Hola, Funbienestar. Quiero información.")} target="_blank" rel="noreferrer">
            WhatsApp {PHONE_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <p className="small">Colombia. Respondemos por estos canales.</p>
        </div>
      </section>

      <section aria-labelledby="aportar-titulo">
        <div className="strip">
          <ShotImg shot={shots.bonoComedor} />
          <ShotImg shot={shots.jamundi} />
          <ShotImg shot={shots.bonoCasa} />
        </div>
        <div className="cta-band" id="aportar">
          <div>
            <h2 id="aportar-titulo" className="head" data-reveal="">
              <span className="break">Elija el mensaje</span>
              <span className="break">y escríbanos</span>
            </h2>
            <p data-reveal="" style={delay(80)}>
              Tiempo, trabajo o recursos. El mensaje sale listo por{" "}
              <a className="mark" href={wa("Hola, Funbienestar. Quiero donar y saber cómo puedo aportar.")}>
                WhatsApp
              </a>
              .
            </p>
          </div>
          <Motivos />
          <div className="cta-portrait">
            <ShotImg shot={shots.popayan} />
          </div>
        </div>
      </section>
    </>
  )
}
