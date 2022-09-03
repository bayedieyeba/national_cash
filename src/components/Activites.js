import React from 'react'
import {useTranslation} from "react-i18next";
import './css/activites.css'
import Spin from 'react-reveal/Spin';
import Bounce from 'react-reveal/Bounce';
const Activites = () => {
    const {t} =useTranslation()
    return (
        <div 
         className='row justify-content-center custom-line p-4  '>
            <Bounce top>
                <h1 className=' ' style={{textAlign:'center',color:'white'}} >{t('titre_valeur')} </h1>
            </Bounce>
                <Spin>
               <div className='col-1 m-4 p-5 '>
                    <div className="circle">{t('rigueur')} </div>
                </div>
                </Spin>
                <Spin>
                <div className='col-1 m-4 p-5'>
                    <div className="circle">{t('equite')} </div>
                </div> 
                </Spin>
                <Spin>
                <div className='col-1 m-4 p-5'>
                    <div className="circle">{t('excellence')}</div>
                </div>
                </Spin>
                <Spin>
                <div className='col-3 m-4 p-5'>
                    <div className="circle">{t('respect')}</div>
                </div>
                </Spin>
            <Bounce bottom > 
                <p  style={{fontSize:'18px', fontWeight:'bold',color:'white' ,textAlign:'center'}}>{t('sous_titre_activite')} </p>
            </Bounce>
        </div>
    )
}
export default Activites