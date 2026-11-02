import { Link } from "react-router-dom"
import { EMAIL, PDF, PHONE_DISPLAY, PHONE_TEL, wa } from "../../content"

export const Footer = () => (
  <footer className="site-footer">
    <div className="footer-top">
      <div>
        <h2 className="head">
          Seguimos
          <br />
          en línea
        </h2>
        <p className="body" style={{ marginTop: "16px", color: "var(--white)" }}>
          Mientras se reubica la oficina física, la fundación sigue prestando sus servicios de manera
          legal y válida por canales virtuales.
        </p>
        <p style={{ marginTop: "14px" }}>
          <a className="chunky" href={PDF} target="_blank" rel="noreferrer">
            Leer el aviso
          </a>
        </p>
      </div>
      <nav className="footer-links" aria-label="Pie">
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/nuestros-programas">Programas</Link>
        <Link to="/donaciones">Donaciones</Link>
        <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <a href={wa("Hola, Funbienestar. Quiero información.")} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </nav>
    </div>
    <div className="footer-legal">
      <span>Fundación Nacional de Bienestar Social</span>
      <span>Colombia</span>
    </div>
    <p className="wordmark-crop">Funbienestar</p>
  </footer>
)
