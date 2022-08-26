import React from 'react'
import CreditAvanceSalire from './CreditAvanceSalaire';
import CreditBayit from './CreditBayit';
import CreditBidaya from './CreditBidaya';
import CreditEquipmentS from './CreditEquipmentS';
import CreditMaw from './CreditMew';
import CreditNoujoun from './CreditNoujoun';
import CreditTakaful from './CreditTakaful';
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