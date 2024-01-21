export function addClickEventListeners() {
    document.getElementById("menu").addEventListener("click", handleMenuContent);
    document
      .getElementById("address")
      .addEventListener("click", handleAddressContent);
    document
      .getElementById("contact")
      .addEventListener("click", handleContactContent);
  }