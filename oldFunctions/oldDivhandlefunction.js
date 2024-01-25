export function setupDivClickListeners(
    menuDiv,
    addressDiv,
    contactDiv,
    leftBackground,
    rightBackground
  ) {
    console.log("Setting up div click listeners");
  
    if (menuDiv) {
      menuDiv.addEventListener("click", () => {
        try {
          console.log("menuDiv clicked");
          leftBackground.innerHTML = "";
          rightBackground.innerHTML = "";
  
          // Calling my functions to create content for the menu and image on the menu page
          const menuContent = createMenuContent();
          const foodImage = createFoodImage();
  
          // Set display to flex to make them visible
          menuContent.style.display = "flex";
          foodImage.style.display = "flex";
  
          // Append new content to left and right background divs
          leftBackground.appendChild(menuContent);
          rightBackground.appendChild(foodImage);
  
          console.log("Checking access to centerDiv");
          const centerDiv = document.getElementById("centerDiv");
          if (!centerDiv) {
            console.error("ERROR: centerDiv not found.");
            return;
          }
          console.log("centerDiv:", centerDiv);
  
          console.log("Checking access to contentDiv");
          const contentDiv = document.getElementById("content");
          if (!contentDiv) {
            console.error("ERROR: contentDiv not found.");
            return;
          }
          console.log("contentDiv:", contentDiv);
  
          console.log("Checking access to logoText");
          const logoText = contentDiv.querySelector("#logo");
          if (!logoText) {
            console.error("ERROR: logo not found within contentDiv.");
            return;
          }
          console.log("logo:", logoText);
  
          if (centerDiv.style.display === "none") {
            centerDiv.style.display = "flex";
            centerDiv.style.flexDirection = "row";
            centerDiv.style.alignItems = "center";
            centerDiv.style.justifyContent = "center";
            centerDiv.style.fontSize = "30px";
            centerDiv.style.color = "black";
            // centerDiv.style.paddingTop = "";
            // centerDiv.style.paddingBottom = "";
            // centerDiv.style.margin = "";
            console.log("Changing logoText display to 'none'");
            logoText.style.display = "none";
          }
        } catch (error) {
          console.error("Error in menuDiv click handler:", error);
        }
      });
    }
  
    if (addressDiv) {
      addressDiv.addEventListener("click", () => {
        console.log("addressDiv clicked");
        leftBackground.innerHTML = "";
        rightBackground.innerHTML = "";
  
        // Use new functions for address content
        const addressContent = visitUsAddressText();
        const mapImage = visitUsMapImage();
  
        // Set display to block to make them visible
        addressContent.style.display = "block";
        mapImage.style.display = "block";
  
        // Append new content to left and right background divs
        leftBackground.appendChild(addressContent);
        rightBackground.appendChild(mapImage);
  
        // Reusing the logic to handle centerDiv and logoText as in the menuDiv click event
        const centerDiv = document.getElementById("centerDiv");
        if (!centerDiv) {
          console.error("ERROR: centerDiv not found.");
          return;
        }
  
        const contentDiv = document.getElementById("content");
        if (!contentDiv) {
          console.error("ERROR: contentDiv not found.");
          return;
        }
  
        const logoText = contentDiv.querySelector("#logo");
        if (!logoText) {
          console.error("ERROR: logo not found within contentDiv.");
          return;
        }
  
        if (centerDiv.style.display === "none") {
          centerDiv.style.display = "flex";
          centerDiv.style.flexDirection = "row";
          centerDiv.style.alignItems = "center";
          centerDiv.style.justifyContent = "center";
          centerDiv.style.fontSize = "30px";
          centerDiv.style.color = "black";
          logoText.style.display = "none";
        }
      });
    }
  
    if (contactDiv) {
      contactDiv.addEventListener("click", () => {
        console.log("contactDiv clicked");
        leftBackground.innerHTML = "";
        rightBackground.innerHTML = "";
  
        // Use new functions for contact content
        const contactText = contactUsText();
        const contactImage = contactUsImage();
  
        // Set display to block to make them visible
        contactText.style.display = "block";
        contactImage.style.display = "block";
  
        // Append new content to left and right background divs
        leftBackground.appendChild(contactText);
        rightBackground.appendChild(contactImage);
  
        // Reusing the logic to handle centerDiv and logoText
        const centerDiv = document.getElementById("centerDiv");
        if (!centerDiv) {
          console.error("ERROR: centerDiv not found.");
          return;
        }
  
        const contentDiv = document.getElementById("content");
        if (!contentDiv) {
          console.error("ERROR: contentDiv not found.");
          return;
        }
  
        const logoText = contentDiv.querySelector("#logo");
        if (!logoText) {
          console.error("ERROR: logo not found within contentDiv.");
          return;
        }
  
        if (centerDiv.style.display === "none") {
          centerDiv.style.display = "flex";
          centerDiv.style.flexDirection = "row";
          centerDiv.style.alignItems = "center";
          centerDiv.style.justifyContent = "center";
          centerDiv.style.fontSize = "30px";
          centerDiv.style.color = "black";
          logoText.style.display = "none";
        }
      });
    }
  }