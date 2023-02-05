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

/***/ "./src/cotact.js":
/*!***********************!*\
  !*** ./src/cotact.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact(contentContainer) {\n    let contactsWindow = document.createElement('div');\n    contentContainer.appendChild(contactsWindow).setAttribute('id', 'contacts-window')\n    contactsWindow.style.backgroundImage = `url(images/dark-background-with-plate-eggs-pasta.jpg)`;\n\n    let contactsContainer = document.createElement('dive')\n    contactsWindow.appendChild(contactsContainer).setAttribute('id', 'contacts-container')\n\n    let contactsInfo = ['hong kong resturant', '+0123456789', 'potato island', '25-flowers-street']\n    let contacts = document.createElement('div');\n    contactsContainer.appendChild(contacts).classList.add('contacts');\n    for (let i = 0; i < 4; i++) {\n        let para = document.createElement('p');\n        contacts.appendChild(para).classList.add('contacts-info');\n        para.textContent = contactsInfo[i];\n        i === 0 ? para.classList.add('title') : 0;\n    }\n\n    let location = document.createElement('div');\n    contactsContainer.appendChild(location).setAttribute('id', 'location')\n\n    let copyRights = document.createElement('div')\n    contactsContainer.appendChild(copyRights).classList.add('copy-rights')\n\n    let myGitHubAcc = document.createElement('a');\n    myGitHubAcc.href = `https://github.com/bisky0-0`\n\n    myGitHubAcc.textContent = 'bisky kruager'\n\n    copyRights.textContent = `built by `\n    copyRights.appendChild(myGitHubAcc)\n\n}\n\n//# sourceURL=webpack://resturant-page/./src/cotact.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _home_bisky_repos_resturant_page_dist_icons_bars_solid_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dist/icons/bars-solid.svg */ \"./dist/icons/bars-solid.svg\");\n/* harmony import */ var _home_bisky_repos_resturant_page_dist_icons_xmark_solid_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dist/icons/xmark-solid.svg */ \"./dist/icons/xmark-solid.svg\");\n/* harmony import */ var _menue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menue.js */ \"./src/menue.js\");\n/* harmony import */ var _cotact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cotact.js */ \"./src/cotact.js\");\n\n\n\n\n\n\n\nlet icons = []\nlet content = document.getElementById(\"content\");\nlet contentContainer = document.createElement('div');\n\n(function nav() {\n    let nav = document.createElement(\"nav\");\n    content.appendChild(nav)\n    nav.setAttribute('id', 'nav')\n\n    let navH = document.createElement('h1');\n    nav.appendChild(navH).textContent = \"Conderiano Reasturant\";\n    let iconsContainer = document.createElement('div')\n    nav.appendChild(iconsContainer).setAttribute('id', 'icons')\n\n    for (let i = 0; i < 3; i++) {\n        const icon = document.createElement('div')\n        iconsContainer.appendChild(icon).classList.add('nav-icon')\n        i === 0 ? icon.textContent = \"home\" : i === 1 ? icon.textContent = \"menue\" : icon.textContent = \"contact us\";\n        icons.push(icon)\n    }\n\n    let barsIcon = document.createElement('div');\n    nav.appendChild(barsIcon).setAttribute('id', 'bar-icon')\n    barsIcon.style.cssText = `background-image: url(${_home_bisky_repos_resturant_page_dist_icons_bars_solid_svg__WEBPACK_IMPORTED_MODULE_1__});`;\n\n    let closeBar = document.createElement('div');\n    nav.appendChild(closeBar).setAttribute('id', 'close-icon');\n    closeBar.style.backgroundImage = `url(${_home_bisky_repos_resturant_page_dist_icons_xmark_solid_svg__WEBPACK_IMPORTED_MODULE_2__})`\n\n\n    contentContainer.setAttribute('id', 'content-container')\n    content.appendChild(contentContainer)\n\n    let navWindow = document.createElement('div');\n    let homeIcon = document.createElement('div');\n    let menueIcon = document.createElement('div');\n    let contactIcon = document.createElement('div');\n\n    barsIcon.addEventListener('click', function () {\n        contentContainer.appendChild(navWindow).setAttribute('id', 'nav-window');\n        navWindow.style.cssText = 'height: 100vh; min-height: 100vh; position: fixed';\n        barsIcon.style.display = 'none';\n        closeBar.style.display = \"block\";\n\n        navWindow.appendChild(homeIcon).classList.add('bar-icons');\n        homeIcon.textContent = 'home'\n        navWindow.appendChild(menueIcon).classList.add('bar-icons');\n        menueIcon.textContent = 'menue'\n        navWindow.appendChild(contactIcon).classList.add('bar-icons');\n        contactIcon.textContent = 'contact us'\n\n\n        homeIcon.addEventListener('click', function () {\n            barsIcon.style.display = 'block';\n            closeBar.style.display = 'none';\n            contentContainer.textContent = '';\n            (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contentContainer)\n        })\n\n        menueIcon.addEventListener('click', function () {\n            barsIcon.style.display = 'block';\n            closeBar.style.display = 'none';\n            contentContainer.textContent = '';\n            (0,_menue_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contentContainer)\n        })\n\n        contactIcon.addEventListener('click', function () {\n            barsIcon.style.display = 'block';\n            closeBar.style.display = 'none';\n            contentContainer.textContent = '';\n            (0,_cotact_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(contentContainer)\n        })\n\n    })\n\n    closeBar.addEventListener('click', function () {\n        barsIcon.style.display = 'block';\n        navWindow.style.cssText = `height: 0px; min-height: 0px`;\n        closeBar.style.display = 'none';\n        homeIcon.textContent = ''\n        menueIcon.textContent = ''\n        contactIcon.textContent = ''\n    })\n})()\n\n;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contentContainer)\n\nicons[0].addEventListener('click', function () {\n    contentContainer.textContent = '';\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contentContainer)\n})\n\nicons[1].addEventListener('click', function () {\n    contentContainer.textContent = ''\n    ;(0,_menue_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contentContainer)\n})\n\nicons[2].addEventListener('click', function () {\n    contentContainer.textContent = ''\n    ;(0,_cotact_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(contentContainer)\n})\n\n\n//# sourceURL=webpack://resturant-page/./src/index.js?");

