import React from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

export default function Contact() {
  return (
    <>
    <div className="contact__conatiner">
      <section className="contact__Background">
        <div className="disclaimer__colorBackground">
          <div className="disclaimer_info">
            <Header/>
              <section className="contact__title">
                <h1 className="contact__title__text">Contacto</h1>
              </section>
          </div>
          <div className="info__contactconatiner">
            <div className="infocontact_content">
                <div className="info__contact__text">
                   <h3 className='textContact'> Puedo ser contactado a traves de mis redes sociales.</h3>
                   <h5 className='belowTextContact'>Ya mi princesa tiene mi WhatsApp</h5>
                </div>
              <i className="fa-solid fa-arrow-down arrowIcon"></i>
              <section className="socialmedia__container">
              <i className="fa-brands fa-instagram Socialmedia"></i>
              <i className="fa-brands fa-linkedin Socialmedia"></i>
              <i className="fa-brands fa-github Socialmedia"></i>
              <i className="fa-solid fa-envelope Socialmedia"></i>
              </section>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </div>
    </>
  )
}