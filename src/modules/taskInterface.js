import { content } from "../index.js";
import "../stlyes/taskInterFace.css"
import openTaskModal from "./taskPopUp.js";

    const taskContainer = document.createElement('div')

    taskContainer.classList.add("taskContainer")
      


  
export function taskInterface() {
    taskContainer.innerHTML = ""

    const taskArray = [];

    const taskOfProjectDiv = document.createElement("div")


    
 const AddTaskButton = document.createElement("button");
AddTaskButton.classList.add("AddTaskBtn")
AddTaskButton.addEventListener("click", openTaskModal(taskOfProjectDiv))



        taskContainer.appendChild(AddTaskButton)


    taskContainer.appendChild(taskOfProjectDiv)

    
 content.appendChild(taskContainer)


            }








            //example project


            export function taskInterfaceExample() {


                
                taskContainer.innerHTML = ""

                const taskOfProjectDiv = document.createElement("div")
            const taskArray = [];
        
            
         const AddTaskButton = document.createElement("button");
        AddTaskButton.classList.add("AddTaskBtn")
AddTaskButton.addEventListener("click", () => {
    openTaskModal(taskOfProjectDiv);

})
        
                taskContainer.appendChild(AddTaskButton)
        
         

    taskContainer.appendChild(taskOfProjectDiv)

 content.appendChild(taskContainer)
  
            
            
        
        
                    }

    