import { visitUsAddressText, visitUsMapImage } from "./functions.js";
export function showVisitUsContent(leftBackground, rightBackground) {
  console.log("Displaying visit us tab content");

  leftBackground.innerHTML = "";
  rightBackground.innerHTML = "";

  const addressContent = visitUsAddressText();
  const mapImage = visitUsMapImage();

  addressContent.style.display = "flex";
  mapImage.style.display = "flex";

  leftBackground.appendChild(addressContent);
  rightBackground.appendChild(mapImage);

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
