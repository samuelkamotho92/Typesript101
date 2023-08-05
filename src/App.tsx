import React,{useState} from 'react'
import './App.css';
import InputField from './Components/InputField';
import TodoList from './Components/TodoList';
import { Todo } from './Model';
//TYPE OF COMPONENT
const App:React.FC = () => {
const [todo,setTodo] = useState<string>('');
const [todos,setTodos] = useState<Todo[]>([]);
const addTodo = (e:React.FormEvent) =>{
e.preventDefault();
//add the todo insifr the todos
if(todo){
  setTodos([...todos,{id:Date.now(),todo,isDone:false}])
}
setTodo("");
}
console.log(todos);
  return (
    <div className='App'>
      <span className='heading'>
        Todo
      </span>
      <InputField  todo={todo} setTodo={setTodo} addTodo={addTodo}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
