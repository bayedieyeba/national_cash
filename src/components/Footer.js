import React, { useEffect } from 'react'
import {useTranslation} from "react-i18next";
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
import './css/footer.css'
import './css/footerBottom.css'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
const Footer = () => {
    const {t} =useTranslation()

    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        const lat=18.081594;
        const lon= -15.976268;
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`

        const ifameData2=document.getElementById("iframeId2")
        const lat2=18.082516;
        const lon2= -15.980804;
        ifameData2.src=`https://maps.google.com/maps?q=${lat2},${lon2}&hl=es;&output=embed`
    })

    return (
      
            <div className='footer '  style={{
                color: "#f5f5f5",
                
                }}>
                
                    <div className='p-4 ' style={{backgroundImage: `url(${backService})`,padding:''}}>
                    <Fade right>
                    <h1 style={{textAlign:'center',fontWeight:'bold'}}>{t('titre_contact')}</h1>
                    <p style={{textAlign:'center' ,fontSize:'20px'}} >{t('adresse1')}</p>  
                    <div className='m-2 ' style={{textAlign:'center',fontSize:'25px'}}><Link to=""><GiPositionMarker style={{color:'#e89059'}}/></Link>{t('adresse2')} </div>
                    <div className='d-flex justify-content-center '>
                        
                    <div className='m-2 p-3'> <Link to=""><AiTwotonePhone style={{color:'#e89059',fontSize:'25px'}} /></Link>(123)456-78-90</div>
                        <div className='m-2 p-3'><Link to=""><AiTwotonePhone style={{color:'#e89059',fontSize:'25px'}} /></Link>(123)456-78-90</div>
                    <div className='m-2 p-3'><Link to=""><MdEmail style={{color:'#e89059',fontSize:'25px'}} /> </Link>info@website.com</div> 
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
               <div className='container'>
               <iframe id="iframeId" height="300px" width="100%"></iframe>
                <iframe id="iframeId2" height="300px" width="100%"></iframe>
               </div>
                <div className='footerbottom' style={{
                    backgroundImage: `url(${back})`,
                    backgroundSize: "cover",
                    height: "40vh",
                    color: "#f5f5f5"
                    }}>
                        
                        <div className='d-flex justify-content-between p-2'>
                            <Slide bottom>
                            <div className='d-flex flex-row justify-content-space-between mt-5'>
                            <img src={logo2} style={{height:'160px',width:'160px'}} className="" alt="" />
                                <div  className='d-flex flex-column px-3'>
                                        <p style={{fontWeight:'bold',fontSize:'30px'}}>{t('titre_bulletins')} </p>
                                        <label htmlFor="">{t('sous_titre_bulletins')} </label>
                                        <input type="text" className='form-control' placeholder={t('input_bulletin')} />
                                        <button className='btn btn-dark m-1'>{t('button_bulletin')} </button>
                                </div>
                              
                            </div>
                            </Slide >
                            <div className="v-line1"></div>
                            <Slide bottom>
                            <div className='d-flex flex-column mt-5'>
                                
                                <p style={{fontWeight:'bold',fontSize:'30px'}}>{t('liens')} </p>
                                <p className='px-4'>www.siteweb.com</p>
                                <p className='px-4'>www.siteweb.com</p>
                                <p className='px-4'>www.siteweb.com</p>
                            </div>
                            </Slide>
                            <div className="v-line2"></div>
                            <Slide bottom>
                            <div className='d-flex flex-column mt-5 mx-5'>
                            <p style={{fontWeight:'bold',fontSize:'20px',textAlign:'center'}}>{t('suivre')} </p>
                                <div className='d-flex justify-content-between'>
                                   <Link to='/'><FaFacebookF style={{color:'white',fontSize:'20px'}}/> </Link>
                                   <Link to='/'><VscTwitter style={{color:'white',fontSize:'20px'}}/></Link>
                                   <Link to='/'><AiOutlineGooglePlus style={{color:'white',fontSize:'20px'}}/></Link>
                                   <Link to='/'><AiFillLinkedin style={{ color:'white',fontSize:'20px'}}/></Link>
    
                                </div>
                            </div>
                            </Slide>

                        </div>

                </div>
                
            </div>
            
        
    )
}
export default Footer