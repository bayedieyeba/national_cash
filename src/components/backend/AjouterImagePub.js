import React from 'react'
import { useState } from 'react'
import {storage} from './Firebase'
import { ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'

const AjouterImagePub = () => {
    const [imageUpload,setImageUpload] = useState(null)
    const uploadImage =(e)=>{
        e.preventDefault()
        if(imageUpload == null) return;
        const imageRef = ref(storage, `/images/${imageUpload.name +v4() }`)
        uploadBytes(imageRef,imageUpload).then(()=>{
            alert("Image uploaded")
        })
    }
    
  return (
    <>
        <div style={{marginTop:"250px"}} className="row py-4 ">
            <div className="col-lg-6 mx-auto">

                
                <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                    <input id="upload" type="file" onChange={(e)=>{setImageUpload(e.target.files[0])}} className="form-control border-0" />
                    
                    <div className="input-group-append">
                        <label for="upload" className="btn btn-light m-0 rounded-pill px-4"> <i className="fa fa-cloud-upload mr-2 text-muted"></i><small className="text-uppercase font-weight-bold text-muted">Choisir fichier</small></label>
                    </div>
                </div>
                    <button onClick={uploadImage} type="button" className="btn btn-primary">Enragistrer</button>

            </div>
        </div>
    </>
  )
}

export default AjouterImagePub