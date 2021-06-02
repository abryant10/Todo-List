// storage
let taskStorage = JSON.parse(localStorage.getItem('taskStorage')) || [];

let listStorage = JSON.parse(localStorage.getItem('listStorage')) || ["Reminders"];

let currentView = JSON.parse(localStorage.getItem('currentView')) || "Reminders";

// ------------task factory-----------------------------

const Task = (title, list, notes, dueDate, listPriority, allPriority) => {
    var activeStatus = true;
    return{
        title, 
        list, 
        notes,
        dueDate,
        listPriority,
        allPriority,
        activeStatus
    }
}


function taskFormSubmit () {
    var taskText = (taskForm.querySelector('[name=taskText]')).value;
    if (taskText == "") return;
    const taskDueDate = (taskForm.querySelector('[name=taskDueDate]')).value;
    const taskNotes = (taskForm.querySelector('[name=taskNotes]')).value;
    const taskList = (taskForm.querySelector('[name=listSelector]')).value;
    var priority = (checkListPriority(taskList));
    var task = Task(taskText, taskList, taskNotes, taskDueDate, priority, (taskStorage.length + 1));
    taskStorage.push(task);
    localStorage.setItem("taskStorage", JSON.stringify(taskStorage));
    renderTaskView();    
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
    localStorage.setItem("listStorage", JSON.stringify(listStorage));
    renderListsToForm();
    renderListView();
}

// -------------- dom listeners -----------------

const addListButton = document.querySelector(".addListButton");
const addListForm = document.querySelector(".addListForm");
const addListText = document.getElementById("addListText");
const listNav = document.querySelector(".listNav");
const newTaskButton = document.querySelector(".newTaskButton");
const sortBySelector = document.getElementById("sortBySelector");
const taskFormContainer = document.querySelector(".taskFormContainer");
const taskForm = document.querySelector(".taskForm");
const taskText = document.getElementById("taskText");
const listSelector = document.getElementById('listSelector');
const taskViewRenderDiv = document.querySelector('.taskViewRenderDiv');


addListButton.addEventListener("click", createNewListForm);
addListForm.addEventListener('submit', listFormSubmit);
newTaskButton.addEventListener("click", () => {
    taskFormSubmit();
    createTaskForm();
    taskText.focus();
});
sortBySelector.addEventListener("change", () => {console.log(sortBySelector.value)});
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




//--------------- dom editors -----------------------

function createTaskForm () {
    taskForm.reset();
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
        var listOption = document.createElement('option');
        listOption.value = `${listIndex}`;
        listOption.innerHTML = `${listIndex}`;
        listSelector.appendChild(listOption);
    })
}
function renderListView () {
    listNav.innerHTML = "";
    listStorage.forEach(listIndex => {
        var listButton = document.createElement("button");
        listButton.innerHTML = `${listIndex}`;
        listButton.classList.add("navButton");
        listNav.appendChild(listButton);
    })
}
function clearTaskView () {
    while(taskViewRenderDiv.firstChild) {
        taskViewRenderDiv.removeChild(taskViewRenderDiv.lastChild);
    }
}


function renderTaskView () {
    //const renderArray = getRenderArray();
    clearTaskView();
    const renderArray = taskStorage; // change this 
    renderArray.forEach(task => { 
        newTaskCard = document.createElement('div');
        newTaskCard.classList.add('taskCard');
        newTaskCard.setAttribute('data-index', `${task.allPriority}`);
        newTaskCard.innerHTML = `    
            <div class="TCTop">
                <div class="TCTopLeft">
                    <input type="checkbox" class="TCCheck">
                    <input type="text" class="TCTitle" value="${task.title}">
                </div>
                <div class="TCTopRight">
                    <input type="date" class="TCDate" value="${task.dueDate}">
                    <div class="TCPriorityButtonContainer">
                        <button class="TCPriorUp">&#9650</button>
                        <button class="TCPriorDown">&#9660</button>
                    </div>
                    <button class="TCDelete">X</button>
                </div>
            </div>
            <div class="TCMiddle">
                <button class="TCExpand">i</button>
            </div>
            <div class="TCBottom">
                <textarea class="TCNotes">${task.notes}</textarea>
                <p class="TCList">${task.list}</p>
            </div>`
        
        taskViewRenderDiv.appendChild(newTaskCard);
    });
}

//------------------ 
renderListsToForm();
renderTaskView();
renderListView();





// to do next 
    //check out 4th down buttons 
    // make delete list work
    //make task UI 
        // delete task
        // expand info
        // up and down priorotiy


// -list creation tab
    // - add delele to lists
        // all tasks with list will be deleted
    // - logic for form to go away with click
    // - add move lists up and down
    // - add color picker for list

// -task editing
    // - ability to change priority
    // - update title by clicking on it
    // - have checked off items go to deleted list


//task filtering
    // - all is the top inbox
    // - add a today box
//     //- today box sorts by project

//moblie friendly menu and formating
// check for really long list names and long task names








window.addEventListener("keydown", function(e) {
    if (taskFormContainer.style.display == "block" && e.key === "Enter") {
        taskFormSubmit();
    }
})


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