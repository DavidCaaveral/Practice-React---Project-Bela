import Home from "./Pages/Home"
import Info from "./Pages/Info"
import Login from "./Pages/Login"
import Profile from "./Pages/Profile"
import Dashboard from "./Pages/Dashboard"
import Messages from "./Pages/Messages"
import { Routes,Route,Navigate } from "react-router-dom"
import { useState,useEffect } from "react"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Messages" element={<Messages />} />
      </Routes>
    </>
  )
}

export default App
