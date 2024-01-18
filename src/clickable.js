export function makeClickable(element, onClickFunction) {
    // Change the cursor to indicate clickable
    element.style.cursor = "pointer"; 
    element.addEventListener("click", onClickFunction);
  }