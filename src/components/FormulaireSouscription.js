import React from 'react'
import backFormulaire from '../images/backFormulaire.png'
import './css/formulaire.css'
import './css/button.css'
const FormulaireSouscription = () => {
    return (
        <div className='formulaire'>
             <h1 className='p-5' style={{textAlign:'center',color:'white'}}>DEMANDE DE SOUSCRIPTIONS</h1> 
             
                    <div className="row m-4">
                        <div className="col">
                            
                            <div className="form-outline">
                                <input type="text"  className="form-control" placeholder='Votre nom complet' />
                                
                            </div>
                            </div>
                            <div className="col">
                                
                            <div className="form-outline" style={{widows:'50px'}}>
                                <input type="email"  className="form-control" placeholder='Votre Email'/>
                                
                            </div>
                            </div>
                            <div className="col">
                                
                            <div className="form-outline">
                                <input type="text"  className="form-control" placeholder='Numéro De Téléphone' />
                            </div>
                            
                           </div>
                           <div className="col">
                                <button className='btn-76'>
                                   <span className='right m-3'>SEND REQUEST</span> 
                                </button>
                           </div>
                    </div>
                <p className='p-4 mr-3' style={{textAlign:'center',fontSize:'20px',color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
}
export default FormulaireSouscription