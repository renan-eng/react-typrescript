import React, { useState } from 'react';
import './App.css';
import Tutoriais from './tutoriais';
import InputField from './components/InputField'
import { Todo } from './model';

Tutoriais();
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  //console.log(todo); //checando se o componente InputField esta recebendo todo

  return (
    <div className="App">
      <span className='heading'>Tarefas</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>    
  );
}

export default App;