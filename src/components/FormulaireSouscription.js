import React from 'react'
const FormulaireSouscription = () => {
    return (
        <div style={{backgroundColor:'orange'}}>
             <h1 style={{textAlign:'center'}}>DEMANDE DE SOUSCRIPTIONS</h1> 
             
                    <div className="row m-3">
                        <div className="col">
                            
                            <div className="form-outline">
                                <input type="text"  className="form-control" placeholder='YOUR NAME' />
                                
                            </div>
                            </div>
                            <div className="col">
                                
                            <div className="form-outline" style={{widows:'50px'}}>
                                <input type="email"  className="form-control" placeholder='YOUR EMAIL'/>
                                
                            </div>
                            </div>
                            <div className="col">
                                
                            <div className="form-outline">
                                <input type="text"  className="form-control" placeholder='YOUR PHONE' />
                            </div>
                            
                           </div>
                           <div className="col">
                                
                            <div className="form-outline">
                                <button className='form-control' style={{backgroundColor:'yellow'}}>SEND REQUEST</button>
                            </div>
                            
                           </div>
                    </div>
                <p className='p-4 mr-3' style={{textAlign:'center',fontSize:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
}
export default FormulaireSouscription