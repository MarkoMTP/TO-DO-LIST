import { content } from "../index.js";
import "../stlyes/taskInterFace.css"
import openTaskModal from "./taskPopUp.js";



   export const taskContainer = document.createElement('div')

    taskContainer.classList.add("taskContainer")


      
   



export function forEachProjectInterface(div, project) {


    

    

    const taskOfProjectDiv = document.createElement("div")
    


    const AddTaskButton = document.createElement("button");
    AddTaskButton.classList.add("AddTaskBtn")
    AddTaskButton.addEventListener("click",() => {openTaskModal(taskOfProjectDiv, project)})
    



        div.appendChild(AddTaskButton)


    div.appendChild(taskOfProjectDiv)

}
  
