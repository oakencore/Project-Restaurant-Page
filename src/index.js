import { initialisePageContent } from "./loadInitialContent.js";
import { showMenuContent } from "./menu.js";
import { showContactContent } from "./contact.js";
import { showVisitUsContent } from "./visitUs.js";
import { createAndShowBookingForm } from "./booking.js";
document.addEventListener("DOMContentLoaded", () => {
  const {
    menuDiv,
    addressDiv,
    contactDiv,
    leftBackground,
    rightBackground,
    bookingDiv,
  } = initialisePageContent();

  menuDiv.addEventListener("click", () => {
    showMenuContent(leftBackground, rightBackground);
  });

  contactDiv.addEventListener("click", () => {
    showContactContent(leftBackground, rightBackground);
  });

  addressDiv.addEventListener("click", () => {
    showVisitUsContent(leftBackground, rightBackground);
  });

  bookingDiv.addEventListener("click", () => {
    createAndShowBookingForm(bookingDiv);
  });
});
