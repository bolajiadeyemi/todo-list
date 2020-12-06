import './App.css';
import Nav from './components/nav';
import AddTodo from './components/add-todo';
import TaskList from './components/task-list'

function App() {
  return (
    <div className="App">
      <Nav/>
      <h2 style={{
        paddingTop: '41px',
      }}>ToDo list</h2>
      <AddTodo/>
      <TaskList />
    </div>
  );
}

export default App;
