export function newDiv(divId, content) {
    // Create a new div
    const div = document.createElement("div");
  
    // Sets the ID for the div class
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