console.log("test 1");

// storage
let taskStorage = JSON.parse(localStorage.getItem('taskStorage')) || [];

let listStorage = JSON.parse(localStorage.getItem('listStorage')) || ["Reminders"];

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


function taskFormSubmit (e) {
    e.preventDefault();
    var taskText = (this.querySelector('[name=taskText]')).value;
    const taskDueDate = (this.querySelector('[name=taskDueDate]')).value;
    const taskNotes = (this.querySelector('[name=taskNotes]')).value;
    const taskList = (this.querySelector('[name=listSelector]')).value;
    var task = Task(taskText, taskList, taskNotes, taskDueDate, 1, 1);
    taskStorage.push(task);
    localStorage.setItem("taskStorage", JSON.stringify(taskStorage));
    renderTaskView();    
    taskFormContainer.style.display = "none";
    this.reset();
}

function renderTaskView () {
    taskViewRenderDiv.innerHTML = JSON.stringify(taskStorage);
}


// -------------- dom listeners -----------------

const addListButton = document.querySelector(".addListButton");
const newTaskButton = document.querySelector(".newTaskButton");
const sortBySelector = document.getElementById("sortBySelector");
const taskFormContainer = document.querySelector(".taskFormContainer");
const taskForm = document.querySelector(".taskForm");
const taskText = document.getElementById("taskText");
const listSelector = document.getElementById('listSelector');
const taskViewRenderDiv = document.querySelector('.taskViewRenderDiv');


addListButton.addEventListener("click", createNewList);
newTaskButton.addEventListener("click", createTaskForm);
sortBySelector.addEventListener("change", () => {console.log(sortBySelector.value)});
taskForm.addEventListener('submit', taskFormSubmit); 
window.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    resetTaskForm();
  }
})
// window.addEventListener("keydown", function(e) {
//     if (taskFormContainer.style.display == "block" && e.key === "Enter") {
//         taskFormSubmit(taskForm);
//     }
// })






//--------------- dom editors -----------------------

function createTaskForm () {
    taskForm.reset();
    taskFormContainer.style.display = "block";    
}

function createNewList () {
    console.log ("new list yay");
}
function resetTaskForm () {
    taskForm.reset();
    taskFormContainer.style.display = "none";
}
function renderListsToForm () {
    listStorage.forEach(listIndex => {
        var listOption = document.createElement('option');
        listOption.value = `${listIndex}`;
        listOption.innerHTML = `${listIndex}`;
        listSelector.appendChild(listOption);
    })
}

//------------------ 
renderListsToForm();
renderTaskView();

// - list creation tab
// - ability to change priority
// - update title by clicking on it
// - have checked off items go to deleted list
// - all is the top inbox
// - you start with a default remidners list
// - add a today box
//     - today box sorts by project
// - add a color picker for lists
// -listen for new list and reredner list to form and list nav


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