/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   container: () => (/* binding */ container),\n/* harmony export */   content: () => (/* binding */ content),\n/* harmony export */   sidebarDiv: () => (/* binding */ sidebarDiv)\n/* harmony export */ });\n/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header.js */ \"./src/modules/header.js\");\n/* harmony import */ var _modules_taskInterface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/taskInterface.js */ \"./src/modules/taskInterface.js\");\n/* harmony import */ var _modules_sidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sidebar.js */ \"./src/modules/sidebar.js\");\n/* harmony import */ var _stlyes_taskInterFace_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stlyes/taskInterFace.css */ \"./src/stlyes/taskInterFace.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nvar container = document.getElementById(\"container\");\n(0,_modules_header_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nvar content = document.createElement(\"div\");\nvar sidebarDiv = document.createElement(\"div\");\ncontent.classList.add(\"content\");\ncontent.appendChild(sidebarDiv);\ncontainer.appendChild(content);\n(0,_modules_sidebar_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\ncontent.appendChild(_modules_taskInterface_js__WEBPACK_IMPORTED_MODULE_1__.taskContainer);\n\n// moraces izbrisat  sve ove funkcije za project add i task add i napravit ih sa factory funkcijama i arrays ono ka library prikazat ih..\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TaskFactory: () => (/* binding */ TaskFactory),\n/* harmony export */   addTaskToDom: () => (/* binding */ addTaskToDom),\n/* harmony export */   addTaskToProject: () => (/* binding */ addTaskToProject)\n/* harmony export */ });\n/* harmony import */ var _projectAddModule1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectAddModule1.js */ \"./src/modules/projectAddModule1.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _stlyes_taskInterFace_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stlyes/taskInterFace.css */ \"./src/stlyes/taskInterFace.css\");\n\n\n\nfunction TaskFactory(title, duedate, priority) {\n  return {\n    title: title,\n    duedate: duedate,\n    priority: priority\n  };\n}\nfunction addTaskToProject(div, project, title, date, priority) {\n  var task = TaskFactory(title, date, priority);\n  project.tasks.push(task);\n  var storedProjects = JSON.parse(localStorage.getItem(\"Projects\")) || [];\n  var index = storedProjects.findIndex(function (p) {\n    return p.title === project.title;\n  });\n  if (index !== -1) {\n    storedProjects[index] = project;\n    localStorage.setItem(\"Projects\", JSON.stringify(storedProjects));\n    addTaskToDom(div, project);\n  }\n}\nfunction addTaskToDom(div, project) {\n  div.innerHTML = \"\";\n  project.tasks.forEach(function (task, index) {\n    var mainDivForTasks = document.createElement(\"div\");\n    mainDivForTasks.classList.add(\"taskDiv\");\n    var taskTitle = document.createElement(\"h1\");\n    taskTitle.classList.add(\"taskTitle1\");\n    taskTitle.textContent = task.title;\n    var divForDate = document.createElement(\"div\");\n    divForDate.classList.add(\"divForDate\");\n    var infoHeading = document.createElement(\"h2\");\n    infoHeading.style.fontSize = \"1.4rem\";\n    infoHeading.style.color = \"darkblue\";\n    infoHeading.style.margin = \"0\";\n    infoHeading.classList.add(\"infoHeading\");\n    infoHeading.textContent = \"Task Info\";\n    var taskDate = document.createElement(\"h3\");\n    taskDate.classList.add(\"taskDate\");\n    taskDate.textContent = task.duedate;\n    var priorityIndicator = document.createElement(\"h2\");\n    priorityIndicator.textContent = task.priority;\n    priorityIndicator.classList.add(\"taskPriority\");\n    var deleteTaskBtn = document.createElement(\"button\");\n    deleteTaskBtn.textContent = \"Delete\";\n    deleteTaskBtn.classList.add(\"deleteTaskBtn\");\n    deleteTaskBtn.addEventListener(\"click\", function () {\n      div.removeChild(mainDivForTasks);\n      project.tasks.splice(index, 1);\n    });\n    divForDate.appendChild(infoHeading);\n    divForDate.appendChild(taskDate);\n    divForDate.appendChild(priorityIndicator);\n    divForDate.appendChild(deleteTaskBtn);\n    mainDivForTasks.appendChild(taskTitle);\n    mainDivForTasks.appendChild(divForDate);\n    div.appendChild(mainDivForTasks);\n  });\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/addTask.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addHeader)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n\nfunction addHeader() {\n  var headerDiv = document.createElement('div');\n  headerDiv.classList.add('header');\n  var menuBtn = document.createElement('button');\n  menuBtn.classList.add('menuBtn');\n  headerDiv.appendChild(menuBtn);\n  var heading1 = document.createElement('h1');\n  //  heading1.classList.add(\"heading\");\n  heading1.innerHTML = 'TO-DO LIST';\n  headerDiv.appendChild(heading1);\n  var rndmBtn = document.createElement('button');\n  rndmBtn.classList.add('rndmBtn');\n  headerDiv.appendChild(rndmBtn);\n  ___WEBPACK_IMPORTED_MODULE_0__.container.appendChild(headerDiv);\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/projectAddModule1.js":
/*!******************************************!*\
  !*** ./src/modules/projectAddModule1.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectFactory: () => (/* binding */ ProjectFactory),\n/* harmony export */   createDomProjects: () => (/* binding */ createDomProjects)\n/* harmony export */ });\n/* harmony import */ var _taskInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskInterface.js */ \"./src/modules/taskInterface.js\");\n/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTask.js */ \"./src/modules/addTask.js\");\n/* harmony import */ var _stlyes_project_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stlyes/project.css */ \"./src/stlyes/project.css\");\n\n\n\n\n// Load projects on script initialization\n\nfunction ProjectFactory(title) {\n  return {\n    title: title,\n    tasks: []\n  };\n}\nfunction createDomProjects(div, project) {\n  var projectBox = document.createElement(\"div\");\n  projectBox.classList.add(\"projectBox\");\n\n  // creating project name\n  var projectName = document.createElement(\"h2\");\n  projectName.textContent = project.title;\n  projectName.classList.add(\"projectName\");\n  // appending projectName\n  projectBox.appendChild(projectName);\n\n  // creating viewTaskBUttn\n  var viewProjectBtn = document.createElement(\"button\");\n  viewProjectBtn.textContent = \"View\";\n  viewProjectBtn.classList.add(\"projectBtns\");\n  viewProjectBtn.addEventListener(\"click\", function () {\n    _taskInterface_js__WEBPACK_IMPORTED_MODULE_0__.taskContainer.innerHTML = \"\";\n    var _forEachProjectInterf = (0,_taskInterface_js__WEBPACK_IMPORTED_MODULE_0__.forEachProjectInterface)(_taskInterface_js__WEBPACK_IMPORTED_MODULE_0__.taskContainer, project, project.title),\n      taskOfProjectDiv = _forEachProjectInterf.taskOfProjectDiv;\n    (0,_addTask_js__WEBPACK_IMPORTED_MODULE_1__.addTaskToDom)(taskOfProjectDiv, project);\n  });\n  projectBox.appendChild(viewProjectBtn);\n\n  // deleteBUtton of the projectBox and its function\n  var deleteProjectBtn = document.createElement(\"button\");\n  deleteProjectBtn.textContent = \"Delete\";\n  deleteProjectBtn.classList.add(\"projectBtns\");\n  deleteProjectBtn.addEventListener(\"click\", function () {\n    var projectCollection = JSON.parse(localStorage.getItem(\"Projects\")) || [];\n    var newCollection = projectCollection.filter(function (p) {\n      return p.title !== project.title;\n    });\n    localStorage.setItem(\"Projects\", JSON.stringify(newCollection));\n    div.removeChild(projectBox);\n  });\n  projectBox.appendChild(deleteProjectBtn);\n  div.appendChild(projectBox);\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/projectAddModule1.js?");

