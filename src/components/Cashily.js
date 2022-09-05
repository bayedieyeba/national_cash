import React from 'react'
import background from '../images/back.png';
import cashilyImage from '../images/bacgoundCashyli.jpeg'
import Slide from 'react-reveal/Slide';
import './css/cashily.css'
const Cashily = () => {
  return (
    <div className='container cashily'>
        {/* <div style={{backgroundImage: `url(${cashilyImage})`,
                    backgroundSize: "cover",
                    height: "100vh",
                    color: "#f5f5f5"}}>
        </div> */}
        <Slide top>
                <img src={cashilyImage} alt="" style={{width:'70%',height:'70%', padding:'100px'}} />
        </Slide>
    </div>
  )
}

export default Cashily