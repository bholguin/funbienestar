import { Link } from "react-router-dom"

export const NoEncontrada = () => (
  <section className="plain">
    <h1 className="display">
      <span className="break">Esta página</span>
      <span className="break">no está</span>
    </h1>
    <p className="statement">La dirección no corresponde a una sección de Funbienestar.</p>
    <Link to="/">Volver al inicio</Link>
  </section>
)
