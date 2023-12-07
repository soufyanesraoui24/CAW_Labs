import React, { useState } from 'react';
import NewTaskForm from './NewTaskForm';
import Task from './Task';
import './styles.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName, taskDescription) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        name: taskName,
        description: taskDescription,
        subtasks: [],
      },
    ]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const addSubtask = (taskId, subtaskText) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, subtasks: [...task.subtasks, { id: task.subtasks.length + 1, text: subtaskText, done: false }] };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const toggleSubtask = (taskId, subtaskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          subtasks: task.subtasks.map((subtask) => {
            if (subtask.id === subtaskId) {
              return { ...subtask, done: !subtask.done };
            }
            return subtask;
          }),
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list-container">
      <NewTaskForm addTask={addTask} />
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} addSubtask={addSubtask} toggleSubtask={toggleSubtask} />
      ))}
    </div>
  );
}

export default TaskList;
