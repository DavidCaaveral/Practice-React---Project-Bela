import React from 'react'
import Header from '../components/Header'
import AsideMenu from '../components/AsideMenu'
import Scrapping from '../components/Scrapping'
import IA from '../components/IA'

export default function Dashboard() {
  return (
    <>
      <div className="big__container">
        <div className="aside__container">
          <AsideMenu />

        </div>
        <section className='dashboard__content'>
          <Header />
        </section>
      </div>
    </> 
  )
}
