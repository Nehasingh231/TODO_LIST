import TodoInput from "./components/TodoInput";
import './App.css'
import { useState } from "react";
import TodoList from "./components/TodoList";


const App = () => {
   const [title, setTitle] = useState("");
   const [mainTask, setMainTask] = useState([]);
   
   const submitHandler = (e) => {
       e.preventDefault()
       setMainTask([...mainTask, {title}]);
       setTitle("")
   }
    const deleteHandler = (i) =>{
       let copyTask = [...mainTask]
       copyTask.splice(i)
       setMainTask(copyTask)
    }
    let renderTask = <h2>No task Available</h2>
    if(mainTask.length > 0) {
    renderTask = mainTask.map((task, i) => {
      return (
        <li key={i} className="style_task" >
        <div >
          <h5>{task.title}</h5>
        </div>
        <span>
        <i onClick={() => {
          deleteHandler(i)
        }} 
        class="fa-solid fa-trash-can"></i>
        </span>
        </li>
      );
    });
   }
  return (
   <>
     <h1>Things To Do</h1>

    <form onSubmit={submitHandler}>
      <input type="text" 
      placeholder="What is the task today ?"
      value={title}
      onChange={(e) => {
        setTitle(e.target.value)
      }}
      />
      <button> ADD TASK</button>

    </form>
    <hr />
    <div className="render">
       <ul>{renderTask}</ul>
    </div>
    
   </>
  )
}

export default App
