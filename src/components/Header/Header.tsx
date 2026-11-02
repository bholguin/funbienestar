import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"

const links = [
  { label: "Nosotros", to: "/nosotros" },
  { label: "Programas", to: "/nuestros-programas" },
  { label: "Donaciones", to: "/donaciones" },
  { label: "Resultados", to: "/resultados" },
]

export const Header = () => {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header className="site-header">
      <div className="header-bar">
        <Link className="wordmark" to="/">
          <img src="/assets/logo-mark.png" alt="" width={2060} height={2200} />
          <span className="wordmark-name">
            <strong>Funbienestar</strong>
            <small>Fundación Nacional de Bienestar Social</small>
          </span>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-bars" />
        </button>
        <nav id="menu-principal" className={open ? "nav-tab is-open" : "nav-tab"} aria-label="Secciones">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? "is-active" : undefined)}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Link className="header-action" to="/donaciones#escribir">
          Donar
        </Link>
      </div>
    </header>
  )
}