/***/ }),

/***/ "./src/menue.js":
/*!**********************!*\
  !*** ./src/menue.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menue)\n/* harmony export */ });\nfunction menue(contentContainer) {\n\n    let menueContainer = document.createElement('div')\n    contentContainer.appendChild(menueContainer).setAttribute('id', 'menue-container');\n\n    let selectedDish = document.createElement(\"div\")\n    menueContainer.appendChild(selectedDish).setAttribute('id', 'selected-dish');\n\n    let dishContainer = document.createElement('div');\n    menueContainer.appendChild(dishContainer).setAttribute('id', 'dish-container')\n\n\n    let sizes = ['large', 'medium', 'small'];\n    let prices = ['20$', '15$', '10$'];\n    let names = ['Soft Fluffy Char Siu Bao', 'One Pot Chinese Soy Sauce Chicken', 'ramen seafood', 'praised pork', 'paked pork chop with potatos', 'cilantro'];\n    let pics = ['images/charsiubao-6.jpg', 'images/bon-vivant-qom5MPOER-I-unsplash.jpg', 'images/mae-mu-en4qp-aK1h4-unsplash.jpg', 'images/amanda-lim-0xakVv9lpuA-unsplash.jpg', 'images/chester-toh-USXMYHubRtA-unsplash.jpg', 'images/paul-hanaoka-buCCy7UOAbM-unsplash.jpg']\n    // let\n    for (let i = 0; i < 6; i++) {\n        let dish = document.createElement('div')\n        dishContainer.appendChild(dish).classList.add('dish')\n\n        let pic = document.createElement('div');\n        dish.appendChild(pic).classList.add('pic');\n        pic.style.backgroundImage = `url(${pics[i]})`\n\n        let details = document.createElement('div');\n        dish.appendChild(details).classList.add('details');\n\n        let name = document.createElement('h2');\n        details.appendChild(name).classList.add('name')\n        name.textContent = names[i]\n\n        for (let j = 0; j < 3; j++) {\n            let para = document.createElement('p')\n            details.appendChild(para).textContent = sizes[j]\n\n            let price = document.createElement('span');\n            para.appendChild(price).classList.add('price')\n            price.textContent = prices[j]\n        }\n\n        let order = document.createElement('button');\n        details.appendChild(order).classList.add('order')\n        order.textContent = 'order now'\n\n        order.addEventListener('click', function () {\n            selectedDish.style.cssText = `background-image: url(${pics[i]}); background-size: cover;`\n        })\n    }\n}\n\n//# sourceURL=webpack://resturant-page/./src/menue.js?");

/***/ }),

/***/ "./dist/icons/bars-solid.svg":
/*!***********************************!*\
  !*** ./dist/icons/bars-solid.svg ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIiBmaWxsPSIjZmZmIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMi4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA5NkMwIDc4LjMgMTQuMyA2NCAzMiA2NEg0MTZjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJIMzJDMTQuMyAxMjggMCAxMTMuNyAwIDk2ek0wIDI1NmMwLTE3LjcgMTQuMy0zMiAzMi0zMkg0MTZjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJIMzJjLTE3LjcgMC0zMi0xNC4zLTMyLTMyek00NDggNDE2YzAgMTcuNy0xNC4zIDMyLTMyIDMySDMyYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMySDQxNmMxNy43IDAgMzIgMTQuMyAzMiAzMnoiLz48L3N2Zz4=\";\n\n//# sourceURL=webpack://resturant-page/./dist/icons/bars-solid.svg?");

/***/ }),

/***/ "./dist/icons/xmark-solid.svg":
/*!************************************!*\
  !*** ./dist/icons/xmark-solid.svg ***!
  \************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIiBmaWxsPSIjZmZmIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMi4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzEwLjYgMTUwLjZjMTIuNS0xMi41IDEyLjUtMzIuOCAwLTQ1LjNzLTMyLjgtMTIuNS00NS4zIDBMMTYwIDIxMC43IDU0LjYgMTA1LjRjLTEyLjUtMTIuNS0zMi44LTEyLjUtNDUuMyAwcy0xMi41IDMyLjggMCA0NS4zTDExNC43IDI1NiA5LjQgMzYxLjRjLTEyLjUgMTIuNS0xMi41IDMyLjggMCA0NS4zczMyLjggMTIuNSA0NS4zIDBMMTYwIDMwMS4zIDI2NS40IDQwNi42YzEyLjUgMTIuNSAzMi44IDEyLjUgNDUuMyAwczEyLjUtMzIuOCAwLTQ1LjNMMjA1LjMgMjU2IDMxMC42IDE1MC42eiIvPjwvc3ZnPg==\";\n\n//# sourceURL=webpack://resturant-page/./dist/icons/xmark-solid.svg?");

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