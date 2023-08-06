import React,{useState,useRef,useEffect} from 'react'
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
    //mode and //values
const [edit,setEdit] = useState<boolean>(false);
const [todoEdit,setTodoEdit] = useState<string>(todo.todo);
const inputRef = useRef<HTMLInputElement>(null);
    const handleDone = (id:number)=>{
        //update done to true out the values we are getting
   const oneTodo =  todos?.map((todo)=>todo.id === id?{...todo,isDone:!todo.isDone}:todo);
   setTodos(oneTodo);
        // console.log(`${id}`)
    }
    const handleDelete = (id:number)=>{
        //filter all the one matching and return only one item
   const oneTodo =  todos?.filter((todo)=>todo.id !== id);
   setTodos(oneTodo);
    }

    const handleEdit = (e:React.FormEvent,id:number)=>{
e.preventDefault();
//map through each todo
setTodos(todos.map((todo)=>(
    todo.id===id?{...todo,todo:todoEdit}:todo
)))
setEdit(false);
    }
    useEffect(() => {
        inputRef.current?.focus();
        }, [edit])
  return (
    <form className='task' onSubmit={(e)=>handleEdit(e,todo.id)}>
{
    edit ?(
<input
 type="text"
ref={inputRef}
value={todoEdit}
 onChange={(e)=>setTodoEdit(e.target.value)} className="todo_text"/>
    ):(
        todo.isDone?(
            <s className='task_text'>
            {todo.todo}
            </s> 
        ):(
            <span className='task_text'>
            {todo.todo}
                    </span>
        )  
    )
}
        <div className="icons">
            <span className="icon" onClick={()=>{
                if(!edit && !todo.isDone ){
                    //not done edit it
                    setEdit(!edit);
                }
            }}>
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