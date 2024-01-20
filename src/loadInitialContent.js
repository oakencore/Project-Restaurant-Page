// Import statements
import { newDiv } from "./divFunctions.js";
import { addHoverEffect } from "./hoverFunction.js";
import { makeClickable } from "./clickable.js";

// Global Variables
let headerWithLogoText;
let contentDiv;

// DOM content loaded event handler
document.addEventListener("DOMContentLoaded", () => {
  loadInitialContent();
  addClickEventListeners();
  // Simulated click
  // simulateInitialClick();
});

// Content Creation Functions
function createAddressContent() {
  const addressContent = newDiv("addressContent");
  addressContent.style.display = "none";
  const addressText = document.createElement("p");
  addressText.textContent = "123 Green St., Veggie Town";
  addressContent.appendChild(addressText);
  return addressContent;
}

function createContactContent() {
  const contactContent = newDiv("contactContent");
  //Hide to start
  contactContent.style.display = "none";
  const contactText = document.createElement("p");
  contactText.textContent = "Email: contact@greenburger.com";
  contactContent.appendChild(contactText);

  return contactContent;
}

function createProductImagesDiv() {
  const productImages = newDiv("productImages");
  productImages.style.display = "flex";
  productImages.style.flexDirection = "row";
  productImages.style.justifyContent = "space-around";
  productImages.style.alignItems = "center";

  const burgerImage = document.createElement("img");
  burgerImage.src = "greenburger.webp";
  burgerImage.alt = "Image of a GreenBurger cheese burger";
  burgerImage.style.width = "400px";
  burgerImage.style.height = "400px";
  productImages.appendChild(burgerImage);

  const sidesImage = document.createElement("img");
  sidesImage.src = "sides.png";
  sidesImage.alt = "Image of a GreenBurger cheese burger";
  sidesImage.style.width = "400px";
  sidesImage.style.height = "400px";
  productImages.appendChild(sidesImage);

  return productImages;
}

function createBackgroundDivs() {
  const leftBackground = newDiv("leftBackground");
  leftBackground.style.backgroundColor = "green";
  leftBackground.style.width = "50%";
  leftBackground.style.height = "100vh";

  const rightBackground = newDiv("rightBackground");

  return { leftBackground, rightBackground };
}

function createFooterTextDiv() {
  const footerText = newDiv(
    "footerText",
    "2024. GREENBURGER. ALL RIGHTS RESERVED."
  );
  footerText.style.display = "flex";
  footerText.style.flexDirection = "row";
  footerText.style.justifyContent = "space-between";
  footerText.style.alignItems = "center";
  footerText.style.padding = "1%";
  footerText.style.fontSize = "10px";
  footerText.style.color = "grey";

  return footerText;
}
// Helper functions *---------------------------HELPER FUNCTIONS--------------------------------------*

function appendChildFunction(parentElement, childElement) {
  // example: appendChildFunction(contentDiv, header);
  if (parentElement && childElement) {
    // log the appending order because its so annoying to debug
    console.log(
      `Appending ${childElement.id || "an element"} to ${
        parentElement.id || "a parent"
      }`
    );
    parentElement.appendChild(childElement);
  }
}

// TODO: Might need to add the swap function here?
function setupHeaderWithLogoText(contentDiv) {
  // Header with logo Setup
  const headerWithLogoText = newDiv("header");
  headerWithLogoText.style.height = "60px";
  headerWithLogoText.style.display = "flex";
  headerWithLogoText.style.flexDirection = "row";
  headerWithLogoText.style.justifyContent = "space-between";
  headerWithLogoText.style.alignItems = "center";
  headerWithLogoText.style.flexGrow = "0";
  headerWithLogoText.style.flexShrink = "1";
  headerWithLogoText.style.flexBasis = "auto";
  // headerWithLogoText.style.backgroundColor = "blue";
  headerWithLogoText.style.paddingLeft = "90px";
  headerWithLogoText.style.paddingRight = "85px";

  return headerWithLogoText;
}

// TODO: I've tried to make the divider always be the same width as the logo. But selecting new tabs breaks it. This seems convoluted. There must be a simpler way.
function createDivider(logoText) {
  const divider = newDiv("divider");
  divider.style.height = "10px";

  // Calculate the width of the divider based on the length of the logo text
  const logoTextContentLength = logoText.textContent.length;
  const estimatedCharacterWidth = 101; //pixels
  const estimatedDividerWidth = estimatedCharacterWidth * logoTextContentLength;

  divider.style.width = estimatedDividerWidth + "px";
  divider.style.backgroundColor = "black";
  divider.style.marginLeft = "auto";
  divider.style.marginRight = "auto";
  divider.style.boxSizing = "border-box";

  // Align the header width with the divider width
  const header = document.getElementById("header");
  if (header) {
    header.style.width = estimatedDividerWidth + "px";
    header.style.boxSizing = "border-box";
    header.style.margin = "0 auto";
  }

  return divider;
}

