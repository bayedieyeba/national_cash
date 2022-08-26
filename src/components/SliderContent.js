import React from 'react'

function SliderContent({activeIndex,ImageSlider}) {
  return (
    <div className='pt-5'>
        {ImageSlider.map((slide,index)=>(
          <div className=''>
            <div key={index} className={index=== activeIndex? "slides active":"inactive"} >
                <img src={slide.urls} className="slide-image" style={{height:'110vh'}} />

                <h2 style={{color:'white',textAlign:'center',fontSize:'60px',fontWeight:'bold'}} className='slide-title p-5 mt-5'>{slide.title}</h2>
          
                <p className='slide-text p-5 mt-4' >{slide.description} </p>
            </div>
            </div>
        ))}
    </div>
  )
}

export default SliderContent