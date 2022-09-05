import React from 'react'
import CreditAvanceSalire from './credits/CreditAvanceSalaire';
import CreditBayit from './credits/CreditBayit';
import CreditBidaya from './credits/CreditBidaya';
import CreditEquipmentS from './credits/CreditEquipmentS';
import CreditMaw from './credits/CreditMew';
import CreditNoujoun from './credits/CreditNoujoun';
import CreditTakaful from './credits/CreditTakaful';
import Footer from './Footer';
import backService from '../images/backCredit.png';
import './css/credits.css'
import Fade from 'react-reveal/Fade'
import FormulaireSouscription from './FormulaireSouscription';

const Credits = () => {
    
    return (
        <>
            <div className='credits'>
                    <Fade right>
                            <CreditMaw />
                    </Fade> 

                    <Fade left>  
                            <CreditNoujoun />
                    </Fade> 
                    <Fade right> 
                            <CreditBayit /> 
                    </Fade> 
                    <Fade left>    
                            <CreditBidaya />
                    </Fade> 
                    <Fade right>  
                            <CreditTakaful />
                    </Fade>  
                    <Fade left>  
                            <CreditEquipmentS />
                    </Fade> 
                    <Fade right>     
                            <CreditAvanceSalire />
                    </Fade>

            </div>
            <FormulaireSouscription /> 
            <Footer />
        </>
    )
}
export default Credits