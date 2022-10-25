import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Tutorial from "../src/pages/Tutorial";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact"
import Home from "./pages/Home";
import Services from "./pages/Services"



import './App.css'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Tutorial" element={<Tutorial/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path='/Servicos' element={<Services/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
