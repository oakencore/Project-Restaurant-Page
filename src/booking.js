export function createAndShowBookingForm(bookingDiv) {
  console.log("Displaying booking form content");
  let form = document.querySelector("form[action='reservation.php']");
  if (!form) {
    form = document.createElement("form");
    form.action = "reservation.php";
    form.method = "post";
    document.body.appendChild(form);

    form.appendChild(createFormGroup("name", "Your Name", "text", "[A-Z\\sa-z]{3,20}", "Burger Fiend"));
    form.appendChild(createFormGroup("email", "Your E-mail", "email", "", "whyareyourburgersallgreen@email.com"));
    form.appendChild(createFormGroup("phone", "Your Phone Number", "tel", "\\d{10}", "1234567890"));
    form.appendChild(createFormGroup("date", "Date", "date", "", ""));
    form.appendChild(createFormGroup("time", "Time", "time", "", ""));
    
    applyOverlayStyles(form);
    addFormStylesToHead();

    // Min date for the date 
    form.querySelector("#date").setAttribute("min", new Date().toISOString().split("T")[0]);
  }
  form.style.display = "block";

  // Hide the form if clicking outside its div
  function hideFormOnClickOutside(event) {
    if (!form.contains(event.target) && !bookingDiv.contains(event.target)) {
      form.style.display = "none";
      document.removeEventListener("click", hideFormOnClickOutside, true);
    }
  }

  // Add/remove the listener if it's visible or not
  if (form.style.display === "block") {
    document.addEventListener("click", hideFormOnClickOutside, true);
  } else {
    document.removeEventListener("click", hideFormOnClickOutside, true);
  }
}

function createFormGroup(id, labelText, inputType, pattern, placeholder) {
  const group = document.createElement("div");
  group.className = "elem-group";
  group.appendChild(createLabel(id, labelText));
  group.appendChild(createInput(id, inputType, pattern, placeholder));
  return group;
}

function createLabel(forId, text) {
  const label = document.createElement("label");
  label.setAttribute("for", forId);
  label.textContent = text;
  return label;
}

function createInput(id, type, pattern, placeholder) {
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.name = "visitor_" + id;
  input.placeholder = placeholder;
  if (pattern) input.setAttribute("pattern", pattern);
  input.required = true;
  return input;
}

function applyOverlayStyles(form) {
  form.style.position = "fixed";
  form.style.left = "50%";
  form.style.top = "50%";
  form.style.transform = "translate(-50%, -50%)";
  form.style.backgroundColor = "#fff";
  form.style.padding = "20px";
  form.style.zIndex = "1000";
}

function addFormStylesToHead() {
  if (!document.head.querySelector("style#bookingFormStyles")) {
    const style = document.createElement("style");
    style.id = "bookingFormStyles";
    // TODO
    //style.innerHTML =  
    document.head.appendChild(style);
  }
}