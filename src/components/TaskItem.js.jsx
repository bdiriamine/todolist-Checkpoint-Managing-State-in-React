import React, { useState } from 'react';

const TaskItem = ({ task, index, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(task.name);
  const [editDescription, setEditDescription] = useState(task.description);

  const handleSave = () => {
    if (editName.trim() && editDescription.trim()) {
      onEdit(index, { name: editName, description: editDescription });
      setIsEditing(false);
    }
  };
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete(index);
    }
  };
  return (
    <div className="task-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            placeholder="Task Name"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Description"
          ></textarea>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div >
            <p> Task name : {task.name}</p>
            <p> Task description :  : {task.description}</p>
      
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;