import React, { useEffect, useState } from 'react';
import './App.css';
import './Todo.css';
const ToDoList = () => {

  
    let [input, setInput] = useState('');
    let [todos, setTodos] = useState(()=>{
    let data=localStorage.getItem("key")
    if(data){
      return JSON.parse(data)
    }
});

  

    function d(id){
          let updated=todos.filter((a,b)=>{
            return id!==b
          })
          setTodos(updated)
    }
    useEffect(()=>{
          localStorage.setItem("key",JSON.stringify(todos))

    },[todos]);



  return (
    <div>
      <h1>To Do List</h1>
      
      <input onChange={(e) => setInput(e.target.value)} />
      
      <button onClick={() => setTodos([...todos, input])}>Add</button>
      
      
      {
        todos.map((a,index) => {
            return (<div>
            <h3>{a}</h3>
            <button onClick={() => d(index)}>Delete</button>
            </div>);
        })}
    </div>
  );
};

export default ToDoList;
