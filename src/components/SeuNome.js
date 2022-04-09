import React from 'react'

function SeuNome( {setNombre} ) {
  return (
    <div>
        <p>Digite seu nome:</p>
        <input type="text" placeholder="Qual é o seu nome?" onChange={(e) => setNombre(e.target.value)}/>
    </div>
  )
}

export default SeuNome