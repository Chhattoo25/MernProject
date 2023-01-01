import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../About/About'
import Contact from '../Contact/Contact'
import HomePage from '../Home/HomePage'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'

const AllRoutes = () => {
  return (
    <div>
<Routes>
<Route path='/' element={<HomePage/>} />
<Route path='/about' element={<About/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/signup' element={<Signup/>} />
<Route path='/login' element={<Login/>} />
</Routes>
    </div>
  )
}

export default AllRoutes