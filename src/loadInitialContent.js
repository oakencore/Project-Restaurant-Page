// Import statements
import {
  createBackgroundDivs,
  createFooterTextDiv,
  createBurgerImage,
  createSidesImage,
  createMenuContent,
  createFoodImage,
} from "./contentCreationFunctions.js";
import { appendChildFunction } from "./appendChildFunction.js";
import {
  createDivider,
  setGlobalStyles,
  setupBackground,
  setupFooter,
  setupHeader,
  setupHeaderWithLogoText,
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

//Set up hidden divs for menu.
function getClickedMenuDiv() {
  return {
    greenBurgerMenu: createMenuContent(),
    greenBurgerMenuImage: createFoodImage(),
  };
}

function setupMenuClickListener() {
  const menuElement = document.getElementById("menu");
  if (!menuElement) {
    console.error("Menu element not found");
    return;
  }

  // Check if the event listener has already been added
  if (!menuElement.classList.contains("click-listener-added")) {
    menuElement.addEventListener("click", () => {
      const clickedMenuDiv = getClickedMenuDiv();
      console.log("Clicked Menu Div is this type:", clickedMenuDiv);
      setupHeaderWithLogoText(clickedMenuDiv);
    });

    menuElement.classList.add("click-listener-added");
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  initialisePageContent();
});

// Function to initialize page content
export function initialisePageContent() {
  console.log("Initialising burger grill...Heating up the fryers.");
  // Set global styles
  setGlobalStyles();

  // Check if contentDiv already exists
  let contentDiv = document.getElementById("content");
  if (!contentDiv) {
    contentDiv = document.createElement("div");
    contentDiv.id = "content";
    document.body.appendChild(contentDiv);
  }

  // Setup header with all necessary divs
  let header = document.getElementById("header");
  if (!header) {
    header = setupHeader();
    appendChildFunction(contentDiv, header);

    // Create and append divs within header
    const { leftDiv, rightDiv } = createHeaderDivs();
    appendChildFunction(header, leftDiv);
    appendChildFunction(header, rightDiv);

    // Append menu, address, and contact divs to leftDiv
    const menuDiv = createMenuDiv();
    appendChildFunction(leftDiv, menuDiv);
    const addressDiv = createAddressDiv();
    appendChildFunction(leftDiv, addressDiv);
    const contactDiv = createContactDiv();
    appendChildFunction(leftDiv, contactDiv);

    // Append booking div to rightDiv
    const bookingDiv = createBookingDiv();
    appendChildFunction(rightDiv, bookingDiv);
  }

  const divider = createDivider();
  appendChildFunction(contentDiv, divider);

  const logoText = createLogoTextDiv();
  appendChildFunction(contentDiv, logoText);

  const background = setupBackground(newDiv("background"));
  const { leftBackground, rightBackground } = createBackgroundDivs();
  appendChildFunction(leftBackground, createBurgerImage());
  appendChildFunction(rightBackground, createSidesImage());
  appendChildFunction(background, leftBackground);
  appendChildFunction(background, rightBackground);
  appendChildFunction(contentDiv, background);

  const footerDiv = setupFooter();
  appendChildFunction(contentDiv, footerDiv);
  appendChildFunction(footerDiv, createFooterTextDiv());

  setupMenuClickListener(getClickedMenuDiv());

}
