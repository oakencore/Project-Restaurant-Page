// Import statements
import {
  createProductImagesDiv,
  createBackgroundDivs,
  createFooterTextDiv,
  createBurgerImage,
  createSidesImage,
} from "./contentCreationFunctions.js";
import { appendChildFunction } from "./appendChildFunction.js";
import {
  createDivider,
  setGlobalStyles,
  setupBackground,
  setupFooter,
  setupHeader,
} from "./helperFunctions.js";
import { createHeaderDivs } from "./headers.js";
import {
  createMenuDiv,
  createAddressDiv,
  createContactDiv,
  createBookingDiv,
} from "./headerElements.js";
import { createLogoTextDiv } from "./logo.js";
import { newDiv } from "./divFunctions.js";

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

  // Create main content div if it doesn't exist
  try {
    console.log("Applying Global styles");
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

  // Setup Header. The function returns the header.
  header = setupHeader();
  appendChildFunction(contentDiv, header);

  // Setup divs within header div
  ({ leftDiv, rightDiv } = createHeaderDivs());
  appendChildFunction(header, leftDiv);
  appendChildFunction(header, rightDiv);

  // Add menu, address, contact to leftDiv.
  // The createMenuDiv function creates and returns a clickable and hoverable 'menu' div, which toggles the display of various elements like productImages, logoText, and menu content on the page, based on their existence and current state.
  menuDiv = createMenuDiv();
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

  const divider = createDivider();
  appendChildFunction(contentDiv, divider);

  //the createlogotextDiv function does not append to anything. It just returns the logotextdiv
  console.log("Creating logo text");
  const logoText = createLogoTextDiv();
  if (!logoText) {
    console.error("createLogoTextDiv returned null");
    throw new Error("createLogoTextDiv returned null");
  }
  appendChildFunction(contentDiv, logoText);
  // debugger;

  const background = newDiv("background");
  setupBackground(background);
  const { leftBackground, rightBackground } = createBackgroundDivs();

  const burgerImage = createBurgerImage();
  const sidesImage = createSidesImage();
  appendChildFunction(leftBackground, burgerImage);
  appendChildFunction(rightBackground, sidesImage);
  appendChildFunction(background, leftBackground);
  appendChildFunction(background, rightBackground);
  appendChildFunction(contentDiv, background);

  const footerDiv = setupFooter();
  const footerText = createFooterTextDiv();
  appendChildFunction(contentDiv, footerDiv);
  appendChildFunction(footerDiv, footerText);
}
