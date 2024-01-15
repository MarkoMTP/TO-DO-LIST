
import { createDomProjects, ProjectFactory , projectCollection } from "./projectAddModule1.js"

import "../stlyes/taskInterFace.css"




export  default function addTaskToDom(div, title, ) {


      const mainDivForTasks = document.createElement("div");
    mainDivForTasks.classList.add("taskDiv");
    const taskTitle = document.createElement("h1");
    taskTitle.textContent = title;
mainDivForTasks.appendChild(taskTitle)

div.appendChild(mainDivForTasks)




}