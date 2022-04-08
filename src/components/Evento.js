import React from 'react'

const Evento = ( {numero} ) => {
    function myEvent(){
        console.log(`event number ${numero}`)
    }
    return (
        <div>
            <p>Click for event</p>
            <button onClick={myEvent}>Ativar!</button>
        </div>
  )
}

export default Evento