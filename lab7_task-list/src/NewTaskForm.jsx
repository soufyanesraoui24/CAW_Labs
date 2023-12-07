import React, { useState } from 'react';
import './styles.css';

function NewTaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '' && taskDescription.trim() !== '') {
      addTask(taskName, taskDescription);
      setTaskName('');
      setTaskDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
     <div>
     <label className='task-name-label'>
        Task Name: 
      </label><br />
        <input className='task-name' type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      
     </div>
      <div>
      <label className='task-description-label'>
        Task Description:
        </label><br />
        <input className='task-description' value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
      
      </div>
      <button className='btn-task' type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
