
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
  //idade: 32, //é opcional pq o objeto pessoa possui o atributo 'idade?: number' -> '?'
}

let muitasPessoas: Pessoa[];


//Criando funções
function printNome(nome: string) { //nome : string precisa ser declado o tipo esperado para cada variável
  console.log(nome);
}

printNome("Renan");

function Tutoriais () {
  
  return;
}

export default Tutoriais;