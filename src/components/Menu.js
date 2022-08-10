import React from 'react'
import logo from '../images/logo.jpg';
import nc from '../images/nc.png';
import Header from './Header';

const Menu = () => {
    return (
        <>  
           <Header/>
           
           <div className="d-flex justify-content-between p-3">
                <div className='mr-4'>
                <img src={nc} style={{height:'100px',width:'100px'}} alt="this is logo image" />
                
                </div>
                <div>
                <img src={logo} style={{height:'130px',width:'130px'}} alt="this is logo image" />  

                </div>
                <div className='mt-5'>
                    <button type="button" className="btn btn-primary m-2">ACCUEIL</button>
                    <button type="button" className="btn btn-light m-2">NOS SERVICES</button>
                    <button type="button" className="btn btn-light m-2">NOS CREDITS</button>
                    <button type="button" className="btn btn-light m-2">CASHILY</button>
                    <button type="button" className="btn btn-light m-2 ">CONTACT</button>
                </div>
           </div>
           
        </>
    
    )
}

export default Menu