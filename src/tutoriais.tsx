
//Como declarar variáveis e tipos
let nome: string;
let idade: number;
let idade2: number | string; // a variável pode ser numérica ou uma string
let ehEstudante: boolean;
let hobbies: string[]; //Array de strings
let cargo: [number, string]; //Tuplas

//let pessoa: Object; Para criar um objeto pessoa porém não é muito utilizado
//Type Aliases = permite criar uma referência que está relacionada a um ou mais tipos
type Pessoa = { 
  nome: string;
  idade?: number; //Nesse caso ? permite que essa variável idade seja opcional (sem '?' o objeto precisa ser declarado com essa propriedade caso contrário irá apresentar erro)
}

let pessoa: Pessoa = {
  nome: "Renan",
  //idade: 32, //é opcional pq o objeto pessoa possui o atributo 'idade?: number' -> '?'
}

//Interface - a diferença entre type e interface está na maneira como elas podem ser extendidas
//interface pode ser sempre extendida para adicionar novas propriedades
//interface Exemplo extends Extenção {varC: boolean}
//type é mais restrita nesse caso e pode ser extendida via interseção: type A = b & {var: string}
interface Exemplo {
  varA: string;
  varB: number;
}

let exemplo: Exemplo = {
  varA: "lçaskdjfasdf",
  varB: 13345,
}
 console.log(`Pessoa.nome: ${pessoa.nome}`);
 console.log(`Exemplo.varA: ${exemplo.varA}\nExemplo.varB: ${exemplo.varB} `);

let muitasPessoas: Pessoa[]; // para criar um Array de objetos Pessoa


//Criando funções
// function printNome(nome: string) { //nome : string precisa ser declado o tipo esperado para cada variável
//   console.log(nome);
// }

// printNome("Renan");
let printNome: (nome: string) => never; //void retorn undefine enquanto que never nao retorna nada

function Tutoriais () {
  
  return;
}

export default Tutoriais;