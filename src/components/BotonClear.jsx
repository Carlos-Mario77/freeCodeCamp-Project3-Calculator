import React from 'react'
import '../estilos/BotonClear.css'

const BotonClear = (props) => {                                       {/*Reinicia la calculadora*/}
  return (
    <div className='boton-clear' onClick={props.manejarClear}>        {/*El evento lo paso aquí en el componente*/}
      {props.children}
    </div>
  )
}

export default BotonClear