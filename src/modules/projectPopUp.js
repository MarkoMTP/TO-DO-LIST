import { container } from "../index.js";
import "../style.css"
import { createDomProjects, ProjectFactory, projectCollection} from "./projectAddModule1.js";







export default function openModal(div) {






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
    input1.setAttribute("placeholder", "title");
    input1.setAttribute("maxlength", "11");
    input1.setAttribute("required", "")



    //date input creating

    const inputDate = document.createElement("input");
    inputDate.setAttribute("type", "date");
    inputDate.setAttribute("id", "date");


//creating submit button
const submitBtn = document.createElement("button");
submitBtn.setAttribute('type', 'submit')
submitBtn.setAttribute('class', 'submitBtn')
submitBtn.textContent = "Submit"

submitBtn.addEventListener("click", () => {
event.preventDefault()



const newProject =  ProjectFactory( input1.value, inputDate.value)
projectCollection.push(newProject);
createDomProjects(div, newProject);


console.log(projectCollection);

dialog1.close()



// dialog1.style.display = "none"
})
//
    
    form1.appendChild(inputDate);
    form1.appendChild(input1);

    form1.appendChild(submitBtn)
    // Append form to dialog
    dialog1.appendChild(form1);

    // Append dialog to body
    container.appendChild(dialog1);

    // Show the dialog
dialog1.showModal()  



    // Note: showModal() will block interaction with the rest of the page until closed
}