import { Link } from "react-router-dom"

export const NoEncontrada = () => (
  <section className="wrap plain">
    <h1>Esta página no está</h1>
    <p>Esa dirección no corresponde a una sección de la fundación. Vuelva al inicio para ver los programas o escribir.</p>
    <Link className="btn btn-blue" to="/">
      Volver al inicio
    </Link>
  </section>
)
