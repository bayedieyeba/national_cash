import React from 'react'
import backService from '../images/backService.png';
import './css/activites.css'
import Spin from 'react-reveal/Spin';
import Bounce from 'react-reveal/Bounce';
const Activites = () => {
    return (
        <div 
         className='row justify-content-center custom-line p-4 activites '>
            <Bounce top>
                <h1 className=' ' style={{textAlign:'center',color:'white'}} >NOS VALEURS</h1>
            </Bounce>
                <Spin>
               <div className='col-1 m-4 p-5 '>
                    <div className="circle">RIGUEUR</div>
                </div>
                </Spin>
                <Spin>
                <div className='col-1 m-4 p-5'>
                    <div className="circle">EQUITE</div>
                </div> 
                </Spin>
                <Spin>
                <div className='col-1 m-4 p-5'>
                    <div className="circle">EXCELLENCE</div>
                </div>
                </Spin>
                <Spin>
                <div className='col-3 m-4 p-5'>
                    <div className="circle">RESPECT</div>
                </div>
                </Spin>
            <Bounce bottom > 
                <p  style={{fontSize:'18px', fontWeight:'bold',color:'white' ,textAlign:'center'}}>Les valeurs privilégiées par NATIONAL CASH constituent des points de repère essentiels et des instruments de mobilisation pour l'ensemble du personnel.</p>
            </Bounce>
        </div>
    )
}
export default Activites