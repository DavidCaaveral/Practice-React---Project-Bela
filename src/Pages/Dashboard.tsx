import React from 'react'
import Header from '../components/Header.js'
import AsideMenu from '../components/AsideMenu.js'
import Scrapping from '../components/Scrapping.jsx'
import IA from '../components/IA.jsx'


export default function Dashboard() {
  return (
    <>
      <div className="big__container">
        <div className="aside__container">
          <AsideMenu />
        </div>
        <section className='dashboard__content'>
          <Header />
          <section className='dashboard__real__content'>
            <Scrapping />
            <br />
            <IA />  
          </section>
        </section>
      </div>
    </> 
  )
}
