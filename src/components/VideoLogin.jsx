import React from 'react'
import video from '../assets/videos/belaYdavy.mp4';

export default function VideoLogin() {
  return (
    <>
    <div className="video__container">
        <div className="reference__images">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="video__history "
            >
                <source src={video} type='video/mp4'/>
            </video>
        </div>
    </div>
    </>
  )
}
