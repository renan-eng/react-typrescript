import React from 'react'
import { Todo } from '../model';

const singleTodo = () => {
type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const singleTodo = ({ todo, todos, setTodos}:Props) => {
  return (
    <div>singleTodo</div>
  )
}

export default singleTodo