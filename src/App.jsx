import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router'
import Login from './pages/Login/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/login'  element={<Login />} />
      </Routes>
    </div>
  )
}

export default App