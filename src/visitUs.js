import {
  showContactContent,
  visitUsAddressText,
  visitUsMapImage,
} from "./functions.js";
export function showVisitUsContent(leftBackground, rightBackground) {
  console.log("Displaying visit us tab content");

  // Clear existing content
  leftBackground.innerHTML = "";
  rightBackground.innerHTML = "";

  // Assume visitUsAddressText and visitUsMapImage are defined elsewhere and imported
  const addressContent = visitUsAddressText();
  const mapImage = visitUsMapImage();

  // Style and display the content
  addressContent.style.display = "block";
  mapImage.style.display = "block";

  // Append the content
  leftBackground.appendChild(addressContent);
  rightBackground.appendChild(mapImage);

  // Access and modify centerDiv and logoText as needed
  const centerDiv = document.getElementById("centerDiv");
  const contentDiv = document.getElementById("content");
  const logoText = contentDiv ? contentDiv.querySelector("#logo") : null;

  if (centerDiv && logoText) {
    centerDiv.style.display = "flex";
    centerDiv.style.flexDirection = "row";
    centerDiv.style.alignItems = "center";
    centerDiv.style.justifyContent = "center";
    centerDiv.style.fontSize = "30px";
    centerDiv.style.color = "black";
    logoText.style.display = "none";
  }
}
