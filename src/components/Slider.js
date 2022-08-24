import React, { useEffect, useState } from 'react'
import Arrows from './Arrows'
import Dots from './Dots'
import ImageSlide from './ImageSlide'
import SliderContent from './SliderContent'
import './Slider.css'
const len =ImageSlide.length - 1
function Slider() {
    const [activeIndex,setActiveIndex] = useState(0)
    useEffect(()=>{const interval = setInterval(()=>{
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
    }, 5000);
    return ()=> clearInterval(interval)
},[activeIndex])
  return(
    <div className='slider-container'>
    <SliderContent activeIndex={activeIndex} ImageSlider={ImageSlide} />
    <Arrows
     prevSlide={()=>setActiveIndex(activeIndex < 1 ? len :activeIndex -1)}
     nextSlide={()=>setActiveIndex(activeIndex === len ? 0 :activeIndex + 1)}
      />
      <Dots 
      activeIndex={activeIndex}
       ImageSlide={ImageSlide} 
       onclick={activeIndex => setActiveIndex(activeIndex)} />
   </div>
  )
  
}

export default Slider