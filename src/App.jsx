
import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Navbar from './components/layouts/navbar/Navbar'
import Footer from './components/layouts/footer/Footer'
import Sport from './components/pages/sport/Sport'
// import Diet from './components/pages/diet/Diet'
import Events from './components/pages/events/Events'
import About from './components/pages/about/About'
import Contact from './components/pages/contact/Contact'
function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sport" element={<Sport/>} />
        {/* <Route path="/diet" element={<Diet/>} /> */}
        <Route path="/events" element={<Events/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App