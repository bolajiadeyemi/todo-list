import React, { useState } from 'react';
import './App.css';
import Nav from './components/nav';
import AddTodo from './components/add-todo';
import TaskList from './components/task-list';


function App() {
  const [taskList, setTaskList] = useState([]);
  const handleAddToTaskList = (newTask) => {
    setTaskList([...taskList, {
      text: newTask,
      completed: false
    }])
  }
  return (
    <div className="App">
      <Nav/>
      <h2 style={{
        paddingTop: '41px',
      }}>ToDo list</h2>
      <AddTodo onAddToTaskList={handleAddToTaskList}/>
      <TaskList  taskList={taskList}/>
    </div>
  );
}

export default App;
