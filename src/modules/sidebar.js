import { sidebarDiv } from "../index.js";
import openModal, { createFromLocal } from "./projectPopUp.js";
import { createDomProjects, ProjectFactory } from "./projectAddModule1.js";
import "../stlyes/project.css";
import "../stlyes/sidebar.css";

export default (function addSideBar() {
  const sideBar = document.createElement("div");

  sideBar.classList.add("sidebar");

  const projectDiv = document.createElement("div");
  projectDiv.classList.add("projectDiv");

  createH1(sideBar);

  const { addBtn } = createAddProjectBtn(sideBar);

  // Retrieve existing projects from localStorage
  const projectCollection = JSON.parse(localStorage.getItem("Projects")) || [];

  // Render existing projects on page load
  createFromLocal(projectCollection, projectDiv);

  addBtn.addEventListener("click", () => {
    openModal(projectDiv);
  });

  // Append projectDiv to the sidebar
  sideBar.appendChild(projectDiv);

  // Append sidebar to sidebarDiv
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
