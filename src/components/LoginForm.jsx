import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom'


export default function LoginForm() {
  return (
    <>
    <section className="login__container">
      <form className='form__login'>
        <div className="inputsLog mb-3">
          <label for="exampleInputEmail1" className="form-label login__info__text">Username</label>
          <input type="Name" className="form-control inputPl" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="inputsLog mb-3">
          <label for="exampleInputPassword1" className="form-label login__info__text">Password</label>
          <input type="password" className="form-control inputPl" id="exampleInputPassword1"/>
        </div>
        <Link type="button" className="btn contactButton infoBanner__info__text" to="/dashboard">Log In</Link>
      </form>
    </section>   
    </>
  )
}