// Function to create and return the menu content div
function createMenuContent() {
  const menuContent = newDiv("menuContent");
  // Hidden at first
  menuContent.style.display = "none";

  // Add menu sections here
  // Example: Adding the Burgers section
  const burgersSection = newDiv("burgersSection");
  burgersSection.innerHTML = `<h2>Burgers</h2>
      <p>The Avocado Dream - $12.50</p>
      <p>The Vegan Delight - $13.00</p>
      <p>The Truffle Shuffle - $15.00</p>`;
  menuContent.appendChild(burgersSection);

  const sidesSection = newDiv("sidesSection");
  sidesSection.innerHTML = `<h2>Sides</h2>
      <p>Organic Sweet Potato Fries - $6.00</p>
      <p>Kale Caesar Salad - $8.00</p>`;
  menuContent.appendChild(sidesSection);

  const drinksSection = newDiv("drinksSection");
  drinksSection.innerHTML = `<h2>Drinks</h2>
      <p>Craft Root Beer - $4.00</p>
      <p>Kombucha on Tap - $5.00</p>`;
  menuContent.appendChild(drinksSection);

  return menuContent;
}

function createFoodImage() {
  const menuFoodImage = newDiv("menuFoodImage");
  menuFoodImage.style.display = "none";

  const menuFoodDisplayImage = document.createElement("img");
  menuFoodDisplayImage.src = "menuBurgersImage.png";
  menuFoodDisplayImage.alt =
    "Image of a spread of items on the GREENBURGER menu";
  menuFoodDisplayImage.style.width = "400px";
  menuFoodDisplayImage.style.height = "400px";

  menuFoodImage.appendChild(menuFoodDisplayImage);

  return menuFoodImage;
}

function createWrapperDiv() {
  const wrapperDiv = newDiv("menuWrapper");
  wrapperDiv.style.display = "none";
  return wrapperDiv;
}

// Event Handling Features
function handleMenuContent() {
  document.getElementById("menuContent").style.display = "block";
  document.getElementById("addressContent").style.display = "none";
  document.getElementById("contactContent").style.display = "none";
}

function handleAddressContent() {
  document.getElementById("menuContent").style.display = "none";
  document.getElementById("addressContent").style.display = "block";
  document.getElementById("contactContent").style.display = "none";
}

function handleContactContent() {
  document.getElementById("menuContent").style.display = "none";
  document.getElementById("addressContent").style.display = "none";
  document.getElementById("contactContent").style.display = "block";
}

function swapHeader(newHeader) {
  const contentDiv = document.getElementById("content");
  const headerWithLogoText = document.getElementById("headerWithLogoText");
  const originalHeader = document.getElementById("header");

  if (!contentDiv.contains(headerWithLogoText)) {
    contentDiv.replaceChild(headerWithLogoText, originalHeader);
  }
}

// COntent Loading function
export function loadInitialContent() {
  // Check if the header already exists
  if (document.getElementById("header")) return;

  setGlobalStyles();

  // Get the main content div
  const contentDiv = document.getElementById("content");

  // Header and Logotext
  setupHeader(contentDiv);
  //Footer
  setupFooter(contentDiv);
  // Background
  setupBackground(contentDiv);

  // Add content for address and contact tabs
  const addressContent = createAddressContent();
  appendChildFunction(contentDiv, addressContent);
  const contactContent = createContactContent();
  appendChildFunction(contentDiv, contactContent);

  displayInitialContent();
}
// TODO
function displayInitialContent() {
  // Check if the header exists
  if (document.getElementById("header")) return;

  setGlobalStyles();

  // Get main content div
  const contentDiv = document.getElementById("content");
  const header = setupHeaderWithLogoText(contentDiv);
  const footer = setupFooter(contentDiv);
  const background = setupBackground(contentDiv);
  const productImages = createProductImagesDiv();
  appendChildFunction(contentDiv, productImages);
}

// Helper functions
function setGlobalStyles() {
  // Global Styling of main page
  document.documentElement.style.margin = "0";
  document.documentElement.style.padding = "0";
  document.documentElement.style.height = "100%";
  document.documentElement.style.width = "100%";
  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.height = "100%";
  document.body.style.width = "100%";
  // Say no to horizontal scrollbars!
  document.body.style.overflowX = "hidden";
}

