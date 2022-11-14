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
import { useState } from 'react';
import axios from 'axios';



//AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI
const Footer = () => {
    const {t} =useTranslation()

        const positions = [
            
            {"id":1, lat:18.082516,lng:-15.980804},
            {"id":2,lat:18.069022,lng:-15.909039},
            {"id":3,lat:18.089619,lng : -15.976678},
           
        ]
        var iframeIds = []
        const [urls,setUrls] = useState([])
        useEffect(()=>{
          axios.get(`http://localhost:4000/get-agent`)
          .then(res=>{
            console.log("Status: ", res.status);
            setUrls(res.data)
            console.log(urls)
           
          })
          .catch(err=>{
            console.log(err)
          })
  
      },[])
      
    //const [iframeId,setIframeId] = useState([])
    var liens = []
    useEffect(()=>{
        for (let index = 0; index < urls.length; index++) {
            iframeIds.push(`iframeId${index}`)
             
         }   
         for (let index = 0; index < iframeIds.length; index++) {
             const ifameData = document.getElementById(`${iframeIds[index]}`);
               //`${urls[index]['url']}`;
           
         }  
         
   
    })

    // useEffect(()=>{
        
    //     const ifameData=document.getElementById("iframeId")
    //     const lat=18.081594;
    //     const lon= -15.976268;
    //     ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    //     console.log(ifameData)
    //     const ifameData2=document.getElementById("iframeId2")
    //     const lat2=18.082516;
    //     const lon2= -15.980804;
    //     ifameData2.src=`https://maps.google.com/maps?q=${lat2},${lon2}&hl=es;&output=embed`
        
    //     const ifameData3=document.getElementById("iframeId3")
    //     const lat3=18.069022;
    //     const lon3= -15.909039;
    //     ifameData3.src=`https://maps.google.com/maps?q=${lat3},${lon3}&hl=es;&output=embed`
    //     const ifameData4=document.getElementById("iframeId4")
    //     const lat4=18.089619;
    //     const lon4= -15.976678;
    //     ifameData4.src=`https://maps.google.com/maps?q=${lat4},${lon4}&hl=es;&output=embed`
    //     const ifameData5=document.getElementById("iframeId5")
         
    //     const lat5=20.942067;
    //     const lon5= -17.038903;
    //     ifameData5.src=`https://maps.google.com/maps?q=${lat5},${lon5}&hl=es;&output=embed`
   
    // })

    return (
      
            <div className='footer'  style={{
                color: "#f5f5f5",
                
                }}>
                
                    <div className='p-4 ' style={{backgroundImage: `url(${backService})`,padding:''}}>
                    <Fade right>
                    <h1 style={{textAlign:'center',fontWeight:'bold'}}>{t('titre_contact')}</h1>
                    <p style={{textAlign:'center' ,fontSize:'20px'}} >{t('adresse1')}</p>  
                    <div className='m-2 ' style={{textAlign:'center',fontSize:'20px'}}><Link to=""><GiPositionMarker style={{color:'#e89059',fontSize:'25px'}}/></Link> {t('adresse_service')} </div>
                    <div className='d-flex justify-content-center '>
                        
                    <div className='m-2 p-3'> <Link to=""><AiTwotonePhone style={{color:'#e89059',fontSize:'25px'}} /></Link>{t('num_service_1')} </div>
                        <div className='m-2 p-3'><Link to=""><AiTwotonePhone style={{color:'#e89059',fontSize:'25px'}} /></Link>{t('num_service_2')}</div>
                    <div className='m-2 p-3'><Link to=""><MdEmail style={{color:'#e89059',fontSize:'25px'}} /> </Link>{t('email_service')}</div> 
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
{/*                         
                                <div className='m-1'> 
                                    <div className='card' style={{backgroundColor:"#e89059"}}>
                                        <p style={{color:'black',textAlign:'center',fontSize:'21px',fontFamily:'Roboto,sans-serif'}} className=" m-1">Agence CENTRALE</p>
                                        <p style={{textAlign:'center', color:'black'}}>{t('num_agent_central')}</p>
                                    <iframe id="iframeId" height="180px" width="200%" > </iframe>
                                    </div>
                                </div>
                                <div className='m-1'> 
                                <div className='card' style={{backgroundColor:"#e89059"}}>
                                        <p style={{color:'black',textAlign:'center',fontSize:'21px',fontFamily:'Roboto,sans-serif'}} className=" m-1">Agence CHARBON </p>
                                        <p style={{textAlign:'center', color:'black'}}>{t('num_agent_charbon')}</p>
                                    <iframe id="iframeId2" height="180px" width="200%"></iframe>
                                </div>  
                                </div>
                                <div className='m-1'> 
                                <div className='card' style={{backgroundColor:"#e89059"}}>
                                        <p style={{color:'black',textAlign:'center',fontSize:'21px',fontFamily:'Roboto,sans-serif'}} className=" m-1">Agence TOUJOUNI</p>
                                        <p style={{textAlign:'center', color:'black'}}>{t('num_agent_toujouni')}</p>
                                    <iframe id="iframeId3" height="180px" width="200%"></iframe>
                                    </div>
                                </div>
                                <div className='m-1'> 
                                <div className='card' style={{backgroundColor:"#e89059"}}>
                                        <p style={{color:'black',textAlign:'center',fontSize:'21px',fontFamily:'Roboto,sans-serif'}} className=" m-1">Agence POINT CHAUD</p>
                                        <p style={{textAlign:'center', color:'black'}}>{t('num_agant_point_chaud')}</p>
                                    <iframe id="iframeId4" height="180px" width="200%"></iframe>
                                    </div>
                                </div>
                                <div className='m-1'> 
                                <div className='card' style={{backgroundColor:"#e89059"}}>
                                        <p style={{color:'black',textAlign:'center',fontSize:'21px',fontFamily:'Roboto,sans-serif'}} className=" m-1">NOUADHIBOU</p>
                                        <p style={{textAlign:'center', color:'black'}}>{t('num_agant_nouadhibou')}</p>
                                    <iframe id="iframeId5" height="180px" width="200%"></iframe>
                                    </div>
                                </div> */}
                                {
                                    urls.map((url)=>(
                                        <div className='m-1'> 
                                <div className='card' style={{backgroundColor:"#e89059"}}>
                                        <p style={{color:'black',textAlign:'center',fontSize:'21px',fontFamily:'Roboto,sans-serif'}} className=" m-1">{url["nom"]} </p>
                                        <p style={{textAlign:'center', color:'black'}}>{url["phone"]} </p>
                                        <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src={url.url} ></iframe>
                                    </div>
                                </div>
                                    ))
                                }
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
                  
                            <Slide bottom>
                            <div className='d-flex flex-column mt-4 mx-4'>
                            <p   style={{fontWeight:'bold',fontSize:'20px',textAlign:'center', marginLeft:'40px'}}>{t('suivre')} </p>
                                <div className='d-flex justify-content-between'>
                                   <a href={t('lien_faceBook')}><FaFacebookF style={{color:'white',fontSize:'20px'}}/> </a>
                                   <a href={t('lien_instagram')}><AiFillInstagram style={{color:'white',fontSize:'20px'}}/></a>
                                   <a href={t('lien_snap')} ><BsSnapchat style={{color:'white',fontSize:'20px'}}/></a>
                                   <a href={t('lien_linkdin')} ><AiFillLinkedin style={{ color:'white',fontSize:'20px'}}/></a>
    
                                </div>
                            </div>
                            </Slide>

                        </div>

                </div>
                
            </div>
            
        
    )
}
export default Footer