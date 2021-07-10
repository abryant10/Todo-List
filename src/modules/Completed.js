import { 
    taskStorage, 
    renderTaskView
} from "./UI";
import { 
    updateAllPriority, 
    updateListPriority, 
    setTaskStorage
} from "./TaskLogic";
import { currentView } from "./ListLogic";
var completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
const updateCompletedArray = function updateCompletedArray (data) {
    completedTasks = completedTasks.concat(data);
}
const completeTask = function completeTask (e) {
    if(!e.target.matches(".TCCheck")) return;
    var task = taskStorage.splice((e.target.dataset.index), 1);
    updateCompletedArray(task);
    setCompletedStorage();
    updateAllPriority();
    updateListPriority();
    updateCompletedPriority();
    setTaskStorage();
    renderTaskView(currentView);
}
const setCompletedStorage = function setCompletedStorage () {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
}
const updateCompletedPriority = function updateCompletedPriority () {
    completedTasks.forEach(task => {
        task.allPriority = completedTasks.indexOf(task);
    }) 
}
export {
    completedTasks, 
    completeTask, 
    updateCompletedPriority, 
    setCompletedStorage
}