import React from 'react'
import styles from "../../../../styling/StartPageStyle.module.css"
import { useState, useEffect, useRef } from 'react'
import MenuLinks from "../../../individuals/MenuLinks"

import "../../../../styling/Slideshow.css"
import img1 from "../../../../images/StartPageSlideshow/bikeRide1.jpg"
import img2 from "../../../../images/StartPageSlideshow/bikeRide2.jpg"
import img3 from "../../../../images/StartPageSlideshow/bikeRide3.jpg"

const images = [img1, img2, img3];
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function Slideshow() {

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null)

  function resetTimeout () {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => 
        setIndex((prevIndex) => 
          prevIndex === images.length -1 ? 0 : prevIndex +1
        ),
      delay
    );

    return() => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className='slideshowContainer'>
      <div className='slideshow'>
        <div 
          className='slideshowSlider'
          style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}
        >
          {images.map((backgroundImage, index) =>(
            <div 
              className='slide' 
              key={index} 
              style={{"backgroundImage": `url(${backgroundImage})`}}>
            </div>
          ))}
        </div>
        

        <div className='slideshowDots'>
          {images.map((_, idx) => (
            <div 
              key={idx} 
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx)
              }}>     
            </div>
          ))}
        </div>
      </div>
      <div className='sideText'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur corporis voluptas voluptatibus nemo voluptatem alias adipisci, voluptate qui possimus, similique commodi enim ea temporibus aliquid delectus eligendi blanditiis harum aspernatur.</p>
        <MenuLinks name="Se alla produkter" link="/listingpage" />
      </div>
    </div>
  )
}

export default Slideshow