function setupHeader(contentDiv) {
  const header = newDiv("header");
  header.style.height = "60px";
  header.style.display = "flex";
  header.style.flexDirection = "row";
  header.style.justifyContent = "space-between";
  header.style.width = "150px";
  header.style.alignItems = "center";
  header.style.paddingBlockStart = "2%";
  header.style.paddingBlockEnd = "2%";
  appendChildFunction(contentDiv, header);
  let originalHeader = header;
}

function setupFooter(contentDiv) {
  const footer = document.createElement("footer");
  footer.style.position = "fixed";
  footer.style.bottom = "0";
  footer.style.left = "0";
  footer.style.height = "40px";
  footer.style.width = "100%";
  footer.style.backgroundColor = "black";
  appendChildFunction(contentDiv, footer);
}

function setupBackground(contentDiv) {
  const background = newDiv("background");
  background.style.display = "flex";
  background.style.position = "absolute";
  background.style.top = "0";
  background.style.left = "0";
  background.style.width = "100%";
  background.style.height = "100%";
  background.style.zIndex = "-1";
  appendChildFunction(contentDiv, background);
}

function appendChildFunction(parent, child) {
  if (parent && child) {
    parent.appendChild(child);
  }
}

function addClickEventListeners() {
  document.getElementById("menu").addEventListener("click", handleMenuContent);
  document
    .getElementById("address")
    .addEventListener("click", handleAddressContent);
  document
    .getElementById("contact")
    .addEventListener("click", handleContactContent);
}

function createHeaderDivsWithLogoText() {
  const leftDivWithLogoText = newDiv("left");
  leftDivWithLogoText.style.display = "flex";
  leftDivWithLogoText.style.flexDirection = "row";
  leftDivWithLogoText.style.justifyContent = "space-between";
  leftDivWithLogoText.style.alignItems = "center";
  leftDivWithLogoText.style.alignContent = "center";
  leftDivWithLogoText.style.gap = "25px";
  leftDivWithLogoText.style.flex = "0 1 auto";
  // leftDivWithLogoText.style.backgroundColor = "red";

  const rightDivWithLogoText = newDiv("right");
  rightDivWithLogoText.style.display = "flex";
  rightDivWithLogoText.style.flexDirection = "row";
  rightDivWithLogoText.style.justifyContent = "center";
  rightDivWithLogoText.style.flex = "0 1 auto";
  // rightDivWithLogoText.style.backgroundColor = "red";

  return { leftDivWithLogoText, rightDivWithLogoText };
}

appendChildFunction(headerWithLogoText, leftDivWithLogoText);
appendChildFunction(headerWithLogoText, rightDivWithLogoText);
appendChildFunction(contentDiv, addressContent);
appendChildFunction(contentDiv, contactContent);

// Function to swap headers
function swapToHeaderWithLogoText() {
  if (!contentDiv.contains(headerWithLogoText)) {
    swapHeader(headerWithLogoText);
  }
}
// Function to handle menu content visibility
function handleMenuContent() {
  swapToHeaderWithLogoText();
  // Show menu content and hide others
  document.getElementById("menuContent").style.display = "block";
  document.getElementById("addressContent").style.display = "none";
  document.getElementById("contactContent").style.display = "none";
}
// Similar functions for address and contact
function handleAddressContent() {
  swapToHeaderWithLogoText();
  // Show address content and hide others
  document.getElementById("menuContent").style.display = "none";
  document.getElementById("addressContent").style.display = "block";
  document.getElementById("contactContent").style.display = "none";
}

function handleContactContent() {
  swapToHeaderWithLogoText();
  // Show contact content and hide others
  document.getElementById("menuContent").style.display = "none";
  document.getElementById("addressContent").style.display = "none";
  document.getElementById("contactContent").style.display = "block";
}

// Attaching click event listeners
document.getElementById("menu").addEventListener("click", handleMenuContent);
document
  .getElementById("address")
  .addEventListener("click", handleAddressContent);
document
  .getElementById("contact")
  .addEventListener("click", handleContactContent);