/***/ }),

/***/ "./src/modules/projectPopUp.js":
/*!*************************************!*\
  !*** ./src/modules/projectPopUp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFromLocal: () => (/* binding */ createFromLocal),\n/* harmony export */   \"default\": () => (/* binding */ openModal)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _projectAddModule1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectAddModule1.js */ \"./src/modules/projectAddModule1.js\");\n\n\n\nfunction openModal(div) {\n  // Create dialog element\n  var dialog1 = document.createElement(\"dialog\");\n  dialog1.classList.add(\"titleDialog2\");\n\n  // Create form element\n  var form1 = document.createElement(\"form\");\n  form1.setAttribute(\"method\", \"dialog\");\n  form1.setAttribute(\"class\", \"formProject2\");\n  var projectLabel = document.createElement(\"h2\");\n  projectLabel.textContent = \"Create Project \";\n\n  // Create input element\n  var input1 = document.createElement(\"input\");\n  input1.setAttribute(\"type\", \"text\");\n  input1.setAttribute(\"name\", \"title\");\n  input1.setAttribute(\"class\", \"titleOfProject\");\n  input1.setAttribute(\"placeholder\", \"title\");\n  input1.setAttribute(\"maxlength\", \"11\");\n  input1.setAttribute(\"required\", \"\");\n\n  // date input creating\n\n  // creating submit button\n  var submitBtn = document.createElement(\"button\");\n  submitBtn.setAttribute(\"type\", \"submit\");\n  submitBtn.setAttribute(\"class\", \"submitBtnProject\");\n  submitBtn.textContent = \"Submit\";\n  submitBtn.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    var newProject = (0,_projectAddModule1_js__WEBPACK_IMPORTED_MODULE_2__.ProjectFactory)(input1.value);\n    var projectCollection = JSON.parse(localStorage.getItem(\"Projects\")) || [];\n    projectCollection.push(newProject);\n    localStorage.clear();\n    localStorage.setItem(\"Projects\", JSON.stringify(projectCollection));\n    var projectsParsed = JSON.parse(localStorage.getItem(\"Projects\"));\n    div.innerHTML = \"\";\n    createFromLocal(projectsParsed, div);\n    dialog1.close();\n    dialog1.style.display = \"none\";\n  });\n\n  //\n  form1.appendChild(projectLabel);\n  form1.appendChild(input1);\n  form1.appendChild(submitBtn);\n  // Append form to dialog\n  dialog1.appendChild(form1);\n\n  // Append dialog to body\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(dialog1);\n\n  // Show the dialog\n  dialog1.showModal();\n\n  // Note: showModal() will block interaction with the rest of the page until closed\n}\nfunction createFromLocal(parsed, div) {\n  div.innerHTML = \"\";\n  parsed.forEach(function (project) {\n    (0,_projectAddModule1_js__WEBPACK_IMPORTED_MODULE_2__.createDomProjects)(div, project);\n  });\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/projectPopUp.js?");

