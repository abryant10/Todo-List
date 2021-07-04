import Icon from '../styles/GitHub-Mark-Light-120px-plus.png';
import { format, parseISO } from 'date-fns';
import {taskFormSubmit, deleteTask, setTaskStorage, priorityDown, priorityUp, } from './TaskLogic';
import {completedTasks, completeTask} from '/src/modules/Completed';
import {listStorage, listFormSubmit, deleteList, listToDelete, setListToDelete} from './ListLogic';

let taskStorage = JSON.parse(localStorage.getItem('taskStorage')) || [];

let currentView =  "all";

let renderArray;

const myIcon = new Image();
myIcon.src = Icon;
myIcon.alt="git hub mark";
myIcon.height = "20";
myIcon.width = "20";

//--------------- dom editors -----------------------

const listDeleteButtonClicked = (e) => {
    if(!e.target.matches(".deleteListButton")) return;
    setListToDelete(e.target.dataset.list)
    listDeletePopup.style.display = "block";
    listDeleteWarning.innerHTML = `Are you sure you want to delete <b>${listToDelete}</b> and all of it's tasks?`;
}
function clearDeleteList () {
    listDeletePopup.style.display = "none";
}
function listFormReset() {
    addListForm.reset();
    addListForm.style.display = "none";
}
function resetListDeletePopup() {
    listDeletePopup.style.display = "none";
}
function listButtonClicked (e) {
    if(!e.target.matches(".listButton")) return;
    currentView = e.target.innerHTML;
    renderTaskView(currentView);
    renderListsToForm();
    listButtonHighlight(e.target);
    CheckHideNewTaskButton();
    resetTaskForm();
}
//hide the new task button so tasks are not made in completed view
function CheckHideNewTaskButton() {
    newTaskButton.style.display = "block";
    if (currentView != "completed") return;
    newTaskButton.style.display = "none";
}
//logic that sorts user data for task card creation
function getRenderArray (list) {
    var sortVal = sortBySelector.value;
    let filteredArray;
    let today = new Date().toISOString().split('T')[0];
    let renderArray;
    switch (list) {
        case ("all"): 
            switch (sortVal) {
                case ("priority"):
                    renderArray = taskStorage.slice().sort((a, b) => a.allPriority - b.allPriority); 
                    break;
                case ("due-date"):
                    renderArray = taskStorage.slice().sort(function (a, b) {
                        var key1 = new Date(a.dueDate);
                        var key2 = new Date(b.dueDate);
                        if (key1 < key2) {
                            return -1;
                        } else if (key1 == key2) {
                            return 0;
                        } else {
                            return 1;
                        }
                    });
                    break;
            }
            break;
        case ("today"):
            switch (sortVal) {
                case ("priority"):
                    filteredArray = taskStorage.filter(task => task.dueDate == today);
                    renderArray = filteredArray.slice().sort((a, b) => a.allPriority - b.allPriority);
                    break;
                case ("due-date"):
                    filteredArray = taskStorage.filter(task => task.dueDate == today);
                    renderArray = filteredArray.slice().sort((a, b) => a.allPriority - b.allPriority);
                    break;
            }
            break;
        case ("completed"):
            switch (sortVal) {
                case ("priority"):
                    renderArray = completedTasks.slice().sort((a, b) => a.allPriority - b.allPriority);
                    break;
                case ("due-date"):
                    renderArray = completedTasks.slice().sort(function (a, b) {
                        var key1 = new Date(a.dueDate);
                        var key2 = new Date(b.dueDate);
                        if (key1 < key2) {
                            return -1;
                        } else if (key1 == key2) {
                            return 0;
                        } else {
                            return 1;
                        }
                    });
                    break;
            }
            break;
        default: 
        switch (sortVal) {
            case ("priority"):
                filteredArray = taskStorage.filter(task => task.list == list);
                renderArray = filteredArray.slice().sort((a, b) => a.listPriority - b.listPriority);
                break;
            case ("due-date"):
                filteredArray = taskStorage.filter(task => task.list == list);
                renderArray = filteredArray.slice().sort(function (a, b) {
                    var key1 = new Date(a.dueDate);
                    var key2 = new Date(b.dueDate);
                    if (key1 < key2) {
                        return -1;
                    } else if (key1 == key2) {
                        return 0;
                    } else {
                        return 1;
                    }
                });
                break;
        }
    }
    return renderArray;
}
function allButtonClicked () {
    currentView = "all"
    renderTaskView("all");
    listButtonHighlight();
    CheckHideNewTaskButton();
    resetTaskForm();
}

