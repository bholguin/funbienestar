import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { Home } from './pages/home';
import { Layout } from './layout';
import { Nosotros } from './pages/nosotros';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {theme} from './theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/nosotros' element={<Nosotros />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>

    </div>
  );
}

export default App;
