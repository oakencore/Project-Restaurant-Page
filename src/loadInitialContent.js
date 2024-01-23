import {
  setGlobalStyles,
  setupHeader,
  appendChildFunction,
  createHeaderDivs,
  createMenuDiv,
  makeClickable,
  createAddressDiv,
  createContactDiv,
  createBookingDiv,
  setupDivClickListeners,
  createDivider,
  createLogoTextDiv,
  setupBackground,
  newDiv,
  createBackgroundDivs,
  createBurgerImage,
  createSidesImage,
  setupFooter,
  createFooterTextDiv,
} from "./functions";

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
    makeClickable(menuDiv);
    appendChildFunction(leftDiv, menuDiv);

    const addressDiv = createAddressDiv();
    appendChildFunction(leftDiv, addressDiv);
    const contactDiv = createContactDiv();
    appendChildFunction(leftDiv, contactDiv);

    // Append booking div to rightDiv
    const bookingDiv = createBookingDiv();
    appendChildFunction(rightDiv, bookingDiv);

    setupDivClickListeners(menuDiv, addressDiv, contactDiv);
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
}
