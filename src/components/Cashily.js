import React from 'react'
import background from '../images/back.png';
import cashilyImage from '../images/bacgoundCashyli.jpeg'
import Slide from 'react-reveal/Slide';
import './css/cashily.css'
const Cashily = () => {
  return (
    <div className='container p-5 cashily'>
        {/* <div style={{backgroundImage: `url(${cashilyImage})`,
                    backgroundSize: "cover",
                    height: "100vh",
                    color: "#f5f5f5"}}>
        </div> */}
        <Slide top>
                <img src={cashilyImage} alt="" style={{width:'90%',height:'90%'}} />
        </Slide>
    </div>
  )
}

export default Cashily