import React from 'react'

function SliderContent({activeIndex,ImageSlider}) {
  return (
    <section>
        {ImageSlider.map((slide,index)=>(
            <div key={index} className={index=== activeIndex? "slides active":"inactive"} >
                <img src={slide.urls} className="slide-image" />
                <h3 className='slide-text' >{slide.description} </h3>
                <h2 className='slide-title'>{slide.title}</h2>
                
            </div>
        ))}
    </section>
  )
}

export default SliderContent