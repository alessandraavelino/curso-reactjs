import React from 'react'
import PropTypes from "prop-types";
//props
const Item = ({marca, lancamento}) => {
  return (
      <>
        <li>{marca} - {lancamento}</li> 
        
      </>
    
  )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired, //marca está sendo requisitada
    lancamento: PropTypes.number.isRequired
}

Item.defaultProps = {
    marca: "teste",
    lancamento: 0
} //validação e valor default
export default Item