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
  headerWithLogoText.style.display = "flex";
  headerWithLogoText.style.justifyContent = "center";
  headerWithLogoText.style.alignItems = "center";
  headerWithLogoText.style.flexGrow = "0";
  headerWithLogoText.style.flexShrink = "1";
  headerWithLogoText.style.flexBasis = "auto";
  // make header have space between divs for logo
  header.style.justifyContent = "space-between";

  // Swaps headers on mouse click of a tab item
  function swapHeader(newHeader) {
    if (contentDiv.contains(originalHeader)) {
      contentDiv.replaceChild(newHeader, originalHeader);
    } else if (contentDiv.contains(headerWithLogoText)) {
      contentDiv.replaceChild(originalHeader, headerWithLogoText);
    }
  }

  const leftDiv = newDiv("left");
  leftDiv.style.display = "flex";
  leftDiv.style.flexDirection = "row";
  leftDiv.style.justifyContent = "space-between";
  leftDiv.style.alignItems = "center";
  leftDiv.style.alignContent = "center";
  leftDiv.style.gap = "25px";
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
    headerWithLogoText.appendChild(logoText);

    swapHeader(headerWithLogoText);
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
  appendChildFunction(contentDiv, logoText);

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
}

document.addEventListener("DOMContentLoaded", () => {
  loadInitialContent();
});
