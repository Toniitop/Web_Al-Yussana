import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Routers/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// const router = BrowserRouter([
//   {
//     path:'/',
//     element: <Home />,
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
