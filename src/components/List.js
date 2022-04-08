import React from 'react'
import Item from "./Item"
const List = () => {
  return (
    <>
    <h1>Marcas</h1>
    <ul>
        <Item marca="Ferrari" lancamento={20} />
        <Item marca="Ferrari" lancamento={20} />
        <Item marca="Ferrari" lancamento= {20} />
        <Item />
        
        
      </ul>
    
    
    </>
    )
}


export default List