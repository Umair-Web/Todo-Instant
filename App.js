import React, {useState} from 'react'
import './App.css';

function App()
 { 
  const [input,setInput]=useState("");
  const [list,setList]=useState([]);
  
  const addTodo=(todo)=>
  {
    
    if(input!=""){
      
    const newTodo=
    {
      id:Math.random(),
      todo: todo
    }
    setList([...list,newTodo])
    setInput("");
  }
  }
  const delTodo=(id)=>{
    const newlist=list.filter((todo)=>todo.id !==id)
    setList(newlist);
  }

  return (
    <div className='main-container'>
      <div  className="todo">
          <h2>Todo List</h2>
          <div className='row'>
            <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} id="input-box"/>
            <button onClick={()=>addTodo(input)}>Add</button>
          </div>
          <div className='list-container'>
               <ul>
                {list.map((todoObject)=>
                <li key={todoObject.id}>
                  
                  {todoObject.todo}
                  <button className='cross-button' onClick={()=>delTodo(todoObject.id)}>&times;</button>
                </li>
                
            )}
               </ul>
          </div>
      </div>
    </div>
  );
}

export default App;
