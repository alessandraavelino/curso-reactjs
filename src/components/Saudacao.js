import React from 'react'


function Saudacao({nombre}) {
    function gerarSaudacao(algumNombre) {
        return `Olá, ${algumNombre}, tudo bem`
    }
  return (
    <>
     {nombre && <p>{gerarSaudacao(nombre)}</p>}
    </>
  )
}

export default Saudacao