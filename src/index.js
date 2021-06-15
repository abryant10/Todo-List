//const { et } = require("date-fns/locale");

// storage
let taskStorage = JSON.parse(localStorage.getItem('taskStorage')) || [];

let listStorage = JSON.parse(localStorage.getItem('listStorage')) || ["Reminders"];

let currentView =  "all";

let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];


// ------------task factory-----------------------------

const Task = (title, list, notes, dueDate, listPriority, allPriority) => {
    return{
        title, 
        list, 
        notes,
        dueDate,
        listPriority,
        allPriority,
    }
}

function taskFormSubmit () {
    var taskText = (taskForm.querySelector('[name=taskText]')).value;
    if (taskText == "") return;
    const taskDueDate = (taskForm.querySelector('[name=taskDueDate]')).value;
    const taskNotes = (taskForm.querySelector('[name=taskNotes]')).value;
    const taskList = (taskForm.querySelector('[name=listSelector]')).value;
    var priority = (checkListPriority(taskList));
    var task = Task(taskText, taskList, taskNotes, taskDueDate, priority, (taskStorage.length));
    taskStorage.push(task);
    setTaskStorage();
    renderTaskView(currentView);    
    taskFormContainer.style.display = "none";
    taskForm.reset();
}
function checkListPriority (list) {
    const listFilter = taskStorage.filter(task => task.list == list);
    const priority = (listFilter.length +1);
    return priority;
}

function listFormSubmit (e) {
    e.preventDefault();
    var newList = addListText.value;
    listStorage.push(newList);
    this.reset();
    this.style.display = "none";
    setListStorage();
    renderListsToForm();
    renderListView();
}
function setTaskStorage () {
    localStorage.setItem("taskStorage", JSON.stringify(taskStorage));
}
function setListStorage () {
    localStorage.setItem("listStorage", JSON.stringify(listStorage));
}
function setCompletedStorage() {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
}

function deleteTask (e) {
    if (!e.target.matches(".TCDelete")) return;
    if(currentView == "completed") {
        completedTasks.splice((e.target.dataset.index), 1);
        updateCompletedPriority();
        setCompletedStorage();
        renderTaskView(currentView);
    }else {
        var list = taskStorage[e.target.dataset.index].list; 
        var index = taskStorage[e.target.dataset.index].listPriority;
        taskStorage.splice((e.target.dataset.index), 1);
        updateAllPriority();
        updateListPriority(list, index);
        setTaskStorage();
        renderTaskView(currentView);
    }
}
function deleteList () {
    listStorage.splice((listStorage.indexOf(listToDelete)), 1);
    setListStorage();
    renderListView();
    renderListsToForm();
    taskStorage.forEach(task => {
        if(task.list == listToDelete) {
            taskStorage.splice(taskStorage.indexOf(task), 1);
        }
    })
    updateAllPriority();
    setTaskStorage();
    renderTaskView(currentView);
    listDeletePopup.style.display = "none";
}
function clearDeleteList () {
    listDeletePopup.style.display = "none";
}

function updateAllPriority() {
    taskStorage.forEach(task => {
        task.allPriority = (taskStorage.indexOf(task));
    }) 
}
function updateCompletedPriority() {
    completedTasks.forEach(task => {
        task.allPriority = (taskStorage.indexOf(task));
    }) 
}
function updateListPriority(list, index) {
    taskStorage.forEach(task => {
        if(task.list != list) return;
        if(task.listPriority < index) return;
        task.listPriority--;
    })
}
function listButtonClicked (e) {
    if(!e.target.matches(".listButton")) return;
    currentView = e.target.innerHTML;
    renderTaskView(currentView);
    renderListsToForm();
}
function listDeleteButtonClicked (e) {
    if(!e.target.matches(".deleteListButton")) return;
    listToDelete = e.target.dataset.list;
    listDeletePopup.style.display = "block";
    listDeleteWarning.innerHTML = `Are you sure you want to delete ${listToDelete} and all of it's tasks?`;
    return {listToDelete};
}
function getRenderArray (list) {
    var sortVal = sortBySelector.value;
    let filteredArray;
    let today = new Date().toISOString().split('T')[0];
    switch (list) {
        case ("all"): 
            switch (sortVal) {
                case ("priority"):
                    renderArray = taskStorage.slice().sort((a, b) => a.allPriority - b.allPriority); 
                    break;
                case ("due-date"):
                    //renderArray = taskStorage.slice().sort((a, b) => a.dueDate - b.dueDate); 
                    break;
                case ("date-created"):
                    //code
            }
            break;
        case ("today"):
            switch (sortVal) {
                case ("priority"):
                    filteredArray = taskStorage.filter(task => task.dueDate == today);
                    renderArray = filteredArray.slice().sort((a, b) => a.allPriority - b.allPriority);
                    break;
                case ("due-date"):
                    //code
                    break;
                case ("date-created"):
                    //code
            }
        break;
        case ("completed"):
            switch (sortVal) {
                case ("priority"):
                    renderArray = completedTasks.slice().sort((a, b) => a.allPriority - b.allPriority);
                    console.log(renderArray);
                    break;
                case ("due-date"):
                    //code
                    break;
                case ("date-created"):
                    //code
            }
        break;
        default: 
        switch (sortVal) {
            case ("priority"):
                filteredArray = taskStorage.filter(task => task.list == list);
                renderArray = filteredArray.slice().sort((a, b) => a.listPriority - b.listPriority);
                break;
            case ("due-date"):
                //code
                break;
            case ("date-created"):
                //code
        }
    }
    return renderArray;
}
function allButtonClicked () {
    currentView = "all"
    renderTaskView("all");
}

