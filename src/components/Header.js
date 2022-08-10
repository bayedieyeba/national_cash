import React from 'react'
import { Link } from 'react-router-dom';
import {AiTwotonePhone,AiOutlineGooglePlus,AiFillLinkedin } from "react-icons/ai";
import { VscTwitter } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";

const Header = () => {
    return (
        <div className='container'>  
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div  className="container-fluid">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="#"><FaFacebookF/></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#"><VscTwitter/></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#"><AiOutlineGooglePlus/></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#"><AiFillLinkedin/></Link></li>
                        </ul>
                    <div className="collapse navbar-collapse" id="main_nav">
                        <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="#"><AiTwotonePhone style={{color:'green'}}/>+1(234)56-78-90 </Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#"><AiTwotonePhone style={{color:'green'}}/> +1(234)56-78-91 </Link></li>
                        <li className="nav-item"><button className='btn btn-success'>CALL ME</button></li>
                        </ul>
                    </div> 
                    </div> 
            </nav>     
        </div>
    
    )
}

export default Header