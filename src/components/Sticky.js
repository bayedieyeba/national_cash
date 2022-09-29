import React, { useState } from "react";
import "./css/sticky.css";
import button from '../images/button.png';
import popup1 from '../images/popup1.png';
import popup2 from '../images/popup2.png';
import './css/main.css'
import Popup from "./Popup";
import Slider from 'react-slick'
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { listAll, ref ,getDownloadURL } from 'firebase/storage'
import { useEffect } from "react";
import { storage } from "./backend/Firebase";
function Sticky() {
  const [imageList, setImageList] = useState([])
  const imagesLitRef = ref(storage,"images/")
  useEffect(()=>{
    listAll(imagesLitRef).then((response)=> {
      response.items.forEach((item)=>{
          getDownloadURL(item).then((url)=>{
            setImageList((prev) => [...prev, url])
          })
      })
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
            imageList.map((url,i)=>(
              <div key={i}>
                  <img  src={url} alt="" className="m-3 p-3" style={{width:'450px',height:'390px'}} />
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
