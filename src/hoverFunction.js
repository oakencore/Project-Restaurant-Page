export function addHoverEffect(element) {
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = "white";
      // Add an outline for a highlight effect
      element.style.outline = "2px solid white"; 
      element.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.2)";
    });
  
    element.addEventListener("mouseout", () => {
      element.style.backgroundColor = "";
      element.style.outline = "none"; 
      element.style.boxShadow = "none";
    });
  }
  