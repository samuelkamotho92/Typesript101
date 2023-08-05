import React from 'react'
import { Todo } from '../Model'
import {BiSolidEditAlt} from 'react-icons/bi';
import {MdDelete,MdDone} from 'react-icons/md';
import './style.css';
type Props = {
todo:Todo,
todos:Todo[],
setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const Task:React.FC<Props> = ({todo,todos,setTodos}) => {
    const handleDone = (id:Number)=>{
        //update done to true out the values we are getting
   const oneTodo =  todos?.map((todo)=>todo.id === id?{...todo,isDone:!todo.isDone}:todo);
   setTodos(oneTodo);
        // console.log(`${id}`)
    }
    const handleDelete = (id:Number)=>{
        //filter all the one matching and return only one item
   const oneTodo =  todos?.filter((todo)=>todo.id !== id);
   setTodos(oneTodo);
    }

  return (
    <form className='task'>
        {
            todo.isDone?(
                <s className='task_text'>
                {todo.todo}
                </s> 
            ):(
                <span className='task_text'>
                {todo.todo}
                        </span>
            )
        }
        <div className="icons">
            <span className="icon">
                <BiSolidEditAlt />
            </span>
            <span className="icon" onClick={()=>handleDelete(todo.id)}>
                <MdDelete />
            </span>
            <span className="icon" onClick={()=>handleDone(todo.id)}>
                <MdDone />
            </span>
        </div>
    </form>
  )
}

export default Task