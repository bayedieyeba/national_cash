import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useEffect } from 'react';
import e from 'cors';
import Popup from "../components/Popup";

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
const [afficheLogo, setAfficheLogo] = useState(false)
const [afficheAjoutAgent,setAfficheAjoutAgent] = useState(false)
const [afficheSupprimerAgent,setAficheSupprimerAgent] = useState(false)

const [afficheNumeroService, setAfficheNumeroService] = useState(false)

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

const[num1,setNum1] = useState()
const[num2,setNum2] = useState()
const [email, setEmail] = useState("")
const [adresse,setAdresse] = useState("")

const [num_central , setNumCentral] = useState("")
const [num_charbon , setNumCharbon] = useState("")
const [num_toujouni , setNumToujouni] = useState("")
const [num_point_chaud , setNumPointChaud] = useState("")
const [num_nouadhibou , setNumNouadhibou] = useState("")

useEffect(()=>{
    axios.get('http://localhost:4000/get-agence-number')
    .then(res=>{
      setNumCentral(res.data.num_central)
      setNumCharbon(res.data.num_charbon)
      setNumToujouni(res.data.num_toujouni)
      setNumPointChaud(res.data.num_point_chaud)
      setNumNouadhibou(res.data.num_nouadhibou)
    })
    .catch(err=>{
      console.log(err)
    })
},[])

