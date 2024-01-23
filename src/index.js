import {addClickEventListeners } from "./functions.js";
import { initialisePageContent } from "./loadInitialContent.js";
document.addEventListener("DOMContentLoaded", () => {
  initialisePageContent();
  addClickEventListeners();
});
