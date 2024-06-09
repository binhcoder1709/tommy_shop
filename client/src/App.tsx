import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserRoute from './routes/UserRoute'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserRoute/>}></Route>
      </Routes>
    </>
  )
}