function todayButtonClicked () {
    currentView = "today";
    renderTaskView("today");
}
function completedButtonClicked() {
    currentView = "completed"
    renderTaskView("completed");
}
function priorityUp (e) {
    if (!e.target.matches(".priorUp")) return;
    if (e.target.dataset.index == 0) return;
    if (currentView == "today") return;
    if (currentView == "completed") return;
    if(currentView == "all"){
        var index = parseInt(e.target.dataset.index);
        taskStorage.forEach(task => {
            if(task.allPriority < (index - 1)) return;
            if(task.allPriority > (index)) return;
            if(task.allPriority == (index - 1)) {
                task.allPriority++;
            } else if (task.allPriority == index) {
                task.allPriority--;
            }
        }) 
    }else {
        var listPrior = taskStorage[parseInt(e.target.dataset.index)].listPriority;
        if(listPrior == 1) return;
        taskStorage.forEach(task => {
            if(task.list != currentView) return;
            if(task.listPriority < (listPrior - 1)) return;
            if(task.listPriority > (listPrior)) return;
            if(task.listPriority == (listPrior - 1)) {
                task.listPriority++;
            } else if (task.listPriority == listPrior) {
                task.listPriority--;
            }
        }) 
    }
    taskStorage = taskStorage.sort((a, b) => a.allPriority - b.allPriority);
    setTaskStorage();
    renderTaskView(currentView);
}
function priorityDown (e) {
    if (!e.target.matches(".priorDown")) return;
    if (e.target.dataset.index == (taskStorage.length - 1)) return;
    if (currentView == "today") return;
    if (currentView == "completed") return;
    if(currentView == "all"){
        var index = parseInt(e.target.dataset.index);
        taskStorage.forEach(task => {
            if(task.allPriority < (index)) return;
            if(task.allPriority > (index + 1)) return;
            if(task.allPriority == (index)) {
                task.allPriority++;
            } else if (task.allPriority == (index + 1)) {
                task.allPriority--;
            }
        }) 
    } else {
        var listPrior = taskStorage[parseInt(e.target.dataset.index)].listPriority;
        if(listPrior == renderArray.length) return;
        taskStorage.forEach(task => {
            if(task.list != currentView) return;
            if(task.listPriority < (listPrior)) return;
            if(task.listPriority > (listPrior + 1)) return;
            if(task.listPriority == (listPrior + 1)) {
                task.listPriority--;
            } else if (task.listPriority == listPrior) {
                task.listPriority++;
            }
        }) 
    }

    taskStorage = taskStorage.sort((a, b) => a.allPriority - b.allPriority);
    setTaskStorage();
    renderTaskView(currentView);
}
function completeTask(e) {
    if(!e.target.matches(".TCCheck")) return;
    var completedTask = taskStorage.splice(taskStorage[e.target.dataset.index], 1);
    console.log(completedTask);
    completedTasks = completedTasks.concat(completedTask);
    console.log(completedTasks);
    setCompletedStorage();
    updateAllPriority();
    updateListPriority();
    updateCompletedPriority();
    setTaskStorage();
    renderTaskView(currentView);
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
taskViewRenderDiv.addEventListener("submit", updateTaskTitle);
taskViewRenderDiv.addEventListener("click", taskNotesToTextArea);
taskViewRenderDiv.addEventListener("submit", updateTaskNotes);
addListButton.addEventListener("click", createNewListForm);
addListForm.addEventListener('submit', listFormSubmit);
newTaskButton.addEventListener("click", () => {
    taskFormSubmit();
    createTaskForm();
    taskText.focus();
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
  }
})
window.addEventListener("keydown", function(e) {
    if (taskFormContainer.style.display == "block" && e.key === "Enter") {
        taskFormSubmit();
    }
})



