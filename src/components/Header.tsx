import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <section className="Main__menu">
        <nav className="navbar--mod navbar navbar-expand-lg bg-body-tertiary">
          <div className="content__header container-fluid">
            <div className="title">
              <Link className="Name__title navbar-brand ms-5" to="/">Amonchis Productions</Link>
            </div>
            <div className="links__entrance " id="navbarSupportedContent">
              <ul className="links__entrance navbar-nav mb-2 mb-lg-0">
                <li className="nav-item ms-8">
                  <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Info</a>
                </li>
                <li className="nav-item">
                  <Link type="button" className="btn contactButton infoBanner__info__text" to="/Contact">Contacto</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </section>
    </>
  )
}
