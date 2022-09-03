import React from "react";
import Slider from "infinite-react-carousel";
import back from '../../images/back.png';
import logo1 from '../../images/logo1.png';
import logo2 from '../../images/logo2.png';
import {useTranslation} from "react-i18next";
import Bounce from 'react-reveal/Bounce';
import Spin from 'react-reveal/Spin';
import "./slide.css";
import Back from '../../images/backService.png'
import Activites from "../Activites";
function MySlide() {
  const {t} =useTranslation()
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    className: "slide_box",
    // dots: true,
    virtualList: true,
    duration: 20,
    arrows:true,
    
  };
  return (
    <div className="slider-container">
      
      <Slider {...settings}>
        <div>
         
          <div style={{ backgroundImage: `url(${back})`,
                backgroundSize: "cover",
                height: "90vh",}}>
                  <p style={{color:'white',textAlign:'center',fontSize:'60px',fontWeight:'bold'}} className='slide-title p-5 mt-5'>{t('titre1')}</p>
                  <p className='slide-text p-5 ' >{t('description_nc')}</p>
                </div>
        </div>
        <div>
          
            <div  style={{ backgroundImage: `url(${Back})`,
                backgroundSize: "cover",
                height: "95vh",}}
         className='row justify-content-center p-5  '>
            <Bounce top>
                <h1 className='' style={{textAlign:'center',color:'white',fontSize:'60px',padding:'90px'}} >{t('titre_valeur')} </h1>
            </Bounce>
                <Spin>
               <div className='col-1 m-4 p-5 '>
                    <div className="circle">{t('rigueur')} </div>
                </div>
                </Spin>
                <Spin>
                <div className='col-1 m-4 p-5'>
                    <div className="circle">{t('equite')} </div>
                </div> 
                </Spin>
                <Spin>
                <div className='col-1 m-4 p-5'>
                    <div className="circle">{t('excellence')}</div>
                </div>
                </Spin>
                <Spin>
                <div className='col-3 m-4 p-5'>
                    <div className="circle">{t('respect')}</div>
                </div>
                </Spin>
            <Bounce bottom > 
                <p className=""  style={{fontSize:'18px', fontWeight:'bold',color:'white' ,textAlign:'center'}}>{t('sous_titre_activite')} </p>
            </Bounce>
        </div>   
        </div>
        <div>
         
           <div style={{ backgroundImage: `url(${back})`,
                backgroundSize: "cover",
                height: "90vh",}}>
                  <p style={{textAlign:'center',color:'white',fontSize:'60px',padding:'80px'}} >{t('titre_mision')}</p>
                </div>
        </div>
      </Slider>
    </div>
  );
}

export default MySlide;