function todayButtonClicked () {
    currentView = "today";
    renderTaskView("today");
    listButtonHighlight()
    CheckHideNewTaskButton();
    resetTaskForm();
}
function completedButtonClicked() {
    currentView = "completed"
    renderTaskView("completed");
    listButtonHighlight()
    CheckHideNewTaskButton();
    resetTaskForm();
}
//highlight list buttons when clicked
function listButtonHighlight(target) {
    var allListButtons = [...document.querySelectorAll(".listButton")];
    allListButtons.forEach(button => {button.classList.remove("listButtonSelected");});
    switch (currentView) {
        case ("all"): 
            allButton.classList.add("listButtonSelected");
            break;
        case ("today"):
            todayButton.classList.add("listButtonSelected");
            break;
        case ("completed"):
            completedButton.classList.add("listButtonSelected");
            break;
        default:
            target.classList.add("listButtonSelected");
            break;
    }
}
function expandCardInfo (e) {
    if (!e.target.matches(".TCExpand")) return;
    var index = e.target.dataset.info;
    var target = e.currentTarget;
    var targetBottom = target.querySelector(`[data-expand="${index}"]`)
    if(targetBottom.classList.contains("expandedInfo")) {
        targetBottom.classList.remove("expandedInfo");
    } else {
        targetBottom.classList.add("expandedInfo");
    }
}    

function createTaskForm () {
    taskForm.reset();
    renderListsToForm();
    taskFormContainer.style.display = "block";    
    taskText.focus();
}

