import { container, content } from "./index.js"
import "./stlyes/sidebar.css"

export default function addSideBar() {
    
const sidebarDiv = document.createElement("div")
sidebarDiv.classList.add("sidebar")


    const todayBtn = document.createElement("button");
    todayBtn.textContent = 'Today'
    todayBtn.classList.add("myButton")
    sidebarDiv.appendChild(todayBtn)


    const weekBtn = document.createElement("button");
    weekBtn.textContent = ' Week'
    weekBtn.classList.add("myButton")

    sidebarDiv.appendChild(weekBtn)


    const monthBtn = document.createElement("button");
    monthBtn.textContent = ' Month'
    monthBtn.classList.add("myButton")

    sidebarDiv.appendChild(monthBtn)

    const projectH1 = document.createElement("h2")
    projectH1.textContent = "Projects"
    projectH1.classList.add("projectH1")
    sidebarDiv.appendChild(projectH1)



    const addBtn = document.createElement("button");
    addBtn.textContent = ' + Add Project'
    addBtn.classList.add("myAddButton")

    sidebarDiv.appendChild(addBtn)

setTimeout(function() {
    sidebarDiv.style.marginLeft = '0';
  }, 0);


content.appendChild(sidebarDiv)

container.appendChild(content)
}

