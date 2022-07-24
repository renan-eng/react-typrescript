import React from 'react'
import './styles.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
  return (
    <form className='input'>
        <input type='input'
            value={todo}
            onChange={
                (e) => setTodo(e.target.value)
            } 
            placeholder='Crie uma tarefa' className='input__box'
        />
        <button className='input__submit' type='submit'>+</button>
    </form>
  )
}

export default InputField;