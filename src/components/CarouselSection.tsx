import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

  import 'swiper/css';
  import 'swiper/css/effect-coverflow';
  import 'swiper/css/navigation';

import slide_image_1 from '../assets/Img/carouselHome/David&Bela.jpg';
import slide_image_2 from '../assets/Img/carouselHome/David&Bela2.jpg';
import slide_image_3 from '../assets/Img/carouselHome/David&Bela3.jpg';
import slide_image_4 from '../assets/Img/carouselHome/David&Bela4.jpg';
import slide_image_5 from '../assets/Img/carouselHome/David&Bela5.jpg';
import slide_image_6 from '../assets/Img/carouselHome/David&Bela6.jpg';
import slide_image_7 from '../assets/Img/carouselHome/David&Bela7.jpg';
import slide_image_8 from '../assets/Img/carouselHome/David&Bela8.jpg';
import slide_image_9 from '../assets/Img/carouselHome/David&Bela9.jpg';

export default function CarouselSection() {
  interface Slide {
    src: any;
  }

  const slides: Slide[] = [
    { src: slide_image_1 },
    { src: slide_image_2 },
    { src: slide_image_3 },
    { src: slide_image_4 },
    { src: slide_image_5 },
    { src: slide_image_6 },
    { src: slide_image_7 },
    { src: slide_image_8 },
    { src: slide_image_9 }
  ];

  return (
    <section className="container_carousel">
      <div className="carousel-container">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,       // sin rotación lateral
          stretch:0,      // espaciado entre slides
          depth: 250,      // profundidad del apilado
          modifier: 2.5,   // fuerza del efecto 3D
          slideShadows: true,
        }}
        navigation={true}
        pagination={true}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="carousel-swiper"
        >
            {slides.map((slide, i) => (
            <SwiperSlide key={i} className="carousel-slide">
              <img src={slide.src} alt={`slide-${i}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
