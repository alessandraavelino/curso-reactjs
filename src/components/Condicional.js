import React from 'react'
import { useState } from 'react' //criar componentes através de uma função. [hook] hooks são usados para ligar aos recursos do react através de ocmponentes funcionais

const Condicional = () => {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail(){
        setUserEmail("")

        
    }

  return (
    <div> 
        <h2>Cadastrar e-mail:</h2>
        <form>
            <input type="email" placeholder="Digita seu email" required onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" onClick={enviarEmail}>Enviar</button>
          {/* Se tiver um e-mail, faça algo */}
            {userEmail && (
                <div>
                    <p>O seu e-mail é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar</button>
                </div>
            )}
        </form>
    </div>
  )
}

export default Condicional