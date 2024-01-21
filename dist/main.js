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

/***/ "./src/appendChildFunction.js":
/*!************************************!*\
  !*** ./src/appendChildFunction.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appendChildFunction: () => (/* binding */ appendChildFunction)\n/* harmony export */ });\nfunction appendChildFunction(parentElement, childElement) {\n    // example: appendChildFunction(contentDiv, header);\n    if (parentElement && childElement) {\n      // log the appending order because its so annoying to debug\n      console.log(\n        `Appending ${childElement.id || \"an element\"} to ${\n          parentElement.id || \"a parent\"\n        }`\n      );\n      parentElement.appendChild(childElement);\n    }\n  }\n\n//# sourceURL=webpack://project-restaurant-page/./src/appendChildFunction.js?");

/***/ }),

/***/ "./src/clickable.js":
/*!**************************!*\
  !*** ./src/clickable.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeClickable: () => (/* binding */ makeClickable)\n/* harmony export */ });\nfunction makeClickable(element, onClickFunction) {\n    // Change the cursor to indicate clickable\n    element.style.cursor = \"pointer\"; \n    element.addEventListener(\"click\", onClickFunction);\n  }\n\n//# sourceURL=webpack://project-restaurant-page/./src/clickable.js?");

/***/ }),

/***/ "./src/contentCreationFunctions.js":
/*!*****************************************!*\
  !*** ./src/contentCreationFunctions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAddressContent: () => (/* binding */ createAddressContent),\n/* harmony export */   createBackgroundDivs: () => (/* binding */ createBackgroundDivs),\n/* harmony export */   createContactContent: () => (/* binding */ createContactContent),\n/* harmony export */   createFoodImage: () => (/* binding */ createFoodImage),\n/* harmony export */   createFooterTextDiv: () => (/* binding */ createFooterTextDiv),\n/* harmony export */   createMenuContent: () => (/* binding */ createMenuContent),\n/* harmony export */   createProductImagesDiv: () => (/* binding */ createProductImagesDiv)\n/* harmony export */ });\n// Content Creation Functions\n\nfunction createAddressContent() {\n  addressContent = newDiv(\"addressContent\");\n  addressContent.style.display = \"none\";\n  const addressText = document.createElement(\"p\");\n  addressText.textContent = \"123 Green St., Veggie Town\";\n  addressContent.appendChild(addressText);\n  return addressContent;\n}\n\nfunction createContactContent() {\n  contactContent = newDiv(\"contactContent\");\n  //Hide to start\n  contactContent.style.display = \"none\";\n  const contactText = document.createElement(\"p\");\n  contactText.textContent = \"Email: contact@greenburger.com\";\n  contactContent.appendChild(contactText);\n\n  return contactContent;\n}\n\nfunction createProductImagesDiv() {\n  const productImages = newDiv(\"productImages\");\n  productImages.style.display = \"flex\";\n  productImages.style.flexDirection = \"row\";\n  productImages.style.justifyContent = \"space-around\";\n  productImages.style.alignItems = \"center\";\n\n  const burgerImage = document.createElement(\"img\");\n  burgerImage.src = \"greenburger.webp\";\n  burgerImage.alt = \"Image of a GreenBurger cheese burger\";\n  burgerImage.style.width = \"400px\";\n  burgerImage.style.height = \"400px\";\n  productImages.appendChild(burgerImage);\n\n  const sidesImage = document.createElement(\"img\");\n  sidesImage.src = \"sides.png\";\n  sidesImage.alt = \"Image of a GreenBurger cheese burger\";\n  sidesImage.style.width = \"400px\";\n  sidesImage.style.height = \"400px\";\n  productImages.appendChild(sidesImage);\n\n  return productImages;\n}\n\nfunction createBackgroundDivs() {\n  const leftBackground = newDiv(\"leftBackground\");\n  leftBackground.style.backgroundColor = \"green\";\n  leftBackground.style.width = \"50%\";\n  leftBackground.style.height = \"100vh\";\n\n  const rightBackground = newDiv(\"rightBackground\");\n\n  return { leftBackground, rightBackground };\n}\n\nfunction createFooterTextDiv() {\n  const footerText = newDiv(\n    \"footerText\",\n    \"2024. GREENBURGER. ALL RIGHTS RESERVED.\"\n  );\n  footerText.style.display = \"flex\";\n  footerText.style.flexDirection = \"row\";\n  footerText.style.justifyContent = \"space-between\";\n  footerText.style.alignItems = \"center\";\n  footerText.style.padding = \"1%\";\n  footerText.style.fontSize = \"10px\";\n  footerText.style.color = \"grey\";\n\n  return footerText;\n}\n\n// Function to create and return the menu content div\nfunction createMenuContent() {\n  const menuContent = newDiv(\"menuContent\");\n  // Hidden at first\n  menuContent.style.display = \"none\";\n\n  // Add menu sections here\n  // Example: Adding the Burgers section\n  const burgersSection = newDiv(\"burgersSection\");\n  burgersSection.innerHTML = `<h2>Burgers</h2>\n        <p>The Avocado Dream - $12.50</p>\n        <p>The Vegan Delight - $13.00</p>\n        <p>The Truffle Shuffle - $15.00</p>`;\n  menuContent.appendChild(burgersSection);\n\n  const sidesSection = newDiv(\"sidesSection\");\n  sidesSection.innerHTML = `<h2>Sides</h2>\n        <p>Organic Sweet Potato Fries - $6.00</p>\n        <p>Kale Caesar Salad - $8.00</p>`;\n  menuContent.appendChild(sidesSection);\n\n  const drinksSection = newDiv(\"drinksSection\");\n  drinksSection.innerHTML = `<h2>Drinks</h2>\n        <p>Craft Root Beer - $4.00</p>\n        <p>Kombucha on Tap - $5.00</p>`;\n  menuContent.appendChild(drinksSection);\n\n  return menuContent;\n}\n\nfunction createFoodImage() {\n  const menuFoodImage = newDiv(\"menuFoodImage\");\n  menuFoodImage.style.display = \"none\";\n\n  const menuFoodDisplayImage = document.createElement(\"img\");\n  menuFoodDisplayImage.src = \"menuBurgersImage.png\";\n  menuFoodDisplayImage.alt =\n    \"Image of a spread of items on the GREENBURGER menu\";\n  menuFoodDisplayImage.style.width = \"400px\";\n  menuFoodDisplayImage.style.height = \"400px\";\n\n  menuFoodImage.appendChild(menuFoodDisplayImage);\n\n  return menuFoodImage;\n}\n\n\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/contentCreationFunctions.js?");

