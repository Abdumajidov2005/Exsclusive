import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './home/Home'
import About from './about/About'
import Error from './error/Error'
import Servise from './servise/Servise'
import Contact from './contact/Contact'

function App() {

  return (
    <>
      <BrowserRouter>

          <Navbar />

          <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/contact' element={<Contact/>}/>
               <Route path='/servise' element={<Servise/>}/>
               <Route path='*' element={<Error />}/> 
          </Routes >
      </BrowserRouter>
    </>
  )
}

export default App
