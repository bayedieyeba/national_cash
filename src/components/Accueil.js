import React, { useState } from 'react'
import Activites from './Activites';
import Comptes from './Comptes';
import Footer from './Footer';
import FormulaireSouscription from './FormulaireSouscription';
import Slider from './Slider';

function Accueil() {
   
    return (
      <>
        <Slider />
         <Activites />
         <Comptes />
         <FormulaireSouscription />
        <Footer />
      </>
    )
}

export default Accueil