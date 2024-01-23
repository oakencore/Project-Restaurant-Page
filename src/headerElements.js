import { newDiv } from "./divFunctions.js";
import { appendChildFunction } from "./appendChildFunction.js";
import { addHoverEffect } from "./hoverFunction.js";
import { makeClickable } from "./clickable.js";
import { createLogoTextDiv } from "./logo.js";
import { createMenuContent, createFoodImage } from "./contentCreationFunctions.js";
import { setupHeaderWithLogoText } from "./helperFunctions.js";

export function createMenuDiv() {
  const menu = newDiv("menu", "Menu");
  addHoverEffect(menu);
  makeClickable(menu, () => {
    console.log("Menu clicked");
    setupHeaderWithLogoText();
  });
  return menu;
}


export function createAddressDiv() {
  const address = newDiv("address", "Visit Us");
  const logoText = createLogoTextDiv();
  addHoverEffect(address);
  makeClickable(address, () => {
    logoText.style.display = "none";
    productImages.style.display = "none";
    console.log("Address clicked");
  });
  return address;
}

export function createContactDiv() {
  const contact = newDiv("contact", "Contact");
  const logoText = createLogoTextDiv();
  addHoverEffect(contact);
  makeClickable(contact, () => {
    logoText.style.display = "none";
    productImages.style.display = "none";
    console.log("Contact clicked");
  });
  return contact;
}

export function createBookingDiv() {
  const booking = newDiv("booking", "Book A Table");
  makeClickable(booking, () => {
    console.log("Booking clicked");
  });
  booking.style.backgroundColor = "black";
  booking.style.padding = "10px";
  booking.style.color = "green";
  booking.addEventListener("mouseover", () => {
    booking.style.backgroundColor = "green";
    booking.style.color = "white";
    booking.style.outline = "2px solid black";
  });
  booking.addEventListener("mouseout", () => {
    booking.style.backgroundColor = "black";
    booking.style.color = "green";
    booking.style.outline = "none";
  });
  return booking;
}