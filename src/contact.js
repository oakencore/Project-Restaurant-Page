import { leftBackground, rightBackground, contactImage, contactUsImage, contactUsText } from "./functions.js";
export function showContactContent(leftBackground, rightBackground) {
    console.log("Displaying contact tab content");
  
    // Clear existing content
    leftBackground.innerHTML = "";
    rightBackground.innerHTML = "";
  
    // Assume contactUsText and contactUsImage are defined elsewhere and imported
    const contactText = contactUsText();
    const contactImage = contactUsImage();
  
    // Style and display the content
    contactText.style.display = "block";
    contactImage.style.display = "block";
  
    // Append the content
    leftBackground.appendChild(contactText);
    rightBackground.appendChild(contactImage);
  
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
  