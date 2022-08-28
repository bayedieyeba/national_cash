import React from 'react'
import {useTranslation} from "react-i18next";
function SliderContent({activeIndex,ImageSlider}) {
  const {t} =useTranslation()
  return (
    <div className='pt-5'>
        {ImageSlider.map((slide,index)=>(
          <div className=''>
            <div key={index} className={index=== activeIndex? "slides active":"inactive"} >
                <img src={slide.urls} className="slide-image" style={{height:'110vh'}} />

                <h2 style={{color:'white',textAlign:'center',fontSize:'60px',fontWeight:'bold'}} className='slide-title p-5 mt-5'>{t('titre1')} </h2>
          
                <p className='slide-text p-5 mt-4' >{t('description_nc')} </p>
            </div>
            </div>
        ))}
    </div>
  )
}

export default SliderContent