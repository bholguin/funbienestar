import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Layout } from "./layout"
import { Donaciones } from "./pages/donaciones/Donaciones"
import { Home } from "./pages/home"
import { NoEncontrada } from "./pages/no-encontrada/NoEncontrada"
import { Nosotros } from "./pages/nosotros"
import { NuestrosProgramas } from "./pages/nuestros-programas"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="nuestros-programas" element={<NuestrosProgramas />} />
          <Route path="donaciones" element={<Donaciones />} />
          <Route path="*" element={<NoEncontrada />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
