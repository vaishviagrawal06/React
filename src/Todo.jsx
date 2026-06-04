import React, { useEffect, useState } from 'react';
import './Todo.css';

const ToDoList = () => {
  let [input, setInput] = useState('');
  let [index, setIndex] = useState(null);

  let [todos, setTodos] = useState(() => {
    let data = localStorage.getItem("key");
    if (data) {
      return JSON.parse(data);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(todos));
  }, [todos]);

 
  function e(index) {
    setInput(todos[index]);
    setIndex(index);
  }

 
  function handleAorUpdate() {
    if (input.trim() === "") {
      return;
    }

   
    if (index !== null) {
      let updateDATA = [...todos];
      updateDATA[index] = input;
      setTodos(updateDATA);

      setIndex(null); 
    } 
    
    else {
      setTodos([...todos, input]);
    }

    setInput(""); 
  }

  
  function d(id) {
    let updated = todos.filter((a, b) => {
      return id !== b;
    });

    setTodos(updated);
  }

  return (
    <div>
      <h1>To Do List</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={handleAorUpdate}>
        {index !== null ? "Update" : "Add"}
      </button>

      {todos.map((a, index) => {
        return (
          <div key={index}>
            <h3>{a}</h3>

            <button onClick={() => d(index)}>
              Delete
            </button>

            <button onClick={() => e(index)}>
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoList;

// import React, { useEffect, useState } from "react";
// import "./Todo.css";

// const Todo = () => {
//   const [task, setTask] = useState("");
//   let [index,SetIndex]=useState(null)
//   const [todos, setTodos] = useState(()=>{
//     let data=  localStorage.getItem("key")
//     if(data){
//         return JSON.parse(data)
//     }
//     return []
//   });
//   useEffect(()=>{
//     localStorage.setItem("key",JSON.stringify(todos))

//   },[todos])



//   function edit(index){
//     setTask(todos[index])
//     SetIndex(index)

//   }


//   function handleAorUpdate(){
//     if(task.trim()==""){
//         return;
//     }
//     console.log("helloooooo");
    
//     if(index!==null){
//         let updateDATA=[...todos]
//         updateDATA[index]=task
//         setTodos(updateDATA)
//     }else{
//         setTodos([...todos,task])
//         setTask("")
//     }
    

//   }


//   function d(id){
//    let d= todos.filter((a,b)=>{
//         return id!=b

//     })
//     setTodos(d)

//   }








//   return (
//     <div className="container">
//       <h1>Todo List</h1>

//       <div className="input-box">
//         <input
//           type="text"
//           name="task"
//           value={task}
//           placeholder="Enter a task"
//           onChange={(e)=>setTask(e.target.value)}
  
//         />

// <button onClick={handleAorUpdate}>
//     {index!==null?"update":"Add"}
//     </button>
//       </div>
    

//       <div className="todo-list">
//         {todos.map((todo, index) => (
//           <div className="todo-item" key={index}>
//             <span>{todo}</span>

//             <div className="actions">
//               <button onClick={()=>edit(index)}>
//                 Edit
//               </button>

//               <button  onClick={()=>d(index)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Todo;