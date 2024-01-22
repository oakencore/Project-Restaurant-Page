import { newDiv } from "./divFunctions.js";

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