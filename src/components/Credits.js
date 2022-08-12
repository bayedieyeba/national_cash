import React from 'react'
import CreditAvanceSalire from './CreditAvanceSalaire';
import CreditBayit from './CreditBayit';
import CreditBidaya from './CreditBidaya';
import CreditEquipmentS from './CreditEquipmentS';
import CreditMaw from './CreditMew';
import CreditNoujoun from './CreditNoujoun';
import CreditTakaful from './CreditTakaful';
import Footer from './Footer';
const Credits = () => {
    
    return (
        <>
                <div style={{
                    padding:"50px",
                    backgroundColor:"rgb(179, 119, 76)"
                    }}>
                    
                            <CreditMaw />
                            <hr />
                            <CreditNoujoun />
                            <hr />
                            <CreditBayit /> 
                            <hr />
                            <CreditBidaya />
                            <hr />
                            <CreditTakaful />
                            <hr />
                            <CreditEquipmentS />
                            <hr />
                            <CreditAvanceSalire />
                </div>
            <Footer />
        </>
    )
}
export default Credits