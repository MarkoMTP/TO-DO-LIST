import { container, content } from "../index.js"
import "../stlyes/sidebar.css"


export default function addSideBar() {
    
  const sidebarDiv = document.createElement("div")
  sidebarDiv.classList.add("sidebar")

  const projectDiv = document.createElement("div")
  projectDiv.classList.add("projectDiv")

  createH1(sidebarDiv)
  
  createAddProjectBtn(projectDiv)
  
  
  setTimeout(function() {
      sidebarDiv.style.marginLeft = '0';
    }, 0);
  
sidebarDiv.appendChild(projectDiv)
  
  content.appendChild(sidebarDiv)
  
  container.appendChild(content)

  return { sidebarDiv }
  }
  

  


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
  
  
  addBtn.addEventListener("click", () => {

   


    })


}
