import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import SignIn from './pages/Signin'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

      </Routes>
    </BrowserRouter>
  )
}
