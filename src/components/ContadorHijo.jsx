import React, { memo } from 'react'

function ContadorHijo() {
    console.log("Renderizando contador hijo")
  return (
    <div style={{border: "thin solid black", margin:"1rem",padding:"1rem"}}>
        ContadorHijo 
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
    </div>
  )
}

export default memo(ContadorHijo)