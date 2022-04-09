import React from 'react'

function Pessoa(props){
    return(
        <div>
            <img src={props.foto} alt={props.nome} />
            <h2><b>Nome:</b> {props.nome}</h2>
            <p><b>Idade:</b> {props.idade}</p>
            <p><b>Profissão: </b> {props.profissao}</p>
        </div>
    )
}

export default Pessoa;