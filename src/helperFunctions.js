import { newDiv } from "./divFunctions.js";
import { appendChildFunction } from "./appendChildFunction.js";
import { createLogoTextDiv } from "./logo.js";
// TODO: Might need to add the swap function here?
export function setupHeaderWithLogoText(contentDiv) {
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
  console.log("headerWithLogoText created")
  return headerWithLogoText;
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
  console.log("Divider created")
  return divider;
}

export function createWrapperDiv() {
  const wrapperDiv = newDiv("menuWrapper");
  wrapperDiv.style.display = "none";
  console.log("wrapperdiv created")
  return wrapperDiv;
}

// Event Handling Features
export function handleMenuContent() {
  document.getElementById("menuContent").style.display = "block";
  document.getElementById("addressContent").style.display = "none";
  document.getElementById("contactContent").style.display = "none";
  console.log("Menu Content Handled")
}

export function handleAddressContent() {
  document.getElementById("menuContent").style.display = "none";
  document.getElementById("addressContent").style.display = "block";
  document.getElementById("contactContent").style.display = "none";
  console.log("Address Content Handled")
}

export function handleContactContent() {
  document.getElementById("menuContent").style.display = "none";
  document.getElementById("addressContent").style.display = "none";
  document.getElementById("contactContent").style.display = "block";
  console.log("Contact Content Handled")
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
  console.log("Global Styles Applied")
}

export function setupHeader(contentDiv) {
  console.log("setupHeader: Creating Header")
  const header = newDiv("header");
  header.style.height = "60px";
  header.style.display = "flex";
  header.style.flexDirection = "row";
  header.style.justifyContent = "space-between";
  header.style.width = "150px";
  header.style.alignItems = "center";
  header.style.paddingBlockStart = "2%";
  header.style.paddingBlockEnd = "2%";
  let originalHeader = header;
  return header
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
  console.log("setupBackground: Applied styling to background")
  return background
}
