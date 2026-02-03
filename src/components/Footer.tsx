import React from 'react'
import Icon from '../assets/Img/icono AP.png'

export default function Footer() {
  return (
   <section className="Footer">
        <div class="card__footer">
            <div class="card__body">
                <div className="title__footer">
                <img src={Icon} alt="" className="Icon__footer"/>
                </div>
               <div className="separator"></div>
                <div className="title__footer">
              <a className="Name__title__footer navbar-brand" href="#">Amonchis Productions</a>
            </div>
            </div>
        </div>
   </section>
  )
}
