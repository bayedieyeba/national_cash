import React, { useState } from "react";
import "./css/sticky.css";
import logo from '../images/logo1.png';
import button from '../images/button.png';
import popup1 from '../images/popup1.png';
import './css/main.css'
import Popup from "./Popup";

function Sticky() {
   
    const [buttonPopup,setButtonPopup]=useState(false)
   
   
  return (
    <div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
         
        <img src={popup1} alt="" className="m-3" style={{width:'500px',height:'400px'}} />
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
