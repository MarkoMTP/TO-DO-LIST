import { container, content } from "../index.js"
import "./stlyes/sidebar.css"

export default function addSideBar() {
    
const sidebarDiv = document.createElement("div")
sidebarDiv.classList.add("sidebar")

sidebarDiv.textContent = 'JSJSJSSJJS'
content.appendChild(sidebarDiv)

container.appendChild(content)
}