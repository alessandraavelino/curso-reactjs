import React from 'react'
import Button from './newEvents/Button'

const Evento = () => {
    function myEvent(){
        
        console.log("test")
    }
    return (
        <div>
            <p>Click for event</p>
            <button onClick={myEvent}>Ativar!</button>
        
            <h4>Mais eventos...</h4>
            <Button event={myEvent} text="First event" />
            
            
            
        </div>

        
  )
}

export default Evento