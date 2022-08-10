import React from 'react'
import { Link } from 'react-router-dom';
import { GiPositionMarker } from "react-icons/gi";
import {AiTwotonePhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import back from '../images/back.png';
const Footer = () => {
    return (
        <>
            <div style={{
                backgroundColor: 'blue',
                backgroundSize: "cover",
                height: "50vh",
                color: "#f5f5f5"
                }}>
                <h1 style={{textAlign:'center',fontWeight:'bold'}}>OUR CONTACTS</h1>
                <p style={{textAlign:'center' ,fontSize:'20px'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  
                <div className='d-flex justify-content-between center p-3 m-2'>
                    <div className='m-2 p-3'><Link to=""><GiPositionMarker style={{color:'yellow'}}/></Link> Lorem ipsum dolor sit amet,consectetur adipiscing elit</div>
                   <div className='m-2 p-3'> <Link to=""><AiTwotonePhone style={{color:'yellow'}} /></Link>(123)456-78-90</div>
                    <div className='m-2 p-3'><Link to=""><AiTwotonePhone style={{color:'yellow'}} /></Link>(123)456-78-90</div>
                   <div className='m-2 p-3'><Link to=""><MdEmail style={{color:'yellow'}} /> </Link>info@website.com</div> 
                </div>
                <div style={{
                backgroundColor: 'white',
                backgroundSize: "cover",
                height: "50vh",
                color: "#f5f5f5"
                }}>

                </div>
                <div  style={{
                    backgroundImage: `url(${back})`,
                    backgroundSize: "cover",
                    height: "50vh",
                    color: "#f5f5f5"
                    }}>

                </div>
                
            </div>
            
        </>
    )
}
export default Footer