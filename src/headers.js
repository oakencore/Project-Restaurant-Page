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


