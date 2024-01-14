import { taskInterface, taskInterfaceExample } from "./taskInterface.js";
import "../stlyes/taskInterFace.css"
import { taskContainer } from "./taskInterface.js";



export default function ExampleAdd(div) {

      
    //creating project div/box
    
    const projectBox = document.createElement("div");
    projectBox.classList.add("projectBox");
    
    
    //creating project name
    const projectName = document.createElement("h2");
    projectName.textContent = "Example";
    projectName.classList.add("project");

    
    //appending projectName
    projectBox.appendChild(projectName)
    
    //creating duedate 
    const projectDate = document.createElement("h2");
    projectDate.textContent = " 20.01.2002" ;
    projectDate.classList.add("project");

    
    //appending due date
    projectBox.appendChild(projectDate)
    
    
    //creating viewTaskBUttn
    const viewProjectBtn = document.createElement("button")
    viewProjectBtn.textContent = 'View';
    viewProjectBtn.classList.add("project");
    
    viewProjectBtn.addEventListener("click", () => {
    
        taskInterfaceExample()
        
    
    })
    projectBox.appendChild(viewProjectBtn)
    
    
    
    
    
    // deleteBUtton of the projectBox and its function
    const deleteProjectBtn = document.createElement("button")
    deleteProjectBtn.textContent = 'Del';
    deleteProjectBtn.classList.add("project");

    deleteProjectBtn.addEventListener("click", () => {
    
        div.removeChild(projectBox)
    
    })
    
    
    
    
     
    projectBox.appendChild(deleteProjectBtn)
    
    
     
    
    
    
    
    div.appendChild(projectBox)
    
    
     }
    