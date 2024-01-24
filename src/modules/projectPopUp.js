import { container } from "../index.js";
import "../style.css"
import { createDomProjects, ProjectFactory, projectCollection} from "./projectAddModule1.js";







export default function openModal(div) {





    // Create dialog element
    const dialog1 = document.createElement("dialog");
    dialog1.classList.add("titleDialog2");

    // Create form element
    const form1 = document.createElement("form");
    form1.setAttribute("method", "dialog");
    form1.setAttribute("class", "formProject2");

    const projectLabel = document.createElement("h2")
    projectLabel.textContent = "Create Project "


    // Create input element
    const input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("name", "title");
    input1.setAttribute("class", "titleOfProject");
    input1.setAttribute("placeholder", "title");
    input1.setAttribute("maxlength", "11");
    input1.setAttribute("required", "")



    //date input creating


//creating submit button
const submitBtn = document.createElement("button");
submitBtn.setAttribute('type', 'submit')
submitBtn.setAttribute('class', 'submitBtnProject')
submitBtn.textContent = "Submit"

submitBtn.addEventListener("click", () => {
event.preventDefault()




const newProject =  ProjectFactory( input1.value);

projectCollection.push(newProject);

localStorage.setItem("Projects", JSON.stringify(projectCollection));


createDomProjects(div);

console.log(localStorage);


console.log(projectCollection);

dialog1.close()



dialog1.style.display = "none"
})
//
form1.appendChild(projectLabel);
    
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