import { Link } from "react-router-dom"

export const NoEncontrada = () => (
  <section className="wrap plain">
    <h1>Esta página no está</h1>
    <p>La dirección no corresponde a una sección de Funbienestar.</p>
    <Link className="btn btn-blue" to="/">
      Volver al inicio
    </Link>
  </section>
)
