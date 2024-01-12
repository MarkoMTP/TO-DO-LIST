
import addHeader from "./modules/header.js";
import addSideBar from "./modules/sidebar.js";
import "./stlyes/taskInterFace.css"
import "./style.css";


export const container = document.getElementById("container")


addHeader()

export const content = document.createElement("div")

export const sidebarDiv = document.createElement('div')
export const taskDiv = document.createElement('div')
taskDiv.textContent = 'kirc'
taskDiv.classList.add("taskDiv")

content.classList.add("content")




content.appendChild(sidebarDiv)
content.appendChild(taskDiv)



 container.appendChild(content)

 addSideBar()


 /// imas task div sut napravi prvo primjer na task div
 /// znaci jedan task ka primjer napravi da se moze izbrisat
 /// i dodat novi task llogicno
 //isto tako i za projecte da mos dodavat