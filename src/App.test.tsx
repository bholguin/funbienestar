import { render, screen } from "@testing-library/react"
import App from "./App"

test("muestra el nombre y el título de la fundación", () => {
  const view = render(<App />)
  expect(screen.getByRole("heading", { level: 1, name: /apoyo sigue/i })).toBeInTheDocument()
  view.unmount()
})