function createNewListForm () {
    addListForm.reset();
    addListForm.style.display = "block";
    addListText.focus();
}
function resetTaskForm () {
    taskForm.reset();
    taskFormContainer.style.display = "none";
}
function resetListForm () {
    addListForm.reset();
    addListForm.style.display = "none";
}
function renderListsToForm () {
    listSelector.innerHTML = "";
    listStorage.forEach(listIndex => {
        if (listIndex == currentView){
            var listOption = document.createElement('option');
            var listOption = document.createElement('option');
            listOption.innerHTML = `${listIndex}`;
            listOption.selected = "selected";
            listSelector.appendChild(listOption);
        }else {
            var listOption = document.createElement('option');
            listOption.value = `${listIndex}`;
            listOption.innerHTML = `${listIndex}`;
            listSelector.appendChild(listOption);
        }
    })
}
function renderListView () {
    listNav.innerHTML = "";
    listStorage.forEach(listIndex => {
        var listButtonDiv = document.createElement("div");
        listButtonDiv.classList.add("navButton");
        var listButton = document.createElement("button");
        listButton.classList.add("listButton");
        listButton.innerHTML = `${listIndex}`;
        var deleteListButton = document.createElement("button");
        deleteListButton.innerHTML = "X";
        deleteListButton.classList.add("deleteListButton");
        deleteListButton.dataset.list = `${listIndex}`;
        listNav.appendChild(listButtonDiv);
        listButtonDiv.appendChild(listButton);
        listButtonDiv.appendChild(deleteListButton);
    })
}
function clearTaskView () {
    while(taskViewRenderDiv.firstChild) {
        taskViewRenderDiv.removeChild(taskViewRenderDiv.lastChild);
    }
}
function windowClickListFormSubmit(e) {
    if (e.target.matches(".addListButton")) return;
    if (e.target.matches(".addListText")) return;
    if (addListForm.style.display == "block") {
        listFormSubmit();
    }

}
function taskTitleToInputField(e) {
    if(!e.target.matches(".TCTitle")) return;
    if(currentView == "completed") return;
    let index = e.target.dataset.index;
    let parent =  e.target.parentElement;
    parent.removeChild(e.target);
    let form = document.createElement("form");
    form.classList.add("TCchangeTitleForm");
    let input = document.createElement("input");
    input.type ="text";
    input.classList.add("TCchangeTitleInput");
    input.dataset.index = index;
    input.value = taskStorage[index].title;
    parent.appendChild(form);
    form.appendChild(input);
}
function taskDateToDateField(e) {
    if(!e.target.matches(".TCDate")) return;
    if(currentView == "completed") return;
    let index = e.target.dataset.index;
    let parent =  e.target.parentElement;
    parent.removeChild(e.target);
    let form = document.createElement("form");
    form.classList.add("TCchangeDateForm");
    let input = document.createElement("input");
    input.type ="date";
    input.classList.add("TCchangeDateInput");
    input.dataset.index = index;
    input.value = taskStorage[index].dueDate;
    parent.insertBefore(form, parent.firstChild);
    form.appendChild(input);
}
function updateTaskDate(e) {
    if(e.target.matches(".TCDate")) return;
    if(e.target.matches(".TCchangeDateInput")) return;
    let dateInput = document.querySelectorAll(".TCchangeDateInput");
    if (dateInput.length > 0) {
        dateInput.forEach(dateField => {
            taskStorage[dateField.dataset.index].dueDate = dateField.value;
        })
    setTaskStorage();
    renderTaskView(currentView);
    }
}
function updateTaskTitle(e) {
    e.preventDefault();
    if(!e.target.matches(".TCchangeTitleForm")) return;
    let input = e.target.querySelector("input");
    taskStorage[input.dataset.index].title = input.value;
    setTaskStorage();
    renderTaskView(currentView);
}
function taskNotesToTextArea(e) {
    if(!e.target.matches(".TCNotes")) return;
    if(currentView == "completed") return;
    let index = e.target.dataset.index;
    let parent =  e.target.parentElement;
    parent.removeChild(e.target);
    let form = document.createElement("form");
    form.classList.add("TCchangeNotesForm");
    let textArea = document.createElement("TEXTAREA");
    textArea.classList.add("TCchangeNotesTextArea");
    textArea.dataset.index = index;
    textArea.value = taskStorage[index].notes;
    let submit = document.createElement("button");
    submit.classList.add("TCNotesButton");
    submit.innerHTML = "Save Changes";
    parent.appendChild(form);
    form.appendChild(textArea);
    form.appendChild(submit);
}
function updateTaskNotes(e) {
    if(!e.target.matches(".TCNotesButton")) return;
    e.preventDefault();
    let parent = e.target.parentElement;
    let textArea = parent.querySelector("textarea");
    taskStorage[textArea.dataset.index].notes = textArea.value;
    setTaskStorage();
    renderTaskView(currentView);
}

function renderTaskView (list) {
    renderArray = getRenderArray(list); 
    clearTaskView();
    renderArray.forEach(task => { 
        let checkbox = `<input type="checkbox" class="TCCheck" data-index="${task.allPriority}">`
        let priorityButtons = 
            `<button class="TCButton TCPriorButton priorUp" data-index="${task.allPriority}">&#9650</button>
            <button class="TCButton TCPriorButton priorDown" data-index="${task.allPriority}">&#9660</button>`;
        let notes = `&nbsp;`;
        if(task.notes != "") {notes = task.notes};
        if(currentView == "completed"){checkbox = ""};
        if(sortBySelector.value != "priority") {priorityButtons = ""};
        if(currentView == "today") {priorityButtons = ""};
        let renderedTaskDate;
        if(task.dueDate != "") {
            renderedTaskDate = format(parseISO(task.dueDate), 'M/d/y')
        }else {
            renderedTaskDate = "Due Date";
        }
        var newTaskCard = document.createElement('div');
        newTaskCard.classList.add('taskCard');
        newTaskCard.innerHTML =     
            `<div class="TCTop">
                <div class="TCTopLeft">
                    ${checkbox}
                    <p class="TCTitle" data-index="${task.allPriority}">${task.title}</p>
                </div>
                <div class="TCTopRight">
                    <p class="TCDate" data-index="${task.allPriority}">${renderedTaskDate}</p>
                    <div class="TCPriorityButtonContainer">
                        ${priorityButtons}
                    </div>
                    <button class="TCButton TCDelete" data-index="${task.allPriority}">X</button>
                </div>
            </div>
            <div class="TCMiddle">
                <button class="TCButton TCExpand" data-info="${task.allPriority}">info</button>
            </div>
            <div class="TCBottom" data-expand="${task.allPriority}">
                <p>Notes:</p>
                <div><p class="TCNotes" data-index="${task.allPriority}">${notes}</p></div>
                <p>List:</p>
                <p class="TCList">${task.list}</p>
            </div>`
        taskViewRenderDiv.appendChild(newTaskCard);
    });
}

