import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Route, Routes, useNavigate } from 'react-router'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In");
        if (window.location.pathname !== "/") navigate("/");
      } else {
        console.log("Logged Out");
        if (window.location.pathname !== "/login") navigate("/login");
      }
    });
  }, [navigate]);
  

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/login'  element={<Login />} />
        <Route path='/player/:id' element={<Player />}/>
      </Routes>
    </div>
  )
}

export default App