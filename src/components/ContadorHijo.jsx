import React, { memo, useMemo } from 'react'


function ContadorHijo({contador,sumar,restar}) {

  const superNumero = useMemo(() =>{
    let num=0
    for (let i = 0; i < 1000000000;i++) {
      num++
    }
    return num
  })

  




    console.log("Renderizando contador hijo")
  return (
    <div style={{border: "thin solid black", margin:"1rem",padding:"1rem"}}>
        ContadorHijo:{contador}
        <br />
        memo:Se encarga de memorizar componentes, evita renderizados inesesarios.
        <br />
        se debe evitar su uso lo menos posible, puede vovlerse una tarea costosa a futuro.
        <br />
        usarlo cuando : tenemos muchos elementos renderizados en una lista,
        <br />
        llamadas a apis.
        <br />
        un componente se vuelve muy pesado.
        <br />
        salen alertas de rendimiento en consola.
        <br />
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <h3>{superNumero}</h3>

        useMemo:
        <br />
        memoriza un valor calculado, es decir, el resultado de una funcion.
        <br />
        genera propiedades computadas.
        <br />
        usalo en procesos pesados.
    </div>
  )
}

export default memo(ContadorHijo)