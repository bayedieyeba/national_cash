import React from 'react'
import {AiTwotonePhone,AiOutlineGooglePlus,AiFillLinkedin } from "react-icons/ai";
import { VscTwitter } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import nc from '../images/nc.png';
import logo1 from '../images/logo1.png';
import {Nav,Navbar,NavLink} from 'react-bootstrap'
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>

    <nav className='navbar-one flex'>
        <div className='left flex '>
        <div className='facebook'>
                <span><FaFacebookF/></span>
            </div>
            <div className='twitter'>
                <span><VscTwitter/></span>
            </div>
            <div className='twitter'>
                <span><AiOutlineGooglePlus/></span>
            </div>
            <div className='twitter'>
                <span><AiFillLinkedin/></span>
            </div>
            
        </div>
        <div className='right flex'>
        <div className='call'>
                <span>
                <AiTwotonePhone style={{color:'green'}}/>
                +1(234)56-78-90
                </span>
            </div>
            <div className='email'>
                <span>
                <AiTwotonePhone style={{color:'green'}}/>
                +1(234)56-78-90
                </span>
                <span>
                    <button style={{backgroundColor:'green'}}>CAll ME</button>
                </span>
            </div>
        </div>
    </nav>
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
          <Navbar.Brand>
          <img src={nc} style={{height:'40px',width:'210px'}} alt="" />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <img className='p-1' src={logo1} style={{height:'100px',width:'125px'}} alt="" />
            <div className=''>
            <Navbar.Collapse style={{position:'relative'}} id="navbarScroll">
            
                <Nav>
                    <NavLink  eventKey="1" as={Link} to="/">Home</NavLink>
                    <NavLink  eventKey="2" as={Link} to="/about">About</NavLink>
                    <NavLink  eventKey="3" as={Link} to="/contact">Contact</NavLink>
                    <NavLink  eventKey="2" as={Link} to="/about">About</NavLink>
                    <NavLink  eventKey="3" as={Link} to="/contact">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>  
            </div>
        </Navbar>
    {/* <nav className='navbar-second flex'>
      <div className='logo'>
        <p style={{fontSize:'15px',fontWeight:'bold'}} className='m-3'>Pour la microfinance Islamique</p>
        <img src={nc} style={{height:'40px',width:'210px'}} alt="" />
      </div>
      <ul className='flex m-3'>
      <img className='m-2 pt-2 py-2' src={logo1} style={{height:'105px',width:'125px'}} alt="" />
        <li><a href="">ACCUEIL</a></li>
        <li><a href="">NOS SERVICES</a></li>
        <li><a href="">NOS CREDITS</a></li>
        <li><a href="">CASHILY</a></li>
        <li><a href="">CONTACT</a></li>
      </ul>
    </nav> */}
    
        {/* top bar */}
        {/* <section className='bg-dark'>
            <div className='container'>
                <div className="row top-bar " style={{paddingBottom:'3px;'}}>
                    <div className="col text-left">
                        <span className='text-white'>
                        <FaFacebookF/>
                        </span>
                        <span className='text-white'>
                        <VscTwitter/>
                        </span>
                        <span className='text-white'>
                        <AiOutlineGooglePlus/>
                        </span>
                        <span className='text-white'>
                        <AiFillLinkedin/>
                        </span>
                    </div>
                    
                    <div className="col text-right">
                        <span className='text-white'>
                        <AiTwotonePhone style={{color:'green'}}/>
                        +1(234)56-78-90
                        </span>
                        <span className='text-white'></span>
                        <span className='text-white'>
                        <AiTwotonePhone style={{color:'green'}}/>
                        +1(234)56-78-90
                        </span>
                        <span className='text-white'>
                            <button style={{backgroundColor:'green'}}>CALL ME</button>
                        </span>
                    </div>
                </div>
            </div>
        </section> */}
        {/* NavBar here */}
        {/* <section className='bg-white'>
            <div className='container'>
            <nav className='navbar navbar-expand-md navbar-dark'>
                <a href="#" className='navbar-brand'>
                <img src={nc} style={{height:'40px',width:'210px'}} alt="" />
                </a>
                <button className='navbar-toggler' type='button' data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse ' id='collapsibleNavbar'>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <a href="" className='nav-link'> Accueil</a>
                        </li>
                        <li className='nav-item'>
                            <a href="" className='nav-link'> NOS SERVICES</a>
                        </li>
                        <li className='nav-item'>
                            <a href="" className='nav-link'> NOS CREDITS</a>
                        </li>
                        <li className='nav-item'>
                            <a href="" className='nav-link'> CASHILY</a>
                        </li>
                        <li className='nav-item'>
                            <a href="" className='nav-link'> CONTACT</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        </section> */}
    </>
  )
}

export default NavBar