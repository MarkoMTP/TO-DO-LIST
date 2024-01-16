
import { createDomProjects, ProjectFactory , projectCollection } from "./projectAddModule1.js"
import { content, sidebarDiv } from "../index.js";
import "../stlyes/taskInterFace.css"





export function TaskFactory(title) {

  return {

      title,

  }



}



export   function addTaskToProject(div, project , title, ) {  

  const newTask = TaskFactory(title);
  project.tasks.push(newTask)
  addTaskToDom(div, newTask )

}




export   function addTaskToDom(div, project ) {


      const mainDivForTasks = document.createElement("div");
    mainDivForTasks.classList.add("taskDiv");
    const taskTitle = document.createElement("h1");
    taskTitle.textContent = project.title;
mainDivForTasks.appendChild(taskTitle)

div.appendChild(mainDivForTasks)
console.log(projectCollection);




}