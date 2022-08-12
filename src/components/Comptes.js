import React from 'react'
import background from '../images/background.png';
import CompteCourant from './CompteCourant';
import DepotAtemps from './DepotAtemps';
import PlanEpargne from './PlanEpargne';
const Comptes = () => {
    return (
        <div style={{backgroundImage: `url(${background})`,
                        padding:"100px",
                        backgroundSize: "cover",
                        height: "300vh",
                        color: "#f5f5f5"}}>
                   <div style={{color:'white'}}>
                        <CompteCourant />
                   </div>
                    <div style={{color:'white'}}>
                        <DepotAtemps />
                    </div>
                    <div style={{color:'white'}}>
                        <PlanEpargne />
                   </div>  
        </div>
    )
}
export default Comptes