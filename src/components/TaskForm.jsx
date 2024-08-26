import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [errors, setErrors] = useState({ name: '', description: '' });
  const naviagte=useNavigate()
  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', description: '' };
    if (!taskName.trim()) {
      newErrors.name = 'Task name is required.';
      valid = false;
    }
    if (!taskDescription.trim()) {
      newErrors.description = 'Description is required.';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const newTask = {
        name: taskName,
        description: taskDescription,
      };
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      storedTasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
      setTaskName('');
      setTaskDescription('');
      setErrors({ name: '', description: '' });
      naviagte('/')
    }
  };

  return (
    <div className="container">
      <h1>Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="taskName">Task Name:</label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="taskDescription">Description:</label>
          <textarea
            id="taskDescription"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
          ></textarea>
          {errors.description && <span className="error">{errors.description}</span>}
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;