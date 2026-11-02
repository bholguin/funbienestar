import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { EMAIL, PHONE_TEL, seoByPath } from "../../content"

const FALLBACK = {
  title: "Página no encontrada | Funbienestar",
  description: "Esta dirección no existe en el sitio de Funbienestar.",
  image: "/assets/logo_funbienestar.png",
  robots: "noindex",
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", rel)
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

export const Seo = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = seoByPath[pathname] ?? FALLBACK
    const origin = (process.env.REACT_APP_SITE_URL || window.location.origin).replace(/\/$/, "")
    const path = pathname === "/" ? "/" : pathname
    const url = `${origin}${path}`
    const image = page.image.startsWith("http") ? page.image : `${origin}${page.image}`

    document.title = page.title
    document.documentElement.lang = "es"
    upsertMeta("name", "description", page.description)
    upsertMeta("name", "robots", page.robots ?? "index,follow")
    upsertLink("canonical", url)

    upsertMeta("property", "og:type", "website")
    upsertMeta("property", "og:locale", "es_CO")
    upsertMeta("property", "og:site_name", "Funbienestar")
    upsertMeta("property", "og:title", page.title)
    upsertMeta("property", "og:description", page.description)
    upsertMeta("property", "og:url", url)
    upsertMeta("property", "og:image", image)

    upsertMeta("name", "twitter:card", "summary_large_image")
    upsertMeta("name", "twitter:title", page.title)
    upsertMeta("name", "twitter:description", page.description)
    upsertMeta("name", "twitter:image", image)

    const org = document.getElementById("org-jsonld")
    if (org?.textContent) {
      try {
        const data = JSON.parse(org.textContent)
        data.url = `${origin}/`
        data.email = EMAIL
        data.telephone = PHONE_TEL
        org.textContent = JSON.stringify(data)
      } catch {
        /* el JSON estático sigue siendo válido */
      }
    }
  }, [pathname])

  return null
}
