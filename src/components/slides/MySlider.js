import React from "react";
import Slider from "infinite-react-carousel";
import back from '../../images/back.png';
import logo1 from '../../images/logo1.png';
import logo2 from '../../images/logo2.png';
import "./slide.css";

function MySlide() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    className: "slide_box",
    dots: true,
    virtualList: true,
    duration: 20,
    arrows:true,
    
  };
  return (
    <div className="p-3">
      
      <Slider {...settings}>
        <div className="row">
          <img
            src={back}
            className="slide_img col-lg-12"
            alt="Responsive img"

          />
          
        </div>
        <div>
          <img
            src={logo1}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
        <div>
          <img
            src={logo2}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
      </Slider>
    </div>
  );
}

export default MySlide;
