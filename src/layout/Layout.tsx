import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Notice } from "../components/Notice"
import { Seo } from "../components/Seo/Seo"
import { useReveal } from "../hooks/useReveal"

export const Layout = () => {
  const location = useLocation()
  useReveal(location.pathname + location.hash)

  useEffect(() => {
    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!reduce) return
    document.querySelectorAll("video").forEach((video) => {
      video.pause()
      video.removeAttribute("autoplay")
    })
  }, [location.pathname])

  useEffect(() => {
    const id = location.hash.replace("#", "")
    if (id) {
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <div id="top">
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <Notice />
      <main id="contenido">
        <Seo />
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
