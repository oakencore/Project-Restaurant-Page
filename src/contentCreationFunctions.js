import { newDiv } from "./divFunctions.js";
import { appendChildFunction } from "./appendChildFunction.js";

// Content Creation Functions

export function createAddressContent() {
  addressContent = newDiv("addressContent");
  addressContent.style.display = "none";
  const addressText = document.createElement("p");
  addressText.textContent = "123 Green St., Veggie Town";
  addressContent.appendChild(addressText);
  return addressContent;
}

export function createContactContent() {
  contactContent = newDiv("contactContent");
  //Hide to start
  contactContent.style.display = "none";
  const contactText = document.createElement("p");
  contactText.textContent = "Email: contact@greenburger.com";
  contactContent.appendChild(contactText);

  return contactContent;
}

export function createBurgerImage() {
  console.log("Creating burgerImage");
  const burgerImage = document.createElement("img");
  burgerImage.src = "greenburger.webp";
  burgerImage.alt = "Image of a GreenBurger cheese burger";
  burgerImage.style.width = "400px";
  burgerImage.style.height = "400px";
  burgerImage.style.zIndex = "1";
  burgerImage.style.position = "relative";
  console.log(burgerImage);
  return burgerImage;
}

export function createSidesImage() {
  console.log("Creating sides image");
  const sidesImage = document.createElement("img");
  sidesImage.src = "sides.png";
  sidesImage.alt = "Image of a GreenBurger side";
  sidesImage.style.width = "400px";
  sidesImage.style.height = "400px";
  sidesImage.style.zIndex = "1";
  sidesImage.style.position = "relative";
  return sidesImage;
}

export function createBackgroundDivs() {
  const leftBackground = newDiv("leftBackground");
  leftBackground.style.backgroundColor = "green";
  leftBackground.style.width = "50%";
  leftBackground.style.height = "100vh";
  leftBackground.style.display = "flex";
  leftBackground.style.justifyContent = "center";
  leftBackground.style.alignItems = "center";

  const rightBackground = newDiv("rightBackground");
  rightBackground.style.backgroundColor = "white";
  rightBackground.style.width = "50%";
  rightBackground.style.height = "100vh";
  rightBackground.style.display = "flex";
  rightBackground.style.justifyContent = "center";
  rightBackground.style.alignItems =  "center";

  return { leftBackground, rightBackground };
}

export function createFooterTextDiv() {
  console.log("Creating Footer")
  const footerText = newDiv(
    "footerText",
    "2024. GREENBURGER. ALL RIGHTS RESERVED."
  );
  footerText.style.display = "flex";
  footerText.style.flexDirection = "row";
  footerText.style.justifyContent = "space-between";
  footerText.style.alignItems = "center";
  footerText.style.padding = "1%";
  footerText.style.fontSize = "10px";
  footerText.style.color = "grey";

  return footerText;
}

// Function to create and return the menu content div
export function createMenuContent() {
  const menuContent = newDiv("menuContent");
  // Hidden at first
  menuContent.style.display = "none";

  // Add menu sections here
  // Example: Adding the Burgers section
  const burgersSection = newDiv("burgersSection");
  burgersSection.innerHTML = `<h2>Burgers</h2>
        <p>The Avocado Dream - $12.50</p>
        <p>The Vegan Delight - $13.00</p>
        <p>The Truffle Shuffle - $15.00</p>`;
  menuContent.appendChild(burgersSection);

  const sidesSection = newDiv("sidesSection");
  sidesSection.innerHTML = `<h2>Sides</h2>
        <p>Organic Sweet Potato Fries - $6.00</p>
        <p>Kale Caesar Salad - $8.00</p>`;
  menuContent.appendChild(sidesSection);

  const drinksSection = newDiv("drinksSection");
  drinksSection.innerHTML = `<h2>Drinks</h2>
        <p>Craft Root Beer - $4.00</p>
        <p>Kombucha on Tap - $5.00</p>`;
  menuContent.appendChild(drinksSection);

  return menuContent;
}

export function createFoodImage() {
  const menuFoodImage = newDiv("menuFoodImage");
  menuFoodImage.style.display = "none";

  const menuFoodDisplayImage = document.createElement("img");
  menuFoodDisplayImage.src = "menuBurgersImage.png";
  menuFoodDisplayImage.alt =
    "Image of a spread of items on the GREENBURGER menu";
  menuFoodDisplayImage.style.width = "400px";
  menuFoodDisplayImage.style.height = "400px";

  menuFoodImage.appendChild(menuFoodDisplayImage);

  return menuFoodImage;
}


