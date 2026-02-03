import React from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import LoginForm from '../components/LoginForm.jsx'
import VideoLogin from '../components/VideoLogin.jsx'

export default function Login() {
  return (
    <>
      <section className="LoginBackground">
        <Header />
        <div className="main__Container">
          <LoginForm />
          <VideoLogin />
        </div>
      </section>

    </>
  )
}
