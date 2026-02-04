import React from 'react'
import sendIconScrapp from '../assets/Img/sendIcon.png'

export default function IA() {
  return (
    <>
      <div className='Scrapp__container mod--IA'>   
          <div className="srapp__title__container">
            <h2 className="srapp__title">IA</h2>
          </div>
        
          <div className="scrapp__search mt-5">
            <div className="scrapp__input__container">
              <input className="form-control form-control-lg scrapp__search__input" type="text" placeholder={"Chatear"} id='IAIn' aria-label=".form-control-lg example"/>
              <div className='scrapp__input__button__container'>
                <button className='scrapp__input__button' type='button'><img src={sendIconScrapp} alt="" className='sendIcon__scrapp'/></button>
              </div>
            </div>
            <div className="srapp__answer__container mt-5">
              
            </div>
          </div>
      </div>
    </>
  )
}
