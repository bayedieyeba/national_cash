import React from 'react';
import Comptes from './Comptes';
import Footer from './Footer';
import FormulaireSouscription from './FormulaireSouscription';
import Slider from 'react-slick'
import Personnages from './Personnages';
import MySlide from './slides/MySlider';
import Testimonial from './slides/Testimonial';
import Popup from "./Popup";
import popup1 from '../images/popup1.png';
import popup2 from '../images/popup2.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

function Accueil() {
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
  useEffect(()=>{
    
},[])

    return (
      <div className=''>
        
        <Testimonial />
         <Comptes />
         <Personnages />
         <FormulaireSouscription />
        <Footer />
      </div>
      
    )
}

export default Accueil