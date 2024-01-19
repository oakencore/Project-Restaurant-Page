import { newDiv } from "./divFunctions.js";
import { addHoverEffect } from "./hoverFunction.js";
import { makeClickable } from "./clickable.js";

export function loadInitialContent() {
  // If any content exists in the header. Exit if it does.
  if (document.getElementById("header")) {
    return;
  }

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

  const contentDiv = document.getElementById("content");
  contentDiv.style.position = "relative";
  contentDiv.style.top = "0";
  contentDiv.style.left = "0";
  contentDiv.style.width = "100%";
  contentDiv.style.margin = "0";

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

  appendChildFunction(headerWithLogoText, leftDivWithLogoText);
  appendChildFunction(headerWithLogoText, rightDivWithLogoText);

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

  const leftDiv = newDiv("left");
  leftDiv.style.display = "flex";
  leftDiv.style.flexDirection = "row";
  leftDiv.style.justifyContent = "space-between";
  // leftDiv.style.backgroundColor = "red";
  leftDiv.style.gap = "20px";
  appendChildFunction(header, leftDiv);

  const rightDiv = newDiv("right");
  rightDiv.style.display = "flex";
  rightDiv.style.flexDirection = "row";
  rightDiv.style.justifyContent = "center";
  appendChildFunction(header, rightDiv);

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
    wrapperDiv.style.marginTop = "8vh"
    // wrapperDiv.style.backgroundColor = "red"; 
    document.getElementById("menuContent").style.display = "block";
    document.getElementById("menuFoodImage").style.display = "block";
  } else {
    wrapperDiv.style.display = "none";
    document.getElementById("menuContent").style.display = "none";
    document.getElementById("menuFoodImage").style.display = "none";
  }
});

  appendChildFunction(leftDiv, menu);

  const address = newDiv("address", "Visit Us");
  addHoverEffect(address);
  makeClickable(address, () => {
    logoText.style.display = "none";
    productImages.style.display = "none";
    console.log("Address clicked");
  });
  appendChildFunction(leftDiv, address);

  const contact = newDiv("contact", "Contact");
  addHoverEffect(contact);
  makeClickable(contact, () => {
    logoText.style.display = "none";
    productImages.style.display = "none";
    console.log("Contact clicked");
  });
  appendChildFunction(leftDiv, contact);

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
  appendChildFunction(rightDiv, booking);

  const logoText = newDiv("logo", "GREENBURGER");
  logoText.style.display = "flex";
  logoText.style.flexDirection = "row";
  logoText.style.justifyContent = "center";
  logoText.style.alignItems = "center";
  logoText.style.paddingTop = "1%";
  logoText.style.paddingBottom = "5%";
  logoText.style.fontSize = "150px";
  logoText.style.margin = "0 10px";
  appendChildFunction(contentDiv, logoText);

  // TODO: I've tried to make the divider always be the same width as the logo. But selecting new tabs breaks it. This seems convoluted. There must be a simpler way.
  const divider = newDiv("divider");
  divider.style.height = "10px";
  const logoTextContentLength = logoText.textContent.length;
  // The width per character in pixels
  const estimatedCharacterWidth = 101;
  const estimatedDividerWidth = estimatedCharacterWidth * logoTextContentLength;
  divider.style.width = estimatedDividerWidth + "px";
  divider.style.backgroundColor = "black";
  divider.style.marginLeft = "auto";
  divider.style.marginRight = "auto";
  divider.style.boxSizing = "border-box";

  // Aligning my header and divider widths
  header.style.width = estimatedDividerWidth + "px";
  header.style.boxSizing = "border-box";
  header.style.margin = "0 auto";

  // Had to append in this order to not mess up the layout. Will look at a better way to do this.
  appendChildFunction(contentDiv, header);
  appendChildFunction(contentDiv, divider);
  appendChildFunction(contentDiv, logoText);

  const productImages = newDiv("productImages");
  productImages.style.display = "flex";
  productImages.style.flexDirection = "row";
  productImages.style.justifyContent = "space-around";
  productImages.style.alignItems = "center";
  appendChildFunction(contentDiv, productImages);

  const burgerImage = document.createElement("img");
  burgerImage.src = "greenburger.webp";
  burgerImage.alt = "Image of a GreenBurger cheese burger";
  burgerImage.style.width = "400px";
  burgerImage.style.height = "400px";
  appendChildFunction(productImages, burgerImage);

  const sidesImage = document.createElement("img");
  sidesImage.src = "sides.png";
  sidesImage.alt = "Image of a GreenBurger cheese burger";
  sidesImage.style.width = "400px";
  sidesImage.style.height = "400px";
  appendChildFunction(productImages, sidesImage);

  const background = newDiv("background");
  background.style.display = "flex";
  background.style.position = "absolute";
  background.style.top = "0";
  background.style.left = "0";
  background.style.width = "100%";
  background.style.height = "100%";
  background.style.zIndex = "-1";
  appendChildFunction(contentDiv, background);

  const leftBackground = newDiv("leftBackground");
  leftBackground.style.backgroundColor = "green";
  leftBackground.style.width = "50%";
  leftBackground.style.height = "100vh";
  appendChildFunction(background, leftBackground);

  const rightBackground = newDiv("rightBackground");
  appendChildFunction(background, rightBackground);

  const footer = document.createElement("footer");
  footer.style.position = "fixed";
  footer.style.bottom = "0";
  footer.style.left = "0";
  footer.style.height = "40px";
  footer.style.width = "100%";
  footer.style.backgroundColor = "black";
  appendChildFunction(contentDiv, footer);

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
  appendChildFunction(footer, footerText);

  // example: appendChildFunction(contentDiv, header);
  function appendChildFunction(parentElement, childElement) {
    if (parentElement && childElement) {
      // log the appending order because its so annoying
      console.log(
        `Appending ${childElement.id || "an element"} to ${
          parentElement.id || "a parent"
        }`
      );
      parentElement.appendChild(childElement);
    }
  }

  // Function to create and return the menu content div
  function createMenuContent() {
    const menuContent = newDiv("menuContent");
    menuContent.style.display = "none"; // Initially hidden

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
}

document.addEventListener("DOMContentLoaded", () => {
  loadInitialContent();

  // Simulate a click on the menu button
  const menuButton = document.getElementById("menu"); 
  if (menuButton) {
    menuButton.click();
  }
});