/***/ }),

/***/ "./src/divFunctions.js":
/*!*****************************!*\
  !*** ./src/divFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newDiv: () => (/* binding */ newDiv)\n/* harmony export */ });\nfunction newDiv(divId, content) {\n    // Create a new div\n    const div = document.createElement(\"div\");\n  \n    // Sets the ID for the div class\n    if (divId) {\n      div.id = divId;\n    }\n    // What content do I want in the div?\n    if (content) {\n      div.textContent = content;\n    }\n    // Return the created div to be used elsewhere\n    return div;\n  }\n\n//# sourceURL=webpack://project-restaurant-page/./src/divFunctions.js?");

/***/ }),

/***/ "./src/eventlisteners.js":
/*!*******************************!*\
  !*** ./src/eventlisteners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addClickEventListeners: () => (/* binding */ addClickEventListeners)\n/* harmony export */ });\nfunction addClickEventListeners() {\n    document.getElementById(\"menu\").addEventListener(\"click\", handleMenuContent);\n    document\n      .getElementById(\"address\")\n      .addEventListener(\"click\", handleAddressContent);\n    document\n      .getElementById(\"contact\")\n      .addEventListener(\"click\", handleContactContent);\n  }\n\n//# sourceURL=webpack://project-restaurant-page/./src/eventlisteners.js?");

/***/ }),

