import React, { useState } from 'react';
import './styles.css';

function Task({ task, deleteTask, addSubtask, toggleSubtask }) {
  const [subtaskText, setSubtaskText] = useState('');
  const [showSubtasks, setShowSubtasks] = useState(false);

  const handleSubtaskSubmit = (e) => {
    e.preventDefault();
    if (subtaskText.trim() !== '') {
      addSubtask(task.id, subtaskText);
      setSubtaskText('');
    }
  };

  const handleToggleSubtasks = () => {
    setShowSubtasks(!showSubtasks);
  };

  return (
    <div className="task-container">
      <div className="task-header">
        <div>
          <h2 className='task-header-result'>{task.name}</h2>
        </div>
        <div>
          <p className="task-header-description">{task.description}</p>
        </div>
        <div className="task-actions">
          <button className='btn-delete-task' onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
        <div>
        <button  onClick={handleToggleSubtasks} className="toggle-subtasks-btn">
          {showSubtasks ? 'Hide Sub-Tasks' : 'Show Sub-Tasks'}
        </button>
      </div>
      </div>
      
      {showSubtasks && (
        <ul className="subtask-list">
          {task.subtasks.map((subtask) => (
            <li key={subtask.id} className={subtask.done ? 'subtask-done' : ''}>
              <input
                type="checkbox"
                checked={subtask.done}
                onChange={() => toggleSubtask(task.id, subtask.id)}
              />
              {subtask.text}
            </li>
          ))}
        </ul>
      )}
      {showSubtasks && (
        <form onSubmit={handleSubtaskSubmit} className="subtask-form">
          <label>
            New Subtask:
            <input type="text" value={subtaskText} onChange={(e) => setSubtaskText(e.target.value)} />
          </label>
          <button type="submit">Add Subtask</button>
        </form>
      )}
    </div>
  );
}

export default Task;
