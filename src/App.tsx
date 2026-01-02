
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Projects from './Projects/Projects'
import Experiences from './Experiences/Experiences'
import DesktopNavBar from './Home/NavBar/DesktopNavBar'
import MobileNavBar from './Home/NavBar/MobileNavBar'
import Title from './Home/NavBar/Title'

function App() {

  return (
    <div>
      <div className="mt-3 mx-[2rem]">
        <Title/>
      </div>
      <div className="mt-3 mx-[2rem] md:mx-[10rem]">
        <div className="hidden md:flex mb-10 sticky top-3 z-50">
          <DesktopNavBar/>
        </div>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/experiences" element={<Experiences/>}/>
        </Routes>

        <div className="md:hidden sticky bottom-3 z-50">
          <MobileNavBar/>
        </div>
      </div>
    </div>
  )
}

export default App
