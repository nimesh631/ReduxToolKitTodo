import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../feature/todo/todoSlice";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-2xl m-2 font-semibold">Todos</div>
      <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="bg-black rounded text-white flex justify-between ml-auto p-2 m-2"
        >
         <span>{todo.text}</span> 
         <div className="ml
         -auto flex space-x-2">
         <button onClick={() => dispatch(removeTodo(todo.id))}>
            <FaTrash
              className="text-red-500 hover:text-red-900 cursor-pointer transition-transform duration-200 hover:scale-125"
              size={20}
            />
          </button>
          <button
            onClick={() => {
              const newText = prompt("Edit your todo", todo.text);
              if (newText) {
                dispatch(updateTodo({ id: todo.id, text: newText }));
              }
            }}
          >
            <FaEdit
              className="text-blue-400 hover:text-blue-600 cursor-pointer transition-transform duration-200 hover:scale-125"
              size={20}
            />
          </button>
         </div>
        
        </li>
       
      ))}
       </ul>
    </>
  );
}

export default Todo;
