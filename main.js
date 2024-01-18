function loadInitialContent() {
  document.documentElement.style.margin = "0";
  document.documentElement.style.padding = "0";
  document.documentElement.style.height = "100%";
  document.documentElement.style.width = "100%";

  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.height = "100%";
  document.body.style.width = "100%";
  // Say no to horizontal scrollbars!
  document.body.style.overflowX = "hidden"; 

  const contentDiv = document.getElementById("content");
  contentDiv.style.position = "relative";
  contentDiv.style.top = "0";
  contentDiv.style.left = "0";
  contentDiv.style.width = "100%";
  contentDiv.style.margin = "0";

  const header = document.createElement("header");
  header.style.display = "flex";
  header.style.flexDirection = "row";
  header.style.justifyContent = "space-between";
  header.style.alignItems = "center";
  header.style.padding = "2%";
  contentDiv.appendChild(header);

  const leftDiv = newDiv("left");
  leftDiv.style.display = "flex";
  leftDiv.style.flexDirection = "row";
  leftDiv.style.justifyContent = "space-between";
  leftDiv.style.alignItems = "center";
  leftDiv.style.gap = "25px";
  header.appendChild(leftDiv);

  const rightDiv = newDiv("right");
  header.appendChild(rightDiv);

  const menu = newDiv("menu", "Menu");
  leftDiv.appendChild(menu);

  const address = newDiv("address", "Visit Us");
  leftDiv.appendChild(address);

  const contact = newDiv("contact", "Contact Us");
  leftDiv.appendChild(contact);

  const booking = newDiv("booking", "Book A Table");
  rightDiv.appendChild(booking);

  const logoText = newDiv("logo", "GREENBURGER");
  logoText.style.display = "flex";
  logoText.style.flexDirection = "row";
  logoText.style.justifyContent = "center";
  logoText.style.alignItems = "center";
  logoText.style.paddingTop = "1%";
  logoText.style.paddingBottom = "5%";
  logoText.style.fontSize = "150px";
  contentDiv.appendChild(logoText);
  // The width per character in pixels
  const estimatedCharacterWidth = 101;

  const logoTextContentLength = logoText.textContent.length;

  const estimatedDividerWidth = estimatedCharacterWidth * logoTextContentLength;

  const divider = newDiv("divider");
  divider.style.height = "10px";
  divider.style.width = estimatedDividerWidth + "px";
  divider.style.backgroundColor = "black";
  divider.style.marginLeft = "auto"; 
  divider.style.marginRight = "auto"; 
  contentDiv.insertBefore(divider, logoText);

  const productImages = newDiv("productImages");
  productImages.style.display = "flex";
  productImages.style.flexDirection = "row";
  productImages.style.justifyContent = "space-around";
  productImages.style.alignItems = "center";
  contentDiv.appendChild(productImages);

  const burgerImage = document.createElement("img");
  burgerImage.src = "greenburger.webp";
  burgerImage.alt = "Image of a GreenBurger cheese burger";
  burgerImage.style.width = "400px";
  burgerImage.style.height = "400px";
  productImages.appendChild(burgerImage);

  const sidesImage = document.createElement("img");
  sidesImage.src = "sides.png";
  sidesImage.alt = "Image of a GreenBurger cheese burger";
  sidesImage.style.width = "400px";
  sidesImage.style.height = "400px";
  productImages.appendChild(sidesImage);

  const background = newDiv("background");
  background.style.display = "flex";
  background.style.position = "absolute";
  background.style.top = "0";
  background.style.left = "0";
  background.style.width = "100%";
  background.style.height = "100%";
  background.style.zIndex = "-1";
  contentDiv.appendChild(background);

  const leftBackground = newDiv("leftBackground");
  leftBackground.style.backgroundColor = "green";
  leftBackground.style.width = "50%";
  leftBackground.style.height = "100vh";
  background.appendChild(leftBackground);

  const rightBackground = newDiv("rightBackground");
  background.appendChild(rightBackground);

  const footer = document.createElement("footer");
  footer.style.position = "fixed";
  footer.style.bottom = "0";
  footer.style.left = "0";
  footer.style.height = "80px";
  footer.style.width = "100%";
  footer.style.backgroundColor = "black";
  contentDiv.appendChild(footer);
}

document.addEventListener("DOMContentLoaded", () => {
  loadInitialContent();
});

function newDiv(divId, content) {
  // Create a new div 
  const div = document.createElement("div");

  // Set the ID for the div class
  if (divId) {
    div.id = divId;
  }
  // What content do I want in the div?
  if (content) {
    div.textContent = content;
  }
  // Return the created div to be used elsewhere
  return div;
}
