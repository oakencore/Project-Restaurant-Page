export function createMenuDiv() {
  const menu = newDiv("menu", "Menu");
  addHoverEffect(menu);
  console.log("Menu Div Created");
  return menu;
}

export function createAddressDiv() {
  const address = newDiv("address", "Visit Us");
  const logoText = createLogoTextDiv();
  addHoverEffect(address);
  makeClickable(address, () => {
    logoText.style.display = "none";
    console.log("Address clicked");
  });
  return address;
}

export function createContactDiv() {
  const contact = newDiv("contact", "Contact");
  const logoText = createLogoTextDiv();
  addHoverEffect(contact);
  makeClickable(contact, () => {
    logoText.style.display = "none";
    console.log("Contact clicked");
  });
  return contact;
}

export function createBookingDiv() {
  const booking = newDiv("booking", "Book A Table");

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

  makeClickable(booking, () => {
    console.log("Booking clicked");
  });

  booking.style.backgroundColor = "black";
  booking.style.padding = "10px";
  booking.style.color = "green";

  return booking;
}



export function createHeaderLogoTextDiv() {
  const headerLogoTextDiv = newDiv("headerLogoText", "GREENBURGER");
  // can change to flex to make it appear
  headerLogoTextDiv.style.display = "none";
  headerLogoTextDiv.style.flexDirection = "row";
  headerLogoTextDiv.style.justifyContent = "center";
  headerLogoTextDiv.style.alignItems = "center";
  headerLogoTextDiv.style.fontSize = "30px";
  headerLogoTextDiv.style.color = "black";
  console.log("Header logoTextDiv Created");
  return headerLogoTextDiv;
}

export function createHeaderDivs() {
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

  return {
    leftDiv,
    rightDiv,
  };
}

export function createHeaderDivsWithLogoText() {
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
  return {
    leftDivWithLogoText,
    rightDivWithLogoText,
  };
}

export function handleMenuContent() {
  document.getElementById("menuContent").style.display = "block";
  document.getElementById("addressContent").style.display = "none";
  document.getElementById("contactContent").style.display = "none";
  console.log("Menu Content Handled");
}

export function handleAddressContent() {
  document.getElementById("menuContent").style.display = "none";
  document.getElementById("addressContent").style.display = "block";
  document.getElementById("contactContent").style.display = "none";
  console.log("Address Content Handled");
}

export function handleContactContent() {
  document.getElementById("menuContent").style.display = "none";
  document.getElementById("addressContent").style.display = "none";
  document.getElementById("contactContent").style.display = "block";
  console.log("Contact Content Handled");
}
export function setupHeader() {
  console.log("setupHeader: Creating Header");
  let existingHeader = document.getElementById("header");
  if (existingHeader) {
    return existingHeader;
  }
  const header = newDiv("header");
  header.id = "header";
  header.style.height = "60px";
  header.style.display = "flex";
  header.style.flexDirection = "row";
  header.style.justifyContent = "space-between";
  header.style.width = "150px";
  header.style.alignItems = "center";
  header.style.paddingBlockStart = "2%";
  header.style.paddingBlockEnd = "2%";
  return header;
}
export function appendChildFunction(parentElement, childElement) {
  // example: appendChildFunction(contentDiv, header);
  if (parentElement && childElement) {
    // log the appending order because its so annoying to debug
    console.log(
      `appendChildFunction: Appending ${childElement.id || "an element"} to ${
        parentElement.id || "a parent"
      }`
    );
    parentElement.appendChild(childElement);
  }
}

export function createDivider() {
  const logoText = createLogoTextDiv();
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
  console.log("Divider created");
  return divider;
}

export function createWrapperDiv() {
  const wrapperDiv = newDiv("menuWrapper");
  wrapperDiv.style.display = "none";
  console.log("wrapperdiv created");
  return wrapperDiv;
}

export function setGlobalStyles() {
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
  console.log("Global Styles Applied");
}

