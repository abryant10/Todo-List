import {
  listFormReset,
  renderListsToForm,
  renderListView,
  renderTaskView,
  resetListDeletePopup,
  addListForm,
  addListText,
} from './UI';

import {
  updateAllPriority,
  setTaskStorage,
  deleteAllTaskFromDeadList,
} from './TaskLogic';

let listStorage = JSON.parse(localStorage.getItem('listStorage')) || [{"name":"Reminders", "color":"rgb(241, 241, 241)"}];
let listToDelete;
let currentView =  "all Tasks";

const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

const List = (name) => {
  const r = randomBetween(155, 255);
  const g = randomBetween(155, 255);
  const b = randomBetween(155, 255);
  const rgb = `rgb(${r},${g},${b})`;
  const color = rgb;

  return {
    name,
    color,
  };
};

const setCurrentView = function setCurrentView(view) {
  currentView = view;
};

const setListToDelete = function setListToDelete(list) {
  listToDelete = list;
};

const setListStorage = function setListStorage() {
  localStorage.setItem('listStorage', JSON.stringify(listStorage));
};

const listFormSubmit = function listFormSubmit() {
  const listText = (addListForm.querySelector('[name=addListText]')).value;
  if (listText === '') {
    listFormReset();
    return;
  }
  const newList = List(addListText.value);
  listStorage.push(newList);
  listFormReset();
  setListStorage();
  renderListsToForm();
  renderListView();
};

const deleteList = function deleteList() {
  const listArray = listStorage.map((element) => element.name);
  const listIndex = listArray.indexOf(listToDelete);
  listStorage.splice(listIndex, 1);
  setListStorage();
  renderListView();
  renderListsToForm();
  deleteAllTaskFromDeadList(listToDelete);
  updateAllPriority();
  setTaskStorage();
  renderTaskView(currentView);
  resetListDeletePopup();
};

export {
  listFormSubmit,
  deleteList,
  listStorage,
  setListToDelete,
  listToDelete,
  setCurrentView,
  currentView,
};
