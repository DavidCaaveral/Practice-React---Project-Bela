import React from 'react'
import Header from '../components/Header'
import InitialInfo from '../components/InitialInfo'
import CarouselSection from '../components/CarouselSection'
import HistoryPage from '../components/HistoryPage'
import Footer from '../components/Footer'

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
