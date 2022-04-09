import React from 'react'

function OutraLista({ itens }) {
  return (
    <>

     <h3>To do List</h3>
     {/* Se o tamanho da lista for maior do que zero, fazer algo*/}
     {itens.length > 0 ? (
       itens.map((item, index) =>( 
         <p key={index}>{item}</p>) 

     )) : (
         <p>Não há itens na lista!</p>
     )} {/* Itens mapea o item para a lista e o index insere, se não houver itens na lista, retorne uma mensagem. : é else*/}
    </>
  )
}

export default OutraLista