// -------------- dom listeners ----------------------------------------------------
const addListButton = document.querySelector(".addListButton");
const addListForm = document.querySelector(".addListForm");
const addListText = document.getElementById("addListText");
const allButton = document.getElementById("allButton")
const todayButton = document.getElementById("todayButton");
const completedButton = document.getElementById("completedButton");
const listNav = document.querySelector(".listNav");
const newTaskButton = document.querySelector(".newTaskButton");
const sortBySelector = document.getElementById("sortBySelector");
const taskFormContainer = document.querySelector(".taskFormContainer");
const taskForm = document.querySelector(".taskForm");
const taskText = document.getElementById("taskText");
const listSelector = document.getElementById('listSelector');
const taskViewRenderDiv = document.querySelector('.taskViewRenderDiv');
const listDeletePopup = document.querySelector(".listDeletePopup");
const listDeleteWarning = listDeletePopup.querySelector(".listDeleteWarning");
const yesDeleteList = document.getElementById("yesDeleteList");
const noDeleteList = document.getElementById("noDeleteList");
const footerLink = document.getElementById("footerLink");

listNav.addEventListener("click", listButtonClicked);
listNav.addEventListener("click", listDeleteButtonClicked);
yesDeleteList.addEventListener("click", deleteList);
noDeleteList.addEventListener("click", clearDeleteList);
allButton.addEventListener('click', allButtonClicked);
todayButton.addEventListener('click', todayButtonClicked);
completedButton.addEventListener("click", completedButtonClicked);
taskViewRenderDiv.addEventListener("click", deleteTask);
taskViewRenderDiv.addEventListener("click", priorityUp);
taskViewRenderDiv.addEventListener("click", priorityDown);
taskViewRenderDiv.addEventListener("click", expandCardInfo);
taskViewRenderDiv.addEventListener("click", completeTask);
taskViewRenderDiv.addEventListener("click", taskTitleToInputField);
taskViewRenderDiv.addEventListener("click", taskDateToDateField);
taskViewRenderDiv.addEventListener("submit", updateTaskTitle);
taskViewRenderDiv.addEventListener("click", taskNotesToTextArea);
taskViewRenderDiv.addEventListener("click", updateTaskNotes);
addListButton.addEventListener("click", () => {
    listFormSubmit();
    createNewListForm();
    addListText.focus();
});
addListForm.addEventListener('submit', (event) => {
    event.preventDefault();
    listFormSubmit();
});

newTaskButton.addEventListener("click", () => {
    taskFormSubmit();
    createTaskForm();
});
sortBySelector.addEventListener("change", () => {renderTaskView(currentView);});
taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    taskFormSubmit();
}); 
window.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    resetTaskForm();
    resetListForm();
    renderTaskView(currentView);
  }
})
window.addEventListener("keydown", function(e) {
    if (taskFormContainer.style.display == "block" && e.key === "Enter") {
        taskFormSubmit();
    }
})
window.addEventListener("click", (e) => {
    updateTaskDate(e);
    windowClickListFormSubmit(e);
});

export {taskForm, taskStorage, renderTaskView, taskFormContainer, currentView, 
    renderArray, listFormReset, resetListDeletePopup, addListForm, 
    renderListsToForm, renderListView, myIcon, footerLink};
