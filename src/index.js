import {
  initialisePageContent,
  menuDiv,
  addressDiv,
  contactDiv,
} from "./loadInitialContent.js";
import { showMenuContent } from "./menu.js";
import { showContactContent } from "./contact.js";
import { showVisitUsContent } from "./visitUs.js";


document.addEventListener("DOMContentLoaded", () => {
  const { menuDiv, addressDiv, contactDiv } = initialisePageContent();

  // Function to clear the content area
  function clearContent() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
  }

  // Setting up event listenersI
  menuDiv.addEventListener("click", () => {
    clearContent();
    showMenuContent();
  });

  contactDiv.addEventListener("click", () => {
    clearContent();
    showContactContent();
  });

  addressDiv.addEventListener("click", () => {
    clearContent();
    showVisitUsContent();
  });
});
