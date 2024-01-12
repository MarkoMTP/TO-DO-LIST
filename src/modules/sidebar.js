import { container, content, sidebarDiv } from "../index.js"
import ProjectAdd from "./exampleProject.js"
import "../stlyes/sidebar.css"
import openModal from "./projectPopUp.js"




export default (function addSideBar() {
  


  const sideBar = document.createElement("div")
  sideBar.classList.add("sidebar")

  const projectDiv = document.createElement("div")
  projectDiv.classList.add("projectDiv")

  createH1(sideBar)
  
    
     
 
  
   const {addBtn} =  createAddProjectBtn(projectDiv)
  
   addBtn.addEventListener("click", () => {
    openModal(projectDiv)
 
  
  })





sideBar.appendChild(projectDiv)
  
  sidebarDiv.appendChild(sideBar)

  return { sideBar, projectDiv }
  })
  

  


function createH1(div) {


  const projectH1 = document.createElement("h2")
  projectH1.textContent = "Projects"
  projectH1.classList.add("projectH1")
  div.appendChild(projectH1)

}






   function createAddProjectBtn(div) {

  const addBtn = document.createElement("button");
  addBtn.textContent = ' + Add Project'
  addBtn.classList.add("myAddButton")
   
  div.appendChild(addBtn)
  
   
    
    return { addBtn}

}



