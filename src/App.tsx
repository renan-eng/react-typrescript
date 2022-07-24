import React, { useState } from 'react';
import './App.css';
import Tutoriais from './tutoriais';
import InputField from './components/InputField'

Tutoriais();
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>();
  return (
    <div className="App">
      <span className='heading'>Tarefas</span>
      <InputField />
    </div>    
  );
}

export default App;