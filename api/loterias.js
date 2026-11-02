const { getResultados } = require("./_lib/resultados")

module.exports = async function handler(_request, response) {
  try {
    const data = await getResultados()
    const completo = data.loterias.every((loteria) => loteria.numero)
    response.setHeader(
      "Cache-Control",
      completo ? "public, s-maxage=3600, stale-while-revalidate=86400" : "no-store"
    )
    response.status(200).json(data)
  } catch {
    response.setHeader("Cache-Control", "no-store")
    response.status(502).json({ ok: false })
  }
}
