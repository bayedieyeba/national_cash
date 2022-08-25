import React, { useState } from 'react'
import depotATerme from '../images/depotAterme.png';
import compteCourant from '../images/cc.png';
import epargne from '../images/epargne.png';
import '../components/css/compte.css'
const Comptes = () => {
    const [lireSuiteCC,setLireSuiteCC] = useState(false)
    const [hiddButtonCC,setHiddButtonCC] = useState(true)

    const [lireSuiteDT,setLireSuiteDT] = useState(false)
    const [hiddButtonDT,setHiddButtonDT] = useState(true)

    const [lireSuiteCE,setLireSuiteCE] = useState(false)
    const [hiddButtonCE,setHiddButtonCE] = useState(true)
    const handleClickCC = () => {
        setHiddButtonCC(false)
        setLireSuiteCC(true)
    }
    const handleClickCE =() =>{
        setHiddButtonCE(false)
        setLireSuiteCE(true)
    }
    const handleClickDT =() =>{
        setHiddButtonDT(false)
        setLireSuiteDT(true)
    }
    return (
        <div className='comptes'>
                   <div style={{color:'white'}}>
                    <div className="d-flex justify-content-between p-4 mt-2 " style={{backgroundColor:'brosybrownlue'}}>
                                <div className=''><p style={{padding:'100px',color:'white'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                {hiddButtonCC && <button onClick={handleClickCC} style={{color:'blue'}}>LIRE LA SUITE</button>}
                                {lireSuiteCC && <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                }
                                </p> 
                            
                            </div>
                                <div>
                                    <img src={compteCourant} style={{height:'400px',width:'400px',display: 'block;',marginLeft:' auto;', marginRight: 'auto;'}} alt="" />
                                
                                </div>

                        </div>
                   </div>
                   <div style={{color:'white'}}>
                    <div className="d-flex justify-content-between p-5 mt-1 " style={{backgroundColor:'brosybrownlue'}}>
                    <div>
                                    <img src={depotATerme} style={{height:'400px',width:'400px',display: 'block;',marginLeft:' auto;', marginRight: 'auto;'}} alt="" />
                                
                                </div>
                                <div className=''><p style={{padding:'100px',color:'white'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                {hiddButtonDT && <button onClick={handleClickDT} style={{color:'blue'}}>LIRE LA SUITE</button>}
                                {lireSuiteDT && <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                }
                                </p> 
                            
                            </div>

                        </div>
                   </div>
                   <div style={{color:'white'}}>
                    <div className="d-flex justify-content-between p-5 mt-5 " style={{backgroundColor:'brosybrownlue'}}>
                                <div className=''><p style={{padding:'100px',color:'white'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                {hiddButtonCE && <button onClick={handleClickCE} style={{color:'blue'}}>LIRE LA SUITE</button>}
                                {lireSuiteCE && <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                }
                                </p> 
                            
                            </div>
                                <div>
                                    <img src={epargne} style={{height:'400px',width:'400px',display: 'block;',marginLeft:' auto;', marginRight: 'auto;'}} alt="" />
                                
                                </div>

                        </div>
                   </div>
                    
        </div>
    )
}
export default Comptes