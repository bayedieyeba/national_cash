import React from 'react'
import { Link } from 'react-router-dom';
import nc from '../images/nc.png';
import logo from '../images/logo.jpg';
import {AiTwotonePhone,AiOutlineGooglePlus,AiFillLinkedin } from "react-icons/ai";
import { VscTwitter } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
const MonMenu = () => {
    return (
        <>
            
            {/* <div className='d-flex justify-content-between center p-3  bg-dark'>
                        <div className='d-flex justify-content-start'>
                           <p style={{textDecorationColor:'white'}}>a</p>
                           <p style={{textDecorationColor:'white'}}>a</p>
                           <p style={{textDecorationColor:'white'}}>a</p>
                        </div>
                       <div className='d-flex justify-content-end'>
                            <p style={{textDecorationColor:'white'}}>a</p>
                       </div>
            </div>
                    
                    <div className='d-flex justify-content-end center p-3 m-2'>
                        <div className='mr-3'><Link to=''>ACCUEIL</Link></div>
                        <div><Link to=''>NOS SERVICES</Link></div>
                        <Link to=''>NOS CREDITS</Link>
                        <Link to=''>NOS SERVICES</Link>
                        <Link to=''>CASHILY</Link>
                        <Link to=''>CONTACT</Link>
                    </div>
             */}
             <div className='d-flex flex-column p-2  text-white'>
                <div className='d-flex justify-content-between bg-dark' >
                    <div className='d-flex justify-content-start'>
                      <div className='m-2'><FaFacebookF/> </div>
                      <div className='m-2'><VscTwitter/></div>
                      <div className='m-2'><AiOutlineGooglePlus/></div>
                      <div className='m-2'> <AiFillLinkedin/></div>
                    </div>
                    <div className='d-flex justify-content-end'>
                         <div className='m-2'><AiTwotonePhone style={{color:'green'}}/>+1(234)56-78-90</div>
                         <div className='m-2'><AiTwotonePhone style={{color:'green'}}/> +1(234)56-78-91</div>
                         <div className='m-2'><button className='btn btn-success'>CALL ME</button></div>
                    </div>
                    
                </div>
                <div className='d-flex justify-content-between bg-white' >
                    <div className='d-flex justify-content-start'>
                         <div className='d-flex justify-content-between'>
                            <div className='d-flex flex-column  m-3'>
                                <p style={{color:'blue', fontWeight:'bold'}}>Pour la microfinance Islamique</p>
                                <img src={nc} style={{height:'45px',width:'210px'}} alt="" />
                            </div>
                            
                         </div>
                         
                    </div>
                    <div className='d-flex justify-content-end'>
                         <div className='d-flex justify-content-between'>
                               <div className='m-3'>
                                <img src={logo} style={{height:'45px',width:'210px'}} alt="" />
                                </div> 
                                <div className='m-4'><Link to=''>ACCUEIL</Link></div>
                                <div className='m-4'><Link to=''>NOS SERVICES</Link></div>
                                <div className='m-4'><Link to=''>NOS CREDITS</Link></div>
                                <div className='m-4'><Link to=''>NOS SERVICES</Link></div>
                                <div className='m-4'><Link to=''>CASHILY</Link></div>
                                <div className='m-4'><Link to=''>CONTACT</Link></div>
                                
                         </div>
                    </div>
                    
                </div>
             </div>
        </>
    )
}
export default MonMenu