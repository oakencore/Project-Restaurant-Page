import { contactUsImage, contactUsText } from "./functions.js";
export function showContactContent(leftBackground, rightBackground) {
  console.log("Displaying contact tab content");

  leftBackground.innerHTML = "";
  rightBackground.innerHTML = "";

  const contactText = contactUsText();
  const contactImage = contactUsImage();

  contactText.style.display = "flex";
  contactImage.style.display = "flex";

  leftBackground.appendChild(contactText);
  rightBackground.appendChild(contactImage);

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
