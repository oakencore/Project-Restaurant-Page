import { initialisePageContent } from "./loadInitialContent.js";
import { addClickEventListeners } from "./eventlisteners.js";
document.addEventListener("DOMContentLoaded", () => {
  initialisePageContent();
  addClickEventListeners();
});
