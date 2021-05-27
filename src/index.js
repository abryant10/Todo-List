console.log("test 1");

// storage
let tastStorage = [];
let listStorage = ["Reminders"];

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





// -------------- dom listeners -----------------

const addListButton = document.querySelector(".addListButton");
const newTaskButton = document.querySelector(".newTaskButton");
const sortBySelector = document.getElementById("sortBySelector");
const taskFormContainer = document.querySelector(".taskFormContainer");
const taskForm = document.querySelector(".taskForm");
const taskText = document.getElementById("taskText");

addListButton.addEventListener("click", createNewList);
newTaskButton.addEventListener("click", createTaskForm);
sortBySelector.addEventListener("change", () => {console.log(sortBySelector.value)});
//taskForm.addEventListener('submit', taskFormSubmit);
// When the user clicks anywhere outside of the taskform, 
//submit if title is not empty but either way close it
window.onclick = function(event) { //this logic needs work
  if (event.target != taskFormContainer && event.target != newTaskButton) {
        if(taskText.value != "") {
            //create task object
            //push object to array
            //clear form
            //hide form
            resetTaskForm();
        } else {
            // clear form
            //hide form
            resetTaskForm();
        }
    }
    console.log("not the form");
}
//if you hit escape it closes form and clears form.
// window.addEventListener('keydown', function(e) {
//   if (e.key === "Escape") {
//     formPopup.style.display = "none";
//   }
// })

//when you list awawy from form if title is filled out it submits and clears and hides form



//--------------- dom editors -----------------------

function createTaskForm () {
    //clear form data
    taskFormContainer.style.display = "block";    
}

function createNewList () {
    console.log ("new list yay");
}
function resetTaskForm () {
    //add clearing the form to this
    taskFormContainer.style.display = "none";
}

// - list creation tab
// - ability to change priority
// - update title by clicking on it
// - have checked off items go to deleted list
// - all is the top inbox
// - you start with a default remidners list
// - add a today box
//     - today box sorts by project
// - add a color picker for lists