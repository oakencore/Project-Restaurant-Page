// Import statements
import { newDiv } from "./divFunctions.js";
import { addHoverEffect } from "./hoverFunction.js";
import { makeClickable } from "./clickable.js";
import { addClickEventListeners } from "./eventlisteners.js";
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

// Function to initialize page content
export function initialisePageContent() {
  console.log("Initialising burger grill...Heating up the fryers.");

  // Global Variables
  let contentDiv;
  let header;
  let leftDiv;
  let rightDiv;
  let menuDiv;
  let addressDiv;
  let contactDiv;
  let bookingDiv;

  // Apply global styles
  setGlobalStyles();

  // Create main content div if it doesn't exist
  try {
    console.log("Applying styles");
    setGlobalStyles();

    console.log("Getting contentDiv");
    contentDiv =
      document.getElementById("content") || document.createElement("div");

    console.log("Setting contentDiv.id");
    contentDiv.id = "content";

    console.log("Checking if contentDiv in document");
    if (!document.body.contains(contentDiv)) {
      console.log("Appending contentDiv to body");
      document.body.appendChild(contentDiv);
    }
  } catch (error) {
    console.error("Content div initialisation error:", error);
    throw error;
  }

  // Created product images first as they are needed in createMenuDiv later
  console.log("Creating product images");
  const productImages = createProductImagesDiv();

  if (!productImages) {
    console.error("createProductImagesDiv returned null");
    throw new Error("createProductImagesDiv returned null");
  }
  // debugger;

  console.log("Creating logo text");
  const logoText = createLogoTextDiv();
  if (!logoText) {
    console.error("createLogoTextDiv returned null");
    throw new Error("createLogoTextDiv returned null");
  }
  // debugger;

  // Setup Header
  header = setupHeader();
  appendChildFunction(contentDiv, header);

  // Setup divs within header div
  ({ leftDiv, rightDiv } = createHeaderDivs());
  appendChildFunction(header, leftDiv);
  appendChildFunction(header, rightDiv);

  // Add menu, address, contact to leftDiv
  menuDiv = createMenuDiv(productImages, logoText);
  if (!menuDiv) {
    throw new Error("createMenuDiv returned null");
  }
  addressDiv = createAddressDiv();
  if (!addressDiv) {
    throw new Error("createAddressDiv returned null");
  }
  contactDiv = createContactDiv();
  if (!contactDiv) {
    throw new Error("createContactDiv returned null!");
  }

  try {
    appendChildFunction(leftDiv, menuDiv);
  } catch (error) {
    console.error("Append child error leftdiv and menudiv:", error);
  }
  try {
    appendChildFunction(leftDiv, addressDiv);
  } catch (error) {
    console.error("Append child error leftdiv and addressdiv");
  }
  try {
    appendChildFunction(leftDiv, contactDiv);
  } catch (error) {
    console.error("Append child error leftdiv and contactDiv");
  }

  // Add Booking to rightDiv
  bookingDiv = createBookingDiv();
  if (!bookingDiv) {
    throw new Error("bookingDiv returned null!");
  }
  appendChildFunction(rightDiv, bookingDiv);
  if (appendChildFunction(rightDiv, bookingDiv) === null) {
    throw new Error("appendChildFunction rightDiv returned null");
  }

  // Add Footer, background, and product images
  const footer = createFooterTextDiv();
  const { leftBackground, rightBackground } = createBackgroundDivs();
  appendChildFunction(contentDiv, footer);
  appendChildFunction(contentDiv, leftBackground);
  appendChildFunction(contentDiv, rightBackground);
  appendChildFunction(contentDiv, productImages);
}
