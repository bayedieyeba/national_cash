import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../css/Testmonial.css'
import {useTranslation} from "react-i18next";
import logo1 from '../../images/logo1.png';
import back from '../../images/back.png';
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { FiEye } from "react-icons/fi";
import Slide from 'react-reveal/Slide';
import Activites from '../Activites'
import Rigueur from '../Activites/Rigueur'
import Equite from '../Activites/Equite'
import Execellence from '../Activites/Excellence'
import Respect from '../Activites/Respect'

const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
      </div>
    );
  };


const Testimonial = () => {
    const {t} =useTranslation()
  const   settings = {
        dots: true,
        infinite: true,
        arrows:true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        adaptiveHeight: true
      };
  return (
    <div className='testmonial p-4 respons' style={{display :"flex",justifyContent : "center", marginTop:100,backgroundImage: `url(${back})`,backgroundSize: "cover"}}>
        <div style={{width : '80%', textAlign:'center'}} >
           
        <Slider {...settings}   >
            <div className='m-2'>
            <h1 style={{marginBottom:10, color:'white',color:'white',textAlign:'center',fontSize:'60px',fontWeight:'bold'}} > {t('titre1')} </h1>
            <p style={{color:'white'}} >{t('description_nc')} </p>
            </div>
            {/* <div>
                
            </div> */}
            <Activites />
            <Rigueur />
            <Equite />
            <Execellence />
            <Respect />
            <Card text={t('vision')} text_description={t('text_vision')} titre={t('titre_vision')} />
            <Card text={t('mission')} text_description={t('text_mission')} titre={t('titre_mision')} />


           
        </Slider>
    </div>
    </div>
  )
}
const Card =({text,text_description,titre})=>{
    const {t} =useTranslation()
    return(
        <div style={{display:'flex',
            alignItems:"center", 
            flexDirection : "column",
            textAlign:'center',
            color:'gray',
         }} >
           {/* <Avatar 
           imgProps={{ style : {borderRadius : "50%"}}}
           src={img} 
           style={{width:120,height:120,border:'1px solid lightgray',padding:7, marginBottom:20}} /> */}
          <Slide top>
           <h1 style={{color:'white'}} >{titre}</h1>
           </Slide> 
           <div className='circle'> 
             {text}
           </div>

           <Slide bottom>
                 <p style={{color:'white', padding:'10px'}} > {text_description} </p>
           </Slide>
           {/* <p style={{ fontStyle:'italic',
                    marginTop: 25
            }}> 
                <span style={{fontWeight : 500, color: "greenyellow"}} >Baye dieye ba</span>
            </p>  */}
        </div>
    )
}


export default Testimonial