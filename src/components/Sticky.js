import React, { useState } from "react";
import "./css/sticky.css";
import button from '../images/button.png';
import IMAGES from "./ImagesPublicite";
import './css/main.css'
import Popup from "./Popup";
import Slider from 'react-slick'
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";
import axios from "axios";
function Sticky() {


  const [urls,setUrls] = useState([])
      useEffect(()=>{
        axios.get(`http://localhost:4000/api/images`)
        .then(res=>{
          console.log("Status: ", res.status);
          setUrls(res.data)
          console.log(urls)
         
        })
        .catch(err=>{
          console.log(err)
        })

    },[])
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
    const [buttonPopup,setButtonPopup]=useState(false)

   
  return (
    <div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
        <Slider {...settings}   >
        {  
            urls.map((image,i)=>(
              <div key={i}>
                  <img  src={`http://localhost:4000/images/${image.url}`} alt="" className="m-3 p-3" style={{width:'450px',height:'390px'}} />
              </div>
              
            ))
           
          } 
        </Slider>
       
        </Popup >
        <section className="">
        <div>
       
        <button type="button" onClick={()=> setButtonPopup(true) } className="whatsApp" target="_blank"><img src={button} style={{height:'50px'}} /></button>
        </div>
        </section>
    </div>
  );
}
export default Sticky;
