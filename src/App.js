import {BrowserRouter, Routes, Router, Route, Link} from "react-router-dom"

import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import Navbar from "./pages/Navbar";
import Saudacao from "./components/Saudacao";
import SeuNome from "./components/SeuNome";
import { useState } from "react"
import Icons from "./components/Icons";
function App() {
  const [nombre, setNombre] = useState()
  return (
    <BrowserRouter>
     <Navbar />

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      
      <SeuNome setNombre={setNombre} />
      <Saudacao nombre={nombre}/>
      <Icons />
      
    </BrowserRouter>
  )

}

  
export default App;
