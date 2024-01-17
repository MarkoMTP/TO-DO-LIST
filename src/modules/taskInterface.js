import { content } from "../index.js";
import "../stlyes/taskInterFace.css"
import { addTaskToDom } from "./addTask.js";
import openTaskModal from "./taskPopUp.js";



   export const taskContainer = document.createElement('div')

    taskContainer.classList.add("taskContainer")


      
   



export function forEachProjectInterface(div, project, projectN) {


    const topDiv = document.createElement("div")
    topDiv.classList.add("topDiv")

        const projectName = document.createElement("h1")      
    projectName.textContent = projectN;


    const taskOfProjectDiv = document.createElement("div")
    


    const AddTaskButton = document.createElement("button");
    AddTaskButton.classList.add("AddTaskBtn")
    AddTaskButton.addEventListener("click",() => {openTaskModal(taskOfProjectDiv, project)})
 
    topDiv.appendChild(projectName)
        topDiv.appendChild(AddTaskButton)

div.appendChild(topDiv)
    div.appendChild(taskOfProjectDiv)

    return {taskOfProjectDiv}
}
  
