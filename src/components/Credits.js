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
const Credits = () => {
    
    return (
        <>
                <div 
                    style={{backgroundImage: `url(${backService})`
                    }}>
                    
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