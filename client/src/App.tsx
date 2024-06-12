import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserRoute from './routes/UserRoute'
import Home from './pages/user/home/Home'
import Product from './pages/user/product/Product'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserRoute/>}>
          <Route index element={<Home/>}/>
          <Route path='/products' element={<Product/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}
