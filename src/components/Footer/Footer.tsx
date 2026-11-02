import { Link } from "react-router-dom"
import { EMAIL, PDF, PHONE_DISPLAY, PHONE_TEL, wa } from "../../content"

export const Footer = () => (
  <footer className="site-footer">
    <div className="footer-top">
      <div>
        <h2 className="head">
          <span className="break">Atención</span>
          <span className="break">virtual</span>
        </h2>
        <p>
          Mientras se reubica la oficina física, la fundación sigue prestando sus servicios de manera
          legal y válida por canales virtuales.
        </p>
        <p>
          <a href={PDF} target="_blank" rel="noreferrer">
            Leer el aviso de reubicación
          </a>
        </p>
      </div>
      <a href="#top">Volver arriba</a>
    </div>
    <a className="footer-phone" href={`tel:${PHONE_TEL}`}>
      {PHONE_DISPLAY}
    </a>
    <div className="footer-meta">
      <nav aria-label="Pie">
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/nuestros-programas">Programas</Link>
        <Link to="/donaciones">Donaciones</Link>
        <a href={wa("Hola, Funbienestar. Quiero información.")} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </nav>
      <p className="small">Fundación Nacional de Bienestar Social</p>
      <p className="small">Colombia</p>
    </div>
  </footer>
)
