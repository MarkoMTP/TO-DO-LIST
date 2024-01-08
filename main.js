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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   container: () => (/* binding */ container),\n/* harmony export */   content: () => (/* binding */ content)\n/* harmony export */ });\n/* harmony import */ var _stlyes_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stlyes/sidebar */ \"./src/stlyes/sidebar.js\");\n\n\n\n\n\nconst container = document.getElementById(\"container\")\n\n\n\n\n\n const headerDiv = document.createElement(\"div\");\n headerDiv.classList.add(\"header\");\n\n const menuBtn = document.createElement(\"button\");\n menuBtn.classList.add(\"menuBtn\");\n\n\n headerDiv.appendChild(menuBtn);\n\n const heading1 = document.createElement(\"h1\");\n//  heading1.classList.add(\"heading\");\nheading1.innerHTML = \"TO-DO LIST\"\n headerDiv.appendChild(heading1);\n\n\n const rndmBtn = document.createElement(\"button\");\nrndmBtn.classList.add(\"rndmBtn\")\n headerDiv.appendChild(rndmBtn);\n\n container.appendChild(headerDiv)\n\nconst content = document.createElement(\"div\")\ncontent.classList.add(\"content\")\n container.appendChild(content)\n\n menuBtn.addEventListener(\"click\", (0,_stlyes_sidebar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/stlyes/sidebar.js":
/*!*******************************!*\
  !*** ./src/stlyes/sidebar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addSideBar)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './stlyes/sidebar.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\nfunction addSideBar() {\n    \nconst sidebarDiv = document.createElement(\"div\")\nsidebarDiv.classList.add(\"sidebar\")\n\nsidebarDiv.textContent = 'JSJSJSSJJS'\n_index_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(sidebarDiv)\n\n_index_js__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(_index_js__WEBPACK_IMPORTED_MODULE_0__.content)\n}\n\n//# sourceURL=webpack://todo-list/./src/stlyes/sidebar.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;