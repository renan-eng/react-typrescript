import React, { useState } from 'react';
import './App.css';
import Tutoriais from './tutoriais';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

//Tutoriais(); //Pequeno tutorial sobre typescript
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  /*
  * A função handleAdd() tem dois objetivos:
  *   1. e.preventDefault() -> impede o carregamento da pagina após o usuário
  *      clicar em no botão +
  *   2. if (todo) -> verificar se o usuário digitou algo na caixa de input e
  *      capturar tudo e agrupar em um array com 3 elementos:
  *         1. id     -> numero único aleatório gerado apartir da data atual Date.now()
  *         2. todo   -> o que foi digitado pelo usuário
  *         3. isDone -> false ou true, sera usado para permitir a conclusão da tarefa
  *   3. após realizar os passo anteriores 
  */
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();    
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  // console.log(todo); //checando se o componente InputField esta recebendo todo
  // console.log(todos); //checando se o componente InputField esta recebendo todo

  return (
    <div className="App">
      <span className='heading'>Lista de Tarefas</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>    
  );
}

export default App;