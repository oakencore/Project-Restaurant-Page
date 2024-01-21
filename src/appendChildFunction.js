export function appendChildFunction(parentElement, childElement) {
    // example: appendChildFunction(contentDiv, header);
    if (parentElement && childElement) {
      // log the appending order because its so annoying to debug
      console.log(
        `Appending ${childElement.id || "an element"} to ${
          parentElement.id || "a parent"
        }`
      );
      parentElement.appendChild(childElement);
    }
  }