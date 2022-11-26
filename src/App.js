import React, { useState } from 'react';
import Boton from './components/Boton'
import Pantalla from './components/Pantalla'
import BotonClear from './components/BotonClear';
import { evaluate } from 'mathjs' //mathjs es una librería de funciones matemáticas para JS. esta se debe instalar, es la que nos va a permitir ejecutar las operaciones en la calculadora
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo2.png'
import './App.css';

function App() {

  const [input, setInput] = useState('');     //Estado del input o pantalla

  const agregarInput = (valor) => {           //Esta función permite ver los números y los operadores en pantalla, estos valores toman el nombre valor, puedo cambiar el nombre valor por cualquier otro
    setInput(input + valor);                  //Así es como seteo en el estado el valor digitado en la pantalla
  }

  const calcularResultado = () => {           //Esta función es la que permite ejecutar las operaciones matemáticas
    if (input) {
      setInput(evaluate(input))               //Se intala el npm install mathjs, se usa el método evaluate para ejecutar las operaciones matemáticas
    }
    else {
      alert ('Ingresa un valor válido')
    }
  };

  return (
    <div className="App">                 
      <div className='freecodecamp-logo-contenedor'>      {/*Este div renderiza el logo de freeCodeCamp*/}
        <img src={freeCodeCampLogo} className='freecodecamp-logo' alt='Logo de freeCodeCamp'/>
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>                         {/*Este componente renderiza en pantalla el estado llamado input, este estado lo paso por props*/}
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>     {/*Al componente Botón le estoy asignando una props llamada 'manejarClic' a los números y operadores, más no al igual, la cual invoca la función agregarInput cuando se da click, tener en cuenta que en esta vez el evento lo asigné en el componente más no aquí*/}
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>   {/*Al componente BotonClear le asigno una props 'manejarClear'*/}
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
