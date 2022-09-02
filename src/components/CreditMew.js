import React, { useState } from 'react'
import {useTranslation} from "react-i18next";

import cm from '../images/left.png'
const CreditMaw = () => {
    const {t} =useTranslation()
    const [lireSuite,setLireSuite] = useState(false)
    const [hiddButton,setHiddButton] = useState(true)
    const handleClick = () => {
        setHiddButton(false)
        setLireSuite(true)
    }

        return(
            <div className='p-5'>
                <div className="d-flex justify-content-between p-5 m-5 " >
                            <div className='m-4'><p style={{padding:'40px', color:'#003d6a'}} >{t('description1_mewelny')}
                            &nbsp; &nbsp;
                            {hiddButton && <button onClick={handleClick} className='btn_inscrir' style={{color:'white'}} >LIRE LA SUITE</button>}
                            {lireSuite && <div>
                                        <p>{t('description2_mewelny')} </p>
                                        
                                        </div>}
                            </p> 
                           
                           </div>
                            <div className='m-2'>
                            <div className='footerbottom' style={{
                                                backgroundImage: `url(${cm})`,
                                                backgroundSize: "cover",
                                                height:'400px',
                                                width:'400px',
                                                }}>
                                            <p style={{textAlign:'center',padding:'85px', fontSize :'40px',  fontFamily:'Roboto, sans-serif',fontWeight:'bold' ,color:'#003d6a'}}> {t('nom_credit_mewelny')} </p>
                                        
                                        </div>
                                {/* <img src={creditMaw} style={{height:'400px',width:'400px',display: 'block;',marginLeft:' auto;', marginRight: 'auto;'}} alt="" /> */}
                             
                            </div>

                    </div>
            </div>
        )
        
      }
export default CreditMaw