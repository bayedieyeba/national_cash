import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ModifierContenuCredit = () => {
 
  return (
    <div style={{margin:"270px"}}>
      <button className="btn btn-primary m-3">
            <Link to='/modifier-credit-francais' style={{color:"white"}}>modifier contenu credit francais</Link>
      </button>
      <button className="btn btn-primary m-3">
            <Link to='/modifier-credit-anglais' style={{color:"white"}}>modifier contenu credit anglais</Link>
      </button>
      <button className="btn btn-primary m-3">
            <Link to='/modifier-credit-arabe' style={{color:"white"}}>modifier contenu credit arabe</Link>
      </button>
    </div>
  )
}

export default ModifierContenuCredit