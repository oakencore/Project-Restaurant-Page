// Import statements
import { newDiv } from "./divFunctions.js";
import { addHoverEffect } from "./hoverFunction.js";
import { makeClickable } from "./clickable.js";
import {
  createAddressContent,
  createContactContent,
  createProductImagesDiv,
  createBackgroundDivs,
  createFooterTextDiv,
  createFoodImage,
  createMenuContent,
} from "./contentCreationFunctions.js";
import { appendChildFunction } from "./appendChildFunction.js";
import {
  setupHeaderWithLogoText,
  createDivider,
  createWrapperDiv,
  handleAddressContent,
  handleContactContent,
  handleMenuContent,
  setGlobalStyles,
  setupHeader,
  setupFooter,
  setupBackground,
} from "./helperFunctions.js";
import { addClickEventListeners } from "./eventlisteners.js";
import {
  createHeaderDivs,
  createHeaderDivsWithLogoText,
  swapToHeaderWithLogoText,
  swapHeader,
} from "./headers.js";
import {
  createMenuDiv,
  createAddressDiv,
  createContactDiv,
  createBookingDiv,
} from "./headerElements.js";
import { createLogoTextDiv } from "./logo.js";

// Global Variables
let contentDiv;
let headerWithLogoText;
let leftDivWithLogoText;
let rightDivWithLogoText;
let addressContent;
let contactContent;

// DOM content loaded event handler
document.addEventListener("DOMContentLoaded", () => {
  initialisePageContent();
  addClickEventListeners();
  // Simulated click
  // simulateInitialClick();
});

// Helper functions *---------------------------HELPER FUNCTIONS--------------------------------------*

function initialisePageContent() {
  // Check if the header already exists to prevent duplication
  if (document.getElementById("header")) return;

  // Apply global styles
  setGlobalStyles();

  // Create main content div if it doesn't exist
  contentDiv =
    document.getElementById("content") || document.createElement("div");
  contentDiv.id = "content";
  if (!document.body.contains(contentDiv)) {
    document.body.appendChild(contentDiv);
  }

  // Setup Header
  const header = setupHeader();
  appendChildFunction(contentDiv, header);

  // Setup divs within header div
  const { leftDiv, rightDiv } = createHeaderDivs();
  appendChildFunction(header, leftDiv);
  appendChildFunction(header, rightDiv);

  // Add menu, address and contact to leftDiv
  const menuDiv = createMenuDiv();
  const addressDiv = createAddressDiv();
  const contactDiv = createContactDiv();
  appendChildFunction(leftDiv, menuDiv);
  appendChildFunction(leftDiv, addressDiv);
  appendChildFunction(leftDiv, contactDiv);

  // Add Booking to rightDiv
  const bookingDiv = createBookingDiv();
  appendChildFunction(rightDiv, bookingDiv);

  // Add Footer, background and product images
  const footer = createFooterTextDiv();
  const { leftBackground, rightBackground } = createBackgroundDivs();
  const productImages = createProductImagesDiv();
  appendChildFunction(contentDiv, leftBackground);
  appendChildFunction(contentDiv, rightBackground);
  appendChildFunction(contentDiv, footer);
  appendChildFunction(contentDiv, productImages);
}

// Call initialisePageContent function on DOMContentLoaded
document.addEventListener("DOMContentLoaded", initialisePageContent);

appendChildFunction(headerWithLogoText, leftDivWithLogoText);
appendChildFunction(headerWithLogoText, rightDivWithLogoText);
appendChildFunction(contentDiv, addressContent);
appendChildFunction(contentDiv, contactContent);

// Attaching click event listeners
document.getElementById("menu").addEventListener("click", handleMenuContent);
document
  .getElementById("address")
  .addEventListener("click", handleAddressContent);
document
  .getElementById("contact")
  .addEventListener("click", handleContactContent);


