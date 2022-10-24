import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useEffect } from 'react';

const ModifierContenuSite = () => {
  const[motFr,setMotFr] = useState("")
  const[motEn,setMotEn] = useState("")
  const[motAr,setMotAr] = useState("")

  const [afficheMessageModif,setAfficheMessageModif] =useState(false)

const [afficheMotDg,setafficheMotDg] = useState(false)
const [afficheDescription, setAfficheDescription] = useState(true)
const[titre_fr,setTitre_fr] = useState("")
const[titre_en,setTitre_en] = useState("")
const[titre_ar,setTitre_ar] = useState("")
const[text_des_fr,setText_des_fr] = useState("")
const[text_des_en,setText_des_en] = useState("")
const[text_des_ar,setText_des_ar] = useState("")
  useEffect(()=>{
    axios.get('http://localhost:4000/mot-directeur')
    .then(res=>{
      setMotFr(res.data.mot_dg_Fr)
      setMotEn(res.data.mot_dg_En)
      setMotAr(res.data.mot_dg_Ar)
     
    })
    .catch(err=>{
      console.log(err)
    })
},[])
useEffect(()=>{
    axios.get('http://localhost:4000/get-text-description')
    .then(res=>{
      setText_des_fr(res.data.text_des_fr)
      setText_des_en(res.data.text_des_en)
      setText_des_ar(res.data.text_des_ar)

      setTitre_fr(res.data.titre_fr)
      setTitre_en(res.data.titre_en)
      setTitre_ar(res.data.titre_ar)
    })
    .catch(err=>{
      console.log(err)
    })
},[])
const handleMotDG = (e)=>{
    e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "motFr":motFr,"motEn":motEn,"motAr":motAr})
        };
  
        fetch('http://localhost:4000/modifier-mot-directeur',requestOptions)
        
        .then( response => {
            setAfficheMessageModif(true)
            setMotFr("")
            setMotEn("")
            setMotAr("")
                 
         })
         .catch((e) => {
          console.log(e);   
       });

}

const handleTextDes = (e) =>{
    e.preventDefault()
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "titre_fr":titre_fr,"titre_en":titre_en,"titre_ar":titre_ar,"text_des_fr":text_des_fr,"text_des_en":text_des_en,"text_des_ar":text_des_ar})
    };

    fetch('http://localhost:4000/modifier-text-description',requestOptions)
    
    .then( response => {
        setAfficheMessageModif(true)
        setTitre_fr("")
        setTitre_en("")
        setTitre_ar("")

        setText_des_fr("")
        setText_des_en("")
        setText_des_ar("")
             
     })
     .catch((e) => {
      console.log(e);   
   });
}
  return (
    <div style={{marginTop:"130px", marginLeft:'150px'}}>
           {  afficheMotDg &&
                    <div className='m-5'>
                        {afficheMessageModif && <div className="alert alert-success" role="alert">
                            Vous avez modifié le contenu!
                            </div>
                        }
                        <form onSubmit={handleMotDG}>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Mot du DG en français</label>
                            <textarea  value={motFr}
                            onChange={(e)=> setMotFr(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Mot du DG en anglais</label>
                            <textarea  value={motEn}
                                onChange={(e)=> setMotEn(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Mot du DG en arabe</label>
                            <textarea value={motAr} onChange={(e)=> setMotAr(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    
                            <button type="submit" className="btn btn-primary mt-2">Modifier</button>
                            </form>
                    </div>
                }
                {  afficheDescription &&
                    <div className='m-5'>
                        {afficheMessageModif && <div className="alert alert-success" role="alert">
                            Vous avez modifié le contenu!
                            </div>
                        }
                        <form onSubmit={handleTextDes}>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Titre français</label>
                            <textarea  value={titre_fr}
                            onChange={(e)=> setTitre_fr(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">description</label>
                            <textarea  value={text_des_fr}
                                onChange={(e)=> setText_des_fr(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Titre anglais</label>
                            <textarea value={titre_en} onChange={(e)=> setTitre_en(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Description</label>
                            <textarea value={text_des_en} onChange={(e)=> setText_des_en(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Titre arabe</label>
                            <textarea value={titre_ar} onChange={(e)=> setTitre_ar(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Description</label>
                            <textarea value={text_des_ar} onChange={(e)=> setText_des_ar(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    
                            <button type="submit" className="btn btn-primary mt-2">Modifier</button>
                            </form>
                    </div>
                }

    </div>
  )
}

export default ModifierContenuSite