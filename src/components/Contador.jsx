import React, { useState } from 'react'
import ContadorHijo from './ContadorHijo'

function Contador() {
    const [contador, setContador] = useState(0)
    function sumar(params) {
        setContador(contador + 1)
        
    }
    function restar(params) {
        setContador(contador - 1)
    }

  return (
    <div>
        <h2>Contador: {contador}</h2>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <ContadorHijo/>

        </nav>
    </div>
  )
}

export default Contador