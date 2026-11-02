const FUENTE = "https://resultadosloteriascol.com/"

const LOTERIAS = [
  {
    id: "cundinamarca",
    nombre: "Lotería de Cundinamarca",
    dia: "Lunes",
    archivo: "cundinamarca",
    oficial: "https://www.loteriadecundinamarca.com.co/",
  },
  {
    id: "cruz-roja",
    nombre: "Lotería de la Cruz Roja",
    dia: "Martes",
    archivo: "cruz_roja",
    oficial: "https://lotecruz.org.co/resultados/",
  },
  {
    id: "valle",
    nombre: "Lotería del Valle",
    dia: "Miércoles",
    archivo: "valle",
    oficial: "https://www.loteriadelvalle.com/",
  },
  {
    id: "bogota",
    nombre: "Lotería de Bogotá",
    dia: "Jueves",
    archivo: "bogota",
    oficial: "https://loteriadebogota.com/",
  },
  {
    id: "medellin",
    nombre: "Lotería de Medellín",
    dia: "Viernes",
    archivo: "medellin",
    oficial: "https://loteriademedellin.com.co/resultados/",
  },
  {
    id: "boyaca",
    nombre: "Lotería de Boyacá",
    dia: "Sábado",
    archivo: "boyaca",
    oficial: "https://loteriadeboyaca.gov.co/resultados/",
  },
]

const CACHE_MS = 60 * 60 * 1000
let cache = { at: 0, data: null }

function parseCsv(text) {
  const rows = []
  for (const line of text.split(/\r?\n/)) {
    const cells = line.split(",").map((cell) => cell.trim().replace(/^"|"$/g, ""))
    const [fecha, sorteo = "", number = "", serie = ""] = cells
    if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) continue
    const digits = number.replace(/\D/g, "")
    if (!digits || digits.length > 4) continue
    rows.push({
      fecha,
      sorteo,
      numero: digits.padStart(4, "0"),
      serie: serie.replace(/\D/g, ""),
    })
  }
  rows.sort((a, b) => b.fecha.localeCompare(a.fecha))
  return rows[0] || null
}

async function latestOf(loteria) {
  const base = {
    id: loteria.id,
    nombre: loteria.nombre,
    dia: loteria.dia,
    oficial: loteria.oficial,
  }
  const url = `${FUENTE}api/download/${loteria.archivo}.csv`
  const response = await fetch(url, {
    headers: { Accept: "text/csv", "User-Agent": "Funbienestar/1.0" },
    signal: AbortSignal.timeout(12000),
  })
  if (!response.ok) throw new Error(`${loteria.id} ${response.status}`)
  const latest = parseCsv(await response.text())
  if (!latest) throw new Error(`${loteria.id} sin resultado`)
  return { ...base, ...latest }
}

async function getResultados() {
  if (cache.data && Date.now() - cache.at < CACHE_MS) return cache.data

  const loterias = await Promise.all(
    LOTERIAS.map(async (loteria) => {
      try {
        return await latestOf(loteria)
      } catch {
        return {
          id: loteria.id,
          nombre: loteria.nombre,
          dia: loteria.dia,
          oficial: loteria.oficial,
          fecha: null,
          sorteo: "",
          numero: null,
          serie: "",
        }
      }
    })
  )

  const data = {
    actualizado: new Date().toISOString(),
    fuente: FUENTE,
    fuenteNombre: "Loterías de Colombia",
    loterias,
  }
  if (loterias.every((loteria) => loteria.numero)) cache = { at: Date.now(), data }
  return data
}

module.exports = { getResultados, parseCsv }
