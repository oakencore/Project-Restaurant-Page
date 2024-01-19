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

/***/ "./src/clickable.js":
/*!**************************!*\
  !*** ./src/clickable.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeClickable: () => (/* binding */ makeClickable)\n/* harmony export */ });\nfunction makeClickable(element, onClickFunction) {\n    // Change the cursor to indicate clickable\n    element.style.cursor = \"pointer\"; \n    element.addEventListener(\"click\", onClickFunction);\n  }\n\n//# sourceURL=webpack://project-restaurant-page/./src/clickable.js?");

/***/ }),

/***/ "./src/divFunctions.js":
/*!*****************************!*\
  !*** ./src/divFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newDiv: () => (/* binding */ newDiv)\n/* harmony export */ });\nfunction newDiv(divId, content) {\n    // Create a new div\n    const div = document.createElement(\"div\");\n  \n    // Sets the ID for the div class\n    if (divId) {\n      div.id = divId;\n    }\n    // What content do I want in the div?\n    if (content) {\n      div.textContent = content;\n    }\n    // Return the created div to be used elsewhere\n    return div;\n  }\n\n//# sourceURL=webpack://project-restaurant-page/./src/divFunctions.js?");

/***/ }),

/***/ "./src/hoverFunction.js":
/*!******************************!*\
  !*** ./src/hoverFunction.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addHoverEffect: () => (/* binding */ addHoverEffect)\n/* harmony export */ });\nfunction addHoverEffect(element) {\n    element.addEventListener(\"mouseover\", () => {\n      element.style.backgroundColor = \"white\";\n      // Add an outline for a highlight effect\n      element.style.outline = \"2px solid white\"; \n      element.style.boxShadow = \"0px 0px 10px rgba(0,0,0,0.2)\";\n    });\n  \n    element.addEventListener(\"mouseout\", () => {\n      element.style.backgroundColor = \"\";\n      element.style.outline = \"none\"; \n      element.style.boxShadow = \"none\";\n    });\n  }\n  \n\n//# sourceURL=webpack://project-restaurant-page/./src/hoverFunction.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadInitialContent: () => (/* binding */ loadInitialContent)\n/* harmony export */ });\n/* harmony import */ var _divFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./divFunctions.js */ \"./src/divFunctions.js\");\n/* harmony import */ var _hoverFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hoverFunction.js */ \"./src/hoverFunction.js\");\n/* harmony import */ var _clickable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clickable.js */ \"./src/clickable.js\");\n\n\n\n\nfunction loadInitialContent() {\n  // If any content exists in the header. Exit if it does.\n  if (document.getElementById(\"header\")) {\n    return;\n  }\n\n  document.documentElement.style.margin = \"0\";\n  document.documentElement.style.padding = \"0\";\n  document.documentElement.style.height = \"100%\";\n  document.documentElement.style.width = \"100%\";\n\n  document.body.style.margin = \"0\";\n  document.body.style.padding = \"0\";\n  document.body.style.height = \"100%\";\n  document.body.style.width = \"100%\";\n  // Say no to horizontal scrollbars!\n  document.body.style.overflowX = \"hidden\";\n\n  const contentDiv = document.getElementById(\"content\");\n  contentDiv.style.position = \"relative\";\n  contentDiv.style.top = \"0\";\n  contentDiv.style.left = \"0\";\n  contentDiv.style.width = \"100%\";\n  contentDiv.style.margin = \"0\";\n\n  const header = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"header\");\n  header.style.height = \"60px\";\n  header.style.display = \"flex\";\n  header.style.flexDirection = \"row\";\n  header.style.justifyContent = \"space-between\";\n  header.style.width = \"150px\";\n  header.style.alignItems = \"center\";\n  header.style.paddingBlockStart = \"2%\";\n  header.style.paddingBlockEnd = \"2%\";\n  appendChildFunction(contentDiv, header);\n  let originalHeader = header;\n\n  const headerWithLogoText = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"header\");\n  headerWithLogoText.style.height = \"60px\";\n  headerWithLogoText.style.display = \"flex\";\n  headerWithLogoText.style.flexDirection = \"row\";\n  headerWithLogoText.style.justifyContent = \"space-between\";\n  headerWithLogoText.style.alignItems = \"center\";\n  headerWithLogoText.style.flexGrow = \"0\";\n  headerWithLogoText.style.flexShrink = \"1\";\n  headerWithLogoText.style.flexBasis = \"auto\";\n  // headerWithLogoText.style.backgroundColor = \"blue\";\n  headerWithLogoText.style.paddingLeft = \"90px\";\n  headerWithLogoText.style.paddingRight = \"85px\";\n\n  const leftDivWithLogoText = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"left\");\n  leftDivWithLogoText.style.display = \"flex\";\n  leftDivWithLogoText.style.flexDirection = \"row\";\n  leftDivWithLogoText.style.justifyContent = \"space-between\";\n  leftDivWithLogoText.style.alignItems = \"center\";\n  leftDivWithLogoText.style.alignContent = \"center\";\n  leftDivWithLogoText.style.gap = \"25px\";\n  leftDivWithLogoText.style.flex = \"0 1 auto\";\n  // leftDivWithLogoText.style.backgroundColor = \"red\";\n\n  const rightDivWithLogoText = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"right\");\n  rightDivWithLogoText.style.display = \"flex\";\n  rightDivWithLogoText.style.flexDirection = \"row\";\n  rightDivWithLogoText.style.justifyContent = \"center\";\n  rightDivWithLogoText.style.flex = \"0 1 auto\";\n  // rightDivWithLogoText.style.backgroundColor = \"red\";\n\n  appendChildFunction(headerWithLogoText, leftDivWithLogoText);\n  appendChildFunction(headerWithLogoText, rightDivWithLogoText);\n\n  function swapHeader(newHeader) {\n    if (contentDiv.contains(originalHeader)) {\n      // Transfer all children from leftDiv to leftDivWithLogoText\n      while (leftDiv.firstChild) {\n        leftDivWithLogoText.appendChild(leftDiv.firstChild);\n      }\n\n      // Transfer all children from rightDiv to rightDivWithLogoText\n      while (rightDiv.firstChild) {\n        rightDivWithLogoText.appendChild(rightDiv.firstChild);\n      }\n\n      // Place logoText between leftDivWithLogoText and rightDivWithLogoText\n      newHeader.appendChild(leftDivWithLogoText);\n      newHeader.appendChild(logoText); // logoText comes after leftDivWithLogoText\n      newHeader.appendChild(rightDivWithLogoText);\n\n      // Replace originalHeader with the new headerWithLogoText\n      contentDiv.replaceChild(newHeader, originalHeader);\n    } else if (contentDiv.contains(headerWithLogoText)) {\n      // Swap back to the original header layout\n      // Transfer all children from leftDivWithLogoText to leftDiv\n      while (leftDivWithLogoText.firstChild) {\n        leftDiv.appendChild(leftDivWithLogoText.firstChild);\n      }\n\n      // Move logoText back to its original position\n      contentDiv.insertBefore(logoText, divider); // Assuming logoText originally comes before the divider\n\n      // Transfer all children from rightDivWithLogoText to rightDiv\n      while (rightDivWithLogoText.firstChild) {\n        rightDiv.appendChild(rightDivWithLogoText.firstChild);\n      }\n\n      // Replace headerWithLogoText with the original header\n      contentDiv.replaceChild(originalHeader, headerWithLogoText);\n    }\n  }\n\n  const leftDiv = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"left\");\n  leftDiv.style.display = \"flex\";\n  leftDiv.style.flexDirection = \"row\";\n  leftDiv.style.justifyContent = \"space-between\";\n  // leftDiv.style.backgroundColor = \"red\";\n  leftDiv.style.gap = \"20px\";\n  appendChildFunction(header, leftDiv);\n\n  const rightDiv = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"right\");\n  rightDiv.style.display = \"flex\";\n  rightDiv.style.flexDirection = \"row\";\n  rightDiv.style.justifyContent = \"center\";\n  appendChildFunction(header, rightDiv);\n\n  const menu = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"menu\", \"Menu\");\n(0,_hoverFunction_js__WEBPACK_IMPORTED_MODULE_1__.addHoverEffect)(menu);\n(0,_clickable_js__WEBPACK_IMPORTED_MODULE_2__.makeClickable)(menu, () => {\n  console.log(\"Menu clicked\");\n  productImages.style.display = \"none\";\n  logoText.style.fontSize = \"50px\";\n  logoText.style.padding = \"0\";\n  logoText.style.margin = \"0\";\n  logoText.style.alignSelf = \"center\";\n\n  appendChildFunction(headerWithLogoText, logoText);\n  swapHeader(headerWithLogoText);\n\n  let wrapperDiv = document.getElementById(\"menuWrapper\");\n\n  if (!wrapperDiv) {\n    wrapperDiv = createWrapperDiv();\n    contentDiv.appendChild(wrapperDiv);\n\n    let menuContent = createMenuContent(); \n    wrapperDiv.appendChild(menuContent);\n\n    let menuFoodImage = createFoodImage(); \n    wrapperDiv.appendChild(menuFoodImage);\n  }\n\n \n  if (wrapperDiv.style.display === \"none\" || !wrapperDiv.style.display) {\n    wrapperDiv.style.display = \"flex\";\n    wrapperDiv.style.justifyContent = \"space-between\";\n    wrapperDiv.style.alignItems = \"center\";\n\n    wrapperDiv.style.paddingLeft = \"8%\"; \n    wrapperDiv.style.paddingRight = \"8%\"; \n    wrapperDiv.style.marginTop = \"8vh\"\n    // wrapperDiv.style.backgroundColor = \"red\"; \n    document.getElementById(\"menuContent\").style.display = \"block\";\n    document.getElementById(\"menuFoodImage\").style.display = \"block\";\n  } else {\n    wrapperDiv.style.display = \"none\";\n    document.getElementById(\"menuContent\").style.display = \"none\";\n    document.getElementById(\"menuFoodImage\").style.display = \"none\";\n  }\n});\n\n  appendChildFunction(leftDiv, menu);\n\n  const address = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"address\", \"Visit Us\");\n  (0,_hoverFunction_js__WEBPACK_IMPORTED_MODULE_1__.addHoverEffect)(address);\n  (0,_clickable_js__WEBPACK_IMPORTED_MODULE_2__.makeClickable)(address, () => {\n    logoText.style.display = \"none\";\n    productImages.style.display = \"none\";\n    console.log(\"Address clicked\");\n  });\n  appendChildFunction(leftDiv, address);\n\n  const contact = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"contact\", \"Contact\");\n  (0,_hoverFunction_js__WEBPACK_IMPORTED_MODULE_1__.addHoverEffect)(contact);\n  (0,_clickable_js__WEBPACK_IMPORTED_MODULE_2__.makeClickable)(contact, () => {\n    logoText.style.display = \"none\";\n    productImages.style.display = \"none\";\n    console.log(\"Contact clicked\");\n  });\n  appendChildFunction(leftDiv, contact);\n\n  const booking = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"booking\", \"Book A Table\");\n  (0,_clickable_js__WEBPACK_IMPORTED_MODULE_2__.makeClickable)(booking, () => {\n    console.log(\"Booking clicked\");\n  });\n  booking.style.backgroundColor = \"black\";\n  booking.style.padding = \"10px\";\n  booking.style.color = \"green\";\n  booking.addEventListener(\"mouseover\", () => {\n    booking.style.backgroundColor = \"green\";\n    booking.style.color = \"white\";\n    booking.style.outline = \"2px solid black\";\n  });\n  booking.addEventListener(\"mouseout\", () => {\n    booking.style.backgroundColor = \"black\";\n    booking.style.color = \"green\";\n    booking.style.outline = \"none\";\n  });\n  appendChildFunction(rightDiv, booking);\n\n  const logoText = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"logo\", \"GREENBURGER\");\n  logoText.style.display = \"flex\";\n  logoText.style.flexDirection = \"row\";\n  logoText.style.justifyContent = \"center\";\n  logoText.style.alignItems = \"center\";\n  logoText.style.paddingTop = \"1%\";\n  logoText.style.paddingBottom = \"5%\";\n  logoText.style.fontSize = \"150px\";\n  logoText.style.margin = \"0 10px\";\n  appendChildFunction(contentDiv, logoText);\n\n  // TODO: I've tried to make the divider always be the same width as the logo. But selecting new tabs breaks it. This seems convoluted. There must be a simpler way.\n  const divider = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"divider\");\n  divider.style.height = \"10px\";\n  const logoTextContentLength = logoText.textContent.length;\n  // The width per character in pixels\n  const estimatedCharacterWidth = 101;\n  const estimatedDividerWidth = estimatedCharacterWidth * logoTextContentLength;\n  divider.style.width = estimatedDividerWidth + \"px\";\n  divider.style.backgroundColor = \"black\";\n  divider.style.marginLeft = \"auto\";\n  divider.style.marginRight = \"auto\";\n  divider.style.boxSizing = \"border-box\";\n\n  // Aligning my header and divider widths\n  header.style.width = estimatedDividerWidth + \"px\";\n  header.style.boxSizing = \"border-box\";\n  header.style.margin = \"0 auto\";\n\n  // Had to append in this order to not mess up the layout. Will look at a better way to do this.\n  appendChildFunction(contentDiv, header);\n  appendChildFunction(contentDiv, divider);\n  appendChildFunction(contentDiv, logoText);\n\n  const productImages = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"productImages\");\n  productImages.style.display = \"flex\";\n  productImages.style.flexDirection = \"row\";\n  productImages.style.justifyContent = \"space-around\";\n  productImages.style.alignItems = \"center\";\n  appendChildFunction(contentDiv, productImages);\n\n  const burgerImage = document.createElement(\"img\");\n  burgerImage.src = \"greenburger.webp\";\n  burgerImage.alt = \"Image of a GreenBurger cheese burger\";\n  burgerImage.style.width = \"400px\";\n  burgerImage.style.height = \"400px\";\n  appendChildFunction(productImages, burgerImage);\n\n  const sidesImage = document.createElement(\"img\");\n  sidesImage.src = \"sides.png\";\n  sidesImage.alt = \"Image of a GreenBurger cheese burger\";\n  sidesImage.style.width = \"400px\";\n  sidesImage.style.height = \"400px\";\n  appendChildFunction(productImages, sidesImage);\n\n  const background = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"background\");\n  background.style.display = \"flex\";\n  background.style.position = \"absolute\";\n  background.style.top = \"0\";\n  background.style.left = \"0\";\n  background.style.width = \"100%\";\n  background.style.height = \"100%\";\n  background.style.zIndex = \"-1\";\n  appendChildFunction(contentDiv, background);\n\n  const leftBackground = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"leftBackground\");\n  leftBackground.style.backgroundColor = \"green\";\n  leftBackground.style.width = \"50%\";\n  leftBackground.style.height = \"100vh\";\n  appendChildFunction(background, leftBackground);\n\n  const rightBackground = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"rightBackground\");\n  appendChildFunction(background, rightBackground);\n\n  const footer = document.createElement(\"footer\");\n  footer.style.position = \"fixed\";\n  footer.style.bottom = \"0\";\n  footer.style.left = \"0\";\n  footer.style.height = \"40px\";\n  footer.style.width = \"100%\";\n  footer.style.backgroundColor = \"black\";\n  appendChildFunction(contentDiv, footer);\n\n  const footerText = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\n    \"footerText\",\n    \"2024. GREENBURGER. ALL RIGHTS RESERVED.\"\n  );\n  footerText.style.display = \"flex\";\n  footerText.style.flexDirection = \"row\";\n  footerText.style.justifyContent = \"space-between\";\n  footerText.style.alignItems = \"center\";\n  footerText.style.padding = \"1%\";\n  footerText.style.fontSize = \"10px\";\n  footerText.style.color = \"grey\";\n  appendChildFunction(footer, footerText);\n\n  // example: appendChildFunction(contentDiv, header);\n  function appendChildFunction(parentElement, childElement) {\n    if (parentElement && childElement) {\n      // log the appending order because its so annoying\n      console.log(\n        `Appending ${childElement.id || \"an element\"} to ${\n          parentElement.id || \"a parent\"\n        }`\n      );\n      parentElement.appendChild(childElement);\n    }\n  }\n\n  // Function to create and return the menu content div\n  function createMenuContent() {\n    const menuContent = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"menuContent\");\n    menuContent.style.display = \"none\"; // Initially hidden\n\n    // Add menu sections here\n    // Example: Adding the Burgers section\n    const burgersSection = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"burgersSection\");\n    burgersSection.innerHTML = `<h2>Burgers</h2>\n      <p>The Avocado Dream - $12.50</p>\n      <p>The Vegan Delight - $13.00</p>\n      <p>The Truffle Shuffle - $15.00</p>`;\n    menuContent.appendChild(burgersSection);\n\n    const sidesSection = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"sidesSection\");\n    sidesSection.innerHTML = `<h2>Sides</h2>\n      <p>Organic Sweet Potato Fries - $6.00</p>\n      <p>Kale Caesar Salad - $8.00</p>`;\n    menuContent.appendChild(sidesSection);\n\n    const drinksSection = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"drinksSection\");\n    drinksSection.innerHTML = `<h2>Drinks</h2>\n      <p>Craft Root Beer - $4.00</p>\n      <p>Kombucha on Tap - $5.00</p>`;\n    menuContent.appendChild(drinksSection);\n\n    return menuContent;\n  }\n\n  function createFoodImage() {\n    const menuFoodImage = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"menuFoodImage\");\n    menuFoodImage.style.display = \"none\"; \n\n    const menuFoodDisplayImage = document.createElement(\"img\");\n    menuFoodDisplayImage.src = \"menuBurgersImage.png\";\n    menuFoodDisplayImage.alt =\n      \"Image of a spread of items on the GREENBURGER menu\";\n    menuFoodDisplayImage.style.width = \"400px\";\n    menuFoodDisplayImage.style.height = \"400px\";\n\n    menuFoodImage.appendChild(menuFoodDisplayImage); \n\n    return menuFoodImage;\n  }\n\n  function createWrapperDiv() {\n    const wrapperDiv = (0,_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"menuWrapper\");\n    wrapperDiv.style.display = \"none\";\n    return wrapperDiv;\n  }\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  loadInitialContent();\n\n  // Simulate a click on the menu button\n  const menuButton = document.getElementById(\"menu\"); \n  if (menuButton) {\n    menuButton.click();\n  }\n});\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/loadInitialContent.js?");

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