/***/ "./src/headerElements.js":
/*!*******************************!*\
  !*** ./src/headerElements.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAddressDiv: () => (/* binding */ createAddressDiv),\n/* harmony export */   createBookingDiv: () => (/* binding */ createBookingDiv),\n/* harmony export */   createContactDiv: () => (/* binding */ createContactDiv),\n/* harmony export */   createMenuDiv: () => (/* binding */ createMenuDiv)\n/* harmony export */ });\nfunction createMenuDiv() {\n  const menu = newDiv(\"menu\", \"Menu\");\n  addHoverEffect(menu);\n  makeClickable(menu, () => {\n    console.log(\"Menu clicked\");\n    productImages.style.display = \"none\";\n    logoText.style.fontSize = \"50px\";\n    logoText.style.padding = \"0\";\n    logoText.style.margin = \"0\";\n    logoText.style.alignSelf = \"center\";\n\n    appendChildFunction(headerWithLogoText, logoText);\n    swapHeader(headerWithLogoText);\n\n    let wrapperDiv = document.getElementById(\"menuWrapper\");\n\n    if (!wrapperDiv) {\n      wrapperDiv = createWrapperDiv();\n      contentDiv.appendChild(wrapperDiv);\n\n      let menuContent = createMenuContent();\n      wrapperDiv.appendChild(menuContent);\n\n      let menuFoodImage = createFoodImage();\n      wrapperDiv.appendChild(menuFoodImage);\n    }\n\n    if (wrapperDiv.style.display === \"none\" || !wrapperDiv.style.display) {\n      wrapperDiv.style.display = \"flex\";\n      wrapperDiv.style.justifyContent = \"space-between\";\n      wrapperDiv.style.alignItems = \"center\";\n\n      wrapperDiv.style.paddingLeft = \"8%\";\n      wrapperDiv.style.paddingRight = \"8%\";\n      wrapperDiv.style.marginTop = \"8vh\";\n      document.getElementById(\"menuContent\").style.display = \"block\";\n      document.getElementById(\"menuFoodImage\").style.display = \"block\";\n    } else {\n      wrapperDiv.style.display = \"none\";\n      document.getElementById(\"menuContent\").style.display = \"none\";\n      document.getElementById(\"menuFoodImage\").style.display = \"none\";\n    }\n  });\n\n  return menu;\n}\n\nfunction createAddressDiv() {\n  const address = newDiv(\"address\", \"Visit Us\");\n  addHoverEffect(address);\n  makeClickable(address, () => {\n    logoText.style.display = \"none\";\n    productImages.style.display = \"none\";\n    console.log(\"Address clicked\");\n  });\n  return address;\n}\n\nfunction createContactDiv() {\n  const contact = newDiv(\"contact\", \"Contact\");\n  addHoverEffect(contact);\n  makeClickable(contact, () => {\n    logoText.style.display = \"none\";\n    productImages.style.display = \"none\";\n    console.log(\"Contact clicked\");\n  });\n  return contact;\n}\n\nfunction createBookingDiv() {\n  const booking = newDiv(\"booking\", \"Book A Table\");\n  makeClickable(booking, () => {\n    console.log(\"Booking clicked\");\n  });\n  booking.style.backgroundColor = \"black\";\n  booking.style.padding = \"10px\";\n  booking.style.color = \"green\";\n  booking.addEventListener(\"mouseover\", () => {\n    booking.style.backgroundColor = \"green\";\n    booking.style.color = \"white\";\n    booking.style.outline = \"2px solid black\";\n  });\n  booking.addEventListener(\"mouseout\", () => {\n    booking.style.backgroundColor = \"black\";\n    booking.style.color = \"green\";\n    booking.style.outline = \"none\";\n  });\n  return booking;\n}\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/headerElements.js?");

/***/ }),

