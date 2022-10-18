import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Slider from 'react-slick'
import { FaLock,FaUser } from "react-icons/fa";
import Popup from "./Popup";
import '../components/css/login.css'
import { Link } from 'react-router-dom';
import Auth from './Auth';
const UploadImagePub = () => {

    //http://localhost:4000/images/image_1664793179335.png
    const [imageUpload,setImageUpload] = useState(null)
    const [urls,setUrls] = useState([])


      useEffect(()=>{
        axios.get(`http://localhost:4000/api/images`)
        .then(res=>{
          console.log("Status: ", res.status);
          setUrls(res.data)
          console.log(urls)
         
        })
        .catch(err=>{
          console.log(err)
        })

    },[])
  

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
        const url = 'http://localhost:4000/single'
        axios.post(url,formaData,config).then((response) =>{
            alert("Image upload")
        }) .catch((e) => {
            console.log(e);   
         });
         
     
    }
    const   settings = {
        dots: true,
        infinite: true,
        arrows:true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        adaptiveHeight: true
      };
      const [buttonPopup,setButtonPopup]=useState(false)
      const [idImage,setIdImage] = useState()
      const handleSupprimer = ()=>{
        const url = `http://localhost:4000/images/${idImage}`
        axios.delete(url).then((response) =>{
            console.log(idImage)
            setButtonPopup(false)
           
        }) .catch((e) => {
            console.log(e);   
         });
      }
    const [email ,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pageLogin ,setPageLogin] = useState(true)
    const [affichePageAdmin,setAffichePageAdmin] = useState(false)
    const [affichemessageErreur,setAfficheMessageErreur] = useState(false)
    const [afficheProbleServer,setAfficheProblemeServer] = useState(false)
    const  handleLogin =(e) =>{
          e.preventDefault()
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "email":email,"password":password  })
        };

        fetch('http://192.168.20.40:5050/login',requestOptions)

        .then( response => {
            response.json().then(data =>{
               if(response.ok){
                   setPageLogin(false)
                   setAfficheMessageErreur(false)
                   setAffichePageAdmin(true)
                //    Auth.login()
                }else{
                   setAfficheMessageErreur(true)
               }
            })
         })
         .catch((e) => {
            setAfficheProblemeServer(true)
          console.log(e);
       });
    }
      
  return (
    <>

        <div style={{marginTop:"130px"}} className="row py-4 ">
               
                { pageLogin &&
                    <div>
                    <div className="login">
                    {
                        affichemessageErreur && 
                        <div className="alert alert-danger m-2" role="alert">
                            login ou mot de passe ne correspond pas
                        </div>
                    }
                    {
                        afficheProbleServer &&
                        <div className="alert alert-danger " role="alert">
                           Problème serveur
                        </div>
                     }
                        <h1>Login</h1>
                        
                        <form onSubmit={handleLogin}>
                            
                            <label for="email">
                                
                                <FaUser />
                            </label>
                            <input onChange={(e)=> setEmail(e.target.value)} type="text" name="email" placeholder="email" id="email" required />
                            <label for="password">
                                <FaLock/>
                            </label>
                            <input onChange={(e)=> setPassword(e.target.value)} type="password" name="password" placeholder="Password" id="password" required />
                            <input type="submit" value="Connecter" />
                        </form>
                    </div>
                </div>
                }
                { affichePageAdmin &&
                    <div>
                        <div className='row'>
                            <Link to='/modifier-compte-francais'>modifier contenu compte francais</Link>
                            <Link to='/modifier-compte-anglais'>modifier contenu compte anglais</Link>
                            <Link to='/modifier-compte-arabe'>modifier contenu compte arabe</Link>
                        </div>
                    <div className="col-lg-6 mx-auto">

                            
                            <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                                <input id="upload" type="file" onChange={(e)=>{setImageUpload(e.target.files[0])}} className="form-control border-0" />
                                
                                <div className="input-group-append">
                                    <label for="upload" className="btn btn-light m-0 rounded-pill px-4"> <i className="fa fa-cloud-upload mr-2 text-muted"></i><small className="text-uppercase font-weight-bold text-muted">Choisir fichier</small></label>
                                </div>
                            </div>
                                <button onClick={uploadImage} type="button" className="btn btn-primary">Enragistrer</button>

                        </div>
                    
                            <Slider {...settings}>
                        {  
                            urls.map((image,i)=>(
                                <button style={{width:'450px'}} className="mt-3" onClick={()=>{ setButtonPopup(true); setIdImage(image.id)} }>
                                    <div style={{marginLeft:'350px'}} key={i} >
                                        <img  src={`http://localhost:4000/images/${image.url}`} alt="" className="m-3 p-3" style={{width:'450px',height:'390px',marginLeft:"250px"}} />
                                    </div>
                                </button>
                            ))
                        
                        } 
                        </Slider>
                    </div>}

                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
                    <p> Suppression de la photo </p>
                    <button onClick={handleSupprimer} type="button" className="btn btn-danger">Supprimer</button>
                    </Popup >
                            
                    
            </div>
    </>
  )
}

export default UploadImagePub