import React, { useCallback, useState } from 'react'
import ContadorHijo from './ContadorHijo'


function Contador() {
    const [contador, setContador] = useState(0)
    const [input, setInput] = useState('')

    const sumar= useCallback(
      () => {
        setContador(contador + 1)
      },
      [contador],
    )

    const restar=useCallback(
      () => {
        setContador(contador - 1)
      },
      [contador],
    )

    function handleInput(event) {
        setInput(event.target.value)
    }


  return (
    <div>
        <h2>Contador: {contador}</h2>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <input type="text" onChange={handleInput} value={input}/>
            <ContadorHijo contador={contador} sumar={sumar} restar={restar}/>
        useCallback:
        <br />
        Memoriza una funcion para no volverla a definir en cada render
        <br />
        usarlo siempre que se pase una funcion como porp a un componente memorizado.
        <br />
        usarlo siempre que se pase una funcion como parametro de un efecto.
        </nav>
    </div>
  )
}

export default Contador