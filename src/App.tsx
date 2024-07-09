import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PaginaEntrega from './components/Entregas/PaginaEntrega/PaginaEntrega'
import Login from './components/auth/Login/Login'
import Home from './components/Home/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Login />} />

        <Route path="/dashboard" element={<Home />} />
        <Route path="/config" element={<Home />} />
        <Route path="/pesquisa/:keyword" element={<Home />} />

        <Route path="/entregas" element={<Home />} />
          <Route path="/entrega/:id" element={<PaginaEntrega />} />
        <Route path="/produtos" element={<Home />} />
          <Route path="/produto/:id" element={<Home />} />
        <Route path="/ajuda" element={<Home />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