//--------------- dom editors -----------------------


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
}

function createNewListForm () {
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
function taskTitleToInputField(e) {
    if(!e.target.matches(".TCTitle")) return;
    if(currentView == "completed") return;
    let index = e.target.dataset.index;
    let parent =  e.target.parentElement;
    parent.removeChild(e.target);
    let form = document.createElement("form");
    form.classList.add("changeTitleForm");
    let input = document.createElement("input");
    input.type ="text";
    input.classList.add(".changeTitleInput");
    input.dataset.index = index;
    input.value = taskStorage[index].title;
    parent.appendChild(form);
    form.appendChild(input);
}
function updateTaskTitle(e) {
    e.preventDefault();
    if(!e.target.matches(".changeTitleForm")) return;
    let input = e.target.querySelector("input");
    taskStorage[input.dataset.index].title = input.value;
    setTaskStorage();
    renderTaskView(currentView);
}
function taskNotesToTextArea(e) {
    if(!e.target.matches(".TC")) return;
    if(currentView == "completed") return;
    // let index = e.target.dataset.index;
    // let parent =  e.target.parentElement;
    // parent.removeChild(e.target);
    // let form = document.createElement("form");
    // form.classList.add("changeTitleForm");
    // let input = document.createElement("input");
    // input.type ="text";
    // input.classList.add(".changeTitleInput");
    // input.dataset.index = index;
    // input.value = taskStorage[index].title;
    // parent.appendChild(form);
    // form.appendChild(input);
}
function updateTaskNotes(e) {

}

function renderTaskView (list) {
    var renderArray = getRenderArray(list); 
    clearTaskView();
    renderArray.forEach(task => { 
        let checkbox = `<input type="checkbox" class="TCCheck" data-index="${task.allPriority}">`
        let priorityButtons = 
            `<button class="TCButton TCPriorButton priorUp" data-index="${task.allPriority}">&#9650</button>
            <button class="TCButton TCPriorButton priorDown" data-index="${task.allPriority}">&#9660</button>`;
        if(currentView == "completed"){checkbox = ""};
        if(sortBySelector.value != "priority") {priorityButtons = ""};
        newTaskCard = document.createElement('div');
        newTaskCard.classList.add('taskCard');
        newTaskCard.innerHTML =     
            `<div class="TCTop">
                <div class="TCTopLeft">
                    ${checkbox}
                    <p class="TCTitle" data-index="${task.allPriority}">${task.title}</p>
                </div>
                <div class="TCTopRight">
                    <input type="date" class="TCDate" value="${task.dueDate}">
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
                <p class="TCNotes">${task.notes}</p>
                <p>List:</p>
                <p class="TCList">${task.list}</p>
            </div>`
        taskViewRenderDiv.appendChild(newTaskCard);
    });
}


//----------------------- 
renderListsToForm();
renderListView();
renderTaskView("all");




// to do next 
     // edit task notes
        //set notes pointer to pointer
        // make default notes a few blank spaces??
        //finish functions
     // make list filtering work with dates back in webpack

// -task editing
    // - update title by clicking on it
    // - have checked off items go to completed list

// -list creation tab
    // - logic for form to go away with click
    // - AFTER WP add move lists up and down
    // - AFTER WP add color picker for list

//task filtering
    // - add a completed box
//     //after WP - today box sorts by project

// AFER WP moblie friendly menu and formating
//  AFTER WP check for really long list names and long task names
// AFTER WP add tool tips to buttons
// when clicking away - close and submit list form, colse and submit task form, close all expanded info and rmeove all editable task forms. 
// AFTER WP remove priority buttons from due today and completed tabs




// When the user clicks anywhere outside of the taskform, 
//submit if title is not empty but either way close it
// window.onclick = function(event) { //this logic needs work
//   if (event.target != taskFormContainer || event.target != newTaskButton) {
//     console.log(event.target);
//     if(taskText.value != "") {
//             create task object
//             push object to array
//             clear form
//             hide form
//            resetTaskForm();
//         } else {
//             clear form
//             hide form
//            resetTaskForm();
//         }
//     }
//     console.log("not the form");
// }

