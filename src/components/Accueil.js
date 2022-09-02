import React, { useState } from 'react'
import Activites from './Activites';
import Comptes from './Comptes';
import Footer from './Footer';
import FormulaireSouscription from './FormulaireSouscription';

import Personnages from './Personnages';
import Slider from './Slider';
import Testimonial from './slides/Testimonial';

function Accueil() {
   
    return (
      <div className=''>
        {/* <Slider /> */}
        <Testimonial />
         {/* <Activites /> */}
         <Comptes />
         <Personnages />
         <FormulaireSouscription />
        <Footer />
      </div>
      
    )
}

export default Accueil