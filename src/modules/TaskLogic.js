import {
  taskForm,
  taskStorage,
  renderTaskView,
  taskFormContainer,
  renderArray,
} from './UI';

import {
  updateCompletedPriority,
  setCompletedStorage,
  completedTaskSplice,
} from './Completed';

import { currentView } from './ListLogic';

const Task = (title, list, notes, dueDate, listPriority, allPriority) => (
  {
    title,
    list,
    notes,
    dueDate,
    listPriority,
    allPriority,
  });

const checkListPriority = function checkListPriority(list) {
  const listFilter = taskStorage.filter((task) => task.list === list);
  const priority = (listFilter.length + 1);
  return priority;
};

const setTaskStorage = function setTaskStorage() {
  localStorage.setItem('taskStorage', JSON.stringify(taskStorage));
};

const taskFormSubmit = function taskFormSubmit() {
  const taskText = (taskForm.querySelector('[name=taskText]')).value;
  if (taskText === '') return;
  const taskDueDate = (taskForm.querySelector('[name=taskDueDate]')).value;
  const taskNotes = (taskForm.querySelector('[name=taskNotes]')).value || '   ';
  const taskList = (taskForm.querySelector('[name=listSelector]')).value;
  const priority = (checkListPriority(taskList));
  const task = Task(taskText, taskList, taskNotes, taskDueDate, priority, (taskStorage.length));
  taskStorage.push(task);
  setTaskStorage();
  renderTaskView(currentView);
  taskFormContainer.style.display = 'none';
  taskForm.reset();
};

const updateAllPriority = function updateAllPriority() {
  taskStorage.forEach((task) => {
    task.allPriority = (taskStorage.indexOf(task));
  });
};

const updateListPriority = function updateListPriority(list, index) {
  taskStorage.forEach((task) => {
    if (task.list !== list) return;
    if (task.listPriority < index) return;
    task.listPriority -= 1;
  });
};

const deleteTask = function deleteTask(e) {
  if (!e.target.matches('.TCDelete')) return;
  if (currentView === 'completed') {
    completedTaskSplice((e.target.dataset.index), 1);
    updateCompletedPriority();
    setCompletedStorage();
    renderTaskView(currentView);
  } else {
    const task = taskStorage[e.target.dataset.index];
    const listName = task.list;
    const index = taskStorage[e.target.dataset.index].listPriority;
    taskStorage.splice((e.target.dataset.index), 1);
    updateAllPriority();
    updateListPriority(listName, index);
    setTaskStorage();
    renderTaskView(currentView);
  }
};

const deleteAllTaskFromDeadList = function deleteAllTaskFromDeadList(list) {
  taskStorage.forEach((task) => {
    if (task.list === list) {
      taskStorage.splice(taskStorage.indexOf(task), 1);
    }
  });
};

const priorityUp = function priorityUp(e) {
  let index;
  let listPrior;
  if (!e.target.matches('.priorUp')) return;
  if (currentView === 'today') return;
  if (currentView === 'completed') return;
  if (currentView === 'all Tasks') {
    if (e.target.dataset.index === 0) return;
    index = parseInt(e.target.dataset.index, 10);
    taskStorage.forEach((task) => {
      if (task.allPriority < (index - 1)) return;
      if (task.allPriority > (index)) return;
      if (task.allPriority === (index - 1)) {
        task.allPriority += 1;
      } else if (task.allPriority === index) {
        task.allPriority -= 1;
      }
    });
  } else {
    listPrior = taskStorage[parseInt(e.target.dataset.index, 10)].listPriority;
    if (listPrior === 1) return;
    taskStorage.forEach((task) => {
      if (task.list !== currentView) return;
      if (task.listPriority < (listPrior - 1)) return;
      if (task.listPriority > (listPrior)) return;
      if (task.listPriority === (listPrior - 1)) {
        task.listPriority += 1;
      } else if (task.listPriority === listPrior) {
        task.listPriority -= 1;
      }
    });
  }
  window.taskStorage = taskStorage.sort((a, b) => a.allPriority - b.allPriority);
  setTaskStorage();
  renderTaskView(currentView);
};

const priorityDown = function priorityDown(e) {
  let index;
  let listPrior;
  if (!e.target.matches('.priorDown')) return;
  if (currentView === 'today') return;
  if (currentView === 'completed') return;
  if (currentView === 'all Tasks') {
    if (e.target.dataset.index === (taskStorage.length - 1)) return;
    index = parseInt(e.target.dataset.index, 10);
    taskStorage.forEach((task) => {
      if (task.allPriority < (index)) return;
      if (task.allPriority > (index + 1)) return;
      if (task.allPriority === (index)) {
        task.allPriority += 1;
      } else if (task.allPriority === (index + 1)) {
        task.allPriority -= 1;
      }
    });
  } else {
    listPrior = taskStorage[parseInt(e.target.dataset.index, 10)].listPriority;
    if (listPrior === renderArray.length) return;
    taskStorage.forEach((task) => {
      if (task.list !== currentView) return;
      if (task.listPriority < (listPrior)) return;
      if (task.listPriority > (listPrior + 1)) return;
      if (task.listPriority === (listPrior + 1)) {
        task.listPriority -= 1;
      } else if (task.listPriority === listPrior) {
        task.listPriority += 1;
      }
    });
  }
  window.taskStorage = taskStorage.sort((a, b) => a.allPriority - b.allPriority);
  setTaskStorage();
  renderTaskView(currentView);
};

export {
  taskFormSubmit,
  deleteTask,
  updateAllPriority,
  updateListPriority,
  setTaskStorage,
  priorityUp,
  priorityDown,
  deleteAllTaskFromDeadList,
};
