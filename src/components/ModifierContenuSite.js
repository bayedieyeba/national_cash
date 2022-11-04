import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useEffect } from 'react';
import e from 'cors';

const ModifierContenuSite = () => {
  const[motFr,setMotFr] = useState("")
  const[motEn,setMotEn] = useState("")
  const[motAr,setMotAr] = useState("")

  const [afficheMessageModif,setAfficheMessageModif] =useState(false)

const [afficheMotDg,setafficheMotDg] = useState(false)
const [afficheDescription, setAfficheDescription] = useState(false)
const [afficheTextMission , setAfficheTextMission] = useState(false)
const [afficheTextVision,setAfficheTextVision] = useState(false)
const [afficheFooter,setAfficheFooter] = useState(false)

const[titre_fr,setTitre_fr] = useState("")
const[titre_en,setTitre_en] = useState("")
const[titre_ar,setTitre_ar] = useState("")
const[text_des_fr,setText_des_fr] = useState("")
const[text_des_en,setText_des_en] = useState("")
const[text_des_ar,setText_des_ar] = useState("")
const [lienFacebook,setLienFaceBook] = useState("")
const [lienInstagram,setLienInstagram] = useState("")
const[lienSnap,setLienSnap] = useState("")
const[lienLinkdin,setLienLinkdn] = useState("")

const [textMissionFr,SetTextMissionFr] = useState("")
const [textMissionEn,SetTextMissionEn] = useState("")
const [textMissionAr,SetTextMissionAr] = useState("")
const [textVisionFr,setTextVisionFr] = useState("")
const [textVisionEn,setTextVisionEn] = useState("")
const [textVisionAr,setTextVisionAr] = useState("")

useEffect(()=>{
    axios.get('http://localhost:4000/liens-reseau-sociaux')
    .then(res=>{
      
      setLienFaceBook(res.data.lien_faceBook)
      setLienInstagram(res.data.lien_instagram)
      setLienSnap(res.data.lien_snap)
      setLienLinkdn(res.data.lien_linkdin)
    })
    .catch(err=>{
      console.log(err)
    })
},[])

useEffect(()=>{
    axios.get('http://localhost:4000/get-text-vision-modifier')
    .then(res=>{
      
      setTextVisionFr(res.data.text_vision_Fr)
      setTextVisionEn(res.data.text_vision_En)
      setTextVisionAr(res.data.text_vision_Ar)
    })
    .catch(err=>{
      console.log(err)
    })
},[])

useEffect(()=>{
    axios.get('http://localhost:4000/text-mission')
    .then(res=>{
      
      SetTextMissionFr(res.data.text_mission_Fr)
      SetTextMissionEn(res.data.text_mission_En)
      SetTextMissionAr(res.data.text_mission_Ar)
    })
    .catch(err=>{
      console.log(err)
    })
},[])
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
const handleTextMission = (e) =>{
    
    e.preventDefault()
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "textMissionFr":textMissionFr,"textMissionEn":textMissionEn,"textMissionAr":textMissionAr})
    };

    fetch('http://localhost:4000/modifier-text-mission',requestOptions)
    
    .then( response => {
        setAfficheMessageModif(true)
        SetTextMissionFr("")
        SetTextMissionAr("")
        SetTextMissionEn("")
             
     })
     .catch((e) => {
      console.log(e);   
   });
}
const handleTextVision = (e) => {
    
    e.preventDefault()
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "textVisionFr":textVisionFr,"textVisionEn":textVisionEn,"textVisionAr":textVisionAr})
    };

    fetch('http://localhost:4000/modifier-text-vision',requestOptions)
    
    .then( response => {
        setAfficheMessageModif(true)
        setTextVisionFr("")
        setTextVisionEn("")
        setTextVisionAr("")        
     })
     .catch((e) => {
      console.log(e);   
   });
}
const handleLinks = (e) => { 
    e.preventDefault()

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "lienFacebook":lienFacebook,"lienInstagram":lienInstagram,"lienSnap":lienSnap,"lienLinkdin":lienLinkdin})
    };

    fetch('http://localhost:4000/modifier-lien-reseaux-sociaux',requestOptions)
    
    .then( response => {
        setAfficheMessageModif(true)
        setLienFaceBook("")
        setLienInstagram("")
        setLienSnap("") 
        setLienLinkdn("")       
     })
     .catch((e) => {
      console.log(e);   
   });
}
  return (
    <div style={{marginTop:"130px", marginLeft:'150px'}}>
        <div style={{marginTop:"130px", marginLeft:'350px'}}>
            <button onClick={()=>{setafficheMotDg(true);setAfficheDescription(false);setAfficheTextMission(false);setAfficheTextVision(false);setAfficheFooter(false)}} type="button" className="btn btn-primary m-3">Mot du dg</button>
            <button onClick={()=>{setafficheMotDg(false);setAfficheDescription(true);setAfficheTextMission(false);setAfficheTextVision(false);setAfficheFooter(false)}} type="button" className="btn btn-primary m-3">Description text NC</button>
            <button onClick={()=>{setafficheMotDg(false);setAfficheDescription(false);setAfficheTextMission(true);setAfficheTextVision(false);setAfficheFooter(false)}} type="button" className="btn btn-primary m-3">Mission</button>
            <button onClick={()=>{setafficheMotDg(false);setAfficheDescription(false);setAfficheTextMission(false);setAfficheTextVision(true);setAfficheFooter(false)}} type="button" className="btn btn-primary m-3">Vision</button>
            <button onClick={()=>{setafficheMotDg(false);setAfficheDescription(false);setAfficheTextMission(false);setAfficheTextVision(false);setAfficheFooter(true)}} type="button" className="btn btn-primary m-3">Footer</button>
            {/* <button onClick={()=>{setafficheMotDg(true);setAfficheDescription(false);}} type="button" className="btn btn-primary m-3">Plan Epargne</button> */}
        </div>
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
                {  afficheTextMission &&
                    <div className='m-5'>
                        {afficheMessageModif && <div className="alert alert-success" role="alert">
                            Vous avez modifié le contenu!
                            </div>
                        }
                        <form onSubmit={handleTextMission}>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Mission  texte Français</label>
                            <textarea  value={textMissionFr}
                            onChange={(e)=> SetTextMissionFr(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Mission texte anglais</label>
                            <textarea  value={textMissionEn}
                                onChange={(e)=> SetTextMissionEn(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Mission texte arabe</label>
                            <textarea value={textMissionAr} onChange={(e)=> SetTextMissionAr(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    
                            <button type="submit" className="btn btn-primary mt-2">Modifier</button>
                            </form>
                    </div>
                }

                {  afficheTextVision &&
                    <div className='m-5'>
                        {afficheMessageModif && <div className="alert alert-success" role="alert">
                            Vous avez modifié le contenu!
                            </div>
                        }
                        <form onSubmit={handleTextVision}>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Vision  texte Français</label>
                            <textarea  value={textVisionFr}
                            onChange={(e)=> setTextVisionFr(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Vison texte anglais</label>
                            <textarea  value={textVisionEn}
                                onChange={(e)=> setTextVisionEn(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Vision texte arabe</label>
                            <textarea value={textVisionAr} onChange={(e)=> setTextVisionAr(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    
                            <button type="submit" className="btn btn-primary mt-2">Modifier</button>
                            </form>
                    </div>
                }
                {  afficheFooter &&
                    <div className='m-5'>
                        {afficheMessageModif && <div className="alert alert-success" role="alert">
                            Vous avez modifié le contenu!
                            </div>
                        }
                        <form onSubmit={handleLinks}>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Lien facebook</label>
                            <textarea  value={lienFacebook}
                            onChange={(e)=> setLienFaceBook(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Lien instagram</label>
                            <textarea  value={lienInstagram}
                                onChange={(e)=> setLienInstagram(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Lien snap</label>
                            <textarea value={lienSnap} onChange={(e)=> setLienSnap(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Lien linkdin</label>
                            <textarea value={lienLinkdin} onChange={(e)=> setLienLinkdn(e.target.value)}
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