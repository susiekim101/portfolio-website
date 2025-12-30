
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Projects from './Projects/Projects'
import Experiences from './Experiences/Experiences'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/experiences" element={<Experiences/>}/>
    </Routes>
    </>
  )
}

export default App
