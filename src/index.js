import {addProjectToCollection, createDomProjects} from "./modules/projectAddModule1.js"
import addHeader from "./modules/header.js";
import { taskContainer } from "./modules/taskInterface.js";
import addSideBar from "./modules/sidebar.js";
import "./stlyes/taskInterFace.css"
import "./style.css";






export const container = document.getElementById("container")


addHeader()

export const content = document.createElement("div")

export const sidebarDiv = document.createElement('div')

content.classList.add("content")




content.appendChild(sidebarDiv)

 container.appendChild(content)

 addSideBar()
 content.appendChild(taskContainer)


//moraces izbrisat  sve ove funkcije za project add i task add i napravit ih sa factory funkcijama i arrays ono ka library prikazat ih..