import React from 'react';
import logo from './logo.svg';
import './App.css';

//Como declarar variáveis e tipos
let nome: string;
let idade: number;
let idade2: number | string; // a variável pode ser numérica ou uma string
let ehEstudante: boolean;
let hobbies: string[]; //Array de strings
let cargo: [number, string]; //Tuplas

//let pessoa: Object;
//Como criar uma objeto
type Pessoa = { 
  nome: string;
  idade?: number; //Nesse caso ? permite que essa variável idade seja opcional (sem '?' o objeto precisa ser declarado com essa propriedade caso contrário irá apresentar erro)
}

let person: Pessoa = {
  nome: "Renan",
  idade: 32,
}
let muitasPessoas: Pessoa[];

function App() {
  return (
    <div className="App">
      Typescript - React App
    </div>
  );
}

export default App;
