// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails'
import ContactUs from './Pages/ContactUs/ContactUs'
import Propertys from './Pages/Propertys/Propertys'
import Home from './Pages/Home'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/> } />
      <Route path='/Contact' element={<ContactUs/> } />
      <Route path='/PropertyDetails' element={<PropertyDetails/> } /> 
      <Route path='/Properties' element={<Propertys/> } /> 
    </Routes>
    <Footer/>
    </>
  )
}

export default App
