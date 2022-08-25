import React from 'react'
import { Link } from 'react-router-dom';
import { GiPositionMarker } from "react-icons/gi";
import {AiTwotonePhone,AiOutlineGooglePlus,AiFillLinkedin } from "react-icons/ai";
import { VscTwitter } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import back from '../images/back.png';
import logo2 from '../images/logo2.png';
import map from '../images/map.png';
import backService from '../images/backService.png'
const Footer = () => {
    return (
        <>
            <div  style={{
                color: "#f5f5f5"
                }}>
                <div className='p-4 ' style={{backgroundImage: `url(${backService})`,}}>
                <h1 style={{textAlign:'center',fontWeight:'bold'}}>OUR CONTACTS</h1>
                <p style={{textAlign:'center' ,fontSize:'20px'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  
                <div className='m-2 pt-3' style={{textAlign:'center',fontSize:'25px'}}><Link to=""><GiPositionMarker style={{color:'#e89059'}}/></Link> Lorem ipsum dolor sit amet,consectetur adipiscing elit</div>
                <div className='d-flex justify-content-center '>
                    
                   <div className='m-2 p-3'> <Link to=""><AiTwotonePhone style={{color:'#e89059',fontSize:'25px'}} /></Link>(123)456-78-90</div>
                    <div className='m-2 p-3'><Link to=""><AiTwotonePhone style={{color:'#e89059',fontSize:'25px'}} /></Link>(123)456-78-90</div>
                   <div className='m-2 p-3'><Link to=""><MdEmail style={{color:'#e89059',fontSize:'25px'}} /> </Link>info@website.com</div> 
                </div>
                </div>
                <div className='px-3' style={{
                backgroundImage: `url(${map})`,
                backgroundSize: "cover",
                height: "120vh",
                
                color: "#f5f5f5"
                }}>

                </div>
                <div style={{
                    backgroundImage: `url(${back})`,
                    backgroundSize: "cover",
                    height: "50vh",
                    color: "#f5f5f5"
                    }}>
                        
                        <div className='d-flex justify-content-between p-5'>
                            <div className='d-flex flex-row justify-content-space-between mt-5'>
                            <img src={logo2} style={{height:'160px',width:'160px'}} className="" alt="" />
                                <div  className='d-flex flex-column px-3'>
                                        <p style={{fontWeight:'bold',fontSize:'30px'}}>Bulletins</p>
                                        <label htmlFor="">Recevez nos meilleurs offres</label>
                                        <input type="text" className='form-control' placeholder='votre email' />
                                        <button className='btn btn-dark m-1'>Send</button>
                                </div>
                                
                            </div>
                            <div className="v-line1"></div>

                            <div className='d-flex flex-column mt-5'>
                                
                                <p style={{fontWeight:'bold',fontSize:'30px'}}>LIENS UTILES</p>
                                <p className='px-4'>www.siteweb.com</p>
                                <p className='px-4'>www.siteweb.com</p>
                                <p className='px-4'>www.siteweb.com</p>
                            </div>
                            <div className="v-line2"></div>
                            
                            <div className='d-flex flex-column mt-5 mx-2'>
                            <p style={{fontWeight:'bold',fontSize:'20px'}}>Suivez-nous</p>
                                <div className='d-flex justify-content-between'>
                                   <Link to='/'><FaFacebookF style={{color:'white',fontSize:'20px'}}/> </Link>
                                   <Link to='/'><VscTwitter style={{color:'white',fontSize:'20px'}}/></Link>
                                   <Link to='/'><AiOutlineGooglePlus style={{color:'white',fontSize:'20px'}}/></Link>
                                   <Link to='/'><AiFillLinkedin style={{ color:'white',fontSize:'20px'}}/></Link>
    
                                </div>
                            </div>

                        </div>

                </div>
                
            </div>
            
        </>
    )
}
export default Footer