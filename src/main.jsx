import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import Login from './pages/Login/Login.jsx'
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx'
import CheckOut from './pages/CheckOut/CheckOut.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index  element={<HomePage/>} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/product-details/:id' element={<ProductDetails/>} />
          <Route path='/checkout' element={<CheckOut/>} />
        </Route>
        <Route path='/auth/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
