import React, { useState } from 'react'
import {useTranslation} from "react-i18next";
import depotATerme from '../images/depotAterme.png';
import compteCourant from '../images/cc.png';
import epargne from '../images/epargne.png';
import '../components/css/compte.css'
import Fade from 'react-reveal/Fade'
import Flash from 'react-reveal/Flash';
const Comptes = () => {
    const {t} =useTranslation()
    const [lireSuiteCC,setLireSuiteCC] = useState(false)
    const [hiddButtonCC,setHiddButtonCC] = useState(true)

    const [lireSuiteDT,setLireSuiteDT] = useState(false)
    const [hiddButtonDT,setHiddButtonDT] = useState(true)

    const [lireSuiteCE,setLireSuiteCE] = useState(false)
    const [hiddButtonCE,setHiddButtonCE] = useState(true)
    const handleClickCC = () => {
        setHiddButtonCC(false)
        setLireSuiteCC(true)
    }
    const handleLireMoinsCC = () => {
        setHiddButtonCC(true)
        setLireSuiteCC(false)
    }
    const handleClickCE =() =>{
        setHiddButtonCE(false)
        setLireSuiteCE(true)
    }
    const handleLireMoinsCE =() => {
        setHiddButtonCE(true)
        setLireSuiteCE(false)
    }
    const handleClickDT =() =>{
        setHiddButtonDT(false)
        setLireSuiteDT(true)
    }
    const handleLireMoinsDT =() => {
        setHiddButtonDT(true)
        setLireSuiteDT(false)
    }
    return (
        <div className='comptes'>
               <Fade right>
                    <div style={{color:'white'}}className="p-5" >
                        <div className="d-flex justify-content-between p-5 m-5 " style={{backgroundColor:'brosybrownlue'}}>
                                    <div className=''><p style={{padding:'80px',color:'white'}} >{t('loremPartie1')}
                                    {hiddButtonCC && <button type='button' className='myButton' onClick={handleClickCC} >{t('lire_la_suite')}</button>}
                                    {lireSuiteCC && <div>
                                         <p>{t('loremPartie2')}</p>
                                         <p>{t('loremPartie2')}</p>
                                         <p>{t('loremPartie2')}</p>
                                         <p>{t('loremPartie2')}</p>
                                         <p>{t('loremPartie2')}</p>
                                         <p>{t('loremPartie2')}</p>
                                         <button className='myButton' onClick={handleLireMoinsCC} >{t('lire_moins')} </button>
                                        </div>
                                    }
                                    </p> 
                                
                                </div>
                                    <div>
                                        <Flash>
                                        <img src={compteCourant} style={{height:'400px',width:'400px',display: 'block;',marginLeft:' auto;', marginRight: 'auto;'}} alt="" />
                                        </Flash>
                                    </div>

                            </div>
                    </div>
                </Fade>
                <Fade left>
                    <div style={{color:'white'}} className="p-5" >
                        <div className="d-flex justify-content-between p-5 " style={{backgroundColor:'brosybrownlue'}}>
                        <div>
                                  <Flash>
                                        <img src={depotATerme} style={{height:'400px',width:'400px',display: 'block;',marginLeft:' auto;', marginRight: 'auto;'}} alt="" />
                                   </Flash>
                                    </div>
                                    <div className=''><p style={{padding:'40px',color:'white'}} >{t('loremPartie1')}
                                    {hiddButtonDT && <button onClick={handleClickDT} className='myButton'>{t('lire_la_suite')}</button>}
                                    {lireSuiteDT && <div>
                                        <p>{t('loremPartie2')}</p>
                                         <p>{t('loremPartie2')}</p>
                                         <p>{t('loremPartie2')}</p>
                                         <p>{t('loremPartie2')}</p>
                                         <p>{t('loremPartie2')}</p>
                                         <p>{t('loremPartie2')}</p>
                                         <button className='myButton' onClick={handleLireMoinsDT} >{t('lire_moins')} </button>
                                        </div>
                                    }
                                    </p> 
                                
                                </div>

                            </div>
                    </div>
                </Fade>
                <Fade right>
                        <div style={{color:'white'}} className="p-5"  >
                            <div className="d-flex justify-content-between p-5 " style={{backgroundColor:'brosybrownlue'}}>
                                        <div className=''><p style={{padding:'40px',color:'white'}} >{t('loremPartie1')}
                                        {hiddButtonCE && <button onClick={handleClickCE} className='myButton'>{t('lire_la_suite')}</button>}
                                        {lireSuiteCE && <div>
                                        <p>{t('loremPartie2')}</p>
                                         <p>{t('loremPartie2')}</p>
                                         <p>{t('loremPartie2')}</p>
                                         <p>{t('loremPartie2')}</p>
                                         <p>{t('loremPartie2')}</p>
                                         <p>{t('loremPartie2')}</p>
                                         <button className='myButton' onClick={handleLireMoinsCE} >{t('lire_moins')} </button>
                                        </div>
                                        }
                                        </p> 
                                    
                                    </div>
                                        <div>
                                        <Flash>
                                            <img src={epargne} style={{height:'400px',width:'400px',display: 'block;',marginLeft:' auto;', marginRight: 'auto;'}} alt="" />
                                        </Flash>
                                        </div>

                                </div>
                        </div>
                </Fade> 
        </div>
    )
}
export default Comptes