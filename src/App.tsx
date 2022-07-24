import React, { useState } from 'react';
import './App.css';
import Tutoriais from './tutoriais';
import InputField from './components/InputField'
import { Todo } from './model';

Tutoriais();
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); //Evita que a página seja recarrega ao pressionar submit
    
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos); //checando se o componente InputField esta recebendo todo

  return (
    <div className="App">
      <span className='heading'>Tarefas</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* <TodoList />: */}
      {todos.map((t)=>(
      <li>{t.todo}</li>
      ))}
    </div>    
  );
}

export default App;