/***/ }),

/***/ "./src/modules/sidebar.js":
/*!********************************!*\
  !*** ./src/modules/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _projectPopUp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectPopUp.js */ \"./src/modules/projectPopUp.js\");\n/* harmony import */ var _projectAddModule1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectAddModule1.js */ \"./src/modules/projectAddModule1.js\");\n/* harmony import */ var _stlyes_project_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stlyes/project.css */ \"./src/stlyes/project.css\");\n/* harmony import */ var _stlyes_sidebar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stlyes/sidebar.css */ \"./src/stlyes/sidebar.css\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function addSideBar() {\n  var sideBar = document.createElement(\"div\");\n  sideBar.classList.add(\"sidebar\");\n  var projectDiv = document.createElement(\"div\");\n  projectDiv.classList.add(\"projectDiv\");\n  createH1(sideBar);\n  var _createAddProjectBtn = createAddProjectBtn(sideBar),\n    addBtn = _createAddProjectBtn.addBtn;\n\n  // Retrieve existing projects from localStorage\n  var projectCollection = JSON.parse(localStorage.getItem(\"Projects\")) || [];\n\n  // Render existing projects on page load\n  (0,_projectPopUp_js__WEBPACK_IMPORTED_MODULE_1__.createFromLocal)(projectCollection, projectDiv);\n  addBtn.addEventListener(\"click\", function () {\n    (0,_projectPopUp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projectDiv);\n  });\n\n  // Append projectDiv to the sidebar\n  sideBar.appendChild(projectDiv);\n\n  // Append sidebar to sidebarDiv\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.sidebarDiv.appendChild(sideBar);\n  return {\n    sideBar: sideBar,\n    projectDiv: projectDiv\n  };\n});\nfunction createAddProjectBtn(div) {\n  var addBtn = document.createElement(\"button\");\n  addBtn.textContent = \" + Add Project\";\n  addBtn.classList.add(\"myAddButton\");\n  div.appendChild(addBtn);\n  return {\n    addBtn: addBtn\n  };\n}\nfunction createH1(div) {\n  var projectH1 = document.createElement(\"h2\");\n  projectH1.textContent = \"Projects\";\n  projectH1.classList.add(\"projectH1\");\n  div.appendChild(projectH1);\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/sidebar.js?");

