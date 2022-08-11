import React from 'react'
import backService from '../images/backService.png';
const Activites = () => {
    return (
        <div style={{backgroundImage: `url(${backService})`,
                    padding:"100px",
                    backgroundSize: "cover",
                    height: "80vh",
                    color: "#f5f5f5"}}
         className='row justify-content-around custom-line p-5 '>
            <h1 style={{textAlign:'center',color:'white'}}>NOS VALEURS</h1>
           
               <div className='col-1'>
                    <div className="circle">RIGUEUR</div>
                </div>
                <div className='col-1'>
                    <div className="circle">EQUITE</div>
                </div>
                <div className='col-1'>
                    <div className="circle">EXCELLENCE</div>
                </div>
                <div className='col-3'>
                    <div className="circle">RESPECT</div>
                </div>
            <p className='m-3' style={{fontSize:'18px', fontWeight:'bold',color:'white'}}>Les valeurs privilégiées par NATIONAL CASH constituent des points de repère essentiels et des instruments de mobilisation pour l'ensemble du personnel.</p>
        </div>
    )
}
export default Activites