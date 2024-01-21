export function createMenuDiv() {
  const menu = newDiv("menu", "Menu");
  addHoverEffect(menu);
  makeClickable(menu, () => {
    console.log("Menu clicked");
    productImages.style.display = "none";
    logoText.style.fontSize = "50px";
    logoText.style.padding = "0";
    logoText.style.margin = "0";
    logoText.style.alignSelf = "center";

    appendChildFunction(headerWithLogoText, logoText);
    swapHeader(headerWithLogoText);

    let wrapperDiv = document.getElementById("menuWrapper");

    if (!wrapperDiv) {
      wrapperDiv = createWrapperDiv();
      contentDiv.appendChild(wrapperDiv);

      let menuContent = createMenuContent();
      wrapperDiv.appendChild(menuContent);

      let menuFoodImage = createFoodImage();
      wrapperDiv.appendChild(menuFoodImage);
    }

    if (wrapperDiv.style.display === "none" || !wrapperDiv.style.display) {
      wrapperDiv.style.display = "flex";
      wrapperDiv.style.justifyContent = "space-between";
      wrapperDiv.style.alignItems = "center";

      wrapperDiv.style.paddingLeft = "8%";
      wrapperDiv.style.paddingRight = "8%";
      wrapperDiv.style.marginTop = "8vh";
      document.getElementById("menuContent").style.display = "block";
      document.getElementById("menuFoodImage").style.display = "block";
    } else {
      wrapperDiv.style.display = "none";
      document.getElementById("menuContent").style.display = "none";
      document.getElementById("menuFoodImage").style.display = "none";
    }
  });

  return menu;
}

export function createAddressDiv() {
  const address = newDiv("address", "Visit Us");
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
