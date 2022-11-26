import React from 'react'
import '../estilos/Pantalla.css'

const Pantalla = ({ input }) => {   //Este componente me permite renderizar en pantalla el estado input
  return (
    <div className='input'>
        {input} 
    </div>
  )
}

export default Pantalla