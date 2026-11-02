const { getResultados } = require("../api/_lib/resultados")

module.exports = function setupProxy(app) {
  app.get("/api/loterias", async (_req, res) => {
    try {
      const data = await getResultados()
      res.set("Cache-Control", "public, max-age=300")
      res.json(data)
    } catch {
      res.status(502).json({ ok: false })
    }
  })
}
