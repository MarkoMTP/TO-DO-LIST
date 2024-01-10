import "../stlyes/sidebar.css"
import addTask from "./taskCreater"

    export default function addProject(div) {
    
           
  const project = document.createElement("div")
  project.classList.add("projectEx")
project.textContent = "test"
project.classList.add("projectEx")

project.addEventListener("click", () => {
  addTask()
})
      
        div.appendChild(project)

    }