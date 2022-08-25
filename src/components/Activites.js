import React from 'react'
import backService from '../images/backService.png';
import './css/activites.css'
const Activites = () => {
    return (
        <div 
         className='row justify-content-center custom-line p-5 activites '>
            <h1 className='' style={{left:'35%',position:'absolute',color:'white'}} >NOS VALEURS</h1>
           
               <div className='col-1 m-4 p-5'>
                    <div className="circle">RIGUEUR</div>
                </div>
                <div className='col-1 m-4 p-5'>
                    <div className="circle">EQUITE</div>
                </div> 
                <div className='col-1 m-4 p-5'>
                    <div className="circle">EXCELLENCE</div>
                </div>
                <div className='col-3 m-4 p-5'>
                    <div className="circle">RESPECT</div>
                </div>
            <p  style={{fontSize:'18px', fontWeight:'bold',color:'white'}}>Les valeurs privilégiées par NATIONAL CASH constituent des points de repère essentiels et des instruments de mobilisation pour l'ensemble du personnel.</p>
        </div>
    )
}
export default Activites