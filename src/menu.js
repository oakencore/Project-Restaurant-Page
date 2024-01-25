import { createMenuContent, createFoodImage } from "./functions.js";
export function showMenuContent(leftBackground, rightBackground) {
  console.log("Displaying menu tab content");

  leftBackground.innerHTML = "";
  rightBackground.innerHTML = "";

  const menuContent = createMenuContent();
  const foodImage = createFoodImage();

  menuContent.style.display = "flex";
  foodImage.style.display = "flex";

  leftBackground.appendChild(menuContent);
  rightBackground.appendChild(foodImage);

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
