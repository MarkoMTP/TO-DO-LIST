import { container } from "../index.js";
import ProjectAdd from "./exampleProject.js";

import "../style.css"

export default function openModal(div) {
    // Create dialog element
    const dialog1 = document.createElement("dialog");
    dialog1.classList.add("titleDialog");

    // Create form element
    const form1 = document.createElement("form");
    form1.setAttribute("method", "dialog");

    // Create input element
    const input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("name", "title");
    input1.setAttribute("id", "title");
    input1.setAttribute("placeholder", "title");
    input1.setAttribute("maxlength", "11");

    let enteredTitle = document.getElementById("title")


//creating submit button
const submitBtn = document.createElement("button");
submitBtn.setAttribute('type', 'submit')
submitBtn.setAttribute('class', 'submitBtn')

submitBtn.addEventListener("click", () => {
event.preventDefault()
ProjectAdd(div, enteredTitle.value);

dialog1.close()


})
//submiting subBtn to Form
form1.appendChild(submitBtn)





    // Append input to form
    form1.appendChild(input1);

    // Append form to dialog
    dialog1.appendChild(form1);

    // Append dialog to body
    container.appendChild(dialog1);

    // Show the dialog
dialog1.showModal()  



    // Note: showModal() will block interaction with the rest of the page until closed
}