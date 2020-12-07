import React, { useState, useEffect } from 'react';
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

  const handleDeleteTask = index =>{
    //deleteTask( [...taskList, newTasklist] )

    const newTaskList = [...taskList]

    newTaskList.splice(index,1)
    setTaskList(newTaskList)

    console.log('Delete Task with index '+index,newTaskList)
  }

  const handleTaskCompleted = (index, completed) =>{
    const tasks = [...taskList];
    tasks[index].completed = taskList[index].completed === false ? true : false;
    setTaskList(tasks)
    console.log(tasks[index])

  }
  
  return (
    <div className="App" style={{width:'100%'}}>
      <Nav/>
      <h2 style={{
        paddingTop: '41px',
      }}>ToDo list</h2>
      <AddTodo onAddToTaskList={handleAddToTaskList}/>
      <TaskList  taskList={taskList} onDeleteTask={handleDeleteTask} onTaskCompleted={handleTaskCompleted}/>
    </div>
  );
}

export default App;
