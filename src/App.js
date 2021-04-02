import React, { useState } from 'react'
import './app.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';


function App() {

  const [todoList, setTodoList] = useState([
    {id:1, title: 'I love you'},
    {id:2, title: 'We love you'},
    {id:3, title: 'They love you'}
  ])

 function removeTodo(todo) {  
   const index = todoList.findIndex(x => x.id === todo.id)
   if(index < 0) return
   const fakeTodoList = [...todoList]
   fakeTodoList.splice(index,1)
   setTodoList(fakeTodoList)
 }
  

  return (
    <div className="app"> 
      <ColorBox />
      <TodoList todos={todoList} handleClick={removeTodo}/>
    </div>
  );
}

export default App;
