import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index  element={<HomePage/>} />
          <Route path='/about-us' element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
