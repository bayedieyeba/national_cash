import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const ModifierContenuCreditFrancais = () => {
    const [afficheCreditMewleny,setAfficheCreditMewleny] = useState(false)
    const[afficheCreditNoujoum,setAfficheCreditNoujoum] = useState(false)
    const [afficheCreditBeyti,setAfficheCreditBeyti] = useState(false)
    const[afficheCreditBidaya,setAfficheCreditBidaya] = useState(false)
    const [afficheCreditTakaful,setAfficheCreditTakaful] = useState(false)
    const [afficheCreditEquipe,setAfficheCreditEquipe] = useState(false)
    const[afficheCreditAvanceSalaire,setAfficheCreditAvanceSalaire] = useState(false)

    const [afficheMessageModif,setAfficheMessageModif] = useState(false)
    // credit mawleny 
    const [cm_partie1,setCmPartie1] = useState("")
    const [cm_partie2,setCmPartie2] = useState("")
    const [cm_partie3,setCmPartie3] = useState("")
    const [cm_partie4,setCmPartie4] = useState("")
    const [cm_partie5,setCmPartie5] = useState("")
    const handleModifCreditMawleny = (e)=>{
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "partie1":cm_partie1,"partie2":cm_partie2,"partie3":cm_partie3,"partie4":cm_partie4,"partie5":cm_partie5  })
        };
        fetch('http://localhost:4000/modifier/credit-mawleny-francais',requestOptions)
        
        .then( response => {
           
          setAfficheMessageModif(true)
          setCmPartie1("")
          setCmPartie2("")
          setCmPartie3("")
          setCmPartie4("")
          setCmPartie5("")

               
         })
         .catch((e) => {
          console.log(e);   
       });
    }

    // credit noujoum
    const [cn_partie1,setCnPartie1] = useState("")
    const [cn_partie2,setCnPartie2] = useState("")
    const [cn_partie3,setCnPartie3] = useState("")
    const [cn_partie4,setCnPartie4] = useState("")
    const [cn_partie5,setCnPartie5] = useState("")

    const handleModifCreditNoujoume = (e) =>{
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "partie1":cn_partie1,"partie2":cn_partie2,"partie3":cn_partie3,"partie4":cn_partie4,"partie5":cn_partie5  })
        };
        fetch('http://localhost:4000/modifier/credit-noujoume-francais',requestOptions)
        
        .then( response => {
           
          setAfficheMessageModif(true)
          setCnPartie1("")
          setCnPartie2("")
          setCnPartie3("")
          setCnPartie4("")
          setCnPartie5("")

               
         })
         .catch((e) => {
          console.log(e);   
       });
    }
   // credit beyti
    const [cb_partie1, setCbPartie1] = useState("")
    const [cb_partie2,setCbPartie2] = useState("")
    const [cb_partie3,setCbPartie3] = useState("")
    const [cb_partie4,setCbPartie4] = useState("")
    const [cb_partie5,setCbPartie5] = useState("")
    const [cb_partie6,setCbPartie6] = useState("")
    const [cb_partie7,setCbPartie7] = useState("")

    const handleModifCreditBeyti = (e) =>{
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "partie1":cb_partie1,"partie2":cb_partie2,"partie3":cb_partie3,"partie4":cb_partie4,"partie5":cb_partie5 ,"partie6":cb_partie6,"partie7":cb_partie7 })
        };
        fetch('http://localhost:4000/modifier/credit-beyti-francais',requestOptions)
        
        .then( response => {
           
          setAfficheMessageModif(true)
          setCbPartie1("")
          setCbPartie2("")
          setCbPartie3("")
          setCbPartie4("")
          setCbPartie5("")
          setCbPartie6("")
          setCbPartie7("")

               
         })
         .catch((e) => {
          console.log(e);   
       });
    }

    // credit bidaya
    const [cbi_partie1,setCbiPartie1] = useState("")
    const [cbi_partie2,setCbiPartie2] = useState("")
    const [cbi_partie3,setCbiPartie3] = useState("")
    const [cbi_partie4,setCbiPartie4] = useState("")
    const [cbi_partie5,setCbiPartie5] = useState("")
    const [cbi_partie6,setCbiPartie6] = useState("")
    const [cbi_partie7,setCbiPartie7] = useState("")

    const handleModifCreditBidaya =(e)=>{
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "partie1":cbi_partie1,"partie2":cbi_partie2,"partie3":cbi_partie3,"partie4":cbi_partie4,"partie5":cbi_partie5 ,"partie6":cbi_partie6,"partie7":cbi_partie7 })
        };
        fetch('http://localhost:4000/modifier/credit-bidaya-francais',requestOptions)
        
        .then( response => {
           
          setAfficheMessageModif(true)
          setCbiPartie1("")
          setCbiPartie2("")
          setCbiPartie3("")
          setCbiPartie4("")
          setCbiPartie5("")
          setCbiPartie6("")
          setCbiPartie7("")

               
         })
         .catch((e) => {
          console.log(e);   
       });
    }
    // credit takaful
    const [ct_partie1,setCtPartie1] = useState("")
    const [ct_partie2,setCtPartie2] = useState("")
    const [ct_partie3,setCtPartie3] = useState("")
    const [ct_partie4,setCtPartie4] = useState("")
    const [ct_partie5,setCtPartie5] = useState("")
    const [ct_partie6,setCtPartie6] = useState("")

    const handleModifCreditTakaful =(e)=> {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "partie1":ct_partie1,"partie2":ct_partie2,"partie3":ct_partie3,"partie4":ct_partie4,"partie5":ct_partie5 ,"partie6":ct_partie6 })
        };
        fetch('http://localhost:4000/modifier/credit-takaful-francais',requestOptions)
        
        .then( response => {
           
          setAfficheMessageModif(true)
          setCtPartie1("")
          setCtPartie2("")
          setCtPartie3("")
          setCtPartie4("")
          setCtPartie5("")
          setCtPartie6("")
      
         })
         .catch((e) => {
          console.log(e);   
       });
    }
    // credit equipement
    const [ce_partie1,setCePartie1] = useState("")
    const [ce_partie2,setCePartie2] = useState("")
    const [ce_partie3,setCePartie3] = useState("")
    const [ce_partie4,setCePartie4] = useState("")
    const [ce_partie5,setCePartie5] = useState("")
    const [ce_partie6,setCePartie6] = useState("")
    const [ce_partie7,setCePartie7] = useState("")
    const [ce_partie8,setCePartie8] = useState("")

    const handleModifCreditEquipement =(e)=> {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "partie1":ce_partie1,"partie2":ce_partie2,"partie3":ce_partie3,"partie4":ce_partie4,"partie5":ce_partie5 ,"partie6":ce_partie6,"partie7":ce_partie7 ,"partie8":ce_partie8 })
        };
        fetch('http://localhost:4000/modifier/credit-equipement-francais',requestOptions)
        
        .then( response => {
           
          setAfficheMessageModif(true)
          setCePartie1("")
          setCePartie2("")
          setCePartie3("")
          setCePartie4("")
          setCePartie5("")
          setCePartie6("")
          setCePartie7("")
          setCePartie8("")
      
         })
         .catch((e) => {
          console.log(e);   
       });
    }
    // credit avance sur salaire
    const [cs_partie2,setCsPartie2] = useState("")
    const [cs_partie3,setCsPartie3] = useState("")
    const [cs_partie4,setCsPartie4] = useState("")
    const [cs_partie1,setCsPartie1] = useState("")
    const [cs_partie5,setCsPartie5] = useState("")
    
    const handleModifCreditAvanceSalaire = (e)=>{
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "partie1":cs_partie1,"partie2":cs_partie2,"partie3":cs_partie3,"partie4":cs_partie4,"partie5":cs_partie5})
        };
        fetch('http://localhost:4000/modifier/credit-avance-salaire-francais',requestOptions)
        
        .then( response => {
           
          setAfficheMessageModif(true)
          setCsPartie1("")
          setCsPartie2("")
          setCsPartie3("")
          setCsPartie4("")
          setCsPartie5("")
         
      
         })
         .catch((e) => {
          console.log(e);   
       });
    }
    useEffect(()=>{
        axios.get('http://localhost:4000/partie-francais-credit-mawleny')
        .then(res=>{
        
            setCmPartie1(res.data.partie1)
            setCmPartie2(res.data.partie2)
            setCmPartie3(res.data.partie3)
            setCmPartie4(res.data.partie4)
            setCmPartie5(res.data.partie5)
        
        })
        .catch(err=>{
          console.log(err)
        })
        axios.get('http://localhost:4000/partie-francais-credit-noujoume')
        .then(res=>{
            setCnPartie1(res.data.partie1)
            setCnPartie2(res.data.partie2)
            setCnPartie3(res.data.partie3)
            setCnPartie4(res.data.partie4)
            setCnPartie5(res.data.partie5)
        
        })
        .catch(err=>{
          console.log(err)
        })
        axios.get('http://localhost:4000/partie-francais-credit-beyti')
        .then(res=>{
            setCbPartie1(res.data.partie1)
            setCbPartie2(res.data.partie2)
            setCbPartie3(res.data.partie3)
            setCbPartie4(res.data.partie4)
            setCbPartie5(res.data.partie5)
            setCbPartie6(res.data.partie6)
            setCbPartie7(res.data.partie7)
        
        })
        .catch(err=>{
          console.log(err)
        })
        axios.get('http://localhost:4000/partie-francais-credit-bidaya')
        .then(res=>{
            setCbiPartie1(res.data.partie1)
            setCbiPartie2(res.data.partie2)
            setCbiPartie3(res.data.partie3)
            setCbiPartie4(res.data.partie4)
            setCbiPartie5(res.data.partie5)
            setCbiPartie6(res.data.partie6)
            setCbiPartie7(res.data.partie7)
        
        })
        .catch(err=>{
          console.log(err)
        })

        axios.get('http://localhost:4000/partie-francais-credit-takaful')
        .then(res=>{
            setCtPartie1(res.data.partie1)
            setCtPartie2(res.data.partie2)
            setCtPartie3(res.data.partie3)
            setCtPartie4(res.data.partie4)
            setCtPartie5(res.data.partie5)
            setCtPartie6(res.data.partie6)
            
        })
        .catch(err=>{
          console.log(err)
        })

        axios.get('http://localhost:4000/partie-francais-credit-equipement-samsung')
        .then(res=>{
            setCePartie1(res.data.partie1)
            setCePartie2(res.data.partie2)
            setCePartie3(res.data.partie3)
            setCePartie4(res.data.partie4)
            setCePartie5(res.data.partie5)
            setCePartie6(res.data.partie6)
            setCePartie7(res.data.partie7)
            setCePartie8(res.data.partie8)
            
        })
        .catch(err=>{
          console.log(err)
        })

        axios.get('http://localhost:4000/partie-francais-credit-avance-salaire')
        .then(res=>{
            setCsPartie1(res.data.partie1)
            setCsPartie2(res.data.partie2)
            setCsPartie3(res.data.partie3)
            setCsPartie4(res.data.partie4)
            setCsPartie5(res.data.partie5)  
            
        })
        .catch(err=>{
          console.log(err)
        })
       
   },[])
  return (
    <>
       <div style={{margin:"130px"}}>
            <button onClick={()=>{setAfficheCreditMewleny(true);setAfficheCreditNoujoum(false);setAfficheCreditBeyti(false);setAfficheCreditBidaya(false);setAfficheCreditTakaful(false);setAfficheCreditEquipe(false);setAfficheCreditAvanceSalaire(false)}} type="button" className="btn btn-primary m-3">Crédit Mewleny</button>
            <button onClick={()=>{setAfficheCreditMewleny(false);setAfficheCreditBidaya(false);setAfficheCreditNoujoum(true);setAfficheCreditBeyti(false);setAfficheCreditTakaful(false);setAfficheCreditEquipe(false);setAfficheCreditAvanceSalaire(false)}} type="button" className="btn btn-primary m-3">Crédit Noujoume</button>
            <button onClick={()=>{setAfficheCreditMewleny(false);setAfficheCreditNoujoum(false);setAfficheCreditBeyti(true);setAfficheCreditBidaya(false);setAfficheCreditTakaful(false);setAfficheCreditEquipe(false);setAfficheCreditAvanceSalaire(false)}} type="button" className="btn btn-primary m-3">Crédit Beyti</button>
            <button onClick={()=>{setAfficheCreditMewleny(false);setAfficheCreditNoujoum(false);setAfficheCreditBeyti(false);setAfficheCreditBidaya(true);setAfficheCreditTakaful(false);setAfficheCreditEquipe(false);setAfficheCreditAvanceSalaire(false)}} type="button" className="btn btn-primary m-3">Crédit Bidaya</button>
            <button onClick={()=>{setAfficheCreditMewleny(false);setAfficheCreditNoujoum(false);setAfficheCreditBeyti(false);setAfficheCreditBidaya(false);setAfficheCreditTakaful(true);setAfficheCreditEquipe(false);setAfficheCreditAvanceSalaire(false)}} type="button" className="btn btn-primary m-3">Crédit Takaful</button>
            <button onClick={()=>{setAfficheCreditMewleny(false);setAfficheCreditNoujoum(false);setAfficheCreditBeyti(false);setAfficheCreditBidaya(false);setAfficheCreditTakaful(false);setAfficheCreditEquipe(true);setAfficheCreditAvanceSalaire(false)}} type="button" className="btn btn-primary m-3">Crédit Equipement</button>
            <button onClick={()=>{setAfficheCreditMewleny(false);setAfficheCreditNoujoum(false);setAfficheCreditBeyti(false);setAfficheCreditBidaya(false);setAfficheCreditTakaful(false);setAfficheCreditEquipe(false);setAfficheCreditAvanceSalaire(true)}} type="button" className="btn btn-primary m-3">Crédit Avance sur Salaire</button>
            {
                afficheCreditMewleny && 
                <div className='m-5'>
                    {afficheMessageModif && <div className="alert alert-success" role="alert">
                         Vous avez modifié le contenu!
                        </div>}
                    <form onSubmit={handleModifCreditMawleny}>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 1</label>
                        <textarea value={cm_partie1} onChange={(e)=> setCmPartie1(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 2</label>
                        <textarea value={cm_partie2} onChange={(e)=> setCmPartie2(e.target.value)}
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 3</label>
                        <textarea value={cm_partie3} onChange={(e)=> setCmPartie3(e.target.value)}
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 4</label>
                        <textarea value={cm_partie4}  onChange={(e)=> setCmPartie4(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 5</label>
                        <textarea value={cm_partie5} onChange={(e)=> setCmPartie5(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                       
                        <button type="submit" className="btn btn-primary mt-2">Valider</button>
                    </form>
                </div>
            }

            {
                afficheCreditNoujoum &&
                <div className='m-5'>
                {afficheMessageModif && <div className="alert alert-success" role="alert">
                     Vous avez modifié le contenu!
                    </div>}
                <form onSubmit={handleModifCreditNoujoume}>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 1</label>
                    <textarea value={cn_partie1} onChange={(e)=> setCnPartie1(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 2</label>
                    <textarea value={cn_partie2} onChange={(e)=> setCnPartie2(e.target.value)}
                    className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 3</label>
                    <textarea value={cn_partie3} onChange={(e)=> setCnPartie3(e.target.value)}
                    className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 4</label>
                    <textarea value={cn_partie4}  onChange={(e)=> setCnPartie4(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 5</label>
                    <textarea value={cn_partie5} onChange={(e)=> setCnPartie5(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                   
                    <button type="submit" className="btn btn-primary mt-2">Valider</button>
                </form>
            </div>
            }
            {
                afficheCreditBeyti &&
                <div className='m-5'>
                {afficheMessageModif && <div className="alert alert-success" role="alert">
                     Vous avez modifié le contenu!
                    </div>}
                <form onSubmit={handleModifCreditBeyti}>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 1</label>
                    <textarea value={cb_partie1} onChange={(e)=> setCbPartie1(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 2</label>
                    <textarea value={cb_partie2} onChange={(e)=> setCbPartie2(e.target.value)}
                    className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 3</label>
                    <textarea value={cb_partie3} onChange={(e)=> setCbPartie3(e.target.value)}
                    className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 4</label>
                    <textarea value={cb_partie4}  onChange={(e)=> setCbPartie4(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 5</label>
                    <textarea value={cb_partie5} onChange={(e)=> setCbPartie5(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 6</label>
                    <textarea value={cb_partie6}  onChange={(e)=> setCbPartie6(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 7</label>
                    <textarea value={cb_partie7} onChange={(e)=> setCbPartie7(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                   
                    <button type="submit" className="btn btn-primary mt-2">Valider</button>
                </form>
            </div>
            }
            {
                afficheCreditBidaya &&
                <div className='m-5'>
                {afficheMessageModif && <div className="alert alert-success" role="alert">
                     Vous avez modifié le contenu!
                    </div>}
                <form onSubmit={handleModifCreditBidaya}>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 1</label>
                    <textarea value={cbi_partie1} onChange={(e)=> setCbiPartie1(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 2</label>
                    <textarea value={cbi_partie2} onChange={(e)=> setCbiPartie2(e.target.value)}
                    className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 3</label>
                    <textarea value={cbi_partie3} onChange={(e)=> setCbiPartie3(e.target.value)}
                    className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 4</label>
                    <textarea value={cbi_partie4}  onChange={(e)=> setCbiPartie4(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 5</label>
                    <textarea value={cbi_partie5} onChange={(e)=> setCbiPartie5(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 6</label>
                    <textarea value={cbi_partie6}  onChange={(e)=> setCbiPartie6(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 7</label>
                    <textarea value={cbi_partie7} onChange={(e)=> setCbiPartie7(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                   
                    <button type="submit" className="btn btn-primary mt-2">Valider</button>
                </form>
            </div>
            }
            {
                afficheCreditTakaful &&
                <div className='m-5'>
                {afficheMessageModif && <div className="alert alert-success" role="alert">
                     Vous avez modifié le contenu!
                    </div>}
                <form onSubmit={handleModifCreditTakaful}>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 1</label>
                    <textarea value={ct_partie1} onChange={(e)=> setCtPartie1(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 2</label>
                    <textarea value={ct_partie2} onChange={(e)=> setCtPartie2(e.target.value)}
                    className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 3</label>
                    <textarea value={ct_partie3} onChange={(e)=> setCtPartie3(e.target.value)}
                    className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 4</label>
                    <textarea value={ct_partie4}  onChange={(e)=> setCtPartie4(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 5</label>
                    <textarea value={ct_partie5} onChange={(e)=> setCtPartie5(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 6</label>
                    <textarea value={ct_partie6}  onChange={(e)=> setCtPartie6(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                    <button type="submit" className="btn btn-primary mt-2">Valider</button>
                </form>
            </div>
            }
            {
                afficheCreditEquipe &&
                <div className='m-5'>
                {afficheMessageModif && <div className="alert alert-success" role="alert">
                     Vous avez modifié le contenu!
                    </div>}
                <form onSubmit={handleModifCreditEquipement}>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 1</label>
                    <textarea value={ce_partie1} onChange={(e)=> setCePartie1(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 2</label>
                    <textarea value={ce_partie2} onChange={(e)=> setCePartie2(e.target.value)}
                    className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 3</label>
                    <textarea value={ce_partie3} onChange={(e)=> setCePartie3(e.target.value)}
                    className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 4</label>
                    <textarea value={ce_partie4}  onChange={(e)=> setCePartie4(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 5</label>
                    <textarea value={ce_partie5} onChange={(e)=> setCePartie5(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 6</label>
                    <textarea value={ce_partie6}  onChange={(e)=> setCePartie6(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 7</label>
                    <textarea value={ce_partie7} onChange={(e)=> setCePartie7(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Partie 8</label>
                    <textarea value={ce_partie8} onChange={(e)=> setCePartie8(e.target.value)}
                     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                   
                    <button type="submit" className="btn btn-primary mt-2">Valider</button>
                </form>
            </div>
            }
            {
                afficheCreditAvanceSalaire &&
                <div className='m-5'>
                    {afficheMessageModif && <div className="alert alert-success" role="alert">
                         Vous avez modifié le contenu!
                        </div>}
                    <form onSubmit={handleModifCreditAvanceSalaire}>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 1</label>
                        <textarea value={cs_partie1} onChange={(e)=> setCsPartie1(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 2</label>
                        <textarea value={cs_partie2} onChange={(e)=> setCsPartie2(e.target.value)}
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 3</label>
                        <textarea value={cs_partie3} onChange={(e)=> setCsPartie3(e.target.value)}
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 4</label>
                        <textarea value={cs_partie4}  onChange={(e)=> setCsPartie4(e.target.value)}
                         className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Partie 5</label>
                        <textarea value={cs_partie5} onChange={(e)=> setCsPartie5(e.target.value)}
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

export default ModifierContenuCreditFrancais