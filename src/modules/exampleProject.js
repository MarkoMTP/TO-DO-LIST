
import { taskInterface } from "./addTask";
import "../stlyes/project.css"





export default function ProjectAdd(div, title) {

      

const projectBox = document.createElement("div");
projectBox.textContent = title;
projectBox.classList.add("project");



 

 


projectBox.addEventListener("click", () => {
  
    
    taskInterface()
    
    
})


div.appendChild(projectBox)


 }
