import React from "react";
import '../estilos/Boton.css'

function Boton (props) {

    const esOperador = valor => {                                   //Esta función evalúa si es número u operador, con el fin de dar true o false par asignar la clase correspondiente
        return isNaN(valor) && (valor != '.') && (valor != '=');    //Si valor no es un número y no es un punto y a su vez no es un igual, entonces lo consideramos como un operador y retornamos true, si no cumple es false
    } 

    return(
        <div 
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null }`.trimEnd()}    /*Todos los botones tendrán una clase en común 'boton-contenedor', pero también tendrá clases dinámicas, creamos una función esOperador que tomará como parámetro (props.children) y dependiento de si ese valor es true o false, tomará la clase operador o null, esto porque quiero que los operadores sean de color verde y los números de otro*/
            onClick={() => props.manejarClic(props.children)} >
                {props.children}    {/*En el App, al agregar este componente, le asigné números y operadoress y operadores puestos en este componente, */}
                {/*children indica que todo lo que se use dentro de este div, será condiderado como hijo de Botón y podrá ser utilizado dentro del componente*/}
        </div>
        /*En el App le pase una props llamada manejarClic a la cual le asigné una función, quiere decir que este botón al darsele clic, invocará una función, esta función la paso aquí pero como función, es decir, debo de escribirla con "() => props.manejarClic(props.children)}"*/

        
    )
}

export default Boton;