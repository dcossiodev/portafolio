import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/sobre-mi" element={<Home />} />
        <Route path="/tecnologias" element={<Home />} />
        <Route path='/educacion' element={<Home />} />
        <Route path="/proyectos" element={<Home />} />
        <Route path="/experiencia" element={<Home />} />
        <Route path="/contacto" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
