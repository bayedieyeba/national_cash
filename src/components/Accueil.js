import React, { useState } from 'react'
import Activites from './Activites';
import Comptes from './Comptes';
import Footer from './Footer';
import FormulaireSouscription from './FormulaireSouscription';
import Slider from './Slider';

function Accueil() {
   
    return (
      <div>
        <div className=''></div>
             <Slider />
             <Activites />
              <Comptes />
              <FormulaireSouscription />
              <Footer />
      </div>
    )
}

export default Accueil