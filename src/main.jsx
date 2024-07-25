import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Routers/Home'
import Temporada from './Routers/Temporada'
import Desafio3vs3 from './Routers/Desafio3x3'
import Error404 from './components/Error404'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/temporada' element={<Temporada />} />
        <Route path='/desafio' element={<Desafio3vs3 />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
