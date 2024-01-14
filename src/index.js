
import addHeader from "./modules/header.js";
import addSideBar from "./modules/sidebar.js";
import "./style.css";


export const container = document.getElementById("container")


addHeader()

export const content = document.createElement("div")

export const sidebarDiv = document.createElement('div')

content.classList.add("content")




content.appendChild(sidebarDiv)

 container.appendChild(content)

 addSideBar()


