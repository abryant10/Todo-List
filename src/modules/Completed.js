import {
  taskStorage,
  renderTaskView,
} from './UI';

import {
  updateAllPriority,
  updateListPriority,
  setTaskStorage,
} from './TaskLogic';

import { currentView } from './ListLogic';

let completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];

const getCompletedTasks = function getCompletedTasks() { return completedTasks; };

const completedTaskSplice = function completedTaskSplice(where, howmany) {
  completedTasks.splice(where, howmany);
};

const updateCompletedArray = function updateCompletedArray(data) {
  completedTasks = completedTasks.concat(data);
};

const setCompletedStorage = function setCompletedStorage() {
  localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
};

const updateCompletedPriority = function updateCompletedPriority() {
  completedTasks.forEach((task) => {
    task.allPriority = completedTasks.indexOf(task);
  });
};

const completeTask = function completeTask(e) {
  if (!e.target.matches('.TCCheck')) return;
  const task = taskStorage.splice((e.target.dataset.index), 1);
  updateCompletedArray(task);
  setCompletedStorage();
  updateAllPriority();
  updateListPriority();
  updateCompletedPriority();
  setTaskStorage();
  renderTaskView(currentView);
};

export {
  // completedTasks,
  completedTaskSplice,
  getCompletedTasks,
  completeTask,
  updateCompletedPriority,
  setCompletedStorage,
};