/***/ "./src/headers.js":
/*!************************!*\
  !*** ./src/headers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHeaderDivs: () => (/* binding */ createHeaderDivs),\n/* harmony export */   createHeaderDivsWithLogoText: () => (/* binding */ createHeaderDivsWithLogoText),\n/* harmony export */   swapHeader: () => (/* binding */ swapHeader),\n/* harmony export */   swapToHeaderWithLogoText: () => (/* binding */ swapToHeaderWithLogoText)\n/* harmony export */ });\nfunction createHeaderDivs() {\n  const leftDiv = newDiv(\"left\");\n  leftDiv.style.display = \"flex\";\n  leftDiv.style.flexDirection = \"row\";\n  leftDiv.style.justifyContent = \"space-between\";\n  // leftDiv.style.backgroundColor = \"red\";\n  leftDiv.style.gap = \"20px\";\n\n  const rightDiv = newDiv(\"right\");\n  rightDiv.style.display = \"flex\";\n  rightDiv.style.flexDirection = \"row\";\n  rightDiv.style.justifyContent = \"center\";\n\n  return { leftDiv, rightDiv };\n}\n\nfunction createHeaderDivsWithLogoText() {\n    leftDivWithLogoText = newDiv(\"left\");\n    leftDivWithLogoText.style.display = \"flex\";\n    leftDivWithLogoText.style.flexDirection = \"row\";\n    leftDivWithLogoText.style.justifyContent = \"space-between\";\n    leftDivWithLogoText.style.alignItems = \"center\";\n    leftDivWithLogoText.style.alignContent = \"center\";\n    leftDivWithLogoText.style.gap = \"25px\";\n    leftDivWithLogoText.style.flex = \"0 1 auto\";\n    // leftDivWithLogoText.style.backgroundColor = \"red\";\n  \n    rightDivWithLogoText = newDiv(\"right\");\n    rightDivWithLogoText.style.display = \"flex\";\n    rightDivWithLogoText.style.flexDirection = \"row\";\n    rightDivWithLogoText.style.justifyContent = \"center\";\n    rightDivWithLogoText.style.flex = \"0 1 auto\";\n    // rightDivWithLogoText.style.backgroundColor = \"red\";\n  \n    return { leftDivWithLogoText, rightDivWithLogoText };\n  }\n\n// Function to swap headers\nfunction swapToHeaderWithLogoText() {\n  if (!contentDiv.contains(headerWithLogoText)) {\n    swapHeader(headerWithLogoText);\n  }\n}\n\nfunction swapHeader(newHeader) {\n  if (contentDiv.contains(originalHeader)) {\n    // Transfer all children from leftDiv to leftDivWithLogoText\n    while (leftDiv.firstChild) {\n      leftDivWithLogoText.appendChild(leftDiv.firstChild);\n    }\n\n    // Transfer all children from rightDiv to rightDivWithLogoText\n    while (rightDiv.firstChild) {\n      rightDivWithLogoText.appendChild(rightDiv.firstChild);\n    }\n\n    // Place logoText between leftDivWithLogoText and rightDivWithLogoText\n    newHeader.appendChild(leftDivWithLogoText);\n    newHeader.appendChild(logoText); // logoText comes after leftDivWithLogoText\n    newHeader.appendChild(rightDivWithLogoText);\n\n    // Replace originalHeader with the new headerWithLogoText\n    contentDiv.replaceChild(newHeader, originalHeader);\n  } else if (contentDiv.contains(headerWithLogoText)) {\n    // Swap back to the original header layout\n    // Transfer all children from leftDivWithLogoText to leftDiv\n    while (leftDivWithLogoText.firstChild) {\n      leftDiv.appendChild(leftDivWithLogoText.firstChild);\n    }\n\n    // Move logoText back to its original position\n    contentDiv.insertBefore(logoText, divider); // Assuming logoText originally comes before the divider\n\n    // Transfer all children from rightDivWithLogoText to rightDiv\n    while (rightDivWithLogoText.firstChild) {\n      rightDiv.appendChild(rightDivWithLogoText.firstChild);\n    }\n\n    // Replace headerWithLogoText with the original header\n    contentDiv.replaceChild(originalHeader, headerWithLogoText);\n  }\n}\n\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/headers.js?");

/***/ }),

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDivider: () => (/* binding */ createDivider),\n/* harmony export */   createWrapperDiv: () => (/* binding */ createWrapperDiv),\n/* harmony export */   handleAddressContent: () => (/* binding */ handleAddressContent),\n/* harmony export */   handleContactContent: () => (/* binding */ handleContactContent),\n/* harmony export */   handleMenuContent: () => (/* binding */ handleMenuContent),\n/* harmony export */   setGlobalStyles: () => (/* binding */ setGlobalStyles),\n/* harmony export */   setupBackground: () => (/* binding */ setupBackground),\n/* harmony export */   setupFooter: () => (/* binding */ setupFooter),\n/* harmony export */   setupHeader: () => (/* binding */ setupHeader),\n/* harmony export */   setupHeaderWithLogoText: () => (/* binding */ setupHeaderWithLogoText)\n/* harmony export */ });\n// TODO: Might need to add the swap function here?\nfunction setupHeaderWithLogoText(contentDiv) {\n  // Header with logo Setup\n  headerWithLogoText = newDiv(\"header\");\n  headerWithLogoText.style.height = \"60px\";\n  headerWithLogoText.style.display = \"flex\";\n  headerWithLogoText.style.flexDirection = \"row\";\n  headerWithLogoText.style.justifyContent = \"space-between\";\n  headerWithLogoText.style.alignItems = \"center\";\n  headerWithLogoText.style.flexGrow = \"0\";\n  headerWithLogoText.style.flexShrink = \"1\";\n  headerWithLogoText.style.flexBasis = \"auto\";\n  // headerWithLogoText.style.backgroundColor = \"blue\";\n  headerWithLogoText.style.paddingLeft = \"90px\";\n  headerWithLogoText.style.paddingRight = \"85px\";\n\n  return headerWithLogoText;\n}\n\n// TODO: I've tried to make the divider always be the same width as the logo. But selecting new tabs breaks it. This seems convoluted. There must be a simpler way.\nfunction createDivider(logoText) {\n  const divider = newDiv(\"divider\");\n  divider.style.height = \"10px\";\n\n  // Calculate the width of the divider based on the length of the logo text\n  const logoTextContentLength = logoText.textContent.length;\n  const estimatedCharacterWidth = 101; //pixels\n  const estimatedDividerWidth = estimatedCharacterWidth * logoTextContentLength;\n\n  divider.style.width = estimatedDividerWidth + \"px\";\n  divider.style.backgroundColor = \"black\";\n  divider.style.marginLeft = \"auto\";\n  divider.style.marginRight = \"auto\";\n  divider.style.boxSizing = \"border-box\";\n\n  // Align the header width with the divider width\n  const header = document.getElementById(\"header\");\n  if (header) {\n    header.style.width = estimatedDividerWidth + \"px\";\n    header.style.boxSizing = \"border-box\";\n    header.style.margin = \"0 auto\";\n  }\n\n  return divider;\n}\n\nfunction createWrapperDiv() {\n  const wrapperDiv = newDiv(\"menuWrapper\");\n  wrapperDiv.style.display = \"none\";\n  return wrapperDiv;\n}\n\n// Event Handling Features\nfunction handleMenuContent() {\n  document.getElementById(\"menuContent\").style.display = \"block\";\n  document.getElementById(\"addressContent\").style.display = \"none\";\n  document.getElementById(\"contactContent\").style.display = \"none\";\n}\n\nfunction handleAddressContent() {\n  document.getElementById(\"menuContent\").style.display = \"none\";\n  document.getElementById(\"addressContent\").style.display = \"block\";\n  document.getElementById(\"contactContent\").style.display = \"none\";\n}\n\nfunction handleContactContent() {\n  document.getElementById(\"menuContent\").style.display = \"none\";\n  document.getElementById(\"addressContent\").style.display = \"none\";\n  document.getElementById(\"contactContent\").style.display = \"block\";\n}\n\n// Helper functions\nfunction setGlobalStyles() {\n  // Global Styling of main page\n  document.documentElement.style.margin = \"0\";\n  document.documentElement.style.padding = \"0\";\n  document.documentElement.style.height = \"100%\";\n  document.documentElement.style.width = \"100%\";\n  document.body.style.margin = \"0\";\n  document.body.style.padding = \"0\";\n  document.body.style.height = \"100%\";\n  document.body.style.width = \"100%\";\n  // Say no to horizontal scrollbars!\n  document.body.style.overflowX = \"hidden\";\n}\n\nfunction setupHeader(contentDiv) {\n  const header = newDiv(\"header\");\n  header.style.height = \"60px\";\n  header.style.display = \"flex\";\n  header.style.flexDirection = \"row\";\n  header.style.justifyContent = \"space-between\";\n  header.style.width = \"150px\";\n  header.style.alignItems = \"center\";\n  header.style.paddingBlockStart = \"2%\";\n  header.style.paddingBlockEnd = \"2%\";\n  appendChildFunction(contentDiv, header);\n  let originalHeader = header;\n}\n\n\nfunction setupFooter(contentDiv) {\n  const footer = document.createElement(\"footer\");\n  footer.style.position = \"fixed\";\n  footer.style.bottom = \"0\";\n  footer.style.left = \"0\";\n  footer.style.height = \"40px\";\n  footer.style.width = \"100%\";\n  footer.style.backgroundColor = \"black\";\n  appendChildFunction(contentDiv, footer);\n}\n\nfunction setupBackground(contentDiv) {\n  const background = newDiv(\"background\");\n  background.style.display = \"flex\";\n  background.style.position = \"absolute\";\n  background.style.top = \"0\";\n  background.style.left = \"0\";\n  background.style.width = \"100%\";\n  background.style.height = \"100%\";\n  background.style.zIndex = \"-1\";\n  appendChildFunction(contentDiv, background);\n}\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/helperFunctions.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadInitialContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadInitialContent.js */ \"./src/loadInitialContent.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_loadInitialContent_js__WEBPACK_IMPORTED_MODULE_0__.initialisePageContent)();\n  addClickEventListeners();\n});\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/loadInitialContent.js":
/*!***********************************!*\
  !*** ./src/loadInitialContent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialisePageContent: () => (/* binding */ initialisePageContent)\n/* harmony export */ });\n/* harmony import */ var _divFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./divFunctions.js */ \"./src/divFunctions.js\");\n/* harmony import */ var _hoverFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hoverFunction.js */ \"./src/hoverFunction.js\");\n/* harmony import */ var _clickable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clickable.js */ \"./src/clickable.js\");\n/* harmony import */ var _contentCreationFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contentCreationFunctions.js */ \"./src/contentCreationFunctions.js\");\n/* harmony import */ var _appendChildFunction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appendChildFunction.js */ \"./src/appendChildFunction.js\");\n/* harmony import */ var _helperFunctions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helperFunctions.js */ \"./src/helperFunctions.js\");\n/* harmony import */ var _eventlisteners_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventlisteners.js */ \"./src/eventlisteners.js\");\n/* harmony import */ var _headers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./headers.js */ \"./src/headers.js\");\n/* harmony import */ var _headerElements_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./headerElements.js */ \"./src/headerElements.js\");\n/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logo.js */ \"./src/logo.js\");\n// Import statements\n\nconsole.log(_divFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newDiv);\n\n\n\n\n\n\n\n\n\n\n// Global Variables\nlet contentDiv;\nlet header;\nlet leftDiv;\nlet rightDiv;\nlet menuDiv;\nlet addressDiv;\nlet contactDiv;\nlet bookingDiv;\n\n// Function to initialize page content\nfunction initialisePageContent() {\n  // Apply global styles\n  (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_5__.setGlobalStyles)();\n\n  // Create main content div if it doesn't exist\n  contentDiv =\n    document.getElementById(\"content\") || document.createElement(\"div\");\n  contentDiv.id = \"content\";\n  if (!document.body.contains(contentDiv)) {\n    document.body.appendChild(contentDiv);\n  }\n\n  // Setup Header\n  header = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_5__.setupHeader)();\n  (0,_appendChildFunction_js__WEBPACK_IMPORTED_MODULE_4__.appendChildFunction)(contentDiv, header);\n\n  // Setup divs within header div\n  ({ leftDiv, rightDiv } = (0,_headers_js__WEBPACK_IMPORTED_MODULE_7__.createHeaderDivs)());\n  (0,_appendChildFunction_js__WEBPACK_IMPORTED_MODULE_4__.appendChildFunction)(header, leftDiv);\n  (0,_appendChildFunction_js__WEBPACK_IMPORTED_MODULE_4__.appendChildFunction)(header, rightDiv);\n\n  // Add menu, address, contact to leftDiv\n  menuDiv = (0,_headerElements_js__WEBPACK_IMPORTED_MODULE_8__.createMenuDiv)();\n  addressDiv = (0,_headerElements_js__WEBPACK_IMPORTED_MODULE_8__.createAddressDiv)();\n  contactDiv = (0,_headerElements_js__WEBPACK_IMPORTED_MODULE_8__.createContactDiv)();\n  (0,_appendChildFunction_js__WEBPACK_IMPORTED_MODULE_4__.appendChildFunction)(leftDiv, menuDiv);\n  (0,_appendChildFunction_js__WEBPACK_IMPORTED_MODULE_4__.appendChildFunction)(leftDiv, addressDiv);\n  (0,_appendChildFunction_js__WEBPACK_IMPORTED_MODULE_4__.appendChildFunction)(leftDiv, contactDiv);\n\n  // Add Booking to rightDiv\n  bookingDiv = (0,_headerElements_js__WEBPACK_IMPORTED_MODULE_8__.createBookingDiv)();\n  (0,_appendChildFunction_js__WEBPACK_IMPORTED_MODULE_4__.appendChildFunction)(rightDiv, bookingDiv);\n\n  // Add Footer, background, and product images\n  const footer = (0,_contentCreationFunctions_js__WEBPACK_IMPORTED_MODULE_3__.createFooterTextDiv)();\n  const { leftBackground, rightBackground } = (0,_contentCreationFunctions_js__WEBPACK_IMPORTED_MODULE_3__.createBackgroundDivs)();\n  const productImages = (0,_contentCreationFunctions_js__WEBPACK_IMPORTED_MODULE_3__.createProductImagesDiv)();\n  (0,_appendChildFunction_js__WEBPACK_IMPORTED_MODULE_4__.appendChildFunction)(contentDiv, footer);\n  (0,_appendChildFunction_js__WEBPACK_IMPORTED_MODULE_4__.appendChildFunction)(contentDiv, leftBackground);\n  (0,_appendChildFunction_js__WEBPACK_IMPORTED_MODULE_4__.appendChildFunction)(contentDiv, rightBackground);\n  (0,_appendChildFunction_js__WEBPACK_IMPORTED_MODULE_4__.appendChildFunction)(contentDiv, productImages);\n}\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/loadInitialContent.js?");

/***/ }),

/***/ "./src/logo.js":
/*!*********************!*\
  !*** ./src/logo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createLogoTextDiv: () => (/* binding */ createLogoTextDiv)\n/* harmony export */ });\nfunction createLogoTextDiv() {\n    const logoText = newDiv(\"logo\", \"GREENBURGER\");\n    logoText.style.display = \"flex\";\n    logoText.style.flexDirection = \"row\";\n    logoText.style.justifyContent = \"center\";\n    logoText.style.alignItems = \"center\";\n    logoText.style.paddingTop = \"1%\";\n    logoText.style.paddingBottom = \"5%\";\n    logoText.style.fontSize = \"150px\";\n    logoText.style.margin = \"0 10px\";\n    return logoText;\n  }\n\n//# sourceURL=webpack://project-restaurant-page/./src/logo.js?");

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