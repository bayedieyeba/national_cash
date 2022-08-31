import React, { useState } from 'react'
import Activites from './Activites';
import Comptes from './Comptes';
import Footer from './Footer';
import FormulaireSouscription from './FormulaireSouscription';
import Mission from './Mission';
import Slider from './Slider';

function Accueil() {
   
    return (
      <div className=''>
        <Slider />
         {/* <Activites /> */}
         <Comptes />
         <Mission />
         <FormulaireSouscription />
        <Footer />
      </div>
    )
}

export default Accueil