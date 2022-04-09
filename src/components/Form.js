import React from 'react'
import { useState } from "react"
const Form = () => {
  function cadastrarUsuario(e){
    e.preventDefault()
    console.log(name)
    console.log(password)
    
    console.log("cadastro com sucesso")
  }
  //nome do atributo e o que será alterado e lembrar que é colchete
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  return (
    <div>
      <h3>Send form:</h3>.
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="name" onChange={(e) => setName(e.target.value)} required/>
        </div>
        <br/>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <br/>
        <div>
          <input type="submit" value="cadastrar" />
        </div>
      </form>
      
    </div>
  )
}

export default Form