import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Principal from './components/Principal'
import Cliente from './components/Cliente'
import Servidor from './components/Servidor'
import Footer from './components/Footer'
import Navegador from './components/Navegador'
import { useState } from 'react'

function App() {
const [rutaActual, setrutaActual] = useState("/")
const NavegarRuta=(rutaNueva)=>{setrutaActual(rutaNueva)}
  return (
    <>
      <BrowserRouter>
        <Navegador rutaActual={rutaActual} NavegarRuta={NavegarRuta} />
        <Routes>
          <Route path='/' element={<Principal NavegarRuta={NavegarRuta} />} />
          <Route path='/Cliente'  element={<Cliente NavegarRuta={NavegarRuta} />} />
          <Route path='/Servidor'  element={<Servidor NavegarRuta={NavegarRuta} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
