import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { removeTodo } from '../feature/todo/todoSlice';
import {FaTrash} from "react-icons/fa"

function Todo() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
     <div className='text-2xl m-2 font-semibold'>Todos</div>
     {todos.map((todo)=>(
        <li key={todo.id} className='bg-black rounded text-white flex justify-between p-2 m-2'>
            {todo.text}
            <button
            onClick={() => dispatch(removeTodo(todo.id))}
            ><FaTrash className="text-red-500 hover:text-red-900 cursor-pointer transition-transform duration-200 hover:scale-125" size={20}/></button>
        </li>    
     ))}
    </>
   
  )
}

export default Todo
