import { Link } from "react-router-dom"
import { EMAIL, PDF, PHONE_DISPLAY, PHONE_TEL, programs, wa } from "../../content"

export const Footer = () => (
  <footer className="site-footer">
    <div className="wrap footer-grid">
      <div>
        <h2>Funbienestar</h2>
        <p>
          Mientras se reubica la oficina física, la fundación sigue prestando sus servicios de manera
          legal y válida por canales virtuales: teléfono, correo y WhatsApp.
        </p>
        <p>
          <a href={PDF} target="_blank" rel="noreferrer">
            Leer el aviso de reubicación
          </a>
        </p>
      </div>
      <div>
        <h2>La fundación</h2>
        <ul>
          <li>
            <Link to="/nosotros">Quiénes somos</Link>
          </li>
          <li>
            <Link to="/nuestros-programas">Programas</Link>
          </li>
          <li>
            <Link to="/donaciones">Donaciones</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2>Contacto</h2>
        <ul>
          <li>
            <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          </li>
          <li>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </li>
          <li>
            <a href={wa("Hola, Funbienestar. Quiero información.")} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="wrap footer-base">
      <span>Fundación Nacional de Bienestar Social</span>
      <span>Colombia</span>
      <span>{programs.length} programas</span>
    </div>
  </footer>
)
