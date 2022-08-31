import React, { useState } from 'react'
import {useTranslation} from "react-i18next";
import cas from '../images/left.png'
const CreditAvanceSalire = () => {
    const {t} =useTranslation()
    const [lireSuite,setLireSuite] = useState(false)
    const [hiddButton,setHiddButton] = useState(true)
    const handleClick = () => {
        setHiddButton(false)
        setLireSuite(true)
    }
        return(
            <div className="d-flex justify-content-between p-5 mt-5 " style={{backgroundColor:'brosybrownlue'}}>
                            <div className=''><p style={{padding:'60px',color:'rgb(5, 5, 125)'}} > {t('description1_avance_salaire')}
                            {hiddButton && <button onClick={handleClick} className='myButton'>LIRE LA SUITE</button>}
                            {lireSuite &&
                            <div>
                                <p>{t('description2_avance_salaire')} </p>
                            </div> 
                            }
                            </p> 
                           
                           </div>
                            <div className='m-4'>
                            <div className='footerbottom' style={{
                                                backgroundImage: `url(${cas})`,
                                                backgroundSize: "cover",
                                                height:'400px',
                                                width:'400px'
                                                
                                                }}>
                                            <p style={{textAlign:'center',padding:'85px', fontSize :'40px',  fontFamily:'Roboto',fontWeight:'bold' ,color:'#003d6a'}}> {t('nom_credit_avance_salaire')} </p>
                                        
                                        </div>
                             
                            </div>

                    </div>
        )
        
      }
export default CreditAvanceSalire