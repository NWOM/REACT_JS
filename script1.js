/*this is the script.js file for TO-DO app */
import React from 'react';
import ReactDOM from 'react-dom';
import { Todo } from './TO-DO/main';

var taskList = ["Task-1", "Task-2", "Task-3"];
var tasks = localStorage.getItem('storedTasks');
if (tasks) {
  taskList = JSON.parse(tasks);
}

ReactDOM.render(
  <Todo task={taskList} />,
  document.getElementById('todo')
);
