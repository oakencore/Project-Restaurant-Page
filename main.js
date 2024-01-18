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

/***/ "./src/divFunctions.js":
/*!*****************************!*\
  !*** ./src/divFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newDiv: () => (/* binding */ newDiv)\n/* harmony export */ });\nfunction newDiv(divId, content) {\n    // Create a new div\n    const div = document.createElement(\"div\");\n  \n    // Sets the ID for the div class\n    if (divId) {\n      div.id = divId;\n    }\n    // What content do I want in the div?\n    if (content) {\n      div.textContent = content;\n    }\n    // Return the created div to be used elsewhere\n    return div;\n  }\n\n//# sourceURL=webpack://project-restaurant-page/./src/divFunctions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadInitialContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadInitialContent.js */ \"./src/loadInitialContent.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_loadInitialContent_js__WEBPACK_IMPORTED_MODULE_0__.loadInitialContent)();\n});\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/loadInitialContent.js":
/*!***********************************!*\
  !*** ./src/loadInitialContent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadInitialContent: () => (/* binding */ loadInitialContent)\n/* harmony export */ });\n/* harmony import */ var _divFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./divFunctions.js */ \"./src/divFunctions.js\");\n\n\nfunction loadInitialContent() {\n  // If any content exists in the header. Exit if it does.\n  if (document.getElementById(\"header\")) {\n    return; \n  }\n\n  document.documentElement.style.margin = \"0\";\n  document.documentElement.style.padding = \"0\";\n  document.documentElement.style.height = \"100%\";\n  document.documentElement.style.width = \"100%\";\n\n  document.body.style.margin = \"0\";\n  document.body.style.padding = \"0\";\n  document.body.style.height = \"100%\";\n  document.body.style.width = \"100%\";\n  // Say no to horizontal scrollbars!\n  document.body.style.overflowX = \"hidden\";\n\n  const contentDiv = document.getElementById(\"content\");\n  contentDiv.style.position = \"relative\";\n  contentDiv.style.top = \"0\";\n  contentDiv.style.left = \"0\";\n  contentDiv.style.width = \"100%\";\n  contentDiv.style.margin = \"0\";\n\n  const header = document.createElement(\"header\");\n  header.id = \"header\";\n  header.style.display = \"flex\";\n  header.style.flexDirection = \"row\";\n  header.style.justifyContent = \"space-between\";\n  header.style.width = \"150px\";\n  header.style.alignItems = \"center\";\n  header.style.paddingBlockStart = \"2%\";\n  header.style.paddingBlockEnd = \"2%\";\n  contentDiv.appendChild(header);\n\n  const leftDiv = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"left\");\n  leftDiv.style.display = \"flex\";\n  leftDiv.style.flexDirection = \"row\";\n  leftDiv.style.justifyContent = \"space-between\";\n  leftDiv.style.alignItems = \"center\";\n  leftDiv.style.gap = \"25px\";\n\n  header.appendChild(leftDiv);\n\n  const rightDiv = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"right\");\n  header.appendChild(rightDiv);\n\n  const menu = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"menu\", \"Menu\");\n  leftDiv.appendChild(menu);\n\n  const address = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"address\", \"Visit Us\");\n  leftDiv.appendChild(address);\n\n  const contact = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"contact\", \"Contact Us\");\n  leftDiv.appendChild(contact);\n\n  const booking = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"booking\", \"Book A Table\");\n  rightDiv.appendChild(booking);\n\n  const logoText = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"logo\", \"GREENBURGER\");\n  logoText.style.display = \"flex\";\n  logoText.style.flexDirection = \"row\";\n  logoText.style.justifyContent = \"center\";\n  logoText.style.alignItems = \"center\";\n  logoText.style.paddingTop = \"1%\";\n  logoText.style.paddingBottom = \"5%\";\n  logoText.style.fontSize = \"150px\";\n  contentDiv.appendChild(logoText);\n\n  const divider = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"divider\");\n  divider.style.height = \"10px\";\n  const logoTextContentLength = logoText.textContent.length;\n  // The width per character in pixels\n  const estimatedCharacterWidth = 101;\n  const estimatedDividerWidth = estimatedCharacterWidth * logoTextContentLength;\n  divider.style.width = estimatedDividerWidth + \"px\";\n  divider.style.backgroundColor = \"black\";\n  divider.style.marginLeft = \"auto\";\n  divider.style.marginRight = \"auto\";\n  divider.style.boxSizing = \"border-box\";\n\n  // Aligning my header and divider widths\n  header.style.width = estimatedDividerWidth + \"px\";\n  header.style.boxSizing = \"border-box\";\n  header.style.margin = \"0 auto\";\n\n  // Had to append in this order to not mess up the layout. Will look at a better way to do this.\n  contentDiv.appendChild(header);\n  contentDiv.appendChild(divider);\n  contentDiv.appendChild(logoText);\n\n  const productImages = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"productImages\");\n  productImages.style.display = \"flex\";\n  productImages.style.flexDirection = \"row\";\n  productImages.style.justifyContent = \"space-around\";\n  productImages.style.alignItems = \"center\";\n  contentDiv.appendChild(productImages);\n\n  const burgerImage = document.createElement(\"img\");\n  burgerImage.src = \"greenburger.webp\";\n  burgerImage.alt = \"Image of a GreenBurger cheese burger\";\n  burgerImage.style.width = \"400px\";\n  burgerImage.style.height = \"400px\";\n  productImages.appendChild(burgerImage);\n\n  const sidesImage = document.createElement(\"img\");\n  sidesImage.src = \"sides.png\";\n  sidesImage.alt = \"Image of a GreenBurger cheese burger\";\n  sidesImage.style.width = \"400px\";\n  sidesImage.style.height = \"400px\";\n  productImages.appendChild(sidesImage);\n\n  const background = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"background\");\n  background.style.display = \"flex\";\n  background.style.position = \"absolute\";\n  background.style.top = \"0\";\n  background.style.left = \"0\";\n  background.style.width = \"100%\";\n  background.style.height = \"100%\";\n  background.style.zIndex = \"-1\";\n  contentDiv.appendChild(background);\n\n  const leftBackground = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"leftBackground\");\n  leftBackground.style.backgroundColor = \"green\";\n  leftBackground.style.width = \"50%\";\n  leftBackground.style.height = \"100vh\";\n  background.appendChild(leftBackground);\n\n  const rightBackground = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"rightBackground\");\n  background.appendChild(rightBackground);\n\n  const footer = document.createElement(\"footer\");\n  footer.style.position = \"fixed\";\n  footer.style.bottom = \"0\";\n  footer.style.left = \"0\";\n  footer.style.height = \"40px\";\n  footer.style.width = \"100%\";\n  footer.style.backgroundColor = \"black\";\n  contentDiv.appendChild(footer);\n\n  const footerText = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\n    \"footerText\",\n    \"2024. GREENBURGER. ALL RIGHTS RESERVED.\"\n  );\n  footerText.style.display = \"flex\";\n  footerText.style.flexDirection = \"row\";\n  footerText.style.justifyContent = \"space-between\";\n  footerText.style.alignItems = \"center\";\n  footerText.style.padding = \"1%\";\n  footerText.style.fontSize = \"10px\";\n  footerText.style.color = \"grey\";\n  footer.appendChild(footerText);\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  loadInitialContent();\n});\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/loadInitialContent.js?");

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