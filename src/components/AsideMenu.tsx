import React from 'react'

import default__profile__Image from '../assets/Img/user_profile_icon.png';
import testImage from '../assets/Img/bela&dav2.jpeg'

const name = "Bela";

export default function AsideMenu() {
  return (
    <>
      <nav id="" className="navbar mb-3 navbar-aside">
        <div className="sections__container">
        <i className="fa-solid fa-comment ms-2 message__icon"></i>
          <div className="profile__section__container">
            <section className='father__image__profile__container'>
              <div className="image__profile__container">
                <img src={default__profile__Image} alt="" className='profile__image'/>
              </div>
            </section>
              <div className="username__Container mt-2">
                <h3 className='username__profile'>{name}</h3>
              </div>
          </div>  
          <br />
          <div className="divider"></div>
          <br />
          <div className="scrapp__history__container">
            <section className='h__title__conatiner'>
              <h4 className='history__title__text'>
                Investigacion
              </h4>
            </section>
            <section className='history__container'>

            </section>
          </div>
          <div className="AI__history__container mt-1">
            <section className='h__title__conatiner'>
              <h4 className='history__title__text'>
                IA
              </h4>
            </section>
            <section className='history__container'>

            </section>
          </div>
        </div>
    </nav>
    </>
  )
}
