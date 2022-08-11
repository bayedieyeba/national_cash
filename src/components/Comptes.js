import React from 'react'
import CompteLeft from './CompteLeft';
import CompteRight from './CompteRight';
import background from '../images/background.png';
const Comptes = () => {
    return (
        <div style={{backgroundImage: `url(${background})`,
                        padding:"100px",
                        backgroundSize: "cover",
                        height: "300vh",
                        color: "#f5f5f5"}}>
                   <div style={{color:'white'}}>
                        <CompteLeft />
                   </div>
                    <div style={{color:'white'}}>
                        <CompteRight />
                    </div>
                    <div style={{color:'white'}}>
                        <CompteLeft />
                   </div>  
        </div>
    )
}
export default Comptes