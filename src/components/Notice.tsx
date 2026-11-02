import { useState } from "react"
import { PDF } from "../content"

const storageKey = "funbienestar-aviso-cerrado"

export const Notice = () => {
  const [open, setOpen] = useState(() => {
    try {
      return sessionStorage.getItem(storageKey) !== "1"
    } catch {
      return true
    }
  })

  if (!open) return null

  const close = () => {
    try {
      sessionStorage.setItem(storageKey, "1")
    } catch {
      /* la alerta sigue disponible en el pie si el navegador bloquea el almacenamiento */
    }
    setOpen(false)
  }

  return (
    <aside className="notice" aria-label="Aviso de reubicación">
      <div className="notice-bar">
        <p>
          <strong>Aviso.</strong> Mientras se reubica la oficina física, la fundación sigue prestando sus
          servicios de manera legal y válida por canales virtuales: teléfono, correo y WhatsApp.{" "}
          <a href={PDF} target="_blank" rel="noreferrer">
            Leer el aviso de reubicación
          </a>
        </p>
        <button type="button" onClick={close} aria-label="Cerrar aviso">
          ×
        </button>
      </div>
    </aside>
  )
}
