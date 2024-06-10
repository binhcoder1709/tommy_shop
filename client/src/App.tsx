import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserRoute from './routes/UserRoute'
import Home from './pages/user/home/Home'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserRoute/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}
