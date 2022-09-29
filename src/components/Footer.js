import React, { useEffect } from 'react'
import {useTranslation} from "react-i18next";
import { Link } from 'react-router-dom';
import { GiPositionMarker } from "react-icons/gi";
import {AiTwotonePhone,AiOutlineGooglePlus,AiFillLinkedin,AiFillInstagram } from "react-icons/ai";
import { BsSnapchat } from "react-icons/bs";
import { VscTwitter } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import back from '../images/back.png';
import logo2 from '../images/logo2.png';
import backService from '../images/backService.png'
import './css/footer.css'
import './css/footerBottom.css'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';



//AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI
const Footer = () => {
    const {t} =useTranslation()

        const center = {lat:18.081594,lng:-15.976268}
        const positions = [
            center,
            {lat:18.082516,lng:-15.980804},
            {lat:18.069022,lng:-15.909039},
            {lat:18.089619,lng : -15.976678},
        ]
       
    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        const lat=18.081594;
        const lon= -15.976268;
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`

        const ifameData2=document.getElementById("iframeId2")
        const lat2=18.082516;
        const lon2= -15.980804;
        ifameData2.src=`https://maps.google.com/maps?q=${lat2},${lon2}&hl=es;&output=embed`
        
        const ifameData3=document.getElementById("iframeId3")
        const lat3=18.069022;
        const lon3= -15.909039;
        ifameData3.src=`https://maps.google.com/maps?q=${lat3},${lon3}&hl=es;&output=embed`
        const ifameData4=document.getElementById("iframeId4")
        const lat4=18.089619;
        const lon4= -15.976678;
        ifameData4.src=`https://maps.google.com/maps?q=${lat4},${lon4}&hl=es;&output=embed`
        const ifameData5=document.getElementById("iframeId5")
         
        const lat5=20.942067;
        const lon5= -17.038903;
        ifameData5.src=`https://maps.google.com/maps?q=${lat5},${lon5}&hl=es;&output=embed`
    })

    return (
      
            <div className='footer'  style={{
                color: "#f5f5f5",
                
                }}>
                
                    <div className='p-4 ' style={{backgroundImage: `url(${backService})`,padding:''}}>
                    <Fade right>
                    <h1 style={{textAlign:'center',fontWeight:'bold'}}>{t('titre_contact')}</h1>
                    <p style={{textAlign:'center' ,fontSize:'20px'}} >{t('adresse1')}</p>  
                    <div className='m-2 ' style={{textAlign:'center',fontSize:'20px'}}><Link to=""><GiPositionMarker style={{color:'#e89059',fontSize:'25px'}}/></Link> Rue N°41001 Nouakchott-Mauritanie </div>
                    <div className='d-flex justify-content-center '>
                        
                    <div className='m-2 p-3'> <Link to=""><AiTwotonePhone style={{color:'#e89059',fontSize:'25px'}} /></Link>+222 34462615</div>
                        <div className='m-2 p-3'><Link to=""><AiTwotonePhone style={{color:'#e89059',fontSize:'25px'}} /></Link>+222 38000506</div>
                    <div className='m-2 p-3'><Link to=""><MdEmail style={{color:'#e89059',fontSize:'25px'}} /> </Link>contact@nationalcash.mr</div> 
                    </div>
                    </Fade>
                    </div>
                
                {/* <div style={{
                backgroundImage: `url(${map})`,
                backgroundSize: "cover",
                height: "120vh",
                
                color: "#f5f5f5"
                }}>
                </div> */}
               <div style={{backgroundColor:'#003d6a'}}>
                   <Fade right>
                        <p style={{marginBottom:10, color:'white',color:'white',textAlign:'center',fontSize:'40px',fontWeight:'bold'}} >{t('reseaux')} </p>
                        <p style={{marginBottom:10, color:'white',color:'white',textAlign:'center',fontSize:'25px'}}>{t('agences')} </p>
                    </Fade>
                    <Fade left>
                     <div className='d-flex justify-content-center  '>
                        
                                <div className='m-1'> 
                                    <div className='card' style={{backgroundColor:"#e89059"}}>
                                        <p style={{color:'black',textAlign:'center',fontSize:'21px',fontFamily:'Roboto,sans-serif'}} className=" m-1">Agence CENTRALE</p>
                                        <p style={{textAlign:'center', color:'black'}}>Tel : 43 67 78 58</p>
                                    <iframe id="iframeId" height="180px" width="200%" > </iframe>
                                    </div>
                                </div>
                                <div className='m-1'> 
                                <div className='card' style={{backgroundColor:"#e89059"}}>
                                        <p style={{color:'black',textAlign:'center',fontSize:'21px',fontFamily:'Roboto,sans-serif'}} className=" m-1">Agence CHARBON </p>
                                        <p style={{textAlign:'center', color:'black'}}>Tel : 30 71 49 82</p>
                                    <iframe id="iframeId2" height="180px" width="200%"></iframe>
                                </div>  
                                </div>
                                <div className='m-1'> 
                                <div className='card' style={{backgroundColor:"#e89059"}}>
                                        <p style={{color:'black',textAlign:'center',fontSize:'21px',fontFamily:'Roboto,sans-serif'}} className=" m-1">Agence TOUJOUNI</p>
                                        <p style={{textAlign:'center', color:'black'}}>Tel : 42 56 34 17</p>
                                    <iframe id="iframeId3" height="180px" width="200%"></iframe>
                                    </div>
                                </div>
                                <div className='m-1'> 
                                <div className='card' style={{backgroundColor:"#e89059"}}>
                                        <p style={{color:'black',textAlign:'center',fontSize:'21px',fontFamily:'Roboto,sans-serif'}} className=" m-1">Agence POINT CHAUD </p>
                                        <p style={{textAlign:'center', color:'black'}}>Tel : 43 70 62 68</p>
                                    <iframe id="iframeId4" height="180px" width="200%"></iframe>
                                    </div>
                                </div>
                                <div className='m-1'> 
                                <div className='card' style={{backgroundColor:"#e89059"}}>
                                        <p style={{color:'black',textAlign:'center',fontSize:'21px',fontFamily:'Roboto,sans-serif'}} className=" m-1">NOUADHIBOU</p>
                                        <p style={{textAlign:'center', color:'black'}}>Tel : 31313249</p>
                                    <iframe id="iframeId5" height="180px" width="200%"></iframe>
                                    </div>
                                </div>
                        </div>
                    </Fade>
                 </div>
                <div className='' style={{
                    backgroundImage: `url(${back})`,
                    backgroundSize: "cover",
                    height: "20vh",
                    color: "#f5f5f5"
                    }}>
                        
                        <div className='d-flex justify-content-center p-2'>
                            {/* <Slide bottom>
                            <div className='d-flex flex-row justify-content-space-between mt-5'>
                            <img src={logo2} style={{height:'160px',width:'160px'}} className="" alt="" />
                                <div  className='d-flex flex-column px-3'>
                                        <p style={{fontWeight:'bold',fontSize:'30px'}}>{t('titre_bulletins')} </p>
                                        <label htmlFor="">{t('sous_titre_bulletins')} </label>
                                        <input type="text" className='form-control' placeholder={t('input_bulletin')} />
                                        <button className='btn btn-dark m-1'>{t('button_bulletin')} </button>
                                </div>
                              
                            </div>
                            </Slide > */}
                            {/* <div className="v-line1"></div> */}
                            <Slide bottom>
                            {/* <div className='d-flex flex-column mt-5'>
                                
                                <p style={{fontWeight:'bold',fontSize:'30px'}}>{t('liens')} </p>
                                <p className='px-4'>www.siteweb.com</p>
                                <p className='px-4'>www.siteweb.com</p>
                                <p className='px-4'>www.siteweb.com</p>
                            </div> */}
                            </Slide>
                            {/* <div className="v-line2"></div> */}
                            <Slide bottom>
                            <div className='d-flex flex-column mt-4 mx-4'>
                            <p   style={{fontWeight:'bold',fontSize:'20px',textAlign:'center', marginLeft:'40px'}}>{t('suivre')} </p>
                                <div className='d-flex justify-content-between'>
                                   <a href='https://www.facebook.com/ncash18'><FaFacebookF style={{color:'white',fontSize:'20px'}}/> </a>
                                   <a href='https://instagram.com/national___cash?igshid=YmMyMTA2M2Y='><AiFillInstagram style={{color:'white',fontSize:'20px'}}/></a>
                                   <a href='https://www.snapchat.com/add/nationalcashsa' ><BsSnapchat style={{color:'white',fontSize:'20px'}}/></a>
                                   <a href='https://www.linkedin.com/in/national-cash-4a8902244/' ><AiFillLinkedin style={{ color:'white',fontSize:'20px'}}/></a>
    
                                </div>
                            </div>
                            </Slide>

                        </div>

                </div>
                
            </div>
            
        
    )
}
export default Footer