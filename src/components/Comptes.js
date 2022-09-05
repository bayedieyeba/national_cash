import React, { useState } from 'react'
import {useTranslation} from "react-i18next";
import '../components/css/compte.css'
import Fade from 'react-reveal/Fade'
import Flash from 'react-reveal/Flash';
import cc from '../images/left.png'
import Popup from "./Popup";
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
    const [buttonPopup,setButtonPopup] = useState(false)
    const handleInscrire =()=> {
        setButtonPopup(true)
    }
    const [email, setEmail] = useState("");
    const [num_tel,setNumTel] = useState("")
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonPopup(false)
  }
    return (
        <div className='comptes'>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
            <div className='formulaireService' style={{margin:0,padding:'15px'}}>
            <div  className=' body_div'>
                <form  className='form_formulaire' onSubmit={handleSubmit}>
                <h1>{t('souscrir')} </h1>

                <label>
                {t('nom_complet')}:
                    <input className=' input_form'
                    name="email"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required />
                </label>
                
                <label>
                    {t('votre_mail')}:
                    <input className='input_form'
                    name="password"
                    type="email"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required />
                </label>
                <label>
                    {t('num_tel')}:
                    <input className='input_form'
                    name="Numero_telephone"
                    type="text"
                    value={num_tel}
                    onChange={e => setNumTel(e.target.value)}
                    required />
                </label>
                <label>
                    {t('type_services')}:
                    <select
                    name="country"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    required>
                    <option > {t('compte_c')} </option>
                    <option >{t('compte_dt')} </option>
                    <option >{t('compte_ep')} </option>
                    
                    </select>
                </label>

                <label>
                    <input
                    name="acceptedTerms"
                    type="checkbox"
                    onChange={e => setAcceptedTerms(e.target.value)}
                    required />
                    {t('accepte_terme')}        
                </label>

                <button type='submit' className='button_formulaire' >{t('soumettre')} </button>
                </form>
    </div>
    </div>
              
          </Popup >
               <Fade right>
                    <div style={{color:'white'}}className="p-5" >
                        <div className="d-flex justify-content-between p-5 m-5 " style={{backgroundColor:'brosybrownlue'}}>
                                    <div className='m-4'><p style={{padding:'80px',color:'white'}} >{t('cc_partie1')}
                                    &nbsp; &nbsp;
                                    {hiddButtonCC && <button type='button' className='btn_inscrir' onClick={handleClickCC} style={{color:'white'}} >{t('lire_la_suite')}</button>}
                                    {lireSuiteCC && <div>
                                         <p>{t('cc_partie2')}</p>
                                         <a href='/souscription' className='myButton' >{t('souscription')} </a>
                                        </div>
                                    }
                                    </p> 
                                
                                </div>
                                    <div>
                                        <Flash>
                                        <div className='footerbottom' style={{
                                                backgroundImage: `url(${cc})`,
                                                backgroundSize: "cover",
                                                height:'400px',
                                                width:'400px'
                                                
                                                }}>
                                                    
                                            <p className='robot'> {t('nom_cc')} </p>
                                        
                                        </div>
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
                                  <div className='footerbottom' style={{
                                                backgroundImage: `url(${cc})`,
                                                backgroundSize: "cover",
                                                height:'400px',
                                                width:'400px'
                                                
                                                }}>
                                            <p className='robot'> {t('nom_d_a_t')} </p>
                                        
                                        </div>
                                   </Flash>
                                    </div>
                                    <div className='m-5'><p style={{padding:'40px',color:'white'}} >{t('depot_terme1')}
                                    &nbsp; &nbsp;
                                    {hiddButtonDT && <button onClick={handleClickDT} className='btn_inscrir' style={{color:'white'}} >{t('lire_la_suite')}</button>}
                                    {lireSuiteDT && <div>
                                        <p>{t('depot_terme2')}</p>
                                        <p>{t('depot_terme3')}</p>
                                        <p>{t('depot_terme4')}</p>
                                        <p>{t('depot_terme5')}</p>
                                         {/* <a href='/souscription' className='myButton'  >{t('souscription')} </a> */}
                                         <button className='myButton' onClick={handleInscrire} >{t('souscription')}</button>
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
                                        <div className='m-5'><p style={{padding:'40px',color:'white'}} >{t('plan_epargne1')}
                                        &nbsp; &nbsp;
                                        {hiddButtonCE &&  <button onClick={handleClickCE} className='btn_inscrir'style={{color:'white'}} >{t('lire_la_suite')}</button>}
                                        {lireSuiteCE && <div>
                                        <p>{t('plan_epargne1')}</p>
                                         
                                         <a href='/souscription' className='myButton' onClick={handleLireMoinsCE} >{t('souscription')}  </a>
                                        </div>
                                        }
                                        </p> 
                                    
                                    </div>
                                        <div>
                                        <Flash>
                                        <div className='footerbottom' style={{
                                                backgroundImage: `url(${cc})`,
                                                backgroundSize: "cover",
                                                height:'400px',
                                                width:'400px'
                                                
                                                }}>
                                            <p className='robot'> {t('nom_pe')} </p>
                                        
                                        </div>
                                        </Flash>
                                        </div>

                                </div>
                        </div>
                </Fade> 
                
        </div>
    )
}
export default Comptes