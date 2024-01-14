import { taskContainer, taskInterface } from "./taskInterface.js";
import "../stlyes/project.css"
import { content } from "../index.js";



// this is what i think i should have done 



// export function ProjectFactory(title, duedate) {
//     return {
//         title,
//         duedate,
//         tasks: [],
//     };
// }

// // Collection to store projects
// export const projectCollection = [];

// // Function to add a new project to the collection
// export function addToProjects(title, duedate) {
//     const newProject = ProjectFactory(title, duedate);
//     projectCollection.push(newProject);
// }

// // Example usage:
// addToProjects("Project A", 1);
// addToProjects("Project B", 2);

// console.log(projectCollection);




export default function ProjectAdd(div, title, date) {

      
//creating project div/box


const projectBox = document.createElement("div");
projectBox.classList.add("projectBox");


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
