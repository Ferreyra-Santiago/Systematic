import React from 'react'
import { Link } from 'react-router-dom'
import lavado from "../../components/Assets/images/metododecompra.jpg"

const PreguntasFrecuentes = () => {
  return (
    <div className='bg-slate-100'>
        <Link to={"/product"}> <h1 className='text-gray-700 font-bold text-3xl  m-auto mt-12 mb-12 w-96 hover:text-gray-900 hover:cursor-pointer'>Ver Nuestros productos</h1></Link>
        <img className='m-auto' src={lavado} alt="Lavado"/>
        
    </div>
  )
}

export default PreguntasFrecuentes