useEffect(()=>{
    axios.get('http://localhost:4000/get-service-number')
    .then(res=>{
      setNum1(res.data.num1)
      setNum2(res.data.num2)
      setEmail(res.data.email)
      setAdresse(res.data.adresse)
    })
    .catch(err=>{
      console.log(err)
    })
},[])

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
const handleNumberService = (e) => {
    e.preventDefault()
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "num1":num1,"num2":num2,"email":email,"adresse":adresse})
    };

    fetch('http://localhost:4000/modifier/service-number',requestOptions)
    
    .then( response => {
        setAfficheMessageModif(true)
        setNum1("")
        setNum2("")
        setEmail("")
        setAdresse("") 
     })
     .catch((e) => {
      console.log(e);   
   });
}
    const handleNumberAgnce =(e) =>{
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "num_central":num_central,"num_charbon":num_charbon,"num_toujouni":num_toujouni,"num_point_chaud":num_point_chaud,"num_nouadhibou":num_nouadhibou})
        };
    
        fetch('http://localhost:4000/modifier/number-of-agences',requestOptions)
        
        .then( response => {
            setAfficheMessageModif(true)
            setNumCentral("")
            setNumCharbon("")
            setNumToujouni("")
            setNumPointChaud("")
            setNumNouadhibou("")
         })
         .catch((e) => {
          console.log(e);   
       });
    }
    const [imageUpload,setImageUpload] = useState(null)
    const uploadImage =(e)=>{
        e.preventDefault()

        const formaData = new FormData()
        formaData.append('image',imageUpload)
        console.log(formaData)
        const config = {
            headers :{
                'content-type' : 'multipart/form-data',
            }
        }
        const url = 'http://localhost:4000/add-image-dg'
        axios.post(url,formaData,config).then((response) =>{
            alert("Image upload")
        }) .catch((e) => {
            console.log(e);   
         });
         
     
    }
    const [imageLogoUpload,setImageLogoUpload] = useState(null)
    const uploadImageLogo =(e) =>{
        e.preventDefault()

        const formaData = new FormData()
        formaData.append('image',imageLogoUpload)
        console.log(formaData)
        const config = {
            headers :{
                'content-type' : 'multipart/form-data',
            }
        }
        const url = 'http://localhost:4000/add-image-logoSite'
        axios.post(url,formaData,config).then((response) =>{
            alert("Image upload")
        }) .catch((e) => {
            console.log(e);   
         });
    }
    const [nomAgent,setNomAgent] = useState("")
    const [longitude,setLongitude] = useState("")
    const [phoneAgent,setPhoneAgent] = useState("")
    const [laltitude,setLaltitude] = useState("")
    const handleAjoutAgent = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "nom":nomAgent,"longitude":longitude,"altitude":laltitude,"phone":phoneAgent})
        };
    
        fetch('http://localhost:4000/add-agent',requestOptions)
        
        .then( response => {
            setAfficheMessageModif(true)
              setNomAgent("")
              setLongitude("")
              setLaltitude("")
              setPhoneAgent("")    
         })
         .catch((e) => {
          console.log(e);   
       });
    }
    const [agents,setAgents] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:4000/get-agent`)
        .then(res=>{
          console.log("Status: ", res.status);
          setAgents(res.data)
         
        })
        .catch(err=>{
          console.log(err)
        })

    },[])
    const [idAgent,setIdAgent] = useState() 
    const handleSupprimerAgent = ()=>{
        axios.delete(`http://localhost:4000/agent/${idAgent}`)
        .then(res=>{
          console.log("Status: ", res.status);
          if(res.status == 200){
            setAfficheMessageModif(true)
          }
        })
        .catch(err=>{
          console.log(err)
        })
    }
    const [buttonPopup,setButtonPopup] = useState(false)

    const [nomAgentModif,setNomAgentModif] = useState("")
    const [longitudeModif,setLongitudeModif] = useState()
    const [altitudeModif,setAltitudeModif] = useState()
    const[phoneModif,setPhoneModif] = useState()
    const [afficheModif,setAfficheModif] = useState(false)
    const handleModifAgent = (e)=>{
        e.preventDefault()
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "nom":nomAgentModif,"longitude":longitudeModif,"altitude":altitudeModif,"phone":phoneModif})
        };
    
        fetch(`http://localhost:4000/update-agent/${idAgent}`,requestOptions)
        
        .then( response => {
            setAfficheModif(true)
                
         })
         .catch((e) => {
          console.log(e);   
       });
    }
  return (
    <div style={{marginTop:"130px", marginLeft:'100px'}}>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className='m-5'>
                {afficheModif && <div className="alert alert-success" role="alert">
                    Vous avez modifié l'agent {nomAgentModif}!
                    </div>
                }
                <form onSubmit={handleModifAgent}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Nom de l'agent</label>
                    <input value={nomAgentModif} onChange={(e)=>setNomAgentModif(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nom de l'agent" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">la longitude</label>
                    <input value={longitudeModif} onChange={(e)=> setLongitudeModif(e.target.value)} type="number" class="form-control" id="exampleInputPassword1" placeholder="longitude" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">la laltitude</label>
                    <input value={altitudeModif} onChange={(e)=>setAltitudeModif(e.target.value)} type="number" class="form-control" id="exampleInputPassword1" placeholder="laltitude" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Numéro de téléphone</label>
                    <input value={phoneModif} onChange={(e)=>setPhoneModif(e.target.value)} type="text"  class="form-control" id="exampleInputPassword1" placeholder="phone" />
                </div>
                <button type="submit" class="btn btn-primary mt-2">Enregistrer</button>
                </form>
            </div>
        </Popup>
        <div style={{marginTop:"130px", marginLeft:'30px'}}>
            <button onClick={()=>{setafficheMotDg(false);setAfficheDescription(true);setAfficheTextMission(false);setAfficheTextVision(false);setAfficheFooter(false);setAfficheNumeroService(false);setAfficheLogo(false);setAfficheAjoutAgent(false);setAficheSupprimerAgent(false)}} type="button" className="btn btn-primary m-3">Description text NC</button>
            <button onClick={()=>{setafficheMotDg(false);setAfficheDescription(false);setAfficheTextMission(true);setAfficheTextVision(false);setAfficheFooter(false);setAfficheNumeroService(false);setAfficheLogo(false);setAfficheAjoutAgent(false);setAficheSupprimerAgent(false)}} type="button" className="btn btn-primary m-3">Mission</button>
            <button onClick={()=>{setafficheMotDg(false);setAfficheDescription(false);setAfficheTextMission(false);setAfficheTextVision(true);setAfficheFooter(false);setAfficheNumeroService(false);setAfficheLogo(false);setAfficheAjoutAgent(false);setAficheSupprimerAgent(false)}} type="button" className="btn btn-primary m-3">Vision</button>
            <button onClick={()=>{setafficheMotDg(false);setAfficheDescription(false);setAfficheTextMission(false);setAfficheTextVision(false);setAfficheFooter(true);setAfficheNumeroService(false);setAfficheLogo(false);setAfficheAjoutAgent(false);setAficheSupprimerAgent(false)}} type="button" className="btn btn-primary m-3">Lien réseau sociaux</button>
            <button onClick={()=>{setafficheMotDg(false);setAfficheDescription(false);setAfficheTextMission(false);setAfficheTextVision(false);setAfficheFooter(false);setAfficheNumeroService(true);setAfficheLogo(false);setAfficheAjoutAgent(false);setAficheSupprimerAgent(false)}} type="button" className="btn btn-primary m-3">Numéro et Email service</button>
            <button onClick={()=>{setafficheMotDg(false);setAfficheDescription(false);setAfficheTextMission(false);setAfficheTextVision(false);setAfficheFooter(false);setAfficheNumeroService(false);setAfficheLogo(true);setAfficheAjoutAgent(false);setAficheSupprimerAgent(false)}} type="button" className="btn btn-primary m-3">modifier image logo</button>
            <button onClick={()=>{setafficheMotDg(true);setAfficheDescription(false);setAfficheTextMission(false);setAfficheTextVision(false);setAfficheFooter(false);setAfficheNumeroService(false);setAfficheLogo(false);setAfficheAjoutAgent(false);setAficheSupprimerAgent(false)}} type="button" className="btn btn-primary m-3">Mot du dg</button>
            <button onClick={()=>{setafficheMotDg(false);setAfficheDescription(false);setAfficheTextMission(false);setAfficheTextVision(false);setAfficheFooter(false);setAfficheNumeroService(false);setAfficheLogo(false);setAfficheAjoutAgent(true);setAficheSupprimerAgent(false)}} type="button" className="btn btn-primary m-3">Ajouter Agent</button>
            <button onClick={()=>{setafficheMotDg(false);setAfficheDescription(false);setAfficheTextMission(false);setAfficheTextVision(false);setAfficheFooter(false);setAfficheNumeroService(false);setAfficheLogo(false);setAfficheAjoutAgent(false);setAficheSupprimerAgent(true)}} type="button" className="btn btn-primary m-3">Lister Agents</button>
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
                            <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                                <input id="upload" type="file" onChange={(e)=>{setImageUpload(e.target.files[0])}} className="form-control border-0" />
                                
                                <div className="input-group-append">
                                    <label for="upload" className="btn btn-light m-0 rounded-pill px-4"> <i className="fa fa-cloud-upload mr-2 text-muted"></i><small className="text-uppercase font-weight-bold text-muted">Choisir fichier</small></label>
                                </div>
                            </div>
                                <button onClick={uploadImage} type="button" className="btn btn-primary">Enragistrer</button>
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
                {  afficheNumeroService &&
                    <div className='m-5'>
                        {afficheMessageModif && <div className="alert alert-success" role="alert">
                            Vous avez modifié le contenu!
                            </div>
                        }
                        <form onSubmit={handleNumberService}>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Numero 1</label>
                            <textarea  value={num1}
                            onChange={(e)=> setNum1(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Numero 2</label>
                            <textarea  value={num2}
                                onChange={(e)=> setNum2(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Email</label>
                            <textarea value={email} onChange={(e)=> setEmail(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Adresse</label>
                            <textarea value={adresse} onChange={(e)=> setAdresse(e.target.value)}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    
                            <button type="submit" className="btn btn-primary mt-2">Modifier</button>
                            </form>
                    </div>
                }

          
                { afficheLogo &&
                   <div style={{width:"550px"}}>
                    <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                   <input id="upload" type="file" onChange={(e)=>{setImageLogoUpload(e.target.files[0])}} className="form-control border-0" />
                   
                   <div className="input-group-append">
                       <label for="upload" className="btn btn-light m-0 rounded-pill px-4"> <i className="fa fa-cloud-upload mr-2 text-muted"></i><small className="text-uppercase font-weight-bold text-muted">Choisir fichier</small></label>
                   </div>
               </div>
                   <button onClick={uploadImageLogo} type="button" className="btn btn-primary">Enragistrer</button>
                   </div> 
                }

                { afficheAjoutAgent &&
                    <div className='m-5'>
                        {afficheMessageModif && <div className="alert alert-success" role="alert">
                            Vous avez modifié le contenu!
                            </div>
                        }
                        <form onSubmit={handleAjoutAgent}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Nom de l'agent</label>
                            <input value={nomAgent} onChange={(e)=>setNomAgent(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nom de l'agent" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">la longitude</label>
                            <input value={longitude} onChange={(e)=> setLongitude(e.target.value)} type="number" class="form-control" id="exampleInputPassword1" placeholder="longitude" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">la laltitude</label>
                            <input value={laltitude} onChange={(e)=>setLaltitude(e.target.value)} type="number" class="form-control" id="exampleInputPassword1" placeholder="laltitude" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Numéro de téléphone</label>
                            <input value={phoneAgent} onChange={(e)=>setPhoneAgent(e.target.value)} type="number" min="0" class="form-control" id="exampleInputPassword1" placeholder="phone" />
                        </div>
                        <button type="submit" class="btn btn-primary mt-2">Enregistrer</button>
                        </form>
                    </div>
                }

                {
                    afficheSupprimerAgent &&
                   <div>
                    {afficheMessageModif && <div className="alert alert-danger" role="alert">
                            Vous avez supprimé un agnet!
                            </div>
                        }
                         <table class="table">
                            <thead class="thead-light">
                            <tr>
                                <th>Nom agnet</th>
                                <th>Longitude agent</th>
                                <th>Laltitude agent</th>
                                <th>Téléphone agnet</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    agents.map((agent)=>(

                                    <tr>
                                       <td>{agent.nom} </td>
                                       <td>{agent.longitude}</td>
                                       <td>{agent.altitude} </td>
                                       <td> {agent.phone} </td>
                                       <td><button onClick={()=>{setButtonPopup(true);setNomAgentModif(agent.nom);setIdAgent(agent.id); setLongitudeModif(agent.longitude);setPhoneModif(agent.phone);setAltitudeModif(agent.altitude)}} 
                                        className="btn btn-primary">modifier</button> </td>
                                       <td><button onClick={()=>{setIdAgent(agent.id); handleSupprimerAgent()}} className="btn btn-danger">supprimer</button> </td>
                                    </tr>
                                    ))
                                }
                            </tbody>
                    </table>
                   </div>
                }
    </div>
  )
}

export default ModifierContenuSite