
import { taskInterface } from "./addTask";
import "../stlyes/project.css"





export default function ProjectAdd(div, title, date) {

      
//creating project div/box

const projectBox = document.createElement("div");
projectBox.classList.add("project");


//creating project name
const projectName = document.createElement("h2");
projectName.textContent = title;

//appending projectName
projectBox.appendChild(projectName)

//creating duedate 
const projectDate = document.createElement("h2");
projectDate.textContent = date;

//appending due date
projectBox.appendChild(projectDate)


//creating viewTaskBUttn
const viewProjectBtn = document.createElement("button")
viewProjectBtn.textContent = 'View';
viewProjectBtn.addEventListener("click", () => {

    taskInterface()
    

})
projectBox.appendChild(viewProjectBtn)





// deleteBUtton of the projectBox and its function
const deleteProjectBtn = document.createElement("button")
deleteProjectBtn.textContent = 'Del';
deleteProjectBtn.addEventListener("click", () => {

    div.removeChild(projectBox)

})




 
projectBox.appendChild(deleteProjectBtn)


 




div.appendChild(projectBox)


 }
