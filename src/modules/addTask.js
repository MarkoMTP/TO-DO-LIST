
import "../stlyes/taskInterFace.css"

export  default function addTask(div, title, ) {


      const mainDivForTasks = document.createElement("div");
    mainDivForTasks.classList.add("taskDiv");
    const taskTitle = document.createElement("h1");
    taskTitle.textContent = title;
mainDivForTasks.appendChild(taskTitle)

div.appendChild(mainDivForTasks)




}