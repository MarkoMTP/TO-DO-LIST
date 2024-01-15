
import "../stlyes/project.css"
import { taskInterface } from "./taskInterface";


        function ProjectFactory (title, date ){
            return {
                title,
                 date,
                tasks: [],


            }


        }

        const projectCollection = [];


    //    export function TaskFactory(title) {

    //         return {

    //             title,

    //         }



    //     }

    //  export   function addTaskToProject( project , title, ) {  

    //         const newTask = TaskFactory(title);
    //         project.tasks.push(newTask)


    //     }



        export    function addProjectToCollection(div, title, date) {
        
                const newProject =  ProjectFactory(title, date)
                projectCollection.push(newProject);
                createDomProjects(div, newProject) 
    console.log(projectCollection);
    

       
        }

        // addTaskToProject( newProject , title, ) 

        console.log(projectCollection);




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





        


            

    