export function setupFooter() {
  const footerDiv = newDiv("footerDiv");
  footerDiv.style.position = "fixed";
  footerDiv.style.bottom = "0";
  footerDiv.style.left = "0";
  footerDiv.style.height = "40px";
  footerDiv.style.width = "100%";
  footerDiv.style.backgroundColor = "black";
  return footerDiv;
}

export function setupBackground(background) {
  background.style.display = "flex";
  background.style.position = "absolute";
  background.style.top = "0";
  background.style.left = "0";
  background.style.width = "100%";
  background.style.height = "100%";
  background.style.zIndex = "-1";
  console.log("setupBackground: Applied styling to background");
  return background;
}

export function loadMenu() {}
document.addEventListener("DOMContentLoaded", () => {
  loadMenu();
});
let logoText = null;

export function createLogoTextDiv() {
  if (!logoText) {
    logoText = newDiv("logo", "GREENBURGER");
    // I can set this display to none to make it not visible.
    logoText.style.display = "flex";
    logoText.style.flexDirection = "row";
    logoText.style.justifyContent = "center";
    logoText.style.alignItems = "center";
    logoText.style.paddingTop = "1%";
    logoText.style.paddingBottom = "5%";
    logoText.style.fontSize = "150px";
    logoText.style.margin = "0 10px";
    console.log("logoText Created");
  }
  return logoText;
}
export function addHoverEffect(element) {
  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = "white";
    // Add an outline for a highlight effect
    element.style.outline = "2px solid white";
    element.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.2)";
  });

  element.addEventListener("mouseout", () => {
    element.style.backgroundColor = "";
    element.style.outline = "none";
    element.style.boxShadow = "none";
  });
}

export function newDiv(divId, content) {
  // Create new div
  const div = document.createElement("div");

  // Set ID for the div 
  if (divId) {
    div.id = divId;
  }
  // What content do I want in the div?
  if (content) {
    div.textContent = content;
  }
  // Return the created div to be used elsewhere
  return div;
}

export function createAddressContent() {
  addressContent = newDiv("addressContent");
  addressContent.style.display = "none";
  const addressText = document.createElement("p");
  addressText.textContent = "123 Green St., Veggie Town";
  addressContent.appendChild(addressText);
  return addressContent;
}

export function createContactContent() {
  contactContent = newDiv("contactContent");
  //Hide to start
  contactContent.style.display = "none";
  const contactText = document.createElement("p");
  contactText.textContent = "Email: contact@greenburger.com";
  contactContent.appendChild(contactText);

  return contactContent;
}

export function createBurgerImage() {
  console.log("Creating burgerImage");
  const burgerImage = document.createElement("img");
  burgerImage.style.display = "block";
  burgerImage.id = "burgerImage";
  burgerImage.src = "greenburger.webp";
  burgerImage.alt = "Image of a GreenBurger cheese burger";
  burgerImage.style.width = "400px";
  burgerImage.style.height = "400px";
  return burgerImage;
}

export function createSidesImage() {
  console.log("Creating sides image");
  const sidesImage = document.createElement("img");
  sidesImage.id = "sidesImage";
  sidesImage.src = "sides.png";
  sidesImage.alt = "Image of a GreenBurger side";
  sidesImage.style.width = "400px";
  sidesImage.style.height = "400px";
  return sidesImage;
}

export function createBackgroundDivs() {
  const leftBackground = newDiv("leftBackground");
  leftBackground.style.backgroundColor = "green";
  leftBackground.style.width = "50%";
  leftBackground.style.height = "100vh";
  leftBackground.style.display = "flex";
  leftBackground.style.justifyContent = "center";
  leftBackground.style.alignItems = "center";

  const rightBackground = newDiv("rightBackground");
  rightBackground.style.backgroundColor = "white";
  rightBackground.style.width = "50%";
  rightBackground.style.height = "100vh";
  rightBackground.style.display = "flex";
  rightBackground.style.justifyContent = "center";
  rightBackground.style.alignItems = "center";

  return {
    leftBackground,
    rightBackground,
  };
}