/***/ }),

/***/ "./src/modules/taskInterface.js":
/*!**************************************!*\
  !*** ./src/modules/taskInterface.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   forEachProjectInterface: () => (/* binding */ forEachProjectInterface),\n/* harmony export */   taskContainer: () => (/* binding */ taskContainer)\n/* harmony export */ });\n/* harmony import */ var _stlyes_taskInterFace_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stlyes/taskInterFace.css */ \"./src/stlyes/taskInterFace.css\");\n/* harmony import */ var _taskPopUp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskPopUp.js */ \"./src/modules/taskPopUp.js\");\n\n\nvar taskContainer = document.createElement(\"div\");\ntaskContainer.classList.add(\"taskContainer\");\nfunction forEachProjectInterface(div, project, projectN) {\n  var topDiv = document.createElement(\"div\");\n  topDiv.classList.add(\"topDiv\");\n  var projectName = document.createElement(\"h1\");\n  projectName.textContent = projectN;\n  projectName.classList.add(\"projectHeader\");\n  var taskOfProjectDiv = document.createElement(\"div\");\n  var AddTaskButton = document.createElement(\"button\");\n  AddTaskButton.classList.add(\"AddTaskBtn\");\n  AddTaskButton.addEventListener(\"click\", function () {\n    (0,_taskPopUp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taskOfProjectDiv, project);\n  });\n  topDiv.appendChild(projectName);\n  topDiv.appendChild(AddTaskButton);\n  div.appendChild(topDiv);\n  div.appendChild(taskOfProjectDiv);\n  return {\n    taskOfProjectDiv: taskOfProjectDiv\n  };\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/taskInterface.js?");

/***/ }),

