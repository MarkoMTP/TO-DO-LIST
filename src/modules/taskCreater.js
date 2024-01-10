import { container, content } from "..";
import popUp from "./popUp";
import "../style.css"


export default function addTask() {

    const taskDiv = document.createElement("div");


    const addTaskBtn = document.createElement("button")
    addTaskBtn.textContent = 'laidj'



    addTaskBtn.classList.add("buttonTask")




    addTaskBtn.addEventListener("click",() => {
     popUp(container) })

taskDiv.appendChild(addTaskBtn)
    content.appendChild(taskDiv)

}