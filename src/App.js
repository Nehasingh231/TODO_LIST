
import './App.css';
import { useState } from "react";


const App = () => {
  const [title, setTitle] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedTasks = mainTask.map((task, index) =>
        index === currentTaskIndex ? { ...task, title } : task
      );
      setMainTask(updatedTasks);
      setIsEditing(false);
      setCurrentTaskIndex(null);
    } else {
      setMainTask([...mainTask, { title, completed: false }]);
    }
    setTitle("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  const editHandler = (i) => {
    setTitle(mainTask[i].title);
    setIsEditing(true);
    setCurrentTaskIndex(i);
  };

  const toggleCompletionHandler = (i) => {
    const updatedTasks = mainTask.map((task, index) =>
      index === i ? { ...task, completed: !task.completed } : task
    );
    setMainTask(updatedTasks);
  };

  let renderTask = <h2>No task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, i) => {
      return (
        <li key={i} className={`style_task ${task.completed ? "completed" : ""}`}>
          <div>
            <h5>{task.title}</h5>
          </div>
          <span>
            <i
              onClick={() => {
                editHandler(i);
              }}
              className="fa-solid fa-edit"
            ></i>
            <i
              onClick={() => {
                deleteHandler(i);
              }}
              className="fa-solid fa-trash-can"
            ></i>
            <i
              onClick={() => {
                toggleCompletionHandler(i);
              }}
              className={`fa-solid fa-check ${task.completed ? "completed" : ""}`}
            ></i>
          </span>
        </li>
      );
    });
  }

  return (
    <>
      <h1>Things To Do</h1>

      <form className='' onSubmit={submitHandler}>
        <input
          className='input-box-todo'
          type="text"
          placeholder="What is the task today?"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button 
        className='add-btn'
        >
        {isEditing ? "UPDATE TASK" : "ADD TASK"}
        </button>
      </form>
      <hr />
      <div className="render">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default App;
