import React from 'react'
import { useEffect, useState } from 'react';
import sendIconScrapp from '../assets/Img/sendIcon.png';
import { GoogleGenAI } from '@google/genai';
import { Content } from 'antd/es/layout/layout.js';


const API_KEY: string = "AIzaSyAALhVeDAlJq4MFYMSjrwYDHGTLPtXdnHg"; 
const ai = new GoogleGenAI({apiKey:API_KEY}); 

export default function IA() {
  const [ inputValue ,setInputIa ] = useState("");
  
  async function iaRequest(prompt: string): Promise<void> {
    console.log(`started ${prompt}` );
    setInputIa("");
    try{
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-lite",
        contents: prompt.toString(),
      });
      console.log(response.text);
  
    }catch(error){
      console.log(`Error de consulta: ${error}`)
    }
  } 
  
  const handlePrompt = () => {
    if(!inputValue.trim()) return;
    iaRequest(inputValue);
  };
  return (
    <>
      <div className='Scrapp__container mod--IA'>   
          <div className="srapp__title__container">
            <h2 className="srapp__title">IA</h2>
          </div>
        
          <div className="scrapp__search mt-5">
            <div className="scrapp__input__container">
              <input className="form-control form-control-lg scrapp__search__input" type="text" placeholder={"Chatear"} value={inputValue} onChange={(e) => setInputIa(e.target.value) } id='IAIn' aria-label=".form-control-lg example"/>
              <div className='scrapp__input__button__container'>
                <button className='scrapp__input__button' onClick={handlePrompt} type='button'><img src={sendIconScrapp} alt="" id='iaButton' className='sendIcon__scrapp'/></button>
              </div>
            </div>
            <div className="srapp__answer__container mt-5">
              
            </div>
            <br />
            <br />
          </div>
      </div>
    </>
  )
}
