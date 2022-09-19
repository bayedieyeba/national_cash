import React from 'react'
import './css/popup.css'

function PopPup(props) {
  return (props.trigger)? ( 
    <div className='popup'>
        <div className="popup-inner">
            <button className="close-btn close" onClick={()=> props.setTrigger(false)} style={{marginRight:'20px'}} >X</button>
            {props.children}
        </div>
    </div>
  ): "";
}

export default PopPup