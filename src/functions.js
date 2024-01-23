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
    productImages.style.display = "none";
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
    productImages.style.display = "none";
    console.log("Contact clicked");
  });
  return contact;
}

export function createBookingDiv() {
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

  return { leftDiv, rightDiv };
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
  return { leftDivWithLogoText, rightDivWithLogoText };
}
export function swapToHeaderWithLogoText(clickedDiv) {
  // Check if the clickedDiv argument is provided and log an error if not
  if (!clickedDiv) {
    console.error("No div provided to swapToHeaderWithLogoText");
    return;
  }
  //Get existing div for the header from the DOM
  const existingHeader = document.getElementById("header");
  if (!existingHeader) {
    console.error("Header element not found");
    return;
  }

  // Clear the existing content of the header
  while (existingHeader.firstChild) {
    existingHeader.removeChild(existingHeader.firstChild);
  }

  // Create the necessary divs for the header
  const { leftDivWithLogoText, rightDivWithLogoText } =
    createHeaderDivsWithLogoText();
  const logoText = createLogoTextDiv();
  logoText.style.fontSize = '50px';
  logoText.style.display = 'flex';
  logoText.style.alignItems = 'center';
  logoText.style.alignContent = 'center';


  // Append the left div, logo text, and right div to the existing header
  existingHeader.appendChild(leftDivWithLogoText);
  existingHeader.appendChild(logoText);
  existingHeader.appendChild(rightDivWithLogoText);
}
function replaceHeader(newHeader) {
  let existingHeader = document.getElementById("currentHeaderId");
  if (existingHeader && newHeader) {
    existingHeader.parentNode.replaceChild(newHeader, existingHeader);
  }

  // Header with logo Setup
  headerWithLogoText = newDiv("header");
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
  console.log("headerWithLogoText created");
  return headerWithLogoText;
}
// Event Handling Features

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
// TODO: I've tried to make the divider always be the same width as the logo. But selecting new tabs breaks it. This seems convoluted. There must be a simpler way.

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
// Helper functions

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

export function setupDivClickListeners(menuDiv, addressDiv, contactDiv) {
  console.log("Setting up div click listeners");

  // const menuDiv = document.getElementById("menuDiv");
  // const addressDiv = document.getElementById("addressDiv");
  // const contactDiv = document.getElementById("contactDiv");
  console.log("menuDiv:", menuDiv);
  console.log("addressDiv:", addressDiv);
  console.log("contactDiv:", contactDiv);

  if (menuDiv) {
    menuDiv.addEventListener("click", () => {
      console.log("menuDiv clicked");

      const existingHeader = document.getElementById("header");
      console.log("existingHeader:", existingHeader);

      const leftDivWithLogoText = existingHeader
        ? existingHeader.querySelector("#leftDivWithLogoText")
        : null;
      const rightDivWithLogoText = existingHeader
        ? existingHeader.querySelector("#rightDivWithLogoText")
        : null;

      console.log("leftDivWithLogoText:", leftDivWithLogoText);
      console.log("rightDivWithLogoText:", rightDivWithLogoText);

      if (!leftDivWithLogoText || !rightDivWithLogoText) {
        swapToHeaderWithLogoText(menuDiv);
      } else {
        const leftBackground = document.getElementById("leftBackground");
        const rightBackground = document.getElementById("rightBackground");

        console.log("leftBackground:", leftBackground);
        console.log("rightBackground:", rightBackground);

        if (
          leftBackground &&
          rightBackground &&
          (!leftBackground.firstChild ||
            !leftBackground.firstChild.classList.contains("burgerImage")) &&
          (!rightBackground.firstChild ||
            !rightBackground.firstChild.classList.contains("sidesImage"))
        ) {
          if (leftBackground.firstChild) {
            leftBackground.removeChild(leftBackground.firstChild);
          }
          if (rightBackground.firstChild) {
            rightBackground.removeChild(rightBackground.firstChild);
          }

          const menuContent = createMenuContent();
          const foodImage = createFoodImage();

          leftBackground.appendChild(menuContent);
          rightBackground.appendChild(foodImage);
        }
      }
    });
  }

  if (addressDiv) {
    addressDiv.addEventListener("click", () => {
      console.log("addressDiv clicked");
      swapToHeaderWithLogoText(addressDiv);
    });
  }

  if (contactDiv) {
    contactDiv.addEventListener("click", () => {
      console.log("contactDiv clicked");
      swapToHeaderWithLogoText(contactDiv);
    });
  }
}
export function loadMenu() {}
document.addEventListener("DOMContentLoaded", () => {
  loadMenu();
});
let logoText = null;

export function createLogoTextDiv() {
  if (!logoText) {
    logoText = newDiv("logo", "GREENBURGER");
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
export function addClickEventListeners() {
  document.getElementById("menu").addEventListener("click", handleMenuContent);
  document
    .getElementById("address")
    .addEventListener("click", handleAddressContent);
  document
    .getElementById("contact")
    .addEventListener("click", handleContactContent);
}
export function newDiv(divId, content) {
  // Create a new div
  const div = document.createElement("div");

  // Sets the ID for the div class
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
// Content Creation Functions

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
  burgerImage.src = "greenburger.webp";
  burgerImage.alt = "Image of a GreenBurger cheese burger";
  burgerImage.style.width = "400px";
  burgerImage.style.height = "400px";
  burgerImage.style.zIndex = "1";
  burgerImage.style.position = "relative";
  console.log(burgerImage);
  return burgerImage;
}

export function createSidesImage() {
  console.log("Creating sides image");
  const sidesImage = document.createElement("img");
  sidesImage.src = "sides.png";
  sidesImage.alt = "Image of a GreenBurger side";
  sidesImage.style.width = "400px";
  sidesImage.style.height = "400px";
  sidesImage.style.zIndex = "1";
  sidesImage.style.position = "relative";
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

  return { leftBackground, rightBackground };
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
// Function to create and return the menu content div

export function createMenuContent() {
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

export function createFoodImage() {
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
export function makeClickable(element, onClickFunction) {
  // Change the cursor to indicate clickable
  element.style.cursor = "pointer";
  element.addEventListener("click", onClickFunction);
}
