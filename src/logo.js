export function createLogoTextDiv() {
    const logoText = newDiv("logo", "GREENBURGER");
    logoText.style.display = "flex";
    logoText.style.flexDirection = "row";
    logoText.style.justifyContent = "center";
    logoText.style.alignItems = "center";
    logoText.style.paddingTop = "1%";
    logoText.style.paddingBottom = "5%";
    logoText.style.fontSize = "150px";
    logoText.style.margin = "0 10px";
    return logoText;
  }