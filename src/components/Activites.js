import React from 'react'

const Activites = () => {
    return (
        <div style={{backgroundColor:'#rgb(0, 0, 255)'}} className='row justify-content-around custom-line p-3'>
            <h1 style={{textAlign:'center'}}>NOS VALEURS</h1>
           
               <div className='col-1'>
                    <div class="circle">RIGUEUR</div>
                </div>
                <div className='col-1'>
                    <div class="circle">EQUITE</div>
                </div>
                <div className='col-1'>
                    <div class="circle">EXCELLENCE</div>
                </div>
                <div className='col-3'>
                    <div class="circle">RESPECT</div>
                </div>
            <p className='m-3' style={{fontSize:'18px', fontWeight:'bold'}}>Les valeurs privilégiées par NATIONAL CASH constituent des points de repère essentiels et des instruments de mobilisation pour l'ensemble du personnel.</p>
        </div>
    )
}
export default Activites