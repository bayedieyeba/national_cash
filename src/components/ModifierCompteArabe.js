import React from 'react'
import { useState } from 'react'

const ModifierCompteArabe = () => {
    const [afficheFormCC, setAfficheFormCC] = useState(false)
    const [afficheFormDT,setAfficheFormDT] = useState(false)
    const [afficheFormPE,setAfficheFormPE] = useState(false)

    // compte courant 
    const [cc_partie1,setCC_partie1] = useState("")
    const [cc_partie2,setCC_partie2] = useState("")
    const [cc_partie3,setCC_partie3] = useState("")
    const [cc_partie4,setCC_partie4] = useState("")

    const handleModifCompteCourant = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "partie1":cc_partie1,"partie2":cc_partie2,"partie3":cc_partie3,"partie4":cc_partie4  })
        };
  
        fetch('http://localhost:4000/modifier/compte-courant-anglais',requestOptions)
        
        .then( response => {
           
           console.log("modification réussie")
               
         })
         .catch((e) => {
          console.log(e);   
       });
    }
  return (
    <>
        <div style={{marginTop:"130px", marginLeft:'350px'}}>
            <button onClick={()=>{setAfficheFormCC(true);setAfficheFormDT(false);setAfficheFormPE(false)}} type="button" className="btn btn-primary m-3">Compte courant</button>
            <button onClick={()=>{setAfficheFormCC(false);setAfficheFormDT(true);setAfficheFormPE(false)}} type="button" className="btn btn-primary m-3">Dépôt à terme</button>
            <button onClick={()=>{setAfficheFormCC(false);setAfficheFormDT(false);setAfficheFormPE(true)}} type="button" className="btn btn-primary m-3">Plan Epargne</button>
        </div>
        <div>
            { afficheFormCC && 
                <div className='m-5'>
                    <form onSubmit={handleModifCompteCourant}>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 1</label>
                        <textarea onChange={(e)=> setCC_partie1(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 2</label>
                        <textarea  onChange={(e)=> setCC_partie2(e.target.value)}
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 3</label>
                        <textarea  onChange={(e)=> setCC_partie3(e.target.value)}
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 4</label>
                        <textarea  onChange={(e)=> setCC_partie4(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                       
                        <button type="submit" className="btn btn-primary mt-2">Valider</button>
                        </form>
                </div>
            }
        </div>
    </>
  )
}

export default ModifierCompteArabe