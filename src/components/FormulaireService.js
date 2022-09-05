import React, { useState } from 'react'
import './css/main.css'
import './css/formulaireServices.css'
import {useNavigate } from 'react-router-dom'
import {useTranslation} from "react-i18next";
const FormulaireService = () => {
  const {t} =useTranslation()
  
    const [email, setEmail] = useState("");
    const [num_tel,setNumTel] = useState("")
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/services')
  }
  return (
       <div className='formulaireService' style={{margin:0,padding:'15px'}}>
            <div  className=' body_div'>
       <form  className='form_formulaire' onSubmit={handleSubmit}>
      <h1>{t('souscrir')} </h1>

      <label>
      {t('nom_complet')}:
        <input className=' input_form'
          name="email"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>
      
      <label>
        {t('votre_mail')}:
        <input className='input_form'
          name="password"
          type="email"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>
      <label>
        {t('num_tel')}:
        <input className='input_form'
          name="Numero_telephone"
          type="text"
          value={num_tel}
          onChange={e => setNumTel(e.target.value)}
          required />
      </label>
      <label>
        {t('type_services')}:
        <select
          name="country"
          value={country}
          onChange={e => setCountry(e.target.value)}
          required>
          <option > {t('compte_c')} </option>
          <option >{t('compte_dt')} </option>
          <option >{t('compte_ep')} </option>
          
        </select>
      </label>

      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={e => setAcceptedTerms(e.target.value)}
          required />
        {t('accepte_terme')}        
      </label>

      <button type='submit' className='button_formulaire' >{t('soumettre')} </button>
    </form>
    </div>
       </div>
  )
}

export default FormulaireService