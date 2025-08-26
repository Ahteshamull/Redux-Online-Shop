import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'
import NotFound from './Pages/NotFound'
export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/cart/:id' element={<Cart />} />
          <Route path='*' element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}
