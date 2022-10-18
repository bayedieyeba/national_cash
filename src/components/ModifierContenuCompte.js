import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ModifierContenuCompte = () => {
   
      // compte courant 
    const [cc_partie1,setCC_partie1] = useState("")
    const [cc_partie2,setCC_partie2] = useState("")
    const [cc_partie3,setCC_partie3] = useState("")
    const [cc_partie4,setCC_partie4] = useState("")

     // compte depot à terme
    const [dt_partie1,setDTPartie1] = useState("")
    const [dt_partie2,setDTPartie2] = useState("")
    const [dt_partie3,setDTPartie3] = useState("")
    const [dt_partie4,setDTPartie4] = useState("")
    const [dt_partie5,setDTPartie5] = useState("")

    // compte plan epargne
    const [pe_partie1,setPE_partie1] = useState("")
    const [pe_partie2,setPE_partie2] = useState("")
    const [pe_partie3,setPE_partie3] = useState("")
    const [pe_partie4,setPE_partie4] = useState("")
    const [pe_partie5,setPE_partie5] = useState("")
    const [pe_partie6,setPE_partie6] = useState("")
    useEffect(()=>{
        axios.get('http://localhost:4000/partie-francais-compte-courant')
        .then(res=>{
        
        setCC_partie1(res.data.partie1)
        setCC_partie2(res.data.partie2)
        setCC_partie3(res.data.partie3)
        setCC_partie4(res.data.partie4)
        
        })
        .catch(err=>{
          console.log(err)
        })
        axios.get('http://localhost:4000/partie-francais-compte-depot-terme')
        .then(res=>{
       
        setDTPartie1(res.data.partie1)
        setDTPartie2(res.data.partie2)
        setDTPartie3(res.data.partie3)
        setDTPartie4(res.data.partie4)
        setDTPartie5(res.data.partie5)
        
        })
        .catch(err=>{
          console.log(err)
        })
        axios.get('http://localhost:4000/partie-francais-compte-epargn')
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
    const [afficheFormCC, setAfficheFormCC] = useState(false)
    const [afficheFormDT,setAfficheFormDT] = useState(false)
    const [afficheFormPE,setAfficheFormPE] = useState(false)

  

    
   const [afficheMessageModif,setAfficheMessageModif] = useState(false)
    const handleModifCompteCourant = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "partie1":cc_partie1,"partie2":cc_partie2,"partie3":cc_partie3,"partie4":cc_partie4  })
        };
        fetch('http://localhost:4000/modifier/compte-courant-francais',requestOptions)
        
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

   

    const handleModifCompteDepotTerme = (e) => {
            e.preventDefault()
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "partie1":dt_partie1,"partie2":dt_partie2,"partie3":dt_partie3,"partie4":dt_partie4,"partie5":dt_partie5})
            };
            fetch('http://localhost:4000/modifier/compte-depot-terme-francais',requestOptions)
            
            .then( response => {
                setAfficheMessageModif(true)
                setDTPartie1("")
                setDTPartie2("")
                setDTPartie3("")
                setDTPartie4("")
                setDTPartie5("")
                   
             })
             .catch((e) => {
              console.log(e);   
           });
    }
    const handleModifComptePlanEpargn = (e) => {
            e.preventDefault()
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "partie1":pe_partie1,"partie2":pe_partie2,"partie3":pe_partie3,"partie4":pe_partie4,"partie5":pe_partie5 ,"partie6":pe_partie6})
            };
            fetch('http://localhost:4000/modifier/compte-plan-epargne-francais',requestOptions)
            
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
                        </div>}
                    <form onSubmit={handleModifCompteCourant}>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 1</label>
                        <textarea value={cc_partie1}   onChange={(e)=>{ setCC_partie1(e.target.value)}}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 2</label>
                        <textarea  value={cc_partie2} onChange={(e)=> setCC_partie2(e.target.value)}
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 3</label>
                        <textarea value={cc_partie3} onChange={(e)=> setCC_partie3(e.target.value)}
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 4</label>
                        <textarea value={cc_partie4} onChange={(e)=> setCC_partie4(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                       
                        <button type="submit" className="btn btn-primary mt-2">Valider</button>
                        </form>
                </div>
            }
            {
                afficheFormDT && 
                <div className='m-5'>
                    {afficheMessageModif && <div className="alert alert-success" role="alert">
                         Vous avez modifié le contenu!
                        </div>}
                    <form onSubmit={handleModifCompteDepotTerme}>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 1</label>
                        <textarea value={dt_partie1} onChange={(e)=> setDTPartie1(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 2</label>
                        <textarea value={dt_partie2} onChange={(e)=> setDTPartie2(e.target.value)}
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 3</label>
                        <textarea value={dt_partie3} onChange={(e)=> setDTPartie3(e.target.value)}
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 4</label>
                        <textarea value={dt_partie4}  onChange={(e)=> setDTPartie4(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 5</label>
                        <textarea value={dt_partie5} onChange={(e)=> setDTPartie5(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                       
                        <button type="submit" className="btn btn-primary mt-2">Valider</button>
                    </form>
                </div>
            }
             {
                afficheFormPE && 
                <div className='m-5'>
                    {afficheMessageModif && <div className="alert alert-success" role="alert">
                         Vous avez modifié le contenu!
                        </div>}
                    <form onSubmit={handleModifComptePlanEpargn}>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 1</label>
                        <textarea value={pe_partie1} onChange={(e)=> setPE_partie1(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 2</label>
                        <textarea value={pe_partie2} onChange={(e)=> setPE_partie2(e.target.value)}
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 3</label>
                        <textarea value={pe_partie3} onChange={(e)=> setPE_partie3(e.target.value)}
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 4</label>
                        <textarea value={pe_partie4}  onChange={(e)=> setPE_partie4(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 5</label>
                        <textarea value={pe_partie5} onChange={(e)=> setPE_partie5(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 6</label>
                        <textarea value={pe_partie6} onChange={(e)=> setPE_partie6(e.target.value)}
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

export default ModifierContenuCompte