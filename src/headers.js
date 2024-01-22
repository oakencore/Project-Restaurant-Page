import { newDiv } from "./divFunctions.js";
import { appendChildFunction } from "./appendChildFunction.js";
import { createLogoTextDiv } from "./logo.js";

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
    leftDivWithLogoText = newDiv("left");
    leftDivWithLogoText.style.display = "flex";
    leftDivWithLogoText.style.flexDirection = "row";
    leftDivWithLogoText.style.justifyContent = "space-between";
    leftDivWithLogoText.style.alignItems = "center";
    leftDivWithLogoText.style.alignContent = "center";
    leftDivWithLogoText.style.gap = "25px";
    leftDivWithLogoText.style.flex = "0 1 auto";
    // leftDivWithLogoText.style.backgroundColor = "red";
  
    rightDivWithLogoText = newDiv("right");
    rightDivWithLogoText.style.display = "flex";
    rightDivWithLogoText.style.flexDirection = "row";
    rightDivWithLogoText.style.justifyContent = "center";
    rightDivWithLogoText.style.flex = "0 1 auto";
    // rightDivWithLogoText.style.backgroundColor = "red";
  
    return { leftDivWithLogoText, rightDivWithLogoText };
  }

// Function to swap headers
export function swapToHeaderWithLogoText() {
  if (!contentDiv.contains(headerWithLogoText)) {
    swapHeader(headerWithLogoText);
  }
}

export function swapHeader(newHeader) {
  const logoText = createLogoTextDiv();
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

