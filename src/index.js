
import addSideBar from "./stlyes/sidebar";



export const container = document.getElementById("container")





 const headerDiv = document.createElement("div");
 headerDiv.classList.add("header");

 const menuBtn = document.createElement("button");
 menuBtn.classList.add("menuBtn");


 headerDiv.appendChild(menuBtn);

 const heading1 = document.createElement("h1");
//  heading1.classList.add("heading");
heading1.innerHTML = "TO-DO LIST"
 headerDiv.appendChild(heading1);


 const rndmBtn = document.createElement("button");
rndmBtn.classList.add("rndmBtn")
 headerDiv.appendChild(rndmBtn);

 container.appendChild(headerDiv)

export const content = document.createElement("div")
content.classList.add("content")
 container.appendChild(content)

 menuBtn.addEventListener("click", addSideBar())
