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
    let renderTask = <h2>No task Available</h2>
    if(mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li className="style_task" >
        <div >
          <h5>{t.title}</h5>
        </div>
        <button >del</button>
        </li>
      );
    });
   }
  return (
   <>
     <h1>My TODO List</h1>

    <form onSubmit={submitHandler}>
      <input type="text" 
      placeholder="Enter the Task here"
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
