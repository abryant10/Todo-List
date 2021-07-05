import { listFormReset, renderListsToForm, renderListView, renderTaskView, resetListDeletePopup, addListForm, currentView} from "./UI";
import {updateAllPriority, setTaskStorage, deleteAllTaskFromDeadList} from "./TaskLogic";


let listStorage = JSON.parse(localStorage.getItem('listStorage')) || [{"name":"Reminders", "color":"rgb(241, 241, 241)"}];

let listToDelete;

const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

const List = (name) => {
    const r = randomBetween(155, 255);
    const g = randomBetween(155, 255);
    const b = randomBetween(155, 255);
    const rgb = `rgb(${r},${g},${b})`;
    let color = rgb;
    return {
        name,
        color
    }
}

function setListToDelete(list) {
    var listIndex = listStorage.map(function(e) { return e.name; }).indexOf(list);
    listToDelete = listStorage[listIndex].name;
};

function setListStorage () {
    localStorage.setItem("listStorage", JSON.stringify(listStorage));
}

function listFormSubmit () {
    var listText = (addListForm.querySelector('[name=addListText]')).value;
    if (listText == "") {
        listFormReset();
        return;}
    var newList = List(addListText.value);
    listStorage.push(newList);
    listFormReset();
    setListStorage();
    renderListsToForm();
    renderListView();
}

function deleteList () {
    var listIndex = listStorage.map(function(e) { return e.name; }).indexOf(listToDelete);
    listStorage.splice(listIndex, 1);
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