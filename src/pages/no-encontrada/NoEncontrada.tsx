import { Link } from "react-router-dom"

export const NoEncontrada = () => (
  <section className="plain">
    <h1 className="display">
      <span>No está</span> <span>aquí</span>
    </h1>
    <p>La dirección no corresponde a una sección de Funbienestar.</p>
    <Link to="/">Volver al inicio</Link>
  </section>
)
