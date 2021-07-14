import {
  taskForm,
  taskStorage,
  renderTaskView,
  taskFormContainer,
  getRenderArray,
} from './UI';

import {
  updateCompletedPriority,
  setCompletedStorage,
  completedTaskSplice,
} from './Completed';

import { getCurrentView } from './ListLogic';

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
  renderTaskView(getCurrentView());
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
  const view = getCurrentView();
  if (view === 'completed') {
    completedTaskSplice((e.target.dataset.index), 1);
    updateCompletedPriority();
    setCompletedStorage();
    renderTaskView(getCurrentView());
  } else {
    const task = taskStorage[e.target.dataset.index];
    const listName = task.list;
    const index = taskStorage[e.target.dataset.index].listPriority;
    taskStorage.splice((e.target.dataset.index), 1);
    updateAllPriority();
    updateListPriority(listName, index);
    setTaskStorage();
    renderTaskView(getCurrentView());
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
  const view = getCurrentView();
  if (!e.target.matches('.priorUp')) return;
  if (view === 'today') return;
  if (view === 'completed') return;
  if (view === 'all Tasks') {
    index = parseInt(e.target.dataset.index, 10);
    if (index === 0) return;
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
      if (task.list !== view) return;
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
  renderTaskView(view);
};

const priorityDown = function priorityDown(e) {
  let index;
  let listPrior;
  const view = getCurrentView();
  const tempRenderArray = getRenderArray();
  if (!e.target.matches('.priorDown')) return;
  if (view === 'today') return;
  if (view === 'completed') return;
  if (view === 'all Tasks') {
    index = parseInt(e.target.dataset.index, 10);
    if (index === (taskStorage.length - 1)) return;
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
    if (listPrior === tempRenderArray.length) return;
    taskStorage.forEach((task) => {
      if (task.list !== view) return;
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
  renderTaskView(view);
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
