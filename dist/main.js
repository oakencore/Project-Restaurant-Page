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

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addHoverEffect: () => (/* binding */ addHoverEffect),\n/* harmony export */   appendChildFunction: () => (/* binding */ appendChildFunction),\n/* harmony export */   createAddressContent: () => (/* binding */ createAddressContent),\n/* harmony export */   createAddressDiv: () => (/* binding */ createAddressDiv),\n/* harmony export */   createBackgroundDivs: () => (/* binding */ createBackgroundDivs),\n/* harmony export */   createBookingDiv: () => (/* binding */ createBookingDiv),\n/* harmony export */   createBurgerImage: () => (/* binding */ createBurgerImage),\n/* harmony export */   createContactContent: () => (/* binding */ createContactContent),\n/* harmony export */   createContactDiv: () => (/* binding */ createContactDiv),\n/* harmony export */   createDivider: () => (/* binding */ createDivider),\n/* harmony export */   createFoodImage: () => (/* binding */ createFoodImage),\n/* harmony export */   createFooterTextDiv: () => (/* binding */ createFooterTextDiv),\n/* harmony export */   createHeaderDivs: () => (/* binding */ createHeaderDivs),\n/* harmony export */   createHeaderDivsWithLogoText: () => (/* binding */ createHeaderDivsWithLogoText),\n/* harmony export */   createHeaderLogoTextDiv: () => (/* binding */ createHeaderLogoTextDiv),\n/* harmony export */   createLogoTextDiv: () => (/* binding */ createLogoTextDiv),\n/* harmony export */   createMenuContent: () => (/* binding */ createMenuContent),\n/* harmony export */   createMenuDiv: () => (/* binding */ createMenuDiv),\n/* harmony export */   createSidesImage: () => (/* binding */ createSidesImage),\n/* harmony export */   createWrapperDiv: () => (/* binding */ createWrapperDiv),\n/* harmony export */   handleAddressContent: () => (/* binding */ handleAddressContent),\n/* harmony export */   handleContactContent: () => (/* binding */ handleContactContent),\n/* harmony export */   handleMenuContent: () => (/* binding */ handleMenuContent),\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu),\n/* harmony export */   makeClickable: () => (/* binding */ makeClickable),\n/* harmony export */   newDiv: () => (/* binding */ newDiv),\n/* harmony export */   setGlobalStyles: () => (/* binding */ setGlobalStyles),\n/* harmony export */   setupBackground: () => (/* binding */ setupBackground),\n/* harmony export */   setupDivClickListeners: () => (/* binding */ setupDivClickListeners),\n/* harmony export */   setupFooter: () => (/* binding */ setupFooter),\n/* harmony export */   setupHeader: () => (/* binding */ setupHeader),\n/* harmony export */   swapToHeaderWithLogoText: () => (/* binding */ swapToHeaderWithLogoText)\n/* harmony export */ });\nfunction createMenuDiv() {\n  const menu = newDiv(\"menu\", \"Menu\");\n  addHoverEffect(menu);\n  console.log(\"Menu Div Created\");\n  return menu;\n}\n\nfunction createAddressDiv() {\n  const address = newDiv(\"address\", \"Visit Us\");\n  const logoText = createLogoTextDiv();\n  addHoverEffect(address);\n  makeClickable(address, () => {\n    logoText.style.display = \"none\";\n    productImages.style.display = \"none\";\n    console.log(\"Address clicked\");\n  });\n  return address;\n}\n\nfunction createContactDiv() {\n  const contact = newDiv(\"contact\", \"Contact\");\n  const logoText = createLogoTextDiv();\n  addHoverEffect(contact);\n  makeClickable(contact, () => {\n    logoText.style.display = \"none\";\n    productImages.style.display = \"none\";\n    console.log(\"Contact clicked\");\n  });\n  return contact;\n}\n\nfunction createBookingDiv() {\n  const booking = newDiv(\"booking\", \"Book A Table\");\n  makeClickable(booking, () => {\n    console.log(\"Booking clicked\");\n  });\n  booking.style.backgroundColor = \"black\";\n  booking.style.padding = \"10px\";\n  booking.style.color = \"green\";\n  booking.addEventListener(\"mouseover\", () => {\n    booking.style.backgroundColor = \"green\";\n    booking.style.color = \"white\";\n    booking.style.outline = \"2px solid black\";\n  });\n  booking.addEventListener(\"mouseout\", () => {\n    booking.style.backgroundColor = \"black\";\n    booking.style.color = \"green\";\n    booking.style.outline = \"none\";\n  });\n  return booking;\n}\n\nfunction createHeaderLogoTextDiv() {\n  const headerLogoTextDiv = newDiv(\"headerLogoText\", \"GREENBURGER\")\n  // can change to flex to make it appear\n  headerLogoTextDiv.style.display = \"none\";\n  headerLogoTextDiv.style.flexDirection = \"row\";\n  headerLogoTextDiv.style.justifyContent = \"center\"\n  headerLogoTextDiv.style.alignItems = \"center\";\n  headerLogoTextDiv.style.fontSize = \"30px\";\n  headerLogoTextDiv.style.color = \"black\";\n  console.log(\"Header logoTextDiv Created\");\n  return headerLogoTextDiv\n}\n\n\nfunction createHeaderDivs() {\n  const leftDiv = newDiv(\"left\");\n  leftDiv.style.display = \"flex\";\n  leftDiv.style.flexDirection = \"row\";\n  leftDiv.style.justifyContent = \"space-between\";\n  // leftDiv.style.backgroundColor = \"red\";\n  leftDiv.style.gap = \"20px\";\n\n  const rightDiv = newDiv(\"right\");\n  rightDiv.style.display = \"flex\";\n  rightDiv.style.flexDirection = \"row\";\n  rightDiv.style.justifyContent = \"center\";\n\n  return { leftDiv, rightDiv };\n}\n\nfunction createHeaderDivsWithLogoText() {\n  const leftDivWithLogoText = newDiv(\"left\");\n  leftDivWithLogoText.style.display = \"flex\";\n  leftDivWithLogoText.style.flexDirection = \"row\";\n  leftDivWithLogoText.style.justifyContent = \"space-between\";\n  leftDivWithLogoText.style.alignItems = \"center\";\n  leftDivWithLogoText.style.alignContent = \"center\";\n  leftDivWithLogoText.style.gap = \"25px\";\n  leftDivWithLogoText.style.flex = \"0 1 auto\";\n  // leftDivWithLogoText.style.backgroundColor = \"red\";\n  const rightDivWithLogoText = newDiv(\"right\");\n  rightDivWithLogoText.style.display = \"flex\";\n  rightDivWithLogoText.style.flexDirection = \"row\";\n  rightDivWithLogoText.style.justifyContent = \"center\";\n  rightDivWithLogoText.style.flex = \"0 1 auto\";\n  // rightDivWithLogoText.style.backgroundColor = \"red\";\n  return { leftDivWithLogoText, rightDivWithLogoText };\n}\nfunction swapToHeaderWithLogoText(clickedDiv) {\n  // Check if the clickedDiv argument is provided and log an error if not\n  if (!clickedDiv) {\n    console.error(\"No div provided to swapToHeaderWithLogoText\");\n    return;\n  }\n  //Get existing div for the header from the DOM\n  const existingHeader = document.getElementById(\"header\");\n  if (!existingHeader) {\n    console.error(\"Header element not found\");\n    return;\n  }\n\n  // Clear the existing content of the header\n  while (existingHeader.firstChild) {\n    existingHeader.removeChild(existingHeader.firstChild);\n  }\n\n  // Create the necessary divs for the header\n  const { leftDivWithLogoText, rightDivWithLogoText } =\n    createHeaderDivsWithLogoText();\n  const logoText = createLogoTextDiv();\n  logoText.style.fontSize = '50px';\n  logoText.style.display = 'flex';\n  logoText.style.alignItems = 'center';\n  logoText.style.alignContent = 'center';\n\n\n  // Append the left div, logo text, and right div to the existing header\n  existingHeader.appendChild(leftDivWithLogoText);\n  existingHeader.appendChild(logoText);\n  existingHeader.appendChild(rightDivWithLogoText);\n}\nfunction replaceHeader(newHeader) {\n  let existingHeader = document.getElementById(\"currentHeaderId\");\n  if (existingHeader && newHeader) {\n    existingHeader.parentNode.replaceChild(newHeader, existingHeader);\n  }\n\n  // Header with logo Setup\n  headerWithLogoText = newDiv(\"header\");\n  headerWithLogoText.style.height = \"60px\";\n  headerWithLogoText.style.display = \"flex\";\n  headerWithLogoText.style.flexDirection = \"row\";\n  headerWithLogoText.style.justifyContent = \"space-between\";\n  headerWithLogoText.style.alignItems = \"center\";\n  headerWithLogoText.style.flexGrow = \"0\";\n  headerWithLogoText.style.flexShrink = \"1\";\n  headerWithLogoText.style.flexBasis = \"auto\";\n  // headerWithLogoText.style.backgroundColor = \"blue\";\n  headerWithLogoText.style.paddingLeft = \"90px\";\n  headerWithLogoText.style.paddingRight = \"85px\";\n  console.log(\"headerWithLogoText created\");\n  return headerWithLogoText;\n}\n// Event Handling Features\n\nfunction handleMenuContent() {\n  document.getElementById(\"menuContent\").style.display = \"block\";\n  document.getElementById(\"addressContent\").style.display = \"none\";\n  document.getElementById(\"contactContent\").style.display = \"none\";\n  console.log(\"Menu Content Handled\");\n}\n\nfunction handleAddressContent() {\n  document.getElementById(\"menuContent\").style.display = \"none\";\n  document.getElementById(\"addressContent\").style.display = \"block\";\n  document.getElementById(\"contactContent\").style.display = \"none\";\n  console.log(\"Address Content Handled\");\n}\n\nfunction handleContactContent() {\n  document.getElementById(\"menuContent\").style.display = \"none\";\n  document.getElementById(\"addressContent\").style.display = \"none\";\n  document.getElementById(\"contactContent\").style.display = \"block\";\n  console.log(\"Contact Content Handled\");\n}\nfunction setupHeader() {\n  console.log(\"setupHeader: Creating Header\");\n  let existingHeader = document.getElementById(\"header\");\n  if (existingHeader) {\n    return existingHeader;\n  }\n  const header = newDiv(\"header\");\n  header.id = \"header\";\n  header.style.height = \"60px\";\n  header.style.display = \"flex\";\n  header.style.flexDirection = \"row\";\n  header.style.justifyContent = \"space-between\";\n  header.style.width = \"150px\";\n  header.style.alignItems = \"center\";\n  header.style.paddingBlockStart = \"2%\";\n  header.style.paddingBlockEnd = \"2%\";\n  return header;\n}\nfunction appendChildFunction(parentElement, childElement) {\n  // example: appendChildFunction(contentDiv, header);\n  if (parentElement && childElement) {\n    // log the appending order because its so annoying to debug\n    console.log(\n      `appendChildFunction: Appending ${childElement.id || \"an element\"} to ${\n        parentElement.id || \"a parent\"\n      }`\n    );\n    parentElement.appendChild(childElement);\n  }\n}\n// TODO: I've tried to make the divider always be the same width as the logo. But selecting new tabs breaks it. This seems convoluted. There must be a simpler way.\n\nfunction createDivider() {\n  const logoText = createLogoTextDiv();\n  const divider = newDiv(\"divider\");\n  divider.style.height = \"10px\";\n\n  // Calculate the width of the divider based on the length of the logo text\n  const logoTextContentLength = logoText.textContent.length;\n  const estimatedCharacterWidth = 101; //pixels\n  const estimatedDividerWidth = estimatedCharacterWidth * logoTextContentLength;\n\n  divider.style.width = estimatedDividerWidth + \"px\";\n  divider.style.backgroundColor = \"black\";\n  divider.style.marginLeft = \"auto\";\n  divider.style.marginRight = \"auto\";\n  divider.style.boxSizing = \"border-box\";\n\n  // Align the header width with the divider width\n  const header = document.getElementById(\"header\");\n  if (header) {\n    header.style.width = estimatedDividerWidth + \"px\";\n    header.style.boxSizing = \"border-box\";\n    header.style.margin = \"0 auto\";\n  }\n  console.log(\"Divider created\");\n  return divider;\n}\n\nfunction createWrapperDiv() {\n  const wrapperDiv = newDiv(\"menuWrapper\");\n  wrapperDiv.style.display = \"none\";\n  console.log(\"wrapperdiv created\");\n  return wrapperDiv;\n}\n// Helper functions\n\nfunction setGlobalStyles() {\n  // Global Styling of main page\n  document.documentElement.style.margin = \"0\";\n  document.documentElement.style.padding = \"0\";\n  document.documentElement.style.height = \"100%\";\n  document.documentElement.style.width = \"100%\";\n  document.body.style.margin = \"0\";\n  document.body.style.padding = \"0\";\n  document.body.style.height = \"100%\";\n  document.body.style.width = \"100%\";\n  // Say no to horizontal scrollbars!\n  document.body.style.overflowX = \"hidden\";\n  console.log(\"Global Styles Applied\");\n}\n\nfunction setupFooter() {\n  const footerDiv = newDiv(\"footerDiv\");\n  footerDiv.style.position = \"fixed\";\n  footerDiv.style.bottom = \"0\";\n  footerDiv.style.left = \"0\";\n  footerDiv.style.height = \"40px\";\n  footerDiv.style.width = \"100%\";\n  footerDiv.style.backgroundColor = \"black\";\n  return footerDiv;\n}\n\nfunction setupBackground(background) {\n  background.style.display = \"flex\";\n  background.style.position = \"absolute\";\n  background.style.top = \"0\";\n  background.style.left = \"0\";\n  background.style.width = \"100%\";\n  background.style.height = \"100%\";\n  background.style.zIndex = \"-1\";\n  console.log(\"setupBackground: Applied styling to background\");\n  return background;\n}\n\nfunction setupDivClickListeners(menuDiv, addressDiv, contactDiv, leftBackground,rightBackground) {\n  console.log(\"Setting up div click listeners\");\n  console.log(leftBackground);\n\n  if (menuDiv) {\n    menuDiv.addEventListener(\"click\", () => {\n      try {\n        console.log(\"menuDiv clicked\");\n\n        console.log(\"leftBackground element:\", leftBackground);\n        console.log(\"rightBackground element:\", rightBackground);\n\n        // remove contents of left and right background for the menu\n        leftBackground.innerHTML = \"\";\n        console.log(\"left background is now\", leftBackground);\n        rightBackground.innerHTML = \"\";\n        console.log(\"Right background is now\", rightBackground);\n\n        // Calling my functions to create content for the menu and image on the menu page\n        const menuContent = createMenuContent();\n        const foodImage = createFoodImage();\n\n        // Set display to flex to make them visible\n        menuContent.style.display = \"flex\";\n        foodImage.style.display = \"flex\";\n\n        // Append new content to left and right background divs\n        leftBackground.appendChild(menuContent);\n        rightBackground.appendChild(foodImage);\n        console.log(\"leftBackground:\", leftBackground);\n        console.log(\"rightBackground:\", rightBackground);\n\n        console.log(\"Checking access to centerDiv\");\n        const centerDiv = document.getElementById(\"centerDiv\");\n        if (!centerDiv) {\n          console.error(\"ERROR: centerDiv not found.\");\n          return;\n        }\n        console.log(\"centerDiv:\", centerDiv);\n\n        console.log(\"Checking access to contentDiv\");\n        const contentDiv = document.getElementById(\"content\");\n        if (!contentDiv) {\n          console.error(\"ERROR: contentDiv not found.\");\n          return;\n        }\n        console.log(\"contentDiv:\", contentDiv);\n\n        console.log(\"Checking access to logoText\");\n        const logoText = contentDiv.querySelector(\"#logo\");\n        if (!logoText) {\n          console.error(\"ERROR: logo not found within contentDiv.\");\n          return;\n        }\n        console.log(\"logo:\", logoText);\n\n        if (centerDiv.style.display === \"none\") {\n          centerDiv.style.display = \"flex\";\n          centerDiv.style.flexDirection = \"row\";\n          centerDiv.style.alignItems = \"center\";\n          centerDiv.style.justifyContent = \"center\";\n          centerDiv.style.fontSize = \"30px\";\n          centerDiv.style.color = \"black\";\n          // centerDiv.style.paddingTop = \"\";\n          // centerDiv.style.paddingBottom = \"\";\n          // centerDiv.style.margin = \"\";\n          console.log(\"Changing logoText display to 'none'\");\n          logoText.style.display = \"none\";\n        }\n      } catch (error) {\n        console.error(\"Error in click handler:\", error);\n      }\n    });\n  }\n\n  if (addressDiv) {\n    addressDiv.addEventListener(\"click\", () => {\n      console.log(\"addressDiv clicked\");\n      // Logic for addressDiv can be added here\n    });\n  }\n\n  if (contactDiv) {\n    contactDiv.addEventListener(\"click\", () => {\n      console.log(\"contactDiv clicked\");\n      // Logic for contactDiv can be added here\n    });\n  }\n}\n\nfunction loadMenu() {}\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  loadMenu();\n});\nlet logoText = null;\n\nfunction createLogoTextDiv() {\n  if (!logoText) {\n    logoText = newDiv(\"logo\", \"GREENBURGER\");\n    // I can set this display to none to make it not visible. \n    logoText.style.display = \"flex\";\n    logoText.style.flexDirection = \"row\";\n    logoText.style.justifyContent = \"center\";\n    logoText.style.alignItems = \"center\";\n    logoText.style.paddingTop = \"1%\";\n    logoText.style.paddingBottom = \"5%\";\n    logoText.style.fontSize = \"150px\";\n    logoText.style.margin = \"0 10px\";\n    console.log(\"logoText Created\");\n  }\n  return logoText;\n}\nfunction addHoverEffect(element) {\n  element.addEventListener(\"mouseover\", () => {\n    element.style.backgroundColor = \"white\";\n    // Add an outline for a highlight effect\n    element.style.outline = \"2px solid white\";\n    element.style.boxShadow = \"0px 0px 10px rgba(0,0,0,0.2)\";\n  });\n\n  element.addEventListener(\"mouseout\", () => {\n    element.style.backgroundColor = \"\";\n    element.style.outline = \"none\";\n    element.style.boxShadow = \"none\";\n  });\n}\n\nfunction newDiv(divId, content) {\n  // Create a new div\n  const div = document.createElement(\"div\");\n\n  // Sets the ID for the div class\n  if (divId) {\n    div.id = divId;\n  }\n  // What content do I want in the div?\n  if (content) {\n    div.textContent = content;\n  }\n  // Return the created div to be used elsewhere\n  return div;\n}\n// Content Creation Functions\n\nfunction createAddressContent() {\n  addressContent = newDiv(\"addressContent\");\n  addressContent.style.display = \"none\";\n  const addressText = document.createElement(\"p\");\n  addressText.textContent = \"123 Green St., Veggie Town\";\n  addressContent.appendChild(addressText);\n  return addressContent;\n}\n\nfunction createContactContent() {\n  contactContent = newDiv(\"contactContent\");\n  //Hide to start\n  contactContent.style.display = \"none\";\n  const contactText = document.createElement(\"p\");\n  contactText.textContent = \"Email: contact@greenburger.com\";\n  contactContent.appendChild(contactText);\n\n  return contactContent;\n}\n\nfunction createBurgerImage() {\n  console.log(\"Creating burgerImage\");\n  const burgerImage = document.createElement(\"img\");\n  burgerImage.src = \"greenburger.webp\";\n  burgerImage.alt = \"Image of a GreenBurger cheese burger\";\n  burgerImage.style.width = \"400px\";\n  burgerImage.style.height = \"400px\";\n  burgerImage.style.zIndex = \"1\";\n  burgerImage.style.position = \"relative\";\n  console.log(burgerImage);\n  return burgerImage;\n}\n\nfunction createSidesImage() {\n  console.log(\"Creating sides image\");\n  const sidesImage = document.createElement(\"img\");\n  sidesImage.src = \"sides.png\";\n  sidesImage.alt = \"Image of a GreenBurger side\";\n  sidesImage.style.width = \"400px\";\n  sidesImage.style.height = \"400px\";\n  sidesImage.style.zIndex = \"1\";\n  sidesImage.style.position = \"relative\";\n  return sidesImage;\n}\n\nfunction createBackgroundDivs() {\n  const leftBackground = newDiv(\"leftBackground\");\n  leftBackground.style.backgroundColor = \"green\";\n  leftBackground.style.width = \"50%\";\n  leftBackground.style.height = \"100vh\";\n  leftBackground.style.display = \"flex\";\n  leftBackground.style.justifyContent = \"center\";\n  leftBackground.style.alignItems = \"center\";\n\n  const rightBackground = newDiv(\"rightBackground\");\n  rightBackground.style.backgroundColor = \"white\";\n  rightBackground.style.width = \"50%\";\n  rightBackground.style.height = \"100vh\";\n  rightBackground.style.display = \"flex\";\n  rightBackground.style.justifyContent = \"center\";\n  rightBackground.style.alignItems = \"center\";\n\n  return { leftBackground, rightBackground };\n}\n\nfunction createFooterTextDiv() {\n  console.log(\"Creating Footer\");\n  const footerText = newDiv(\n    \"footerText\",\n    \"2024. GREENBURGER. ALL RIGHTS RESERVED.\"\n  );\n  footerText.style.display = \"flex\";\n  footerText.style.flexDirection = \"row\";\n  footerText.style.justifyContent = \"space-between\";\n  footerText.style.alignItems = \"center\";\n  footerText.style.padding = \"1%\";\n  footerText.style.fontSize = \"10px\";\n  footerText.style.color = \"grey\";\n\n  return footerText;\n}\n// Function to create and return the menu content div\n\nfunction createMenuContent() {\n  const menuContent = newDiv(\"menuContent\");\n  // Hidden at first\n  menuContent.style.display = \"none\";\n  menuContent.style.flexDirection = \"row\";\n  menuContent.style.alignItems = \"center\";\n  menuContent.style.justifyContent = \"center\";\n  menuContent.style.fontSize = \"30px\";\n  menuContent.style.color = \"black\";\n\n  // Add menu sections here\n  // Example: Adding the Burgers section\n  const burgersSection = newDiv(\"burgersSection\");\n  burgersSection.innerHTML = `<h2>Burgers</h2>\n        <p>The Avocado Dream - $12.50</p>\n        <p>The Vegan Delight - $13.00</p>\n        <p>The Truffle Shuffle - $15.00</p>`;\n  menuContent.appendChild(burgersSection);\n\n  const sidesSection = newDiv(\"sidesSection\");\n  sidesSection.innerHTML = `<h2>Sides</h2>\n        <p>Organic Sweet Potato Fries - $6.00</p>\n        <p>Kale Caesar Salad - $8.00</p>`;\n  menuContent.appendChild(sidesSection);\n\n  const drinksSection = newDiv(\"drinksSection\");\n  drinksSection.innerHTML = `<h2>Drinks</h2>\n        <p>Craft Root Beer - $4.00</p>\n        <p>Kombucha on Tap - $5.00</p>`;\n  menuContent.appendChild(drinksSection);\n\n  return menuContent;\n}\n\nfunction createFoodImage() {\n  const menuFoodImage = newDiv(\"menuFoodImage\");\n  menuFoodImage.style.display = \"none\";\n  menuFoodImage.style.flexDirection = \"row\";\n  menuFoodImage.style.alignItems = \"center\";\n  menuFoodImage.style.justifyContent = \"center\";\n\n\n  const menuFoodDisplayImage = document.createElement(\"img\");\n  menuFoodDisplayImage.src = \"menuBurgersImage.png\";\n  menuFoodDisplayImage.alt =\n    \"Image of a spread of items on the GREENBURGER menu\";\n  menuFoodDisplayImage.style.width = \"400px\";\n  menuFoodDisplayImage.style.height = \"400px\";\n\n  menuFoodImage.appendChild(menuFoodDisplayImage);\n\n  return menuFoodImage;\n}\nfunction makeClickable(element, onClickFunction) {\n  // Change the cursor to indicate clickable\n  element.style.cursor = \"pointer\";\n  element.addEventListener(\"click\", onClickFunction);\n}\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadInitialContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadInitialContent.js */ \"./src/loadInitialContent.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_loadInitialContent_js__WEBPACK_IMPORTED_MODULE_0__.initialisePageContent)();\n});\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/loadInitialContent.js":
/*!***********************************!*\
  !*** ./src/loadInitialContent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialisePageContent: () => (/* binding */ initialisePageContent)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", (event) => {\n  initialisePageContent();\n});\n\n// Function to initialise page content\nfunction initialisePageContent(callback) {\n  console.log(\"Initialising burger grill...Heating up the fryers.\");\n  // Set global styles\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.setGlobalStyles)();\n\n  // Check if contentDiv already exists\n  let contentDiv = document.getElementById(\"content\");\n  if (!contentDiv) {\n    contentDiv = document.createElement(\"div\");\n    contentDiv.id = \"content\";\n    document.body.appendChild(contentDiv);\n  }\n\n  // Gotta declare these here outside of the if block so the setupDivClickListeners can use them\n  let menuDiv, addressDiv, contactDiv;\n\n  // Setup header with all necessary divs\n  let header = document.getElementById(\"header\");\n  if (!header) {\n    header = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.setupHeader)();\n    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.appendChildFunction)(contentDiv, header);\n\n    // Create and append divs within header\n    const { leftDiv, rightDiv } = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createHeaderDivs)();\n    const centerDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"centerDiv\",\"GREENBURGER\");\n    // Hiding it to start\n    centerDiv.style.display = \"none\";\n    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.appendChildFunction)(header, leftDiv);\n    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.appendChildFunction)(header, centerDiv);\n    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.appendChildFunction)(header, rightDiv);\n\n    // Append menu, address, and contact divs to leftDiv\n    menuDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createMenuDiv)();\n    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.makeClickable)(menuDiv);\n    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.appendChildFunction)(leftDiv, menuDiv);\n\n    addressDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createAddressDiv)();\n    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.appendChildFunction)(leftDiv, addressDiv);\n\n    contactDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createContactDiv)();\n    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.appendChildFunction)(leftDiv, contactDiv);\n\n    const headerLogoTextDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createHeaderLogoTextDiv)();\n    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.appendChildFunction)(centerDiv, headerLogoTextDiv);\n\n    // Append booking div to rightDiv\n    const bookingDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createBookingDiv)();\n    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.appendChildFunction)(rightDiv, bookingDiv);\n  }\n\n  const divider = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createDivider)();\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.appendChildFunction)(contentDiv, divider);\n\n  const logoText = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createLogoTextDiv)();\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.appendChildFunction)(contentDiv, logoText);\n\n  const background = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.setupBackground)((0,_functions__WEBPACK_IMPORTED_MODULE_0__.newDiv)(\"background\"));\n  const { leftBackground, rightBackground } = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createBackgroundDivs)();\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.appendChildFunction)(leftBackground, (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createBurgerImage)());\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.appendChildFunction)(rightBackground, (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createSidesImage)());\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.appendChildFunction)(background, leftBackground);\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.appendChildFunction)(background, rightBackground);\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.appendChildFunction)(contentDiv, background);\n\n  const footerDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.setupFooter)();\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.appendChildFunction)(contentDiv, footerDiv);\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.appendChildFunction)(footerDiv, (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createFooterTextDiv)());\n  console.log(leftBackground);\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.setupDivClickListeners)(menuDiv, addressDiv, contactDiv,leftBackground,rightBackground);\n  if (typeof callback === \"function\") {\n    callback();\n  }\n}\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/loadInitialContent.js?");

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