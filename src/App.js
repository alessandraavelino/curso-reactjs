import './App.css';
import "./components/HelloWorld";
import HelloWorld from './components/HelloWorld';
import Header from "./components/Header";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from "./components/List";
import Evento from "./components/Evento";
import Form from "./components/Form";
import Condicional from "./components/Condicional"
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';
import { useState } from "react"
import Saudacao from './components/Saudacao';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./components/pages/Home"

import { BrowserRouter } from 'react-router-dom';

function App() {

  const name = "ale"
  const newName = name.toUpperCase();
  const nome = "Harry"

  const meusItens = ["react", "vue", "angular"]
  const [nombre, setNombre] = useState()

function Soma(a, b){
  return a + b

}
const url = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFja2VyJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
 const developer = "https://images.unsplash.com/photo-1558085324-2f298b28c714?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhhY2tlciUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  return (
    <div className="App">
      

      
      <Frase />
      <List />
      <Condicional />
      <SeuNome setNombre={setNombre} />
   
      <Saudacao nombre={nombre} />
      <Evento />
      <OutraLista itens={meusItens} />

      <Form />
      
      <div className="text">
        <h1>Hello World</h1>
        <p>Olá, {newName}</p>
        <p>Soma: {Soma(1, 2)}</p>
        <img src={url} alt="test" />

        
        <HelloWorld />
        <SayMyName nome="Alessandra" />
        <SayMyName nome="Mary" />
        <SayMyName nome={nome} />
        

        <Pessoa nome="Alessandras" idade="20" profissao="Web Developer" foto={developer} />
       
        
  
      </div>
    </div>
  );
}

export default App;
