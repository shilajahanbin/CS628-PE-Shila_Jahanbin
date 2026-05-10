import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(["Task1", "Task2", "Task3"]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="app-container">
      <h1>ToDo List App</h1>

      <input
        className="input-box"
        type="text"
        placeholder="Enter task description"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button className="add-button" onClick={addTask}>
        Add Task
      </button>

      <TodoList todos={todos} deleteTask={deleteTask} />
    </div>
  );
}

export default App;