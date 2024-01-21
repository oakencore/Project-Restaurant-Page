// Import statements
import { newDiv } from "./divFunctions.js";
console.log(newDiv);
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
let header;
let leftDiv;
let rightDiv;
let menuDiv;
let addressDiv;
let contactDiv;
let bookingDiv;

// Function to initialize page content
export function initialisePageContent() {
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
  header = setupHeader();
  appendChildFunction(contentDiv, header);

  // Setup divs within header div
  ({ leftDiv, rightDiv } = createHeaderDivs());
  appendChildFunction(header, leftDiv);
  appendChildFunction(header, rightDiv);

  // Add menu, address, contact to leftDiv
  menuDiv = createMenuDiv();
  addressDiv = createAddressDiv();
  contactDiv = createContactDiv();
  appendChildFunction(leftDiv, menuDiv);
  appendChildFunction(leftDiv, addressDiv);
  appendChildFunction(leftDiv, contactDiv);

  // Add Booking to rightDiv
  bookingDiv = createBookingDiv();
  appendChildFunction(rightDiv, bookingDiv);

  // Add Footer, background, and product images
  const footer = createFooterTextDiv();
  const { leftBackground, rightBackground } = createBackgroundDivs();
  const productImages = createProductImagesDiv();
  appendChildFunction(contentDiv, footer);
  appendChildFunction(contentDiv, leftBackground);
  appendChildFunction(contentDiv, rightBackground);
  appendChildFunction(contentDiv, productImages);
}