/***/ "./src/modules/taskPopUp.js":
/*!**********************************!*\
  !*** ./src/modules/taskPopUp.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ openTaskModal)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTask.js */ \"./src/modules/addTask.js\");\n/* harmony import */ var _stlyes_taskInterFace_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stlyes/taskInterFace.css */ \"./src/stlyes/taskInterFace.css\");\n/* harmony import */ var _projectAddModule1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectAddModule1.js */ \"./src/modules/projectAddModule1.js\");\n\n\n\n\nfunction openTaskModal(div, project) {\n  // Create dialog element\n  var dialog1 = document.createElement(\"dialog\");\n  dialog1.classList.add(\"titleDialog1\");\n\n  // Create form element\n  var form1 = document.createElement(\"form\");\n  form1.setAttribute(\"method\", \"dialog\");\n  form1.setAttribute(\"class\", \"formProject1\");\n  var taskName = document.createElement(\"h1\");\n  taskName.classList.add(\"taskName\");\n  taskName.textContent = \"Write what you need to do.\";\n\n  // Create textarea element element\n  var labelTask = document.createElement(\"h5\");\n  labelTask.textContent = \"The Task\";\n  var textarea1 = document.createElement(\"textarea\");\n  textarea1.setAttribute(\"name\", \"title\");\n  textarea1.setAttribute(\"id\", \"title\");\n  textarea1.setAttribute(\"placeholder\", \"Task\");\n  textarea1.setAttribute(\"required\", \"\");\n\n  // line breaks\n  var br1 = document.createElement(\"br\");\n  var br2 = document.createElement(\"br\");\n  var br3 = document.createElement(\"br\");\n\n  // date input creating\n  var labelDate = document.createElement(\"label\");\n  labelDate.textContent = \"The Date\";\n  var inputDate = document.createElement(\"input\");\n  inputDate.setAttribute(\"type\", \"date\");\n  inputDate.setAttribute(\"id\", \"date\");\n\n  // priority select\n  var labelP = document.createElement(\"label\");\n  labelP.textContent = \"The Priority\";\n  var selectBtn = document.createElement(\"select\");\n  selectBtn.setAttribute(\"name\", \"priority\");\n  selectBtn.classList.add(\"select1\");\n  var option1 = document.createElement(\"option\");\n  option1.setAttribute(\"value\", \"Low Priority\");\n  option1.textContent = option1.value;\n  option1.style.color = \"green\";\n  var option2 = document.createElement(\"option\");\n  option2.setAttribute(\"value\", \"Neutral Priority\");\n  option2.textContent = option2.value;\n  option2.style.color = \"gray\";\n  var option3 = document.createElement(\"option\");\n  option3.setAttribute(\"value\", \"High Priority\");\n  option3.textContent = option3.value;\n  option3.style.color = \"red\";\n\n  // creating submit button\n  var submitBtn = document.createElement(\"button\");\n  submitBtn.setAttribute(\"type\", \"submit\");\n  submitBtn.setAttribute(\"class\", \"submitBtn\");\n  submitBtn.textContent = \"Submit\";\n  submitBtn.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    (0,_addTask_js__WEBPACK_IMPORTED_MODULE_1__.addTaskToProject)(div, project, textarea1.value, inputDate.value, selectBtn.value);\n    dialog1.close();\n  });\n  selectBtn.appendChild(option1);\n  selectBtn.appendChild(option2);\n  selectBtn.appendChild(option3);\n  form1.appendChild(taskName);\n  form1.appendChild(textarea1);\n  form1.appendChild(br1);\n  form1.appendChild(inputDate);\n  form1.appendChild(br2);\n  form1.appendChild(selectBtn);\n  form1.appendChild(submitBtn);\n  // Append form to dialog\n  dialog1.appendChild(form1);\n\n  // Append dialog to body\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(dialog1);\n\n  // Show the dialog\n  dialog1.showModal();\n\n  // Note: showModal() will block interaction with the rest of the page until closed\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/taskPopUp.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stlyes/project.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stlyes/project.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/RubikBrokenFax-Regular.ttf */ \"./src/assets/RubikBrokenFax-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/InstrumentSerif-Regular.ttf */ \"./src/assets/InstrumentSerif-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Teko-VariableFont_wght.ttf */ \"./src/assets/Teko-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Caveat-VariableFont_wght.ttf */ \"./src/assets/Caveat-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: rubik;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n@font-face {\n  font-family: instR;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n@font-face {\n  font-family: teko;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n@font-face {\n  font-family: cave;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n}\n\n.projectBox {\n  font-family: cave;\n\n  width: 90%;\n  margin: 10px;\n  height: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  font-size: 1rem;\n  font-weight: 600;\n}\n\n.projectName {\n  font-size: 1.7rem;\n  color: black;\n}\n\n.projectName:hover {\n  font-size: 2.2rem;\n}\n\n.projectBox:hover {\n  background-color: rgb(250, 250, 250);\n  height: rem;\n  cursor: pointer;\n}\n\n.project {\n  font-size: 0.8rem;\n}\n\n.projectBtns {\n  font-family: teko;\n  width: 4rem;\n  height: 2rem;\n  border-radius: 10px;\n  padding: 5px;\n  font-size: 1rem;\n  background-color: rgba(255, 253, 253, 0.5);\n}\n\n.projectBtns:hover {\n  font-size: 1.3rem;\n  width: 5rem;\n  height: 3rem;\n  cursor: pointer;\n  /*  */\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/stlyes/project.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stlyes/sidebar.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stlyes/sidebar.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Teko-VariableFont_wght.ttf */ \"./src/assets/Teko-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Caveat-VariableFont_wght.ttf */ \"./src/assets/Caveat-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: teko;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n@font-face {\n  font-family: cave;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n.sidebar {\n  margin-left: 0px;\n  background-color: rgb(255, 255, 255);\n  border: 0.4px rgb(0, 0, 0) solid;\n  width: 20rem;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n  align-items: center;\n}\n\n.myButton {\n  width: 40%;\n  font-size: 1rem;\n  border-radius: 10px;\n  margin: 0.3rem;\n  background-color: rgb(223, 160, 78);\n}\n.myButton:hover {\n  background: #a4a4a4;\n  cursor: pointer;\n}\n\n.projectH1 {\n  font-family: teko;\n\n  font-size: 3rem;\n  margin-left: 10px;\n  width: 100%;\n  border-bottom: 3px black dotted;\n  margin-bottom: -6px;\n}\n.myAddButton {\n  width: 40%;\n  font-size: 1rem;\n  border-radius: 10px;\n  margin-left: 0.3rem;\n  padding: 0.3rem;\n  align-self: center;\n}\n.myAddButton:hover {\n  background: #e8bebe;\n  cursor: pointer;\n}\n\n.projectDiv {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 10px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/stlyes/sidebar.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stlyes/taskInterFace.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stlyes/taskInterFace.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/InstrumentSerif-Italic.ttf */ \"./src/assets/InstrumentSerif-Italic.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/InstrumentSerif-Regular.ttf */ \"./src/assets/InstrumentSerif-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Teko-VariableFont_wght.ttf */ \"./src/assets/Teko-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Caveat-VariableFont_wght.ttf */ \"./src/assets/Caveat-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/folder-plus-svgrepo-com.svg */ \"./src/assets/folder-plus-svgrepo-com.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: inst;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n@font-face {\n  font-family: instR;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n@font-face {\n  font-family: teko;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n@font-face {\n  font-family: cave;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n}\n\n.taskDiv {\n  padding: 1rem;\n  background-color: rgb(255, 255, 255);\n  margin-top: 5rem;\n  margin-left: 10rem;\n  margin-bottom: 5rem;\n  width: 70rem;\n  height: 10rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.infoHeading {\n  font-family: cave;\n  border-bottom: 1px black solid;\n}\n\n.taskTitle1 {\n  font-family: teko;\n  padding: 5px;\n  margin: 5px;\n  background-color: rgb(255, 251, 251);\n  font-size: 1.3rem;\n  width: 80%;\n  height: 90%;\n  border: 1px rgb(0, 0, 0) dotted;\n  text-align: left;\n  display: flex;\n  align-items: top;\n}\n.taskDate {\n  border: black;\n  font-size: 1.3rem;\n  font-style: italic;\n}\n\n.taskPriority {\n  font-size: 1.3rem;\n  margin-top: 5px;\n}\n\n.taskContainer {\n  position: relative;\n  background-color: rgb(255, 255, 255);\n  width: 100dvw;\n  height: 100dvh;\n  text-align: end;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n\n.AddTaskBtn {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  right: 10px;\n  width: 6rem;\n  height: 6rem;\n  border: 0;\n}\n\n.AddTaskBtn:hover {\n  width: 8rem;\n  height: 8rem;\n  cursor: pointer;\n}\n\n.deleteTaskBtn {\n  width: 4rem;\n  height: 2rem;\n  background-color: white;\n  border-radius: 10px;\n  padding: 5px;\n}\n\n.deleteTaskBtn:hover {\n  font-size: 1.3rem;\n  width: 5rem;\n  height: 4rem;\n  cursor: pointer;\n  /*  */\n}\n\n.projectHeader {\n  font-family: teko;\n}\n\n.topDiv {\n  position: fixed;\n  color: rgb(0, 0, 0);\n  position: relative;\n  font-size: 1.5rem;\n  border-bottom: 1px rgb(0, 0, 0) solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.divForDate {\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n/* this is the pop up dialog/form  */\n\n.titleDialog1 {\n  height: 40rem;\n  width: 50rem;\n  background-color: rgba(255, 255, 255, 0.9);\n}\n\n.submitBtn {\n  display: grid;\n  grid-area: submitB;\n  color: #000000;\n  font-size: 1rem;\n\n  padding: 12px; /* Increased padding for a larger button */\n  border-radius: 11px;\n\n  background-image: linear-gradient(rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%);\n\n  /* border: 2px solid rgb(28, 110, 164); */\n  justify-self: center; /* Centered horizontally */\n  align-self: end; /* Positioned at the bottom */\n  /* Adjusted button width */\n  width: 10rem;\n}\n\n.submitBtn:hover {\n  font-size: 2rem;\n\n  cursor: pointer;\n  width: 10rem;\n}\n\n#title {\n  grid-area: task;\n  width: 30rem;\n  height: 28rem;\n  display: grid;\n  align-items: center; /* Centered vertically */\n  justify-content: center; /* Centered horizontally */\n}\n\n.select1 {\n  grid-area: selectBtn;\n  justify-items: end;\n  width: 9rem;\n  height: 3.5rem; /* Adjusted height for a bit larger size */\n  display: flex; /* Used flexbox for easier centering */\n  align-items: center;\n  justify-content: center;\n  color: white;\n  background-color: rgb(0, 0, 0);\n\n  /* border: 2px solid red; Increased border width */\n  border-radius: 8px; /* Added border-radius for a rounded appearance */\n}\n\n#date {\n  grid-area: date;\n  padding-left: 1rem;\n  padding-right: 1rem;\n\n  display: flex; /* Used flexbox for easier centering */\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n  background-color: rgb(250, 255, 254);\n  /* border: 2px solid red; Increased border width */\n  border-radius: 8px; /* Added border-radius for a rounded appearance */\n}\n\n#date input[type=\"date\"] {\n  width: 90%; /* Adjusted width for better visibility */\n  padding: 8px;\n  box-sizing: border-box;\n}\n\n.taskName {\n  grid-area: title;\n  display: grid;\n  font-family: cave;\n  color: white;\n  font-size: 2rem;\n  /* border: 1px solid red; */\n  justify-items: center;\n  align-items: center;\n}\n\n.formProject1 {\n  display: grid;\n  align-items: stretch;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n  grid-template-columns: 11rem 1fr; /* Adjusted column widths */\n  grid-template-areas:\n    \"title title\"\n    \"date task\"\n    \"selectBtn task\"\n    \"submitB submitB\"; /* Adjusted grid areas */\n\n  width: 100%;\n  height: 100%;\n  gap: 10px;\n}\n\n/* for form of the project\n */\n\n.formProject2 {\n  display: flex;\n  flex-direction: column;\n  width: 10rem;\n  gap: 5px;\n}\n\n.titleDialog2 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 20rem;\n  height: 20rem;\n  background-color: rgba(255, 255, 255, 0.4); /* Set the background color */\n\n  z-index: 999;\n}\n\n.submitBtnProject {\n  color: rgb(190, 148, 242);\n  font-size: 1rem;\n  line-height: 1rem;\n  padding: 0.8rem; /* Increased padding for a larger button */\n  border-radius: 0.7rem;\n}\n\n.submitBtnProject:hover {\n  font-size: 1.3rem;\n  line-height: 1.4rem;\n  cursor: pointer;\n}\n\n.titleOfProject {\n  width: 10rem;\n  font-size: 1rem;\n  height: 2rem;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/stlyes/taskInterFace.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/RubikBrokenFax-Regular.ttf */ \"./src/assets/RubikBrokenFax-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/InstrumentSerif-Regular.ttf */ \"./src/assets/InstrumentSerif-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/menuBtn.svg */ \"./src/assets/menuBtn.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/cool-svgrepo-com.svg */ \"./src/assets/cool-svgrepo-com.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: rubik;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n@font-face {\n  font-family: instR;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\nbody,\nhtml {\n  margin: 0;\n  border: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container {\n  height: 100dvh;\n  width: 100dvw;\n}\n\n.menuBtn {\n  width: 80px;\n  height: 80px;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n  background-position: center;\n  background-repeat: no-repeat;\n  margin-top: 0.7rem;\n  margin-left: 0.7rem;\n}\n\n.menuBtn:hover {\n  cursor: pointer;\n  background-color: bisque;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  font-family: instR;\n  font-size: 1.5rem;\n  border-bottom: 1px black solid;\n  background-color: rgb(95, 184, 235);\n  padding: 4px;\n}\n\n.rndmBtn {\n  width: 80px;\n  height: 80px;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n  background-repeat: no-repeat;\n  background-position: center;\n  border: 0;\n  margin-top: 0.7rem;\n  margin-right: 0.7rem;\n}\n\n.content {\n  width: 100dvw;\n  height: 100dvh;\n  display: flex;\n}\n\n.titleDialog {\n  width: 20rem;\n  height: 10rem;\n\n  background-color: #fff;\n  padding: 5rem;\n  overflow: hidden;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.submitBtn {\n  width: 5rem;\n}\n\n#title {\n  color: black;\n  font-size: 1rem;\n}\n\n.formProject {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/stlyes/project.css":
