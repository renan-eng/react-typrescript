import React from 'react';
import './App.css';
import Tutoriais from './tutoriais';

Tutoriais();
const App: React.FC = () => {
  return (
    <div className="App">
      <span className='heading'>Tarefas</span>
      <InputField />
    </div>    
  );
}

export default App;