export function createFooterTextDiv() {
  console.log("Creating Footer");
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

export function createMenuContent() {
  const menuContent = newDiv("menuContent");
  // Hidden at first
  menuContent.style.display = "none";
  menuContent.style.flexDirection = "column";
  menuContent.style.alignItems = "left";
  menuContent.style.justifyContent = "center";
  menuContent.style.fontSize = "20px";
  menuContent.style.color = "black";

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

export function createFoodImage() {
  const menuFoodImage = newDiv("menuFoodImage");
  menuFoodImage.style.display = "none";
  menuFoodImage.style.flexDirection = "row";
  menuFoodImage.style.alignItems = "center";
  menuFoodImage.style.justifyContent = "center";

  const menuFoodDisplayImage = document.createElement("img");
  menuFoodDisplayImage.src = "menuBurgersImage.png";
  menuFoodDisplayImage.alt =
    "Image of a spread of items on the GREENBURGER menu";
  menuFoodDisplayImage.style.width = "400px";
  menuFoodDisplayImage.style.height = "400px";

  menuFoodImage.appendChild(menuFoodDisplayImage);

  return menuFoodImage;
}
export function makeClickable(element, onClickFunction) {
  // Makes your cursor look like it's clickable
  element.style.cursor = "pointer";
  element.addEventListener("click", onClickFunction);
}

export function visitUsAddressText() {
  const visitUsAddressText = newDiv("visitUsAddressText");
  visitUsAddressText.style.display = "none";
  visitUsAddressText.style.flexDirection = "column";
  visitUsAddressText.style.alignItems = "left";
  visitUsAddressText.style.justifyContent = "center";
  visitUsAddressText.style.fontSize = "20px";
  visitUsAddressText.style.color = "black";
  visitUsAddressText.innerHTML = `<h2>Visit Us At:</h2>
    <p>GREENBURGER</p>
    <p>6 The Beeches</p>
    <p>Sole Street </p>
    <p>DA13 9BT</p>`;
  return visitUsAddressText;
}

export function visitUsMapImage() {
  const visitUsMapImage = newDiv("visitUsMapImage");

  visitUsMapImage.style.display = "none";
  visitUsMapImage.style.flexDirection = "row";
  visitUsMapImage.style.alignItems = "center";
  visitUsMapImage.style.justifyContent = "center";

  const visitUsMapDisplayImage = document.createElement("img");
  visitUsMapDisplayImage.src = "greenburgerMap.png";
  visitUsMapDisplayImage.alt =
    "Image of a map showing the GREENBURGER location";
  visitUsMapDisplayImage.style.width = "400px";
  visitUsMapDisplayImage.style.height = "400px";

  visitUsMapImage.appendChild(visitUsMapDisplayImage);

  return visitUsMapImage;
}

export function contactUsText() {
  const contactUsText = newDiv("contactUsText");
  contactUsText.style.display = "none";
  contactUsText.style.flexDirection = "column";
  contactUsText.style.alignItems = "left";
  contactUsText.style.justifyContent = "center";
  contactUsText.style.fontSize = "20px";
  contactUsText.style.color = "black";
  contactUsText.innerHTML = `<h2>Drop us a line:</h2>
    <p>Tel: 07009367060</p>
    <p>Email: greenburgerwillignoreyou@greenburger.com</p>`;
  return contactUsText;
}

export function contactUsImage() {
  const contactUsImage = newDiv("contactUsImage");

  contactUsImage.style.display = "none";
  contactUsImage.style.flexDirection = "row";
  contactUsImage.style.alignItems = "center";
  contactUsImage.style.justifyContent = "center";

  const contactUsDisplayImage = document.createElement("img");
  contactUsDisplayImage.src = "greenBurgerCustomerSupport.png";
  contactUsDisplayImage.alt =
    "Image of a GREENBURGER customer support happily taking your order";
  contactUsDisplayImage.style.width = "400px";
  contactUsDisplayImage.style.height = "400px";

  contactUsImage.appendChild(contactUsDisplayImage);

  return contactUsImage;
}
