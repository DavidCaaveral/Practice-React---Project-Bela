import React from 'react'
import Header from '../components/Header.js'
import InitialInfo from '../components/InitialInfo.jsx'
import CarouselSection from '../components/CarouselSection.js'
import HistoryPage from '../components/HistoryPage.jsx'
import Footer from '../components/Footer.js'

export default function Home() {
  return (
    <>
        <section className="homeWall">
            <Header />
            <InitialInfo />
            <div className="carousel__container ">
              <h2 className="history__title">
                    Nuestra Historia
                </h2>
            </div>
            <CarouselSection />
            <HistoryPage />
            <Footer />
        </section>    
    </>
  )
}
