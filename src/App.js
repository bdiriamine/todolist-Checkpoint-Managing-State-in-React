import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Home from './components/Home';


function App() {
  return (

      <div className="App">
        <Navbar />
        <div className="content">
          <Home />
        <Routes>
          <Route path='/' element={<TaskList  />}  />
          <Route path='/addtask' element={<TaskForm    />}  />
        </Routes>
        </div>
      </div>


  );
}

export default App;
