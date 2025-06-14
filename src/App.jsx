
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './component/NavBar/NavBar'
import Footer from './component/Footer/Footer'

function App() {

  return (
    <div>
      <NavBar />
      <div className="min-h-[70vh] mt-[129px] bg-[#FFFEFE]">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
