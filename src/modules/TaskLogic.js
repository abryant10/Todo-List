import { taskForm, taskStorage, renderTaskView, taskFormContainer, currentView, renderArray} from "./UI";
import {updateCompletedPriority, setCompletedStorage, completedTasks} from "./Completed"

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
    const taskNotes = (taskForm.querySelector('[name=taskNotes]')).value || "   ";
    const taskList = (taskForm.querySelector('[name=listSelector]')).value;
    var priority = (checkListPriority(taskList));
    var task = Task(taskText, taskList, taskNotes, taskDueDate, priority, (taskStorage.length));
    taskStorage.push(task);
    setTaskStorage();
    renderTaskView(currentView);    
    taskFormContainer.style.display = "none";
    taskForm.reset();
}
function setTaskStorage () {
    localStorage.setItem("taskStorage", JSON.stringify(taskStorage));
}
function checkListPriority (list) {
    var listFilter = taskStorage.filter(task => task.list == list);
    const priority = (listFilter.length +1);
    return priority;
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
function updateAllPriority() {
    taskStorage.forEach(task => {
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
function deleteAllTaskFromDeadList(list){
    taskStorage.forEach(task => {
        if(task.list == list) {
            taskStorage.splice(taskStorage.indexOf(task), 1);
        }
    })
}
function priorityUp (e) {
    if (!e.target.matches(".priorUp")) return;
    if (currentView == "today") return;
    if (currentView == "completed") return;
    if(currentView == "all"){
        if (e.target.dataset.index == 0) return;
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
    window.taskStorage = taskStorage.sort((a, b) => a.allPriority - b.allPriority);
    setTaskStorage();
    renderTaskView(currentView);
}
function priorityDown (e) {
    if (!e.target.matches(".priorDown")) return;
    if (currentView == "today") return;
    if (currentView == "completed") return;
    if(currentView == "all"){
        if (e.target.dataset.index == (taskStorage.length - 1)) return;
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
    window.taskStorage = taskStorage.sort((a, b) => a.allPriority - b.allPriority);
    setTaskStorage();
    renderTaskView(currentView);
}

export {taskFormSubmit, deleteTask, updateAllPriority, updateListPriority, setTaskStorage, priorityUp, priorityDown, deleteAllTaskFromDeadList};