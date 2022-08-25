import React from 'react'

function SliderContent({activeIndex,ImageSlider}) {
  return (
    <section>
        {ImageSlider.map((slide,index)=>(
          <div className=''>
            <div key={index} className={index=== activeIndex? "slides active":"inactive"} >
                <img src={slide.urls} className="slide-image" style={{height:'110vh'}} />
                <h2 style={{color:'#e89059',textAlign:'center',fontSize:'65px',fontWeight:'bold'}} className='slide-title'>{slide.title}</h2>
          
                <p className='slide-text' >{slide.description} </p>
            </div>
            </div>
        ))}
    </section>
  )
}

export default SliderContent