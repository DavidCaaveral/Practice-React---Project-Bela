import React from 'react'
import Header from '../components/Header.js'
import AsideMenu from '../components/AsideMenu.js'
import Scrapping from '../components/Scrapping.js'
import IA from '../components/IA.js'


export default function Dashboard() {
  return (
    <>
      <div className="big__container">
        <div className="aside__container">
          <AsideMenu />
        </div>
        <section className='dashboard__content'>
          <Header />
          <section className='dashboard__real__content mt-5'>
            <Scrapping />
            <br />
            <div className="divider__dashboard"></div>
            <br />
            <IA />  
          </section>
        </section>
      </div>
    </> 
  )
}