/*!********************************!*\
  !*** ./src/stlyes/project.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./project.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stlyes/project.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/stlyes/project.css?");

/***/ }),

/***/ "./src/stlyes/sidebar.css":
/*!********************************!*\
  !*** ./src/stlyes/sidebar.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./sidebar.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stlyes/sidebar.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/stlyes/sidebar.css?");

/***/ }),

/***/ "./src/stlyes/taskInterFace.css":
/*!**************************************!*\
  !*** ./src/stlyes/taskInterFace.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_taskInterFace_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./taskInterFace.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stlyes/taskInterFace.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_taskInterFace_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_taskInterFace_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_taskInterFace_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_taskInterFace_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/stlyes/taskInterFace.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./src/assets/Caveat-VariableFont_wght.ttf":
/*!*************************************************!*\
  !*** ./src/assets/Caveat-VariableFont_wght.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31f0a02d84d42627c894.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/assets/Caveat-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/assets/InstrumentSerif-Italic.ttf":
/*!***********************************************!*\
  !*** ./src/assets/InstrumentSerif-Italic.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e860caa09c61b51b60c.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/assets/InstrumentSerif-Italic.ttf?");

/***/ }),

/***/ "./src/assets/InstrumentSerif-Regular.ttf":
/*!************************************************!*\
  !*** ./src/assets/InstrumentSerif-Regular.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dd726bb91a354547f0d3.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/assets/InstrumentSerif-Regular.ttf?");

/***/ }),

/***/ "./src/assets/RubikBrokenFax-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/assets/RubikBrokenFax-Regular.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bf7f48be3f5ed441aec3.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/assets/RubikBrokenFax-Regular.ttf?");

/***/ }),

/***/ "./src/assets/Teko-VariableFont_wght.ttf":
/*!***********************************************!*\
  !*** ./src/assets/Teko-VariableFont_wght.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2c304a82d8b73b2829fa.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/assets/Teko-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/assets/cool-svgrepo-com.svg":
/*!*****************************************!*\
  !*** ./src/assets/cool-svgrepo-com.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2d923b043cbd72309bf4.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/cool-svgrepo-com.svg?");

/***/ }),

/***/ "./src/assets/folder-plus-svgrepo-com.svg":
/*!************************************************!*\
  !*** ./src/assets/folder-plus-svgrepo-com.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f75d60c1b9bbe1f40fad.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/folder-plus-svgrepo-com.svg?");

/***/ }),

/***/ "./src/assets/menuBtn.svg":
/*!********************************!*\
  !*** ./src/assets/menuBtn.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"775e6c4c443f115b0a05.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/menuBtn.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;