import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (propos) => {
    const {Component} = propos
    const navigate  = useNavigate()
    useEffect(()=>{
        let login  = localStorage.getItem('login')
        if(!login){
            navigate('/upload-image')
        }
    })
  return (
    <div>
        <Component/>
    </div>
  )
}

export default Protected