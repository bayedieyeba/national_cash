import React, { useState } from 'react'
import {useTranslation} from "react-i18next";
import ces from '../../images/left.png'

const CreditEquipmentS = () => {
    const {t} =useTranslation()
    const [lireSuite,setLireSuite] = useState(false)
    const [hiddButton,setHiddButton] = useState(true)
    const handleClick = () => {
        setHiddButton(false)
        setLireSuite(true)
    }
        return(
            <div className="d-flex justify-content-between p-5 mt-5 " style={{backgroundColor:'brosybrownlue'}}>
                            <div className='m-4'>
                            <div className='footerbottom' style={{
                                                backgroundImage: `url(${ces})`,
                                                backgroundSize: "cover",
                                                height:'400px',
                                                width:'400px'
                                                
                                                }}>
                                            <p style={{textAlign:'center',padding:'75px', fontSize :'40px',  fontFamily:'Roboto ,sans-serif',fontWeight:'bold' ,color:'#003d6a'}}> {t('nom_credit_equipement')} </p>
                                        
                                        </div>
                                {/* <img src={creditEquip} style={{height:'400px',width:'400px',display: 'block;',marginLeft:' auto;', marginRight: 'auto;'}} alt="" /> */}
                             
                            </div>
                            <div className='m-4'><p style={{padding:'60px',color:'#003d6a'}} > {t('description1_equipement')}
                            &nbsp; &nbsp;
                            {hiddButton && <button onClick={handleClick} className='btn_inscrir'  style={{color:'white'}} >LIRE LA SUITE</button>}
                            {lireSuite && 
                            <div>
                             <p>{t('description2_equipement')} </p>
                             <p>{t('description3_equipement')} </p>
                             <p>{t('description4_equipement')} </p>
                             <p>{t('description5_equipement')} </p>
                             <p>{t('description6_equipement')} </p>
                             <p>{t('description7_equipement')} </p>
                             <p>{t('description8_equipement')} </p>
                            </div>
                             }
                            </p> 
                           
                           </div>
                            

                    </div>
        )
        
      }
export default CreditEquipmentS