function swapHeader(newHeader) {
  if (contentDiv.contains(originalHeader)) {
    // Transfer all children from leftDiv to leftDivWithLogoText
    while (leftDiv.firstChild) {
      leftDivWithLogoText.appendChild(leftDiv.firstChild);
    }

    // Transfer all children from rightDiv to rightDivWithLogoText
    while (rightDiv.firstChild) {
      rightDivWithLogoText.appendChild(rightDiv.firstChild);
    }

    // Place logoText between leftDivWithLogoText and rightDivWithLogoText
    newHeader.appendChild(leftDivWithLogoText);
    newHeader.appendChild(logoText); // logoText comes after leftDivWithLogoText
    newHeader.appendChild(rightDivWithLogoText);

    // Replace originalHeader with the new headerWithLogoText
    contentDiv.replaceChild(newHeader, originalHeader);
  } else if (contentDiv.contains(headerWithLogoText)) {
    // Swap back to the original header layout
    // Transfer all children from leftDivWithLogoText to leftDiv
    while (leftDivWithLogoText.firstChild) {
      leftDiv.appendChild(leftDivWithLogoText.firstChild);
    }

    // Move logoText back to its original position
    contentDiv.insertBefore(logoText, divider); // Assuming logoText originally comes before the divider

    // Transfer all children from rightDivWithLogoText to rightDiv
    while (rightDivWithLogoText.firstChild) {
      rightDiv.appendChild(rightDivWithLogoText.firstChild);
    }

    // Replace headerWithLogoText with the original header
    contentDiv.replaceChild(originalHeader, headerWithLogoText);
  }
}

function createHeaderDivs() {
  const leftDiv = newDiv("left");
  leftDiv.style.display = "flex";
  leftDiv.style.flexDirection = "row";
  leftDiv.style.justifyContent = "space-between";
  // leftDiv.style.backgroundColor = "red";
  leftDiv.style.gap = "20px";

  const rightDiv = newDiv("right");
  rightDiv.style.display = "flex";
  rightDiv.style.flexDirection = "row";
  rightDiv.style.justifyContent = "center";

  return { leftDiv, rightDiv };
}

function createMenuDiv() {
  const menu = newDiv("menu", "Menu");
  addHoverEffect(menu);
  makeClickable(menu, () => {
    console.log("Menu clicked");
    productImages.style.display = "none";
    logoText.style.fontSize = "50px";
    logoText.style.padding = "0";
    logoText.style.margin = "0";
    logoText.style.alignSelf = "center";

    appendChildFunction(headerWithLogoText, logoText);
    swapHeader(headerWithLogoText);

    let wrapperDiv = document.getElementById("menuWrapper");

    if (!wrapperDiv) {
      wrapperDiv = createWrapperDiv();
      contentDiv.appendChild(wrapperDiv);

      let menuContent = createMenuContent();
      wrapperDiv.appendChild(menuContent);

      let menuFoodImage = createFoodImage();
      wrapperDiv.appendChild(menuFoodImage);
    }

    if (wrapperDiv.style.display === "none" || !wrapperDiv.style.display) {
      wrapperDiv.style.display = "flex";
      wrapperDiv.style.justifyContent = "space-between";
      wrapperDiv.style.alignItems = "center";

      wrapperDiv.style.paddingLeft = "8%";
      wrapperDiv.style.paddingRight = "8%";
      wrapperDiv.style.marginTop = "8vh";
      document.getElementById("menuContent").style.display = "block";
      document.getElementById("menuFoodImage").style.display = "block";
    } else {
      wrapperDiv.style.display = "none";
      document.getElementById("menuContent").style.display = "none";
      document.getElementById("menuFoodImage").style.display = "none";
    }
  });

  return menu;
}

function createAddressDiv() {
  const address = newDiv("address", "Visit Us");
  addHoverEffect(address);
  makeClickable(address, () => {
    logoText.style.display = "none";
    productImages.style.display = "none";
    console.log("Address clicked");
  });
  return address;
}

function createContactDiv() {
  const contact = newDiv("contact", "Contact");
  addHoverEffect(contact);
  makeClickable(contact, () => {
    logoText.style.display = "none";
    productImages.style.display = "none";
    console.log("Contact clicked");
  });
  return contact;
}

function createBookingDiv() {
  const booking = newDiv("booking", "Book A Table");
  makeClickable(booking, () => {
    console.log("Booking clicked");
  });
  booking.style.backgroundColor = "black";
  booking.style.padding = "10px";
  booking.style.color = "green";
  booking.addEventListener("mouseover", () => {
    booking.style.backgroundColor = "green";
    booking.style.color = "white";
    booking.style.outline = "2px solid black";
  });
  booking.addEventListener("mouseout", () => {
    booking.style.backgroundColor = "black";
    booking.style.color = "green";
    booking.style.outline = "none";
  });
  return booking;
}

function createLogoTextDiv() {
  const logoText = newDiv("logo", "GREENBURGER");
  logoText.style.display = "flex";
  logoText.style.flexDirection = "row";
  logoText.style.justifyContent = "center";
  logoText.style.alignItems = "center";
  logoText.style.paddingTop = "1%";
  logoText.style.paddingBottom = "5%";
  logoText.style.fontSize = "150px";
  logoText.style.margin = "0 10px";
  return logoText;
}

loadInitialContent();
