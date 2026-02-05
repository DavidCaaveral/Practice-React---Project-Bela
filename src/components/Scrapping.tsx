import React from 'react'
import sendIconScrapp from '../assets/Img/sendIcon.png'
import { GoogleGenAI } from '@google/genai';

const pButton = document.getElementById('pubmedBut') as HTMLButtonElement;
const cButton = document.getElementById('crossBut') as HTMLButtonElement;
const aButton = document.getElementById('arxivBut') as HTMLButtonElement;
const sInput = document.getElementById('scrappIn') as HTMLInputElement;

pButton?.addEventListener("click", (event) => {
  sInput.placeholder = "PubMed";
});

aButton?.addEventListener("click", (event) => {
  sInput.placeholder = "arXiv";
});

cButton?.addEventListener("click", (event) => {
  sInput.placeholder = "Crossref";
});



export default function Scrapping() {
  return (
    <>
      <div className='Scrapp__container'>   
          <div className="srapp__title__container">
            <h2 className="srapp__title">Consulta</h2>
          </div>
        
          <div className="scrapp__search mt-5">
            <div className="scrapp__buttons mb-3">
                <button type="button" className="btn mod--pub infoBanner__info__text me-2" id='pubmedBut'>PubMed</button>
                <button type="button" className="btn mod--cross infoBanner__info__text me-2" id='crossBut'>Crossref</button>
                <button type="button" className="btn mod--arX infoBanner__info__text me-3" id='arxivBut'>arXiv</button>
            </div>
            <div className="scrapp__input__container">
              <input className="form-control form-control-lg scrapp__search__input" type="text" placeholder={"PubMed"} id='scrappIn' aria-label=".form-control-lg example"/>
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
