import React, { Component } from 'react'
import './css/Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {AiTwotonePhone,AiOutlineGooglePlus,AiFillLinkedin } from "react-icons/ai";
import { VscTwitter } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import nc from '../images/nc.png';
import logo1 from '../images/logo1.png';
import { Link } from 'react-router-dom';
export default class Header extends Component {
    constructor(){
        super();
        this.state={
            show: true,
        }
    }
    render() {
        return (
            <div className='header'>
                <nav className='navbar-one flex'>
                    <div className='left flex '>
                        <div>
                            <span><FaFacebookF/></span>
                        </div>
                        <div>
                            <span><VscTwitter/></span>
                        </div>
                        <div>
                            <span><AiOutlineGooglePlus/></span>
                        </div>
                        <div>
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
                        <nav className="  navbar navbar-expand-lg navbar-dark bg-white">
                            <div className="container">
                            <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-start'>
                                    <div className='d-flex justify-content-between mx-4'>
                                        <div className='d-flex flex-column  m-2'>
                                            <p style={{color:'blue', fontWeight:'bold'}}>Pour la microfinance Islamique</p>
                                            <img src={nc} style={{height:'40px',width:'210px'}} alt="" />
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                <div className='mx-5'></div>
                                <div className='mx-3'></div>
                                <div className='d-flex justify-content-end mx-5 p-0' >
                                <img  src={logo1} style={{height:'100px',width:'115px'}} alt="" />
                                </div >
                            </div>
                                <button className="navbar-toggler border border-info text-info" 
                                onClick={ ()=>{ this.setState({show: !this.state.show}) } } >
                                    {this.state.show ? <MenuIcon /> : <CloseIcon />}
                                </button>
                                
                                
                                
                                    <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link text-light" to="/">ACCUEIL</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-light" to="/services">NOS SERVICES</Link>
                                        </li>
                                        <li className="nav-item" >
                                            <Link className="nav-link text-light" to="/credits" >NOS CREDITS</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-light" to="/contacts">CONTACT</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
            </div>
        )
    }
}
