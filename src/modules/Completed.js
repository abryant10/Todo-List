import { taskStorage, renderTaskView, currentView } from "../index";
import { updateAllPriority, updateListPriority, setTaskStorage} from "./TaskLogic";

var completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

function updateCompletedArray(data) {
    completedTasks = completedTasks.concat(data);
}

function completeTask(e) {
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
function setCompletedStorage() {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
}
function updateCompletedPriority() {
    completedTasks.forEach(task => {
        task.allPriority = completedTasks.indexOf(task);
    }) 
}

export {completedTasks, completeTask, updateCompletedPriority, setCompletedStorage}