import React, { useState } from 'react'
import creditMaw from '../images/creditMaw.png';
const CreditMaw = () => {
    const [lireSuite,setLireSuite] = useState(false)
    const [hiddButton,setHiddButton] = useState(true)
    const handleClick = () => {
        setHiddButton(false)
        setLireSuite(true)
    }
        return(
            <div className="d-flex justify-content-between p-3 m-5 " >
                            <div className=''><p style={{padding:'100px', color:'rgb(5, 5, 125)'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            {hiddButton && <button onClick={handleClick} style={{color:'blue'}}>LIRE LA SUITE</button>}
                            {lireSuite && <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            }
                            </p> 
                           
                           </div>
                            <div>
                                <img src={creditMaw} style={{height:'400px',width:'400px',display: 'block;',marginLeft:' auto;', marginRight: 'auto;'}} alt="" />
                             
                            </div>

                    </div>
        )
        
      }
export default CreditMaw