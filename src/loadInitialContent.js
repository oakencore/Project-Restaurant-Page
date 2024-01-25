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
  createDivider,
  createLogoTextDiv,
  setupBackground,
  newDiv,
  createBackgroundDivs,
  createBurgerImage,
  createSidesImage,
  setupFooter,
  createFooterTextDiv,
  createHeaderLogoTextDiv,
} from "./functions";

// Function to initialise page content
export function initialisePageContent(callback) {
  console.log("Initialising burger grill...Heating up the fryers...");
  // Set global styles
  setGlobalStyles();

  // Check if contentDiv already exists
  let contentDiv = document.getElementById("content");
  if (!contentDiv) {
    contentDiv = document.createElement("div");
    contentDiv.id = "content";
    document.body.appendChild(contentDiv);
  }

  // Gotta declare these here outside of the if block so the setupDivClickListeners can use them
  let menuDiv, addressDiv, contactDiv;

  // Setup header with all necessary divs
  let header = document.getElementById("header");
  if (!header) {
    header = setupHeader();
    appendChildFunction(contentDiv, header);

    // Create and append divs within header
    const { leftDiv, rightDiv } = createHeaderDivs();
    const centerDiv = newDiv("centerDiv", "GREENBURGER");
    // Hiding it to start
    centerDiv.style.display = "none";
    appendChildFunction(header, leftDiv);
    appendChildFunction(header, centerDiv);
    appendChildFunction(header, rightDiv);

    // Append menu, address, and contact divs to leftDiv
    menuDiv = createMenuDiv();
    makeClickable(menuDiv);
    appendChildFunction(leftDiv, menuDiv);

    addressDiv = createAddressDiv();
    appendChildFunction(leftDiv, addressDiv);

    contactDiv = createContactDiv();
    appendChildFunction(leftDiv, contactDiv);

    const headerLogoTextDiv = createHeaderLogoTextDiv();
    appendChildFunction(centerDiv, headerLogoTextDiv);

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

  if (typeof callback === "function") {
    callback();
  }
  return {menuDiv, addressDiv, contactDiv};
}
