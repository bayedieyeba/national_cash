import React from 'react'
import './css/main.css'

const FormulaireService = () => {
    const countries = [
        "bayit","takaful"
    ]
    const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${password}
      Country: ${country}
      Accepted Terms: ${acceptedTerms}
    `);
    
    event.preventDefault();
  }
  return (
    <div  className=' body_div'>
       <form  className='form_formulaire' onSubmit={handleSubmit}>
      <h1>Create Account</h1>

      <label>
      Votre nom complet:
        <input className=' input_form'
          name="email"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>
      
      <label>
        Votre Email:
        <input className='input_form'
          name="password"
          type="email"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>
      <label>
        Numéro de Téléphone:
        <input className='input_form'
          name="Numero_telephone"
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>
      <label>
        Type services:
        <select
          name="country"
          value={country}
          onChange={e => setCountry(e.target.value)}
          required>
          <option key=""></option>
          {countries.map(country => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </label>

      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={e => setAcceptedTerms(e.target.value)}
          required />
        I accept the terms of service        
      </label>

      <button type='button' className='button_formulaire' >Submit</button>
    </form>
    </div>
  )
}

export default FormulaireService