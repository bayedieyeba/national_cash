import React from 'react'
import {useTranslation} from "react-i18next";
import './css/formulaire.css'
import './css/button.css'
import { t } from 'i18next';
const FormulaireSouscription = () => {
    const {t} =useTranslation()
    return (
        <div className='formulaire'>
             <h1 className='p-5' style={{textAlign:'center',color:'white'}}>{t('demande_souscription')} </h1> 
             
                    <div className="row m-4">
                        <div className="col">
                            
                            <div className="form-outline">
                                <input type="text"  className="form-control" placeholder={t('nom_complet')} />
                                
                            </div>
                            </div>
                            <div className="col">
                                
                            <div className="form-outline" style={{widows:'50px'}}>
                                <input type="email"  className="form-control" placeholder={t('votre_mail')} />
                                
                            </div>
                            </div>
                            <div className="col">
                                
                            <div className="form-outline">
                                <input type="text"  className="form-control" placeholder={t('num_tel')} />
                            </div>
                            
                           </div>
                           <div className="col">
                                <button className='btn-76'>
                                   <span className='right m-3'>{t('button_souscription')}</span> 
                                </button>
                           </div>
                    </div>
                <p className='p-4 mr-3' style={{textAlign:'center',fontSize:'20px',color:'white'}}>{t('sous_titre_souscription')}</p>
        </div>
    )
}
export default FormulaireSouscription