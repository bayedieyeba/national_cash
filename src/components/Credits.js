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
const Credits = () => {
    
    return (
        <>
                <div className='credits'>
                    
                            <CreditMaw />
                            
                            <CreditNoujoun />
                            
                            <CreditBayit /> 
                            
                            <CreditBidaya />
                            
                            <CreditTakaful />
                            
                            <CreditEquipmentS />
                            
                            <CreditAvanceSalire />
                </div>
            <Footer />
        </>
    )
}
export default Credits