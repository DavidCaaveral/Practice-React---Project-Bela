import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'
import VideoLogin from '../components/VideoLogin'

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
