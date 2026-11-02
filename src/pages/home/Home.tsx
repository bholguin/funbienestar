import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ShotImg } from "../../components/Shot"
import { VideoFrame } from "../../components/VideoFrame"
import { aliados, motivos, programs, registro, shots, videos, wa } from "../../content"

const slides = [shots.podio, shots.popayan, shots.familia, shots.medalla]

export const Home = () => {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce || paused) return
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % slides.length)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [paused])

  return (
    <>
      <section className="hero" aria-label="Inicio">
        {slides.map((shot, shotIndex) => (
          <div className="hero-slide" key={shot.src} hidden={shotIndex !== index}>
            <ShotImg shot={shot} priority={shotIndex === 0} />
          </div>
        ))}
        <div className="hero-scrim" />
        <div className="hero-copy">
          <h1>
            Acompañamos
            <br />
            a quien sirve
          </h1>
          <p>Fuerzas Militares, Policía e INPEC, y sus familias.</p>
          <div className="hero-actions">
            <Link className="btn btn-blue" to="/nuestros-programas">
              Ver programas
            </Link>
            <Link className="btn btn-red" to="/donaciones#escribir">
              Donar
            </Link>
          </div>
        </div>
        <div className="hero-controls">
          <button type="button" onClick={() => setIndex((value) => (value - 1 + slides.length) % slides.length)} aria-label="Foto anterior">
            ←
          </button>
          {slides.map((shot, shotIndex) => (
            <button
              key={shot.src}
              type="button"
              aria-label={shot.label}
              aria-current={shotIndex === index ? "true" : undefined}
              onClick={() => setIndex(shotIndex)}
            >
              {shotIndex + 1}
            </button>
          ))}
          <button type="button" onClick={() => setIndex((value) => (value + 1) % slides.length)} aria-label="Foto siguiente">
            →
          </button>
          <button type="button" onClick={() => setPaused((value) => !value)} aria-pressed={paused}>
            {paused ? "Seguir" : "Pausa"}
          </button>
        </div>
      </section>

      <div className="panel">
        <div className="wrap center">
          <h2>Fundación Nacional de Bienestar Social</h2>
          <p className="lede">
            Entidad privada, sin ánimo de lucro, con personería jurídica. Acompaña a hombres y
            mujeres de las Fuerzas Militares, de la Policía y del INPEC heridos o con discapacidad
            adquirida, a sus familias y a las familias de quienes murieron cumpliendo el deber.
          </p>
          <VideoFrame video={videos[0]} caption={videos[0].label} />
          <div className="facts">
            <p className="fact">
              <strong>6</strong>
              <span>programas, del patrocinio deportivo a la orientación</span>
            </p>
            <p className="fact">
              <strong>{aliados.length}</strong>
              <span>aliados institucionales en Colombia</span>
            </p>
            <p className="fact">
              <strong>WhatsApp</strong>
              <span>para pedir orientación, donar o proponer una alianza</span>
            </p>
          </div>
        </div>
      </div>

      <section className="section" aria-labelledby="programas">
        <div className="wrap">
          <h2 id="programas">Seis programas</h2>
          <p className="lede">
            Patrocinio deportivo, apoyo en el retiro, material de rehabilitación, orientación jurídica y
            psicológica, y bienestar social.
          </p>
          <div className="cards">
            {programs.map((program) => (
              <Link className="card" key={program.id} to={`/nuestros-programas#${program.id}`}>
                <ShotImg shot={program.image} />
                <div>
                  <h3>
                    {program.lines[0]} {program.lines[1]}
                  </h3>
                  <p>{program.summary}</p>
                  <em>Leer más</em>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section mist" aria-labelledby="aliados">
        <div className="wrap">
          <h2 id="aliados">Aliados</h2>
          <p className="lede">
            La fundación trabaja junto a la Policía Nacional, el INPEC, el Ejército Nacional, CASUR y el
            Ministerio de Educación.
          </p>
        </div>
        <div className="ally-marquee">
          <ul className="ally-track">
            {[0, 1].map((copy) =>
              aliados.map((ally) => (
                <li className="crest" key={`${ally.name}-${copy}`} aria-hidden={copy === 1 || undefined}>
                  <img src={ally.src} alt="" width={ally.width} height={ally.height} />
                  <span>{ally.name}</span>
                </li>
              )),
            )}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="sumarse">
        <div className="wrap">
          <h2 id="sumarse">Cómo sumarse</h2>
          <p className="lede">
            Orientación, una donación o una alianza laboral. El mensaje sale escrito y solo falta enviarlo
            por WhatsApp.
          </p>
          <div className="help">
            {motivos.slice(0, 3).map((item) => (
              <article key={item.id}>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
                <a className="btn btn-red" href={wa(item.text)} target="_blank" rel="noreferrer">
                  Escribir
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section mist" aria-labelledby="registro">
        <div className="wrap">
          <h2 id="registro">El registro</h2>
          <p className="lede">
            Así se ve el trabajo: entregas, deporte y acompañamiento, en las fotos y los videos de la
            fundación.
          </p>
          <VideoFrame video={videos[1]} />
          <div className="album" style={{ marginTop: 18 }}>
            {registro.map((shot) => (
              <figure key={shot.src}>
                <ShotImg shot={shot} />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
