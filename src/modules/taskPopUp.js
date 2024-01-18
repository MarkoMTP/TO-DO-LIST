import { container } from "../index.js";
import  addTask  from "./addTask.js";
import { addTaskToProject, TaskFactory, addTaskToDom } from "./addTask.js"  

import "../stlyes/taskInterFace.css"

export default function openTaskModal(div, project) {






    // Create dialog element
    const dialog1 = document.createElement("dialog");
    dialog1.classList.add("titleDialog");


    // Create form element
    const form1 = document.createElement("form");
    form1.setAttribute("method", "dialog");
    form1.setAttribute("class", "formProject");


    // Create input element
    const input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("name", "title");
    input1.setAttribute("id", "title");
    input1.setAttribute("placeholder", "Task");
    
    input1.setAttribute("required", "")

    // line breaks
    const br1 = document.createElement("br")
    const br2 = document.createElement("br")
    const br3 = document.createElement("br")

    //date input creating

    const inputDate = document.createElement("input");
    inputDate.setAttribute("type", "date");
    inputDate.setAttribute("id", "date");



    // priority select 

    const selectBtn = document.createElement("select")
    selectBtn.setAttribute("name", "priority")

    const option1 = document.createElement("option")
    option1.setAttribute("value", "Low Priority")
    option1.textContent = option1.value
option1.style.color = "green"


const option2 = document.createElement("option")
option2.setAttribute("value", "Neutral Priority")
option2.textContent = option2.value

option2.style.color = "gray"


const option3 = document.createElement("option")
option3.setAttribute("value", "High Priority")
option3.textContent = option3.value

option3.style.color = "red"






//creating submit button
const submitBtn = document.createElement("button");
submitBtn.setAttribute('type', 'submit')
submitBtn.setAttribute('class', 'submitBtn')
submitBtn.textContent = "Submit"

submitBtn.addEventListener("click", () => {
event.preventDefault()
addTaskToProject(div, project, input1.value, inputDate.value, selectBtn.value)


dialog1.close()

})


selectBtn.appendChild(option1)
selectBtn.appendChild(option2)
selectBtn.appendChild(option3)


    
 
form1.appendChild(input1);
form1.appendChild(br1);

   form1.appendChild(inputDate);
   form1.appendChild(br2);

   form1.appendChild(selectBtn);

    form1.appendChild(submitBtn)
    // Append form to dialog
    dialog1.appendChild(form1);

    // Append dialog to body
    container.appendChild(dialog1);

    // Show the dialog
dialog1.showModal()  



    // Note: showModal() will block interaction with the rest of the page until closed
}