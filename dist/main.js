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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n\nfunction home(contentContainer) {\n    content.style.cssText = `background-image: url(\"images/bowls-with-rice-pasta-dark-background.jpg\");\n     background-size: cover;\n     background-position: center`;\n\n    let welcomeWindow = document.createElement('div')\n    welcomeWindow.setAttribute('id', 'welcome');\n    contentContainer.appendChild(welcomeWindow)\n\n    let welcomeH2 = document.createElement('h2')\n    welcomeH2.textContent = \"welcome to our resturant\"\n    welcomeWindow.appendChild(welcomeH2)\n\n    let welcomeP = document.createElement('p');\n    welcomeP.innerHTML = `our food <span>tasts</span> good as it looks`;\n    welcomeWindow.appendChild(welcomeP)\n}\n\n\n//# sourceURL=webpack://resturant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menue.js */ \"./src/menue.js\");\n\n\n\n\nlet icons = []\nlet content = document.getElementById(\"content\");\nlet contentContainer = document.createElement('div');\n\n(function nav() {\n    let nav = document.createElement(\"nav\");\n    content.appendChild(nav)\n    nav.setAttribute('id', 'nav')\n\n    let navH = document.createElement('h1');\n    nav.appendChild(navH).textContent = \"Hong Kong Reasturant\";\n    let iconsContainer = document.createElement('div')\n    nav.appendChild(iconsContainer).setAttribute('id', 'icons')\n\n    for (let i = 0; i < 3; i++) {\n        const icon = document.createElement('div')\n        iconsContainer.appendChild(icon).classList.add('nav-icon')\n        i === 0 ? icon.textContent = \"home\" : i === 1 ? icon.textContent = \"menue\" : icon.textContent = \"contact us\";\n        icons.push(icon)\n    }\n\n\n    contentContainer.setAttribute('id', 'content-container')\n    content.appendChild(contentContainer)\n})()\n\n\n\nicons[0].addEventListener('click', function () {\n    contentContainer.textContent = '';\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contentContainer)\n})\n\nicons[1].addEventListener('click', function () {\n    contentContainer.textContent = ''\n    ;(0,_menue_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(contentContainer)\n})\n\n\n\n\n\n//# sourceURL=webpack://resturant-page/./src/index.js?");

/***/ }),

/***/ "./src/menue.js":
/*!**********************!*\
  !*** ./src/menue.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menue)\n/* harmony export */ });\nfunction menue(contentContainer) {\n\n    let menueContainer = document.createElement('div')\n    contentContainer.appendChild(menueContainer).setAttribute('id', 'menue-container');\n\n    let selectedDish = document.createElement(\"div\")\n    menueContainer.appendChild(selectedDish).setAttribute('id', 'selected-dish');\n\n    let dishContainer = document.createElement('div');\n    menueContainer.appendChild(dishContainer).setAttribute('id', 'dish-container')\n\n\n    let sizes = ['large', 'medium', 'small'];\n    let prices = ['20$', '15$', '10$'];\n    let names = ['fish', 'rice', 'meat', 'pasta', 'chicken', 'potatos']\n    // let\n    for (let i = 0; i < 6; i++) {\n        let dish = document.createElement('div')\n        dishContainer.appendChild(dish).classList.add('dish')\n\n        let pic = document.createElement('div');\n        dish.appendChild(pic).classList.add('pic');\n\n        let details = document.createElement('div');\n        dish.appendChild(details).classList.add('details');\n\n        let name = document.createElement('h2');\n        details.appendChild(name).classList.add('name')\n        name.textContent = names[i]\n\n        for (let j = 0; j < 3; j++) {\n            let para = document.createElement('p')\n            details.appendChild(para).textContent = sizes[j]\n\n            let price = document.createElement('span');\n            para.appendChild(price).classList.add('price')\n            price.textContent = prices[j]\n        }\n\n        let order = document.createElement('button');\n        details.appendChild(order).classList.add('order')\n        order.textContent = 'order now'\n    }\n}\n\n//# sourceURL=webpack://resturant-page/./src/menue.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;