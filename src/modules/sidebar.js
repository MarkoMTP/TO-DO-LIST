import { sidebarDiv } from "../index.js";
import { ProjectFactory } from "./projectAddModule1.js";
import { TaskFactory } from "./addTask.js";
import openModal from "./projectPopUp.js";
import { forEachProjectInterface } from "./taskInterface.js";
import "../stlyes/project.css";
import "../stlyes/sidebar.css";

export default (function addSideBar() {
  const sideBar = document.createElement("div");
  sideBar.classList.add("sidebar");

  const projectDiv = document.createElement("div");
  projectDiv.classList.add("projectDiv");

  createH1(sideBar);

  const { addBtn } = createAddProjectBtn(sideBar);

  addBtn.addEventListener("click", () => {
    openModal(projectDiv);

    return { projectDiv };
  });

  const exampleProject = ProjectFactory("Example ", "20.20.2002");

  const exampleTask = TaskFactory(
    "Example About How Amazing This Project Is",
    "20.11.2222",
    "important"
  );
  exampleProject.tasks.push(exampleTask);
  const projectCollection = JSON.parse(localStorage.getItem("Projects")) || [];
  projectCollection.push(exampleProject);

  sideBar.appendChild(projectDiv);

  sidebarDiv.appendChild(sideBar);

  return { sideBar, projectDiv };
});

function createAddProjectBtn(div) {
  const addBtn = document.createElement("button");
  addBtn.textContent = " + Add Project";
  addBtn.classList.add("myAddButton");

  div.appendChild(addBtn);

  return { addBtn };
}

function createH1(div) {
  const projectH1 = document.createElement("h2");
  projectH1.textContent = "Projects";
  projectH1.classList.add("projectH1");
  div.appendChild(projectH1);
}
