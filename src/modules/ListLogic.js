import { listFormReset, renderListsToForm, renderListView, renderTaskView, resetListDeletePopup, addListForm, currentView} from "./UI";
import {updateAllPriority, setTaskStorage, deleteAllTaskFromDeadList} from "./TaskLogic";


let listStorage = JSON.parse(localStorage.getItem('listStorage')) || ["Reminders"];

let listToDelete;

function setListToDelete(list) {listToDelete = list};

function setListStorage () {
    localStorage.setItem("listStorage", JSON.stringify(listStorage));
}

function listFormSubmit () {
    var listText = (addListForm.querySelector('[name=addListText]')).value;
    if (listText == "") {
        listFormReset();
        return;}
    var newList = addListText.value;
    listStorage.push(newList);
    listFormReset();
    setListStorage();
    renderListsToForm();
    renderListView();
}

function deleteList () {
    listStorage.splice((listStorage.indexOf(listToDelete)), 1);
    setListStorage();
    renderListView();
    renderListsToForm();
    deleteAllTaskFromDeadList(listToDelete);
    updateAllPriority();
    setTaskStorage();
    renderTaskView(currentView);
    resetListDeletePopup();
}


export {listFormSubmit, deleteList, listStorage, setListToDelete, listToDelete};