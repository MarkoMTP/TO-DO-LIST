
import "../style.css"


export default function popUpForProject (div) {

    let dialog1 = document.createElement("dialog")

    let form = document.createElement('form');
    form.onsubmit = saveTitle;
    
    let titleLabel = document.createElement('h2');
    titleLabel.textContent = 'Enter Title';
    
    
    
    let titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'titleInput';
    titleInput.required = true;
    
    let lineBreak = document.createElement('br');
    
    let saveButton = document.createElement('button');
    saveButton.type = 'submit';
    saveButton.textContent = 'Submit';
    
    // Append elements to form
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(lineBreak);
    form.appendChild(saveButton);
    
    // Append form to the dialog
    dialog1.appendChild(titleLabel);
    dialog1.appendChild(form);
     div.appendChild(dialog1)   

    // Event handler for opening the dialog
   
    
    // Event handler for saving the title
    function saveTitle(event) {
        event.preventDefault();
        let enteredTitle = document.getElementById('titleInput').value;
        alert('Title entered: ' + enteredTitle);
        dialog1.style.display = 'none';
        return false;

    }
    
    dialog1.showModal()

}