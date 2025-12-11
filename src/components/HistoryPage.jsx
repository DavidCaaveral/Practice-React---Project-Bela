import React from 'react'

import video_1 from '../assets/videos/BelaVideo.mp4';
import video_2 from '../assets/videos/BelaVideo2.mp4';
import img1 from '../assets/Img/bela&dav.jpeg'

export default function HistoryPage() {
  return (
    <section className="history__conatiner">
        <div className="history__tilte__container">
            <h3 className="history__title">
                Inicia En
            </h3>
        </div>
        <div className="history__starting mt-3 mb-5">
            <div className="reference__images me-5">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="video__history "
                >
                    <source src={video_2} type='video/mp4'/>
                </video>
            </div>
            <div className="History__text">
                <p className="Our__Story">Nuestra historia empieza por obra de una celestina, que sin querer uniría a dos personas entrelazando sus vidas.<br /> <br />Empezaría en febrero, solo siendo un método para molestar a dicha celestina sin propósito alguno de avanzar como pareja, pero como ya en mis otros escritos he dicho, el destino es caprichoso y haría de dicha broma una jugarreta hermosa para unirnos, no sin antes hacerlo de una manera lenta y elegante. <br /> <br /> Desde el primer hermoso contacto pasaron unos maravillosos 6 meses, donde se vería como una historia florecía poco a poco. Desde historias en un parque cualquiera cerca de un centro comercial, pasando por conversaciones con buñuelo y compota, hasta el inicio de una historia interminable donde al fin se daría un primer beso uno que marcaria mi vida para siempre, uno que cambiaría el significado del amor de manera inamovible.</p>

            </div>
            
        </div>
         <div className="history__tilte__container mt-5">
            <h3 className="history__title">
                Nuestro Presente
            </h3>
        </div>
        <div className="history__starting mt-3 mb-5">
            <div className="History__text">
                <p className="Our__Story">A día de hoy miro tu sonrisa y recuerdo todo el proceso… ese proceso hermoso que me llevó a tenerte en mi vida, a considerarte mi compañera y la mujer que deseo a mi lado. La mujer que me tiene paciencia, a quien me encantaría conocer a profundidad, investigar, admirar… y tener como musa en mi obra. Me siento orgulloso de que formes parte de mi “por qué” y de mi “para qué”, y deseo tenerte en mi vida por miles de años más. <br /> <br />
                Hoy fabrico esta página porque anhelo ser parte de tu día a día, ayudarte y hacer que tu esfuerzo se amplifique y sea lo más eficiente posible. Para ello diseñé un modelo de <b>prompting</b> (una línea guía para tus consultas) que aumentará tu alcance al buscar información actualizada sobre informes y datos médicos. Esta página entrará en un periodo de pruebas para asegurar la fiabilidad de dicha información.<br /> <br />
                Sin más, doy paso a nuestros sonidos.

                </p>
            </div>
            <div className="reference__images me-5 image-wrapper">
                <img src={img1} alt="" className="video__history" />
                <div className="image-text ms-2">
                    <h3><b>RITMO</b></h3>
                    <p>Definitivamente mi corazon palpita <br /> al ritmo de tus caderas al caminar.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
