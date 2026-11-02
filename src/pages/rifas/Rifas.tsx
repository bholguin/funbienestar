import { useEffect, useState } from "react"

type Loteria = {
  id: string
  nombre: string
  dia: string
  oficial: string
  fecha: string | null
  sorteo: string
  numero: string | null
  serie: string
}

type Respuesta = {
  fuente: string
  fuenteNombre: string
  loterias: Loteria[]
}

const LOGOS: Record<string, string> = {
  cundinamarca: "/assets/loterias/cundinamarca.png",
  "cruz-roja": "/assets/loterias/cruz-roja.png",
  valle: "/assets/loterias/valle.png",
  bogota: "/assets/loterias/bogota.png",
  medellin: "/assets/loterias/medellin.png",
  boyaca: "/assets/loterias/boyaca.png",
}

function fechaLarga(iso: string) {
  const [year, month, day] = iso.split("-").map(Number)
  const texto = new Intl.DateTimeFormat("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)))
  return texto.charAt(0).toUpperCase() + texto.slice(1)
}

export const Rifas = () => {
  const [estado, setEstado] = useState<"cargando" | "listo" | "error">("cargando")
  const [data, setData] = useState<Respuesta | null>(null)

  useEffect(() => {
    let activo = true
    fetch("/api/loterias")
      .then((response) => {
        if (!response.ok) throw new Error("sin resultados")
        return response.json() as Promise<Respuesta>
      })
      .then((json) => {
        if (!activo) return
        setData(json)
        setEstado("listo")
      })
      .catch(() => {
        if (!activo) return
        setEstado("error")
      })
    return () => {
      activo = false
    }
  }, [])

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <h1>Resultados</h1>
          <p>
            Cada día corresponde una lotería. Lunes es Cundinamarca, martes Cruz Roja, miércoles Valle,
            jueves Bogotá, viernes Medellín y sábado Boyacá.
          </p>
        </div>
      </header>
      <section className="section mist" aria-labelledby="ultimos-resultados">
        <div className="wrap">
          <h2 id="ultimos-resultados">Último resultado</h2>
          <p className="lede">
            El número de anoche aparece aquí en la mañana, sin que haya que publicarlo. Para cobrar
            vale el que figure en el sitio oficial de cada lotería.
          </p>
          {estado === "cargando" ? <p className="rifa-estado">Consultando los últimos resultados.</p> : null}
          {estado === "error" ? (
            <p className="rifa-estado">No se pudieron consultar los resultados. Intente de nuevo en un momento.</p>
          ) : null}
          {estado === "listo" && data ? (
            <ul className="rifa-grid">
              {data.loterias.map((loteria) => (
                <li key={loteria.id} className="rifa">
                  <img className="rifa-logo" src={LOGOS[loteria.id]} alt="" />
                  <p className="rifa-dia">{loteria.dia}</p>
                  <h3>{loteria.nombre}</h3>
                  {loteria.numero ? (
                    <>
                      <p className="rifa-numero" aria-label={`Número ${loteria.numero}`}>
                        {loteria.numero.split("").map((digito, index) => (
                          <span key={`${loteria.id}-${index}`}>{digito}</span>
                        ))}
                      </p>
                      <p className="rifa-serie">{loteria.serie ? `Serie ${loteria.serie}` : "Serie no publicada"}</p>
                      <p className="rifa-meta">
                        {loteria.fecha ? fechaLarga(loteria.fecha) : ""}
                        {loteria.sorteo ? ` · Sorteo ${loteria.sorteo}` : ""}
                      </p>
                    </>
                  ) : (
                    <p className="rifa-vacio">Aún no hay un resultado publicado.</p>
                  )}
                  <a href={loteria.oficial} target="_blank" rel="noreferrer">
                    Sitio oficial
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          {data ? (
            <p className="rifa-nota">
              Datos de{" "}
              <a href={data.fuente} target="_blank" rel="noreferrer">
                {data.fuenteNombre}
              </a>
              , tomados de los sitios oficiales de cada lotería.
            </p>
          ) : null}
        </div>
      </section>
    </>
  )
}
