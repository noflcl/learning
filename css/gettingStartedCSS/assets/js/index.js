function switchLightDarkTheme() {
  let element = document.body;
  element.classList.toggle("dark__mode");
}

function toggleMenu() {
  let element = document.getElementById("nav");
  element.classList.toggle("toggle__menu");
}

// function checkMenuState() {
//   let element = document.getElementById("nav");
//    if (window.getComputedStyle(element).visibility === "hidden") {
//   if (window.getComputedStyle(element).display === "none") {
//     console.log("The menu is hidden");
//   } else {
//     console.log("The menu is currently visible");
//   }
// }

function showMenuLargeDisplay(x) {
  let element = document.getElementById("nav");
  if (x.matches && window.getComputedStyle(element).display === "none") {
    // If media query matches
    element.classList.toggle("toggle__menu");
  }
}

let largeDisplay = window.matchMedia("(min-width: 650px)");
showMenuLargeDisplay(largeDisplay); // Call listener function at run time
largeDisplay.addEventListener("change", showMenuLargeDisplay); // Attach listener function on state changes
