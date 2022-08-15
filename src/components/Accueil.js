import React, { useState } from 'react'
import back from '../images/back.png';
import Activites from './Activites';
import Comptes from './Comptes';
import Footer from './Footer';
import FormulaireSouscription from './FormulaireSouscription';

function Accueil() {
      const paragraphs = [
            {id:0, value:"National Cash (NC), est une société anonyme de microfinace Mauritan enne agréée par la Banque Centrale de Mauritanie BCM.Créée en Février 2018,leader dans le secteur de la microfinance en Mauritanie, NC a pour objectif de favoriser l'inclusion économique et sociale des populations vulérable(notamment les femmes, les jeunes et les populations rurales) et de contribuer au développement économique du pays. Elle œuvre en particulier pour la promotion de l'entreprenariat et contribue ainsi à l'effort national pour la promotion de l'auto-emploi des jeunes et des femmes dans les quariers et les zones rurales défavorisées."},
            {id:1, value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa."},
            {id:2,value:"balbalabalabalabla, est une société anonyme de microfinace Mauritan enne agréée par la Banque Centrale de Mauritanie BCM.Créée en Février 2018,leader dans le secteur de la microfinance en Mauritanie, NC a pour objectif de favoriser l'inclusion économique et sociale des populations vulérable(notamment les femmes, les jeunes et les populations rurales) et de contribuer au développement économique du pays. Elle œuvre en particulier pour la promotion de l'entreprenariat et contribue ainsi à l'effort national pour la promotion de l'auto-emploi des jeunes et des femmes dans les quariers et les zones rurales défavorisées."}
        ]
        const [paragraph, setParagraph] = useState([paragraphs[0].value])
        const handleClick=(index)=>{
            const paragraphSlider = paragraphs[index].value
            setParagraph(paragraphSlider)
        }
    return (
      <div>
              <div className='mt-5'>
                    <div style={{
                            backgroundImage: `url(${back})`,
                            padding:"100px",
                            backgroundSize: "cover",
                            height: "120vh",
                            color: "#f5f5f5"
                            }}
                    >
                          <h1 style={{color:'#e89059',textAlign:'center',fontSize:'65px',fontWeight:'bold'}} className='p-5'>INSTITUTION DE MICROFINANCE EN MAURITANIE</h1>
                          <p className='m-5'>{paragraph}</p>
                          <div className='d-flex justify-content-center'>
                              {paragraphs.map((data,i)=>
                             // <input type="radio" className=' m-1' style={{color:'white'}} onClick={()=>handleClick(i)} />
                               <div style={{textAlign:'center'}} className='p-1 m-1 moncercle'onClick={()=>handleClick(i)} ></div>
                               )}
                           </div>
                          {/* <p className='m-5'>National Cash (NC), est une société anonyme de microfinace Mauritan enne agréée par la Banque Centrale de Mauritanie BCM.Créée en Février 2018,leader dans le secteur de la microfinance en Mauritanie, NC a pour objectif de favoriser l'inclusion économique et sociale des populations vulérable(notamment les femmes, les jeunes et les populations rurales) et de contribuer au développement économique du pays. Elle œuvre en particulier pour la promotion de l'entreprenariat et contribue ainsi à l'effort national pour la promotion de l'auto-emploi des jeunes et des femmes dans les quariers et les zones rurales défavorisées.</p>
                          <div style={{textAlign:'center'}} className='p-5' >
                          <input type="radio" className=' m-2' />
                          <input type="radio" className=' m-2' />
                          <input type="radio" className=' m-2' />
                          
                          </div> */}
                    </div>
                    <Activites />
              </div>
              
              <Comptes />
              <FormulaireSouscription />
              <Footer />
      </div>
    )
}

export default Accueil