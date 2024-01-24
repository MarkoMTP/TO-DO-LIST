import { taskContainer, forEachProjectInterface,  } from "./taskInterface.js";
import { addTaskToDom } from "./addTask.js";
import "../stlyes/project.css"


export        const projectCollection = [];

export  function ProjectFactory (title){
            return {
                title,
             
                tasks: [],


            }


        }




  


  
        






        export function createDomProjects(div) {
            div.innerHTML = ""

            let projectCollection2 = localStorage.getItem("Projects")
           let projectCollection2Parsed = JSON.parse(projectCollection2)
            

            if(projectCollection2Parsed !== null) {

          

            projectCollection2Parsed.forEach(project => {

                const projectBox = document.createElement("div");
                projectBox.classList.add("projectBox");
                
                
                //creating project name
                const projectName = document.createElement("h2");
                projectName.textContent = project.title;
                projectName.classList.add("projectName")
                //appending projectName
                projectBox.appendChild(projectName)
                
           
            
                
                
                //creating viewTaskBUttn
                const viewProjectBtn = document.createElement("button")
                viewProjectBtn.textContent = 'View';
                viewProjectBtn.classList.add("projectBtns")
                viewProjectBtn.addEventListener("click", () => {

                taskContainer.innerHTML = ""

 const {taskOfProjectDiv} = forEachProjectInterface(taskContainer, project, project.title)
  addTaskToDom(taskOfProjectDiv, project)
                    

                    
                
                })
                projectBox.appendChild(viewProjectBtn)
                
                
                
                
                
                // deleteBUtton of the projectBox and its function
                const deleteProjectBtn = document.createElement("button")
                deleteProjectBtn.textContent = 'Delete';
                deleteProjectBtn.classList.add("projectBtns")
                deleteProjectBtn.addEventListener("click", () => {
                
                    div.removeChild(projectBox)


                
                })
                
                
           
                
                 
                projectBox.appendChild(deleteProjectBtn)
                
                div.appendChild(projectBox)
             }) }

                else { return "Okay"}


            }





        


            

    