import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Home from '../home/Home'
import About from '../about/About'
import Contact from '../contact/Contact'
import Servise from '../servise/Servise'
import Error from '../error/Error'

function Routerer() {
  return (
    <>
       <BrowserRouter>

          <Navbar />

          <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/contact' element={<Contact/>}/>
               <Route path='/servise' element={<Servise/>}/>
               <Route path='*' element={<Error/>}/> 
          </Routes >
      </BrowserRouter>
    </>
  )
}

export default Routerer