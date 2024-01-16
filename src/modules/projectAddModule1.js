import { taskContainer, forEachProjectInterface } from "./taskInterface.js";
import { addTaskToDom } from "./addTask.js";
import "../stlyes/project.css"


export        const projectCollection = [];

export  function ProjectFactory (title, date ){
            return {
                title,
                 date,
                tasks: [],


            }


        }




  


  
        

        


      




        export function createDomProjects(div, project) {



                const projectBox = document.createElement("div");
                projectBox.classList.add("projectBox");
                
                
                //creating project name
                const projectName = document.createElement("h2");
                projectName.textContent = project.title;
                
                //appending projectName
                projectBox.appendChild(projectName)
                
                //creating duedate 
                const projectDate = document.createElement("h2");
                projectDate.textContent = project.date;
                
                //appending due date
                projectBox.appendChild(projectDate)
                
                
                //creating viewTaskBUttn
                const viewProjectBtn = document.createElement("button")
                viewProjectBtn.textContent = 'View';
                viewProjectBtn.addEventListener("click", () => {
taskContainer.innerHTML = "";
addTaskToDom(taskContainer, project)

forEachProjectInterface(taskContainer, project)
                    

                    
                
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





        


            

    