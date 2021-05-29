console.log("test 1");

// storage
let tastStorage = [];
let listStorage = ["Reminders", "Work Stuff"];

// ------------task factory-----------------------------

const task = (title, list, notes, dueDate, listPriority, allPriority) => {
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


function dotest (e) {
    e.preventDefault();
    console.log('submited!!!!');
}


// -------------- dom listeners -----------------

const addListButton = document.querySelector(".addListButton");
const newTaskButton = document.querySelector(".newTaskButton");
const sortBySelector = document.getElementById("sortBySelector");
const taskFormContainer = document.querySelector(".taskFormContainer");
const taskForm = document.querySelector(".taskForm");
const taskText = document.getElementById("taskText");
const listSelector = document.getElementById('listSelector');


addListButton.addEventListener("click", createNewList);
newTaskButton.addEventListener("click", createTaskForm);
sortBySelector.addEventListener("change", () => {console.log(sortBySelector.value)});
taskForm.addEventListener('submit', dotest); // make this function taskFormSubmit
window.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    resetTaskForm();
  }
})
window.addEventListener("keydown", function(e) {
    if (taskFormContainer.style.display == "block" && e.key === "Enter") {
        console.log("this would submit form");
        resetTaskForm();
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

//--------------- dom editors -----------------------

function createTaskForm () {
    //clear form data
    taskFormContainer.style.display = "block";    
}

function createNewList () {
    console.log ("new list yay");
}
function resetTaskForm () {
    taskForm.reset();
    taskFormContainer.style.display = "none";
}
function renderLists () {
    listStorage.forEach(listIndex => {
        var listOption = document.createElement('option');
        listOption.value = `${listIndex}`;
        listOption.innerHTML = `${listIndex}`;
        listSelector.appendChild(listOption);
    })
}

//------------------ 
renderLists();


// - list creation tab
// - ability to change priority
// - update title by clicking on it
// - have checked off items go to deleted list
// - all is the top inbox
// - you start with a default remidners list
// - add a today box
//     - today box sorts by project
// - add a color picker for lists
