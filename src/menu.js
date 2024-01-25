import { createMenuContent,createFoodImage,showMenuContent } from "./functions.js";
export function showMenuContent(leftBackground, rightBackground) {
    console.log("Displaying menu tab content");
  
    // Clear existing content
    leftBackground.innerHTML = "";
    rightBackground.innerHTML = "";
  
    // Assume createMenuContent and createFoodImage are defined elsewhere and imported
    const menuContent = createMenuContent();
    const foodImage = createFoodImage();
  
    // Style and display the content
    menuContent.style.display = "flex";
    foodImage.style.display = "flex";
  
    // Append the content
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
  