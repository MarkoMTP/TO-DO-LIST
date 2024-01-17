
import { createDomProjects, ProjectFactory , projectCollection } from "./projectAddModule1.js"
import { content, sidebarDiv } from "../index.js";
import "../stlyes/taskInterFace.css"





export function TaskFactory(title, duedate, priority) {

  return {

      title,
      duedate,
      priority

  }



}



export   function addTaskToProject(div, project , title ) {  
  div.innerHTML = '';
 const task = TaskFactory(title);
  project.tasks.push(task)
  addTaskToDom(div, project)

}




export   function addTaskToDom(div, project) {
div.innerHTML = ""

project.tasks.forEach(task => {
  

      const mainDivForTasks = document.createElement("div");
    mainDivForTasks.classList.add("taskDiv");
    const taskTitle = document.createElement("h1");
    taskTitle.classList.add("taskTitle")
    taskTitle.textContent = task.title;


const divForDate = document.createElement("div")
divForDate.classList.add("divForDate")
const infoHeading= document.createElement("h2")
infoHeading.style.fontSize = "1.4rem"
infoHeading.style.color = "darkblue"
infoHeading.style.margin = "0"


infoHeading.textContent = "Task Info";

    const taskDate = document.createElement("h3")
    taskDate.classList.add("taskDate")
    taskDate.textContent = task.duedate

    const priorityIndicator = document.createElement("h2")
    priorityIndicator.textContent = task.priority;
    priorityIndicator.classList.add("taskPriority")

    const deleteTaskBtn = document.createElement("button")
  deleteTaskBtn.textContent = "Delete"

  divForDate.appendChild(infoHeading)
    divForDate.appendChild(taskDate)
divForDate.appendChild(priorityIndicator)
divForDate.appendChild(deleteTaskBtn)

mainDivForTasks.appendChild(taskTitle)
mainDivForTasks.appendChild(divForDate)

div.appendChild(mainDivForTasks)
console.log(projectCollection);

})

}