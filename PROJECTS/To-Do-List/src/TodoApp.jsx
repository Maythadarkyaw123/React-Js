import { useState } from "react";
import "./App.css"; 

function TodoApp() {
  const [tasks, setTasks] = useState([]); // Store tasks
  const [input, setInput] = useState(""); // Store user input

  // Add Task
  const addTask = () => {
    if (input.trim() === "") return; // Prevent empty tasks
    setTasks([...tasks, { text: input, completed: false }]);
    setInput(""); // Clear input after adding
  };

  // Toggle Task Completion
  const toggleTask = (index) => {
    setTasks(tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete Task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h2>React To-Do List</h2>
      <input
        type="text"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        id="newadd"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "done" : ""}>
            {task.text}
            <button onClick={() => toggleTask(index)}>Done</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
