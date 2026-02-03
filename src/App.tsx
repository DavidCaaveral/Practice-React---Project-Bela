import Home from "./Pages/Home.js";
import Info from "./Pages/Info.js";
import Login from "./Pages/Login.js";
import Profile from "./Pages/Profile.jsx";
import Dashboard from "./Pages/Dashboard.js";
import Messages from "./Pages/Messages.jsx";
import Contact from "./Pages/Contact.js";
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
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
