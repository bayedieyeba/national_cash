import React, { useEffect, useState } from 'react'
import i18next from "i18next";
import cookies from "js-cookie";
import {useTranslation} from "react-i18next";
import './css/Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import nc from '../images/nc.png';
import logo1 from '../images/logo1.png';
import { Link } from 'react-router-dom';
import { Opacity } from '@material-ui/icons';
import axios from 'axios';

const languages = [
    {
        code: 'fr',
        name :'Français',
        country_code: 'fr'
    },
    {
        code: 'en',
        name :'English',
        country_code: 'gb'
    },
    {
        code: 'ar',
        name :'العربية',
        country_code: 'sa',
        dir: 'rtl'
    },
]
const GlobeIcon = ({width =24, height=24}) =>(
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
</svg>
)
const Header = () => {
    const {t} =useTranslation()
    const [url,setUrl] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:4000/get-image-logo`)
        .then(res=>{
          console.log("Status: ", res.status);
          setUrl(res.data)
          console.log(url)
         
        })
        .catch(err=>{
          console.log(err)
        })
    
    },[])
    const currentLanguageCode = cookies.get('i18next') || 'fr'
    const currentLanguage = languages.find((l) => l.code ===currentLanguageCode)
    useEffect(()=>{
        document.body.dir = currentLanguage.dir || 'ltr'
    }, [currentLanguage])
    const [show, setShow] =useState(true)
  return (
    <div className=''>
           <nav className="fixed-top  navbar navbar-expand-lg navbar-dark bg-white py-1 p-1">
                <div className="container ">
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-start'>
                                    <div className='d-flex justify-content-between mx-4'>
                                        <div className='d-flex flex-column  m-2'>
                                            <p style={{color:'#003d6a', fontWeight:'bold'}}>{t('titre_logo')} </p>
                                            <img src={nc} style={{height:'40px',width:'230px'}} alt="" />
                                        </div>
                                        
                                    </div>
                                    
                            </div>
                                <div className='mx-5'></div>
                                
                                <div className='d-flex justify-content-end mx-5 ' >
                                
                                     {
                                        url.map((image,i)=>(
                                        <div>
                                        <img  src={`http://localhost:4000/images/${image.url}`}  style={{height:'100px',width:'110px'}} alt="" />
                                        </div>
                                        ))
                                     }
                                </div >
                        </div>
                        
                                <button className="navbar-toggler border border-info text-info" 
                                onClick={ ()=> setShow(!show)  } >
                                    {show ? <MenuIcon /> : <CloseIcon />}
                                </button>
                                
                                
                                
                                 <div className={show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link text-light" to="/"> <i className='btn_header' >{t('accueil')}</i> </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-light" to="/services"> <i className='btn_header'>{t('nos_services')}</i> </Link>
                                        </li>
                                        <li className="nav-item" >
                                            <Link className="nav-link text-light" to="/credits" ><i className='btn_header' >{t('nos_credit')}</i> </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-light" to="/cashily"  > <i className='btn_header'  >{t(('cashily'))}</i> </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-light" to="/contacts" > <i className='btn_header'>{t('contact')} </i></Link>
                                        </li>
                                        <li className='m-1'>
                                            <div className='dropdown'>
                                                    <button className='btn btn-link dropdown-toggle'
                                                    type='button'
                                                    id='dropdownMenuButton1'
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded ="false"
                                                    style={{color:'#003d6a'}}
                                                    >
                                                            <GlobeIcon  />
                                                    </button>
                                                    <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                                                        {/* <li className='dropdown-item-text' >{t(['langue'])} </li> */}
                                                        {languages.map(({code,name,country_code})=>(

                                                            <li key={country_code}>
                                                                <button className='dropdown-item' onClick={()=>i18next.changeLanguage(code)} disabled={code===currentLanguageCode}>
                                                                    {/* <span className={`flag-icon flag-icon-${country_code} max-2`}
                                                                    style={{opacity: code===currentLanguageCode ? 0.5 :1}}>

                                                                    </span> */}
                                                                    {name}
                                                                </button>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                        </li>
                                    </ul>
                                </div>
                    </div>
            </nav>
    </div>
  )
}

export default Header