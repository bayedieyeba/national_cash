import React, { useState } from 'react'
import depotATerme from '../images/depotAterme.png';
import compteCourant from '../images/cc.png';
import epargne from '../images/epargne.png';
import '../components/css/compte.css'
const Comptes = () => {
    const [lireSuite,setLireSuite] = useState(false)
    const [hiddButton,setHiddButton] = useState(true)
    const handleClick = () => {
        setHiddButton(false)
        setLireSuite(true)
    }
    return (
        <div className='comptes'>
                   <div style={{color:'white'}}>
                    <div className="d-flex justify-content-between p-4 mt-2 " style={{backgroundColor:'brosybrownlue'}}>
                                <div className=''><p style={{padding:'100px',color:'white'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                {hiddButton && <button onClick={handleClick} style={{color:'blue'}}>LIRE LA SUITE</button>}
                                {lireSuite && <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
                                {hiddButton && <button onClick={handleClick} style={{color:'blue'}}>LIRE LA SUITE</button>}
                                {lireSuite && <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                }
                                </p> 
                            
                            </div>

                        </div>
                   </div>
                   <div style={{color:'white'}}>
                    <div className="d-flex justify-content-between p-5 mt-5 " style={{backgroundColor:'brosybrownlue'}}>
                                <div className=''><p style={{padding:'100px',color:'white'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                {hiddButton && <button onClick={handleClick} style={{color:'blue'}}>LIRE LA SUITE</button>}
                                {lireSuite && <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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