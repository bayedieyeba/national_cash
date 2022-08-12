import React from 'react'
import { Link } from 'react-router-dom';
import nc from '../images/nc.png';
import logo1 from '../images/logo1.png';
import {AiTwotonePhone,AiOutlineGooglePlus,AiFillLinkedin } from "react-icons/ai";
import { VscTwitter } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
const Menu = () => {
    return (
        <>
             <div className='d-flex flex-column text-white fixed-top '>
                <div className='d-flex justify-content-between bg-dark ' >
                    <div className='d-flex justify-content-start'>
                      <div className='m-2'><Link to='/'><FaFacebookF style={{color:'white'}}/> </Link></div>
                      <div className='m-2'><Link to='/'><VscTwitter style={{color:'white'}}/></Link></div>
                      <div className='m-2'><Link to='/'><AiOutlineGooglePlus style={{color:'white'}}/></Link></div>
                      <div className='m-2'><Link to='/'><AiFillLinkedin style={{color:'white'}}/></Link> </div>
                    </div>
                    <div className='d-flex justify-content-end'>
                         <div className='m-2'><Link to=""> <AiTwotonePhone style={{color:'green'}}/></Link>+1(234)56-78-90</div>
                         <div className='m-2'><Link to=""><AiTwotonePhone style={{color:'green'}}/></Link> +1(234)56-78-91</div>
                         <div className='m-2'><button style={{backgroundColor:'green',color:"white"}}>CALL ME</button></div>
                    </div>
                    
                </div>
                <div className='d-flex justify-content-between bg-white px-2' >
                    <div className='d-flex justify-content-start'>
                         <div className='d-flex justify-content-between mx-5'>
                            <div className='d-flex flex-column  m-2'>
                                <p style={{color:'blue', fontWeight:'bold'}}>Pour la microfinance Islamique</p>
                                <img src={nc} style={{height:'40px',width:'210px'}} alt="" />
                            </div>
                            
                         </div>
                         
                    </div>
                    <div className='d-flex justify-content-end mx-2'>
                         <div className='d-flex justify-content-between '>
                               <div className='px-4'>
                                <img src={logo1} style={{height:'105px',width:'125px'}} alt="" />
                                </div> 
                                <div className='m-4 py-3 active'><Link to='/'>ACCUEIL</Link></div>
                                <div className='m-4 py-3'><Link to='/services'>NOS SERVICES</Link></div>
                                <div className='m-4 py-3'><Link to='/credits'>NOS CREDITS</Link></div>
                                <div className='m-4 py-3'><Link to=''>CASHILY</Link></div>
                                <div className='m-4 py-3'><Link to='/contacts'>CONTACT</Link></div>
                                
                         </div>
                    </div>
                    
                </div>
             </div>
        </>
    )
}
export default Menu