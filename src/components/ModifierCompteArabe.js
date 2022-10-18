import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
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
 
     // compte dépôt à terme
     const [depot_terme1,setDepotTerme1] = useState("")
     const [depot_terme2,setDepotTerme2] = useState("")
     const [depot_terme3,setDepotTerme3] = useState("")
     const [depot_terme4,setDepotTerme4] = useState("")
     const [depot_terme5,setDepotTerme5] = useState("")
 
     // compte plan epargne
     const [pe_partie1,setPE_partie1] = useState("")
     const [pe_partie2,setPE_partie2] = useState("")
     const [pe_partie3,setPE_partie3] = useState("")
     const [pe_partie4,setPE_partie4] = useState("")
     const [pe_partie5,setPE_partie5] = useState("")
     const [pe_partie6,setPE_partie6] = useState("")
     useEffect(()=>{
         axios.get('http://localhost:4000/partie-arabe-compte-courant')
         .then(res=>{
         
         setCC_partie1(res.data.partie1)
         setCC_partie2(res.data.partie2)
         setCC_partie3(res.data.partie3)
         setCC_partie4(res.data.partie4)
         
         })
         .catch(err=>{
           console.log(err)
         })
         axios.get('http://localhost:4000/partie-arabe-compte-depot')
         .then(res=>{
        
         setDepotTerme1(res.data.partie1)
         setDepotTerme2(res.data.partie2)
         setDepotTerme3(res.data.partie3)
         setDepotTerme4(res.data.partie4)
         setDepotTerme5(res.data.partie5)
         
         })
         .catch(err=>{
           console.log(err)
         })
         axios.get('http://localhost:4000/partie-arabe-compte-epargn')
         .then(res=>{
        
         setPE_partie1(res.data.partie1)
         setPE_partie2(res.data.partie2)
         setPE_partie3(res.data.partie3)
         setPE_partie4(res.data.partie4)
         setPE_partie5(res.data.partie5)
         setPE_partie6(res.data.partie6)
         
         })
         .catch(err=>{
           console.log(err)
         })
    },[])
    const [afficheMessageModif,setAfficheMessageModif] = useState(false)
    const handleModifCompteCourant = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "partie1":cc_partie1,"partie2":cc_partie2,"partie3":cc_partie3,"partie4":cc_partie4  })
        };
  
        fetch('http://localhost:4000/modifier/compte-courant-arabe',requestOptions)
        
        .then( response => {
            setAfficheMessageModif(true)
            setCC_partie1("")
            setCC_partie2("")
            setCC_partie3("")
            setCC_partie4("")      
         })
         .catch((e) => {
          console.log(e);   
       });
    }
    const handleModifCompteDepotTerme = (e) =>{
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "partie1":depot_terme1,"partie2":depot_terme2,"partie3":depot_terme3,"partie4":depot_terme4,"partie5":depot_terme5})
        };
  
        fetch('http://localhost:4000/modifier/compte-depot-terme-arabe',requestOptions)
        
        .then( response => {
            setAfficheMessageModif(true)
            setDepotTerme1("")
            setDepotTerme2("")
            setDepotTerme3("")
            setDepotTerme4("")
            setDepotTerme5("")       
         })
         .catch((e) => {
          console.log(e);   
       });
    }
    const handleModifComptePlanEpargne = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "partie1":pe_partie1,"partie2":pe_partie2,"partie3":pe_partie3,"partie4":pe_partie4,"partie5":pe_partie5,"partie6":pe_partie6})
        };
  
        fetch('http://localhost:4000/modifier/compte-plan-epargne-arabe',requestOptions)
        
        .then( response => {
            setAfficheMessageModif(true)
            setPE_partie1("")
            setPE_partie2("")
            setPE_partie3("")
            setPE_partie4("")
            setPE_partie5("")
            setPE_partie6("")        
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
                    {afficheMessageModif && <div className="alert alert-success" role="alert">
                         Vous avez modifié le contenu!
                        </div>
                    }
                    <form onSubmit={handleModifCompteCourant}>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 1</label>
                        <textarea  value={cc_partie1}
                          onChange={(e)=> setCC_partie1(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 2</label>
                        <textarea  value={cc_partie2}
                            onChange={(e)=> setCC_partie2(e.target.value)}
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 3</label>
                        <textarea value={cc_partie3} onChange={(e)=> setCC_partie3(e.target.value)}
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 4</label>
                        <textarea  value={cc_partie4} onChange={(e)=> setCC_partie4(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                       
                        <button type="submit" className="btn btn-primary mt-2">Valider</button>
                        </form>
                </div>
            }

             { afficheFormDT && 
                <div className='m-5'>
                    {afficheMessageModif && <div className="alert alert-success" role="alert">
                         Vous avez modifié le contenu!
                        </div>
                    }
                    <form onSubmit={handleModifCompteDepotTerme}>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 1</label>
                        <textarea  value={depot_terme1}
                          onChange={(e)=> setDepotTerme1(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 2</label>
                        <textarea  value={depot_terme2}
                            onChange={(e)=> setDepotTerme2(e.target.value)}
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 3</label>
                        <textarea value={depot_terme3} onChange={(e)=> setDepotTerme3(e.target.value)}
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 4</label>
                        <textarea  value={depot_terme4} onChange={(e)=> setDepotTerme4(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 5</label>
                        <textarea  value={depot_terme5} onChange={(e)=> setDepotTerme5(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                       
                        <button type="submit" className="btn btn-primary mt-2">Valider</button>
                        </form>
                </div>
            }
            { afficheFormPE && 
                <div className='m-5'>
                    {afficheMessageModif && <div className="alert alert-success" role="alert">
                         Vous avez modifié le contenu!
                        </div>
                    }
                    <form onSubmit={handleModifComptePlanEpargne}>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 1</label>
                        <textarea  value={pe_partie1}
                          onChange={(e)=> setPE_partie1(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 2</label>
                        <textarea  value={pe_partie2}
                            onChange={(e)=> setPE_partie2(e.target.value)}
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 3</label>
                        <textarea value={pe_partie3} onChange={(e)=> setPE_partie3(e.target.value)}
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 4</label>
                        <textarea  value={pe_partie4} onChange={(e)=> setPE_partie4(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 5</label>
                        <textarea  value={pe_partie5} onChange={(e)=> setPE_partie5(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 5</label>
                        <textarea  value={pe_partie6} onChange={(e)=> setPE_partie6(e.target.value)}
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