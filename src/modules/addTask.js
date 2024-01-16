
import { createDomProjects, ProjectFactory , projectCollection } from "./projectAddModule1.js"
import { content, sidebarDiv } from "../index.js";
import "../stlyes/taskInterFace.css"





export function TaskFactory(title) {

  return {

      title,

  }



}



export   function addTaskToProject(div, project , title ) {  
  div.innerHTML = '';
 const task = TaskFactory(title);
  project.tasks.push(task)
  addTaskToDom(div, project)

}




export   function addTaskToDom(div, project) {


project.tasks.forEach(task => {

      const mainDivForTasks = document.createElement("div");
    mainDivForTasks.classList.add("taskDiv");
    const taskTitle = document.createElement("h1");
    taskTitle.textContent = task.title;
mainDivForTasks.appendChild(taskTitle)

div.appendChild(mainDivForTasks)
console.log(projectCollection);

})

}