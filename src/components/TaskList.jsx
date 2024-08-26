import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem.js';
const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  const handleEdit = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
    setTasks(updatedTasks);
  };
  return (
    <div className="task-list">
      <h2>Tasks</h2>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className='task-display'>
              <TaskItem
                task={task}
                index={index}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default TaskList;